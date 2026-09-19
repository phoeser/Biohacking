(function(){
'use strict';

var SR = 16000, WIN = 1024, HOP = 256;
var el = function(id){ return document.getElementById(id); };
var last = null;

/* ---------- Aufnahme ---------- */
el('rec').addEventListener('click', start);
el('again').addEventListener('click', start);

function start(){
  el('rec').disabled = true; el('again').disabled = true;
  el('verdict').classList.remove('on');
  el('status').textContent = 'Mikrofon wird angefragt …';
  navigator.mediaDevices.getUserMedia({audio:{
    echoCancellation:false, noiseSuppression:false, autoGainControl:false
  }}).then(capture).catch(function(e){
    el('status').textContent = 'Kein Mikrofonzugriff: ' + e.message;
    el('rec').disabled = false; el('again').disabled = false;
  });
}

function capture(stream){
  var ac = new (window.AudioContext||window.webkitAudioContext)();
  var src = ac.createMediaStreamSource(stream);
  var node = ac.createScriptProcessor(4096, 1, 1);
  var chunks = [], total = 0, need = ac.sampleRate * 6;
  el('status').textContent = 'Läuft — sprich jetzt.';
  node.onaudioprocess = function(ev){
    var d = ev.inputBuffer.getChannelData(0);
    chunks.push(new Float32Array(d)); total += d.length;
    el('prog').style.width = Math.min(100, total/need*100) + '%';
    if (total >= need){
      node.onaudioprocess = null;
      try{ node.disconnect(); src.disconnect(); }catch(e){}
      stream.getTracks().forEach(function(t){ t.stop(); });
      var raw = merge(chunks, total);
      var rate = ac.sampleRate;
      ac.close();
      setTimeout(function(){ finish(resample(raw, rate, SR)); }, 30);
    }
  };
  src.connect(node); node.connect(ac.destination);
}

function merge(chunks, n){
  var out = new Float32Array(n), o = 0;
  for (var i=0;i<chunks.length;i++){ out.set(chunks[i], o); o += chunks[i].length; }
  return out;
}

function resample(buf, from, to){
  if (from === to) return buf;
  var ratio = from/to, n = Math.floor(buf.length/ratio), out = new Float32Array(n);
  for (var i=0;i<n;i++){
    var p = i*ratio, i0 = Math.floor(p), f = p-i0;
    out[i] = buf[i0]*(1-f) + (buf[i0+1]||0)*f;
  }
  return out;
}

/* ---------- Merkmale und Klassifikation ---------- */
function mean(a){ var s=0; for (var i=0;i<a.length;i++) s+=a[i]; return a.length? s/a.length : 0; }
function pct(sorted,p){ if(!sorted.length) return 0; var i=(sorted.length-1)*p,lo=Math.floor(i),hi=Math.ceil(i); return sorted[lo]+(sorted[hi]-sorted[lo])*(i-lo); }
function lin(v,lo,hi){ return Math.max(0, Math.min(1, (v-lo)/(hi-lo))); }
function smooth(a,w){ var o=a.slice(); for(var i=0;i<a.length;i++){var s=0,c=0;for(var j=Math.max(0,i-w);j<=Math.min(a.length-1,i+w);j++){s+=a[j];c++;}o[i]=s/c;} return o; }

function lowpass(x, cutoff){
  var L = Math.max(3, Math.round(SR/cutoff)); if (L%2===0) L++;
  var w = new Float64Array(L), sum=0, i;
  for (i=0;i<L;i++){ w[i] = 0.5 - 0.5*Math.cos(2*Math.PI*i/(L-1)); sum += w[i]; }
  for (i=0;i<L;i++) w[i] /= sum;
  var half=(L-1)>>1, n=x.length, y=new Float32Array(n);
  for (i=0;i<n;i++){ var acc=0; for (var j=0;j<L;j++){ var k=i+j-half; if(k>=0&&k<n) acc+=x[k]*w[j]; } y[i]=acc; }
  return y;
}

function frameRms(w){
  var n=w.length,m=0,i;
  for(i=0;i<n;i++) m+=w[i]; m/=n;
  var s=0; for(i=0;i<n;i++){ var d=w[i]-m; s+=d*d; }
  return Math.sqrt(s/n);
}

/* Tonhoehe eines Rahmens. rmsThr kommt aus dem ersten Durchgang und ist
   relativ zum Pegel DIESER Aufnahme — eine feste Schwelle verwirft bei
   leisen Mikrofonen fast alles. */
function frame(w, rmsThr){
  var n=w.length, m=0, i;
  for(i=0;i<n;i++) m+=w[i]; m/=n;
  var x=new Float32Array(n);
  for(i=0;i<n;i++) x[i]=w[i]-m;
  var rms=0; for(i=0;i<n;i++) rms+=x[i]*x[i]; rms=Math.sqrt(rms/n);
  if(rms < rmsThr) return {voiced:false,rms:rms,f0:0,hnr:0,zcr:0,oct:false};

  var zc=0; for(i=1;i<n;i++) if((x[i-1]<0)!==(x[i]<0)) zc++;
  var zcr=zc/n*SR/2;

  var ps=new Float64Array(n+1);
  for(i=0;i<n;i++) ps[i+1]=ps[i]+x[i]*x[i];
  var minLag=Math.floor(SR/400), maxLag=Math.floor(SR/60);
  if(maxLag>=n) maxLag=n-1;
  var corr=new Float64Array(maxLag+1), best=0, bestLag=-1;
  for(var lag=minLag;lag<=maxLag;lag++){
    var len=n-lag,s=0;
    for(i=0;i<len;i++) s+=x[i]*x[i+lag];
    var d=Math.sqrt(ps[len]*(ps[n]-ps[lag]));
    var r=d>1e-12?s/d:0;
    corr[lag]=r; if(r>best){best=r;bestLag=lag;}
  }
  if(bestLag<0||best<0.30) return {voiced:false,rms:rms,f0:0,hnr:0,zcr:zcr,oct:false};

  /* Keine Oktavkorrektur.
     Erst eingebaut, dann durch Messung widerlegt: Sie halbierte hoehere
     Stimmen (218 Hz wurden zu 73 Hz), waehrend der Fall, fuer den sie
     gedacht war — tiefe Maennerstimme am hochpassgefilterten Laptopmikro —
     auch ohne sie richtig erkannt wird. Ein fehlender Grundton aendert die
     Periode des Signals naemlich nicht. Die Ursache von Pauls 229,5-Hz-Messung
     ist damit weiter offen; dafuer zeichnet analyse() jetzt den
     Tonhoehenverlauf auf (f0Track), um sie an echten Daten zu finden. */
  var chosen = bestLag, oct = false;

  var lg=chosen;
  if(lg>minLag&&lg<maxLag){
    var y1=corr[lg-1],y2=corr[lg],y3=corr[lg+1],den=(y1-2*y2+y3);
    if(Math.abs(den)>1e-12){ var dd=0.5*(y1-y3)/den; if(dd>-1&&dd<1) lg=lg+dd; }
  }
  var f0=SR/lg;
  if(f0<60||f0>400) return {voiced:false,rms:rms,f0:0,hnr:0,zcr:zcr,oct:false};
  var rr=Math.min(0.999,Math.max(0.001,best));
  return {voiced:true,rms:rms,f0:f0,hnr:10*Math.log10(rr/(1-rr)),zcr:zcr,oct:oct};
}

function refine(lp,i){
  var y1=lp[i-1],y2=lp[i],y3=lp[i+1],den=y1-2*y2+y3;
  if(!isFinite(den)||Math.abs(den)<1e-12) return {pos:i,val:y2};
  var d=0.5*(y1-y3)/den; if(d<-1||d>1) d=0;
  return {pos:i+d, val:y2-0.25*(y1-y3)*d};
}

function cycles(x, frames){
  var lp = lowpass(x, 900);
  var marks=[], amps=[], n=x.length;
  function f0At(s){ var fi=Math.min(frames.length-1,Math.max(0,Math.round(s/HOP))); var f=frames[fi]; return (f&&f.voiced)?f.f0:0; }
  var s=0;
  while (s<n){
    var f0=f0At(s);
    if(!f0){ s+=HOP; continue; }
    var T=SR/f0, from=Math.max(1,s), to=Math.min(n-2,Math.round(s+1.5*T));
    if(to<=from){ s+=Math.round(T); continue; }
    var bi=-1,bv=-Infinity;
    for(var k=from;k<=to;k++) if(lp[k]>bv){bv=lp[k];bi=k;}
    if(bi<1||bi>n-2){ s+=Math.round(T); continue; }
    var r0=refine(lp,bi);
    marks.push(r0.pos); amps.push(Math.abs(r0.val));
    var prev=bi, prevVal=Math.abs(r0.val);
    while(true){
      var ff=f0At(prev); if(!ff) break;
      var Tp=SR/ff, lo=Math.round(prev+Tp*0.65), hi=Math.round(prev+Tp*1.35);
      if(hi>=n-2||lo<1) break;
      var pi=-1,pv=-Infinity;
      for(var q=lo;q<=hi;q++) if(lp[q]>pv){pv=lp[q];pi=q;}
      if(pi<1||pi>n-2) break;
      if(Math.abs(pv)<0.02*prevVal) break;
      var r=refine(lp,pi);
      marks.push(r.pos); amps.push(Math.abs(r.val));
      prev=pi; prevVal=Math.abs(r.val);
    }
    s=prev+Math.round(SR/Math.max(f0At(prev)||f0,60));
  }
  var T2=[],A2=[];
  for(var m=1;m<marks.length;m++){
    var per=marks[m]-marks[m-1], fE=SR/per;
    if(fE<60||fE>400) continue;
    T2.push(per); A2.push(amps[m]);
  }
  var An=new Array(A2.length);
  for(var a=0;a<A2.length;a++){
    var s2=0,c2=0;
    for(var b=Math.max(0,a-5);b<=Math.min(A2.length-1,a+5);b++){s2+=A2[b];c2++;}
    var loc=c2?s2/c2:1; An[a]=loc>1e-9?A2[a]/loc:1;
  }
  var jitter=null, shimmer=null;
  if(T2.length>10){
    var dj=0,cj=0;
    for(var t=1;t<T2.length;t++){ if(Math.abs(T2[t]-T2[t-1])/T2[t-1]>0.2) continue; dj+=Math.abs(T2[t]-T2[t-1]); cj++; }
    if(cj>6) jitter=(dj/cj)/mean(T2)*100;
    var ds=0,cs=0;
    for(var u=1;u<An.length;u++){
      if(An[u]<1e-6||An[u-1]<1e-6) continue;
      var db=Math.abs(20*Math.log10(An[u]/An[u-1])); if(db>6) continue;
      ds+=db; cs++;
    }
    if(cs>6) shimmer=ds/cs;
  }
  return {jitter:jitter, shimmer:shimmer, nCycles:T2.length};
}

/* Artikulationsrate: Silbengipfel als Aufwaertsdurchgaenge der
   bandpassgefilterten Energiehuellkurve (2 bis 8 Hz), geteilt durch die
   SPRECHZEIT, nicht durch die Aufnahmedauer. Gipfelzaehlen mit fester
   Schwelle scheitert an echter Sprache, weil dort die Silben ineinander
   laufen und die Huellkurve nie auf null faellt. */
function articulation(env, frameHz){
  var envS = smooth(env, 1);
  var envL = smooth(env, 14);
  var d = new Array(envS.length);
  for (var i=0;i<envS.length;i++) d[i] = envS[i]-envL[i];
  var mx = Math.max.apply(null, envS);
  var floor = mx*0.12;
  var crossings = 0, speechFrames = 0;
  for (var j=1;j<d.length;j++){
    if (envS[j] > floor) speechFrames++;
    if (d[j-1] <= 0 && d[j] > 0 && envS[j] > floor) crossings++;
  }
  var speechSec = speechFrames/frameHz;
  return {rate: speechSec>0.4 ? crossings/speechSec : 0, speechSec: speechSec};
}

function analyse(x){
  var i, s;
  /* Durchgang 1: nur Pegel, um die Schwelle an diese Aufnahme anzupassen */
  var rmsAll=[];
  for(s=0; s+WIN<=x.length; s+=HOP) rmsAll.push(frameRms(x.subarray(s,s+WIN)));
  var sortedRms = rmsAll.slice().sort(function(a,b){return a-b;});
  var p90 = pct(sortedRms,0.90);
  var rmsThr = Math.max(0.0012, p90*0.16);

  /* Durchgang 2: Tonhoehe nur dort, wo genug Pegel ist */
  var frames=[], fi=0;
  for(s=0; s+WIN<=x.length; s+=HOP, fi++){
    frames.push(rmsAll[fi] < rmsThr
      ? {voiced:false,rms:rmsAll[fi],f0:0,hnr:0,zcr:0,oct:false}
      : frame(x.subarray(s,s+WIN), rmsThr));
  }
  var voiced=frames.filter(function(f){return f.voiced;});
  var vr=voiced.length/Math.max(1,frames.length);
  if(voiced.length<20) return null;

  var f0s=voiced.map(function(f){return f.f0;}).sort(function(a,b){return a-b;});
  var medF0=pct(f0s,.5), p10=pct(f0s,.10), p90f=pct(f0s,.90), p25=pct(f0s,.25), p75=pct(f0s,.75);
  var rangeST=12*Math.log2(Math.max(p90f,1)/Math.max(p10,1));
  var hnr=mean(voiced.map(function(f){return f.hnr;}));
  var zcr=mean(voiced.map(function(f){return f.zcr;}));
  var octShare = voiced.filter(function(f){return f.oct;}).length / voiced.length;

  var cyc=cycles(x,frames);

  var frameHz = SR/HOP;
  var env = frames.map(function(f){return f.rms;});
  var art = articulation(env, frameHz);
  var quiet = env.filter(function(v){ return v < rmsThr; }).length/env.length;

  /* Tonhoehenverlauf zum Nachvollziehen: ein Wert je 160 ms */
  var track=[], step=Math.round(0.160*frameHz);
  for(i=0;i<frames.length;i+=step){
    var seg=[];
    for(var j=i;j<Math.min(frames.length,i+step);j++) if(frames[j].voiced) seg.push(frames[j].f0);
    seg.sort(function(a,b){return a-b;});
    track.push(seg.length? Math.round(pct(seg,0.5)) : 0);
  }

  return {medF0:medF0,p10:p10,p25:p25,p75:p75,p90:p90f,rangeST:rangeST,
    hnr:hnr,zcr:zcr,octShare:octShare,
    jitter:cyc.jitter,shimmer:cyc.shimmer,nCycles:cyc.nCycles,
    rate:art.rate,speechSec:art.speechSec,pause:quiet,
    voicedRatio:vr,dur:x.length/SR,nVoiced:voiced.length,
    rmsThr:rmsThr,rmsP90:p90,f0Track:track};
}

function classify(f){
  var sex,sexConf;
  if(f.medF0<145){sex='maennlich';sexConf=lin(145-f.medF0,0,25);}
  else if(f.medF0>175){sex='weiblich';sexConf=lin(f.medF0-175,0,30);}
  else{sex=f.medF0<160?'maennlich':'weiblich';sexConf=0.18+0.12*lin(Math.abs(f.medF0-160),0,15);}
  /* Unsicherer Tonhoehenverlauf senkt das Vertrauen */
  var spread = f.p75>0 ? (f.p75-f.p25)/f.medF0 : 1;
  if (spread > 0.45) sexConf *= 0.6;
  sexConf=Math.max(0.05,Math.min(0.97,sexConf));

  var parts=[],w=[];
  parts.push(1-lin(f.hnr,9,20));w.push(1.1);
  parts.push(1-lin(f.rate,3.4,5.6));w.push(1.2);
  if(sex==='weiblich') parts.push(1-lin(f.medF0,178,230)); else parts.push(lin(f.medF0,108,142));
  w.push(1.0);
  parts.push(lin(f.pause,0.16,0.42));w.push(0.5);

  var num=0,den=0;
  for(var i=0;i<parts.length;i++){num+=parts[i]*w[i];den+=w[i];}
  var ageScore=num/den;
  var band=ageScore<0.38?'jung':(ageScore>0.62?'reif':'mittel');
  var decisive=Math.min(1,Math.abs(ageScore-0.5)*2.6);
  var material=Math.min(1,f.nVoiced/110)*Math.min(1,f.voicedRatio/0.35);
  var ageConf=Math.max(0.03,Math.min(0.62,decisive*0.62+material*0.30-0.14));
  /* Ungeeichte Schwellen: solange keine echten Vergleichsdaten vorliegen,
     bleibt das Alter bewusst unter der Meldeschwelle. */
  if (!f.geeicht) ageConf = Math.min(ageConf, 0.30);

  var aro=0.35*lin(f.rangeST,3,11)+0.30*lin(f.rate,3.4,6.0)+0.20*(1-lin(f.pause,0.10,0.40))+0.15*lin(f.hnr,8,19);
  var aroLabel=aro<0.38?'ruhig':(aro>0.62?'aufgedreht':'neutral');
  var aroConf=Math.max(0.1,Math.min(0.85,Math.abs(aro-0.5)*2*material));

  return {sex:sex,sexConf:sexConf,ageBand:band,ageScore:ageScore,ageConf:ageConf,
    arousal:aroLabel,arousalScore:aro,arousalConf:aroConf};
}

/* Dieser Text geht später als contextual_update an den Agenten */
function payload(c){
  var p = 'Sprecherklassifikation: ';
  p += (c.sexConf >= 0.30) ? c.sex : 'unbestimmt';
  if (c.ageConf >= 0.35) p += ', Altersgruppe ' + c.ageBand;
  return p;   /* Alter erscheint erst, wenn die Schwellen geeicht sind */
}

/* ---------- Ausgabe ---------- */
function finish(x){
  el('rec').style.display = 'none';
  el('again').style.display = 'inline-block';
  el('again').disabled = false;
  el('prog').style.width = '0%';

  var f = analyse(x);
  if (!f){
    el('status').textContent = 'Zu wenig Sprache erkannt. Bitte lauter und durchgehender sprechen.';
    return;
  }
  var c = classify(f);
  last = {f:f, c:c};

  el('status').textContent = 'Fertig.';
  el('verdict').classList.add('on');
  el('vSex').textContent = c.sex === 'maennlich' ? 'männlich' : 'weiblich';
  el('cSex').textContent = 'Vertrauen ' + Math.round(c.sexConf*100) + ' %';
  el('vAge').textContent = c.ageBand + '  (ungeeicht)';
  el('cAge').textContent = 'Rohwert ' + c.ageScore.toFixed(2) +
    ' · geht noch nicht an den Agenten';
  el('vAro').textContent = c.arousal;
  el('cAro').textContent = 'Vertrauen ' + Math.round(c.arousalConf*100) + ' %';
  el('payload').textContent = payload(c);

  var rows = [
    ['Grundfrequenz Median', f.medF0.toFixed(1) + ' Hz'],
    ['Grundfrequenz 10 bis 90 Prozent', f.p10.toFixed(0) + ' bis ' + f.p90.toFixed(0) + ' Hz'],
    ['Tonhöhenumfang', f.rangeST.toFixed(1) + ' Halbtöne'],
    ['Jitter (fließt noch nicht ein)', f.jitter == null ? 'nicht messbar' : f.jitter.toFixed(2) + ' %'],
    ['Shimmer (fließt noch nicht ein)', f.shimmer == null ? 'nicht messbar' : f.shimmer.toFixed(2) + ' dB'],
    ['Rauschabstand', f.hnr.toFixed(1) + ' dB'],
    ['Artikulationsrate', f.rate.toFixed(2) + ' Silben je Sprechsekunde'],
    ['Pausenanteil', Math.round(f.pause*100) + ' %'],
    ['Helligkeit', Math.round(f.zcr) + ' Hz'],
    ['Erkannte Stimmzyklen', f.nCycles],
    ['Sprechzeit', f.speechSec.toFixed(1) + ' von ' + f.dur.toFixed(1) + ' s'],
    ['Pegelschwelle dieser Aufnahme', f.rmsThr.toFixed(4) + ' (Pegel ' + f.rmsP90.toFixed(3) + ')'],
    ['Tonhöhenverlauf je 160 ms', f.f0Track.join(' ')],
    ['Stimmhafte Rahmen', f.nVoiced + ' von ' + Math.round(f.nVoiced/Math.max(f.voicedRatio,0.001)) + ' (' + Math.round(f.voicedRatio*100) + ' %)']
  ];
  var tb = el('feat').querySelector('tbody');
  tb.innerHTML = rows.map(function(r){
    return '<tr><td>' + r[0] + '</td><td class="num">' + r[1] + '</td></tr>';
  }).join('');
  el('save').disabled = false;
}

/* ---------- Eichung ---------- */
function store(){ try{ return JSON.parse(localStorage.getItem('stimmeichung')||'[]'); }catch(e){ return []; } }
function put(a){ try{ localStorage.setItem('stimmeichung', JSON.stringify(a)); }catch(e){} }

el('save').addEventListener('click', function(){
  if (!last) return;
  var sx = el('trueSex').value, ag = parseInt(el('trueAge').value, 10);
  if (!sx || !ag){ el('status').textContent = 'Bitte echtes Geschlecht und Alter eintragen.'; return; }
  var a = store();
  a.push({
    zeit: new Date().toISOString(),
    echtGeschlecht: sx, echtAlter: ag,
    gemessen: last.f, geschaetzt: last.c
  });
  put(a); render();
  el('save').disabled = true;
  el('status').textContent = 'Gespeichert. ' + a.length + ' Messung' + (a.length===1?'':'en') + ' in der Eichung.';
});

el('exp').addEventListener('click', function(){
  var b = new Blob([JSON.stringify(store(), null, 1)], {type:'application/json'});
  var u = URL.createObjectURL(b), a = document.createElement('a');
  a.href = u; a.download = 'stimmeichung.json'; a.click();
  setTimeout(function(){ URL.revokeObjectURL(u); }, 1000);
});

el('clr').addEventListener('click', function(){
  if (confirm('Alle Eichdaten löschen?')){ put([]); render(); }
});

function render(){
  var a = store(), box = el('samples');
  if (!a.length){ box.innerHTML = '<p class="hint">Noch keine Eichdaten.</p>'; return; }
  var head = '<table><tbody><tr><th>echt</th><th>geschätzt</th><th class="num">F0</th><th class="num">Jitter</th><th class="num">Shimmer</th><th class="num">HNR</th></tr>';
  var body = a.map(function(r){
    var okS = r.echtGeschlecht === r.geschaetzt.sex;
    var band = r.echtAlter < 31 ? 'jung' : (r.echtAlter < 56 ? 'mittel' : 'reif');
    var okA = band === r.geschaetzt.ageBand;
    return '<tr><td>' + r.echtGeschlecht.charAt(0).toUpperCase() + ' ' + r.echtAlter + ' (' + band + ')</td>' +
      '<td>' + (okS?'✓':'✗') + ' ' + r.geschaetzt.sex.charAt(0).toUpperCase() +
      ' · ' + (okA?'✓':'✗') + ' ' + r.geschaetzt.ageBand + '</td>' +
      '<td class="num">' + r.gemessen.medF0.toFixed(0) + '</td>' +
      '<td class="num">' + (r.gemessen.jitter==null?'–':r.gemessen.jitter.toFixed(2)) + '</td>' +
      '<td class="num">' + (r.gemessen.shimmer==null?'–':r.gemessen.shimmer.toFixed(2)) + '</td>' +
      '<td class="num">' + r.gemessen.hnr.toFixed(1) + '</td></tr>';
  }).join('');
  var n = a.length;
  var hitS = a.filter(function(r){ return r.echtGeschlecht === r.geschaetzt.sex; }).length;
  var hitA = a.filter(function(r){
    var b = r.echtAlter < 31 ? 'jung' : (r.echtAlter < 56 ? 'mittel' : 'reif');
    return b === r.geschaetzt.ageBand;
  }).length;
  box.innerHTML = head + body + '</tbody></table>' +
    '<p class="hint">Trefferquote bei ' + n + ' Messungen: Geschlecht ' + hitS + ' von ' + n +
    ', Altersgruppe ' + hitA + ' von ' + n + '.</p>';
}
render();

})();
