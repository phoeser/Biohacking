/* Wearables & Biohacker-Produkte (Meine persönlichen Tipps)
 * affiliate: true → Whoop-Link hat meinen Empfehlungscode.
 * Oura hat ebenfalls Rabatt-Link.
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
    link: 'https://ouraring.com/discount/7ca18ebe07?utm_source=user&utm_medium=iac_raf&utm_type=alwayson-cvr&utm_campaign=2026RAF&utm_variant=2026_raf_mar',
    code: '',
    affiliate: true
  }
];

// Nur eine Kategorie übrig → Filter-Chips werden im app.js ausgeblendet.
const PRODUCT_CATEGORIES = [
  { id: 'all', label: 'Alle' }
];
