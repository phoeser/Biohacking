/* ============================================================================
 * BHCVitals — Live-Vitalmessung für den Tagescheck
 * ----------------------------------------------------------------------------
 * Nimmt ~30 s Live-Video von der Frontkamera auf (getUserMedia) und berechnet
 * LOKAL im Browser:
 *   - Ruhepuls   via rPPG (POS-Algorithmus, Wang et al. 2017) auf der Gesichts-ROI
 *   - Atemfrequenz via Tiefpass-Band der Helligkeit
 *   - Blinzelrate  via MediaPipe FaceLandmarker (optional; degradiert sauber)
 * und extrahiert die schärfsten Einzelbilder für die Gemini-Analyse.
 *
 * WICHTIG: Kein Medizinprodukt. Schätzwerte. Rohvideo verlässt das Gerät NIE —
 * nur ausgewählte Standbilder gehen (wie bisher) an die KI.
 *
 * Öffentliche API (window.BHCVitals):
 *   isSupported()            -> bool
 *   openCamera(videoEl)      -> Promise<bool>   Kamera starten, Vorschau anzeigen
 *   measure({durationMs,onTick}) -> Promise<result>
 *   close()                  -> void            Kamera/Tracks stoppen
 * ========================================================================== */
(function () {
  'use strict';

  var MP_VERSION = '0.10.14';
  var MP_BASE = 'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@' + MP_VERSION;
  var MODEL_URL = 'https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task';

  var _stream = null;
  var _video = null;
  var _faceLandmarker = null;
  var _mpTried = false;

  function isSupported() {
    return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia &&
              window.HTMLCanvasElement && window.requestAnimationFrame);
  }

  // -------- Kamera ----------------------------------------------------------
  async function openCamera(videoEl) {
    _video = videoEl;
    try {
      _stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: 'user',
          width: { ideal: 1280 },
          height: { ideal: 720 },
          frameRate: { ideal: 30, max: 60 }
        },
        audio: false
      });
    } catch (e) {
      return false;
    }
    videoEl.srcObject = _stream;
    videoEl.setAttribute('playsinline', '');
    videoEl.muted = true;
    try { await videoEl.play(); } catch (_) {}
    // MediaPipe parallel im Hintergrund laden (blockiert die Vorschau nicht).
    initMediaPipe();
    return true;
  }

  function close() {
    try {
      if (_stream) _stream.getTracks().forEach(function (t) { t.stop(); });
    } catch (_) {}
    _stream = null;
    if (_video) { try { _video.srcObject = null; } catch (_) {} }
  }

  // -------- MediaPipe (optional, für Blinzelrate + präzise ROI) -------------
  async function initMediaPipe() {
    if (_mpTried) return;
    _mpTried = true;
    try {
      var vision = await import(/* @vite-ignore */ MP_BASE + '/vision_bundle.mjs');
      var FaceLandmarker = vision.FaceLandmarker;
      var FilesetResolver = vision.FilesetResolver;
      var resolver = await FilesetResolver.forVisionTasks(MP_BASE + '/wasm');
      _faceLandmarker = await FaceLandmarker.createFromOptions(resolver, {
        baseOptions: { modelAssetPath: MODEL_URL, delegate: 'GPU' },
        runningMode: 'VIDEO',
        numFaces: 1,
        outputFaceBlendshapes: true,
        outputFacialTransformationMatrixes: false
      });
    } catch (e) {
      _faceLandmarker = null; // sauberer Fallback: ROI zentriert, keine Blinzelrate
    }
  }

  // -------- Hilfsfunktionen Signalverarbeitung ------------------------------
  function mean(a) { var s = 0, n = a.length; for (var i = 0; i < n; i++) s += a[i]; return n ? s / n : 0; }
  function std(a) {
    var m = mean(a), s = 0, n = a.length;
    for (var i = 0; i < n; i++) { var d = a[i] - m; s += d * d; }
    return n ? Math.sqrt(s / n) : 0;
  }

  // POS (Plane-Orthogonal-to-Skin) rPPG: RGB-Zeitreihen -> Pulssignal
  function posSignal(R, G, B, fps) {
    var N = R.length;
    var H = new Float64Array(N);
    var l = Math.round(1.6 * fps); // gleitendes Fenster ~1.6 s
    if (l < 8 || N < l) return H;
    for (var n = 0; n + l <= N; n++) {
      var mR = 0, mG = 0, mB = 0, i;
      for (i = n; i < n + l; i++) { mR += R[i]; mG += G[i]; mB += B[i]; }
      mR /= l; mG /= l; mB /= l;
      if (mR <= 0 || mG <= 0 || mB <= 0) continue;
      var S1 = new Float64Array(l), S2 = new Float64Array(l);
      for (i = 0; i < l; i++) {
        var rn = R[n + i] / mR, gn = G[n + i] / mG, bn = B[n + i] / mB;
        S1[i] = gn - bn;            // [ 0, +1, -1]
        S2[i] = gn + bn - 2 * rn;   // [-2, +1, +1]
      }
      var sd1 = std(S1), sd2 = std(S2);
      var alpha = sd2 > 1e-9 ? sd1 / sd2 : 0;
      var h = new Float64Array(l), mh = 0;
      for (i = 0; i < l; i++) { h[i] = S1[i] + alpha * S2[i]; mh += h[i]; }
      mh /= l;
      for (i = 0; i < l; i++) { H[n + i] += (h[i] - mh); }
    }
    return H;
  }

  // Periodogramm: dominante Frequenz (in Schlägen/Atemzügen pro Minute) im Band
  function bestRate(sig, fps, minRpm, maxRpm, stepRpm) {
    var N = sig.length;
    if (N < fps * 3) return { rate: null, snr: 0 };
    var m = mean(sig);
    var w = new Float64Array(N);
    for (var i = 0; i < N; i++) {
      var hann = 0.5 - 0.5 * Math.cos(2 * Math.PI * i / (N - 1));
      w[i] = (sig[i] - m) * hann;
    }
    var bestP = -1, bestRpm = 0, total = 0, count = 0;
    for (var rpm = minRpm; rpm <= maxRpm; rpm += stepRpm) {
      var f = rpm / 60, re = 0, im = 0;
      for (var k = 0; k < N; k++) {
        var ang = 2 * Math.PI * f * k / fps;
        re += w[k] * Math.cos(ang);
        im -= w[k] * Math.sin(ang);
      }
      var p = re * re + im * im;
      total += p; count++;
      if (p > bestP) { bestP = p; bestRpm = rpm; }
    }
    var meanP = count ? total / count : 0;
    var snr = meanP > 0 ? bestP / meanP : 0;
    return { rate: bestRpm, snr: snr };
  }

  // Gleitenden Mittelwert abziehen (Detrend) für das Atem-Band
  function detrend(a, win) {
    var N = a.length, out = new Float64Array(N);
    var half = Math.max(1, Math.round(win / 2));
    for (var i = 0; i < N; i++) {
      var s = 0, c = 0;
      for (var j = i - half; j <= i + half; j++) { if (j >= 0 && j < N) { s += a[j]; c++; } }
      out[i] = a[i] - (c ? s / c : 0);
    }
    return out;
  }

  function confFromSnr(snr, hi, mid, lo) {
    if (snr >= hi) return 'high';
    if (snr >= mid) return 'medium';
    if (snr >= lo) return 'low';
    return null;
  }

  // -------- Messung ---------------------------------------------------------
  async function measure(opts) {
    opts = opts || {};
    var durationMs = opts.durationMs || 30000;
    var onTick = opts.onTick || function () {};
    var video = _video;
    if (!video || !video.videoWidth) {
      // kurz auf Video-Metadaten warten
      await new Promise(function (r) { setTimeout(r, 400); });
    }
    var vw = video.videoWidth || 640, vh = video.videoHeight || 480;

    // ROI-Sampling-Canvas (klein = schnell)
    var sCanvas = document.createElement('canvas');
    sCanvas.width = 80; sCanvas.height = 80;
    var sCtx = sCanvas.getContext('2d', { willReadFrequently: true });

    // Frame-Capture-Canvas (für Gemini), Long-Edge ~720
    var fScale = Math.min(1, 720 / Math.max(vw, vh));
    var fCanvas = document.createElement('canvas');
    fCanvas.width = Math.round(vw * fScale);
    fCanvas.height = Math.round(vh * fScale);
    var fCtx = fCanvas.getContext('2d');

    var ts = [], Rs = [], Gs = [], Bs = [];
    var frames = []; // {dataUrl, sharp, t}
    var blinkEvents = 0, blinkState = false;
    var lastFrameGrab = 0;
    var t0 = performance.now();

    // Standard-ROI (falls keine Gesichtserkennung): zentral oben (Stirn/Wangen)
    function defaultRoi() { return { x: 0.30, y: 0.22, w: 0.40, h: 0.34 }; }
    var roi = defaultRoi();

    return await new Promise(function (resolve) {
      function step(now) {
        var elapsed = now - t0;
        var prog = Math.min(1, elapsed / durationMs);
        onTick(prog, Math.ceil((durationMs - elapsed) / 1000));

        // MediaPipe: ROI verfeinern + Blinzeln zählen
        if (_faceLandmarker && video.readyState >= 2) {
          try {
            var res = _faceLandmarker.detectForVideo(video, now);
            if (res && res.faceLandmarks && res.faceLandmarks[0]) {
              var lm = res.faceLandmarks[0];
              var minX = 1, minY = 1, maxX = 0, maxY = 0;
              for (var p = 0; p < lm.length; p++) {
                var pt = lm[p];
                if (pt.x < minX) minX = pt.x; if (pt.x > maxX) maxX = pt.x;
                if (pt.y < minY) minY = pt.y; if (pt.y > maxY) maxY = pt.y;
              }
              // ROI = obere Gesichtshälfte (Stirn/Wangen), etwas eingerückt
              var fw = maxX - minX, fh = maxY - minY;
              roi = {
                x: minX + fw * 0.20,
                y: minY + fh * 0.15,
                w: fw * 0.60,
                h: fh * 0.40
              };
            }
            if (res && res.faceBlendshapes && res.faceBlendshapes[0]) {
              var cats = res.faceBlendshapes[0].categories || [];
              var bl = 0, br = 0;
              for (var c = 0; c < cats.length; c++) {
                if (cats[c].categoryName === 'eyeBlinkLeft') bl = cats[c].score;
                else if (cats[c].categoryName === 'eyeBlinkRight') br = cats[c].score;
              }
              var blink = (bl + br) / 2;
              if (!blinkState && blink > 0.5) { blinkState = true; blinkEvents++; }
              else if (blinkState && blink < 0.3) { blinkState = false; }
            }
          } catch (_) {}
        }

        // ROI mitteln (RGB) — auf 80x80 herunterskaliert
        try {
          var rx = Math.max(0, Math.round(roi.x * vw));
          var ry = Math.max(0, Math.round(roi.y * vh));
          var rw = Math.max(8, Math.round(roi.w * vw));
          var rh = Math.max(8, Math.round(roi.h * vh));
          if (rx + rw > vw) rw = vw - rx;
          if (ry + rh > vh) rh = vh - ry;
          sCtx.drawImage(video, rx, ry, rw, rh, 0, 0, 80, 80);
          var d = sCtx.getImageData(0, 0, 80, 80).data;
          var sr = 0, sg = 0, sb = 0, np = 0;
          for (var q = 0; q < d.length; q += 4) {
            // sehr dunkle/überstrahlte Pixel ignorieren (Haar, Glanz)
            var rr = d[q], gg = d[q + 1], bb = d[q + 2];
            var lum = 0.299 * rr + 0.587 * gg + 0.114 * bb;
            if (lum < 35 || lum > 245) continue;
            sr += rr; sg += gg; sb += bb; np++;
          }
          if (np > 200) {
            ts.push(elapsed / 1000);
            Rs.push(sr / np); Gs.push(sg / np); Bs.push(sb / np);
          }
        } catch (_) {}

        // Alle ~1.2 s ein Standbild für die KI sichern (mit Schärfe-Maß)
        if (elapsed - lastFrameGrab > 1200) {
          lastFrameGrab = elapsed;
          try {
            fCtx.drawImage(video, 0, 0, fCanvas.width, fCanvas.height);
            // Schärfe ~ Varianz der Graustufen einer kleinen Mittel-Region
            var sd = sCtx.getImageData(20, 20, 40, 40).data; // ROI-Canvas grob
            var gray = [];
            for (var z = 0; z < sd.length; z += 4) gray.push(0.299 * sd[z] + 0.587 * sd[z + 1] + 0.114 * sd[z + 2]);
            frames.push({
              dataUrl: fCanvas.toDataURL('image/jpeg', 0.82),
              sharp: std(gray),
              t: elapsed
            });
          } catch (_) {}
        }

        if (elapsed < durationMs) {
          requestAnimationFrame(step);
        } else {
          resolve(finalize());
        }
      }

      function finalize() {
        var n = ts.length;
        var fps = 30;
        if (n > 2) {
          var dur = ts[n - 1] - ts[0];
          if (dur > 0) fps = (n - 1) / dur;
        }
        fps = Math.max(10, Math.min(60, fps));

        var result = {
          ok: n >= fps * 8, // mind. ~8 s verwertbares Signal
          fps: Math.round(fps * 10) / 10,
          samples: n,
          pulseBpm: null, pulseConfidence: null,
          breathingRpm: null, breathingConfidence: null,
          blinkRate: null, blinkAvailable: !!_faceLandmarker,
          signalQuality: 'poor',
          frames: [], bestFrameDataUrl: null, note: ''
        };

        if (result.ok) {
          // Puls
          var H = posSignal(Rs, Gs, Bs, fps);
          var pulse = bestRate(H, fps, 42, 180, 0.5);
          if (pulse.rate) {
            result.pulseBpm = Math.round(pulse.rate);
            result.pulseConfidence = confFromSnr(pulse.snr, 8, 4, 2);
          }
          // Atmung: Grün-Mittel detrenden, Tiefpass-Band 6–30 /min
          var gDet = detrend(Gs, Math.round(fps * 0.7));
          var br = bestRate(gDet, fps, 6, 30, 0.5);
          if (br.rate) {
            result.breathingRpm = Math.round(br.rate);
            result.breathingConfidence = confFromSnr(br.snr, 6, 3, 1.6);
          }
          // Signalqualität gesamt (am Puls-SNR)
          result.signalQuality = pulse.snr >= 6 ? 'good' : (pulse.snr >= 2.5 ? 'fair' : 'poor');
          if (result.pulseConfidence == null) result.pulseBpm = null; // kein Fantasiewert
        }

        // Blinzelrate (nur mit MediaPipe)
        if (_faceLandmarker) {
          var minutes = durationMs / 60000;
          result.blinkRate = Math.round(blinkEvents / minutes);
        }

        // Beste Frames wählen: Zeitachse in 6 Buckets, je schärfstes Bild
        if (frames.length) {
          var buckets = 6, chosen = [];
          for (var b = 0; b < buckets; b++) {
            var lo = (durationMs / buckets) * b, hi = (durationMs / buckets) * (b + 1);
            var cand = frames.filter(function (f) { return f.t >= lo && f.t < hi; });
            if (!cand.length) continue;
            cand.sort(function (a, c) { return c.sharp - a.sharp; });
            chosen.push(cand[0]);
          }
          if (!chosen.length) chosen = frames.slice(0, 3);
          result.frames = chosen.map(function (f) {
            return { mime: 'image/jpeg', base64: f.dataUrl.split(',')[1], dataUrl: f.dataUrl };
          });
          // Schärfstes insgesamt als Vorschau
          var sharpest = frames.slice().sort(function (a, c) { return c.sharp - a.sharp; })[0];
          result.bestFrameDataUrl = sharpest ? sharpest.dataUrl : chosen[0].dataUrl;
        }

        if (!result.ok) result.note = 'Zu wenig verwertbares Signal (zu dunkel, zu viel Bewegung oder kein Gesicht).';
        else if (result.signalQuality === 'poor') result.note = 'Schwaches Signal — Werte mit Vorsicht. Tipp: gleichmäßiges Licht, ruhig sitzen.';

        return result;
      }

      requestAnimationFrame(step);
    });
  }

  window.BHCVitals = {
    isSupported: isSupported,
    openCamera: openCamera,
    measure: measure,
    close: close
  };
})();
