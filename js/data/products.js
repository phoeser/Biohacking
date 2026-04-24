/* Wearables & Biohacker-Produkte (Meine persönlichen Tipps)
 * affiliate: true → Whoop-Link hat meinen Empfehlungscode.
 * Oura & Apple Watch sind Tipps ohne Partnerlink.
 */
const PRODUCTS = [
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
    affiliate: false
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
  }
];

// Nur eine Kategorie übrig → Filter-Chips werden im app.js ausgeblendet.
const PRODUCT_CATEGORIES = [
  { id: 'all', label: 'Alle' }
];
