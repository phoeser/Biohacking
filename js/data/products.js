/* Wearables & Biohacker-Produkte
 * Struktur: name, category, emoji/icon, short, pros[], cons[], priceRange, link, code, affiliate (bool)
 * code = leer lassen, wenn Link bereits personalisiert; affiliate = true für Transparenz-Hinweis
 */
const PRODUCTS = [
  // ============ RING / BAND ============
  {
    id: 'whoop',
    name: 'Whoop',
    category: 'Tracker',
    emoji: '⌚',
    tagline: 'Kein Display, nur Daten – Abo-Modell, 24/7 Tracking',
    short: 'Armband ohne Display, Fokus auf Schlaf, Recovery (HRV) und Strain. Abo-Modell inkl. Hardware.',
    pros: [
      'Tief-Analyse von HRV, Schlafphasen und Strain-Score',
      'Kein Display = keine Ablenkung, 5-Tage-Akku',
      'Hardware im Abo enthalten'
    ],
    cons: [
      'Nur im Abo nutzbar (ca. 30 €/Monat)',
      'Kein Display, keine Benachrichtigungen',
      'Pulsgenauigkeit bei hoher Intensität schwächer als Brustgurt'
    ],
    priceRange: 'ab 30 €/Monat',
    link: 'https://join.whoop.com/5C8D6240',
    code: '',
    affiliate: true
  },
  {
    id: 'oura',
    name: 'Oura Ring',
    category: 'Tracker',
    emoji: '💍',
    tagline: 'Schlafmessung als Ring – der Goldstandard',
    short: 'Ring mit Titanhülle, misst Schlafphasen, HRV, Temperatur. Premium-Mitgliedschaft für volle Analyse.',
    pros: [
      'Beste Schlafmessung am Markt (REM, Tiefschlaf, Latenz)',
      'Temperaturtrends (Zyklus, Infekt-Früherkennung)',
      '4–7 Tage Akku, diskret am Finger'
    ],
    cons: [
      'Monats-Mitgliedschaft nötig für Detaildaten (~6 €/Monat)',
      'Ring-Kauf (~350 €) plus Abo',
      'Kein direktes Training-Tracking'
    ],
    priceRange: 'ca. 350 € + 6 €/Monat',
    link: '',
    code: '',
    affiliate: true
  },
  {
    id: 'apple-watch',
    name: 'Apple Watch',
    category: 'Tracker',
    emoji: '🍎',
    tagline: 'Alleskönner – Fitness, Messaging, ECG',
    short: 'Smartwatch mit EKG, Blutsauerstoff, Schlaftracking, Apps. iPhone erforderlich.',
    pros: [
      'Riesiges App-Ökosystem, viele 3rd-Party-Biohacking-Apps',
      'EKG, SpO₂, Temperaturtrends, Sturzerkennung',
      'Nahtlose iOS-Integration'
    ],
    cons: [
      'Akku nur ~1 Tag (Series) bzw. 2–3 Tage (Ultra)',
      'Nur mit iPhone nutzbar',
      'Schlafmessung schwächer als Oura/Whoop'
    ],
    priceRange: 'ab 450 €',
    link: '',
    code: '',
    affiliate: false
  },
  {
    id: 'garmin',
    name: 'Garmin (Fenix/Forerunner/Epix)',
    category: 'Tracker',
    emoji: '🗺️',
    tagline: 'Sport & Outdoor – lange Akkulaufzeit',
    short: 'Robuste Multisport-Uhren mit Body-Battery, HRV Status, Training Readiness und langer Akkulaufzeit.',
    pros: [
      '1–3 Wochen Akku je nach Modell',
      'Exzellente GPS- und Sportmodi',
      'Body Battery + Training Readiness sind sehr aussagekräftig'
    ],
    cons: [
      'Teurer Einstieg (Fenix ab 800 €)',
      'App-Ökosystem kleiner als Apple',
      'UI teils komplex'
    ],
    priceRange: '400 – 1.200 €',
    link: '',
    code: '',
    affiliate: false
  },
  {
    id: 'polar',
    name: 'Polar (H10 / Vantage)',
    category: 'Tracker',
    emoji: '❤️',
    tagline: 'Präzision bei Herzfrequenz',
    short: 'Brustgurt H10 als Goldstandard für Pulsgenauigkeit, Vantage-Uhren mit guter Schlaf- und Recovery-Analyse.',
    pros: [
      'H10 Brustgurt = genauester HR-Sensor am Markt',
      'Kompatibel mit fast allen Apps (BLE/ANT+)',
      'Guter Einstiegspreis'
    ],
    cons: [
      'Brustgurt = zusätzliches Tragen',
      'Uhren-UI weniger modern'
    ],
    priceRange: 'H10: 90 €, Vantage: 400 – 600 €',
    link: '',
    code: '',
    affiliate: false
  },

  // ============ CGM ============
  {
    id: 'abbott-libre',
    name: 'Abbott FreeStyle Libre 3',
    category: 'CGM',
    emoji: '📉',
    tagline: 'Kontinuierliche Glukose-Messung am Oberarm',
    short: 'Sensor für 14 Tage Echtzeit-Glukosewerte. In DE per Rezept oder direkt kaufbar.',
    pros: [
      '14 Tage Dauertragen, Smartphone-App',
      'Echtzeit-Werte inkl. Trends',
      'Einer der dünnsten Sensoren'
    ],
    cons: [
      'ca. 75 € pro Sensor (ohne Rezept)',
      'Max. 14 Tage Tragedauer',
      'Genauigkeit bei schnellen Änderungen leicht zeitverzögert'
    ],
    priceRange: '~75 € pro 14 Tage',
    link: '',
    code: '',
    affiliate: false
  },
  {
    id: 'dexcom',
    name: 'Dexcom G7',
    category: 'CGM',
    emoji: '📊',
    tagline: 'CGM-Goldstandard für Profis',
    short: 'Hochpräziser CGM-Sensor, 10 Tage Laufzeit, Bluetooth direkt zum Smartphone.',
    pros: [
      'Sehr hohe Genauigkeit',
      'Offizielle Apple-Watch-Integration',
      'Alarm-Funktion'
    ],
    cons: [
      'Teurer als Libre',
      'Nur 10 Tage Tragedauer',
      'In DE schwerer zu bekommen'
    ],
    priceRange: '~80 € pro 10 Tage',
    link: '',
    code: '',
    affiliate: false
  },
  {
    id: 'levels',
    name: 'Levels Health',
    category: 'CGM',
    emoji: '🧪',
    tagline: 'CGM + App + Biohacker-Interpretation',
    short: 'Kombiniert CGM (Libre) mit App, die Mahlzeiten, Bewegung und Stress analysiert. US-fokussiert.',
    pros: [
      'Beste App-Interpretation der CGM-Daten',
      'Food-Scoring in Echtzeit',
      'Community und Coaching'
    ],
    cons: [
      'Hauptsächlich US-Markt',
      'Abo ~200 €/Monat',
      'Als Deutscher umständlicher zu bestellen'
    ],
    priceRange: '~200 €/Monat',
    link: '',
    code: '',
    affiliate: false
  },

  // ============ SCHLAF / MATRATZEN ============
  {
    id: 'eight-sleep',
    name: 'Eight Sleep Pod',
    category: 'Schlaf',
    emoji: '🛏️',
    tagline: 'Aktiv temperiertes Matratzentopper-System',
    short: 'Matratzenauflage die Bettseite kühlt/wärmt, Schlaf trackt und sanft weckt. Beide Seiten individuell.',
    pros: [
      'Tiefschlaf messbar besser durch aktive Kühlung',
      'Jede Bettseite unabhängig regelbar',
      'Sanfter Wake-Up per Vibration'
    ],
    cons: [
      'Sehr teuer (~3.000 € + Abo)',
      'Basisstation braucht Platz',
      'Abo-Modell für volle Features'
    ],
    priceRange: 'ab 3.000 € + Abo',
    link: '',
    code: '',
    affiliate: false
  },

  // ============ ROTLICHT ============
  {
    id: 'bon-charge',
    name: 'BON CHARGE Rotlichtpanels',
    category: 'Rotlicht',
    emoji: '🔴',
    tagline: 'Rotlicht-Therapie für Haut, Regeneration, Mitochondrien',
    short: 'Rot-/Nahinfrarot-Panels für Zuhause. 660 nm + 850 nm, modular ausbaubar.',
    pros: [
      'Gute Leistungsdichte pro Euro',
      'Versand aus EU',
      'Verschiedene Größen (Mini bis Ganzkörper)'
    ],
    cons: [
      'Große Panels brauchen viel Platz',
      'Ergebnis erst nach wöchentlicher Anwendung (8+ Wochen)'
    ],
    priceRange: '250 € – 2.000 €',
    link: '',
    code: '',
    affiliate: false
  },
  {
    id: 'mito-red',
    name: 'Mito Red Light',
    category: 'Rotlicht',
    emoji: '🟥',
    tagline: 'US-Premium-Rotlicht, medizinische Qualität',
    short: 'Hochwertige Panels mit 630/660/810/830/850 nm. Top-Bauqualität, US-Versand.',
    pros: [
      'Sehr hohe Lichtintensität (Irradiance)',
      'Mehrere Wellenlängen kombiniert',
      'Exzellenter Support'
    ],
    cons: [
      'US-Versand + Zoll nach DE teuer',
      'Preislich im Premiumsegment'
    ],
    priceRange: '400 $ – 2.500 $',
    link: '',
    code: '',
    affiliate: false
  }
];

const PRODUCT_CATEGORIES = [
  { id: 'all', label: 'Alle' },
  { id: 'Tracker', label: 'Wearables' },
  { id: 'CGM', label: 'CGM' },
  { id: 'Schlaf', label: 'Schlaf' },
  { id: 'Rotlicht', label: 'Rotlicht' }
];
