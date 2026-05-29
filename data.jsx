// Shared content for all 4 variations of Diag Renov Immo

const DRI_CONTACT = {
  email: "diagrenovimmo@gmail.com",
  phone: "07 49 13 79 11",
  zone: "Meurthe-et-Moselle (54)",
  agrement: "Mon Accompagnateur Rénov'",
};

const DRI_SERVICES = [
  {
    key: "dpe",
    title: "Diagnostic de Performance Énergétique",
    short: "DPE",
    summary: "Document obligatoire pour vendre ou louer. Classe votre bien de A à G.",
    bullets: [
      "Obligatoire pour toute transaction immobilière",
      "Valorisation de votre bien à la vente",
      "Identification des leviers d'amélioration",
      "Rapport remis sous 48h",
    ],
    duration: "1h sur site",
    deliverable: "Rapport DPE officiel",
  },
  {
    key: "audit",
    title: "Audit énergétique complet",
    short: "Audit",
    summary: "Analyse approfondie + scénarios de travaux chiffrés et priorisés.",
    bullets: [
      "Inspection détaillée du bâti et des équipements",
      "Plusieurs scénarios de rénovation",
      "Estimation des aides mobilisables",
      "Plan d'action priorisé",
    ],
    duration: "2-3h sur site",
    deliverable: "Rapport d'audit + scénarios chiffrés",
  },
  {
    key: "pv",
    title: "Étude photovoltaïque",
    short: "PV",
    summary: "Faisabilité et dimensionnement d'une installation solaire sur votre toiture.",
    bullets: [
      "Analyse ensoleillement et ombrages",
      "Dimensionnement adapté à votre consommation",
      "Estimation de production et rentabilité",
      "Conformité urbanisme",
    ],
    duration: "Visite + étude",
    deliverable: "Étude technique et économique",
  },
  {
    key: "chauffage",
    title: "Étude chauffage",
    short: "Chauffage",
    summary: "Comparatif des solutions de chauffage adaptées à votre logement.",
    bullets: [
      "PAC, granulés, gaz, hybride : comparatif",
      "Dimensionnement selon déperditions",
      "Coût d'installation et économies projetées",
      "Aides applicables détaillées",
    ],
    duration: "Visite + étude",
    deliverable: "Comparatif chiffré multi-solutions",
  },
];

const DRI_DPE = [
  { letter: "A", range: "≤ 70", co2: "≤ 6", label: "Très performant", color: "#00a651" },
  { letter: "B", range: "71 — 110", co2: "7 — 11", label: "Performant", color: "#52b757" },
  { letter: "C", range: "111 — 180", co2: "12 — 30", label: "Assez bon", color: "#bbcf3a" },
  { letter: "D", range: "181 — 250", co2: "31 — 50", label: "Moyen", color: "#fdee00" },
  { letter: "E", range: "251 — 330", co2: "51 — 70", label: "Médiocre", color: "#fab627" },
  { letter: "F", range: "331 — 420", co2: "71 — 100", label: "Mauvais — passoire", color: "#ed7d31" },
  { letter: "G", range: "> 420", co2: "> 100", label: "Très mauvais — passoire", color: "#e3211c" },
];

const DRI_AIDES = [
  {
    name: "MaPrimeRénov' Ampleur",
    amount: "jusqu'à 90%",
    desc: "Pour les rénovations globales multi-gestes. Montant variable selon revenus.",
    pill: "Phare 2026",
  },
  {
    name: "Mon Accompagnateur Rénov'",
    amount: "jusqu'à 2 000 €",
    desc: "Notre prestation d'accompagnement prise en charge par l'État.",
    pill: "Agréé",
  },
  {
    name: "Certificats d'Économies d'Énergie",
    amount: "variable",
    desc: "Prime versée par les fournisseurs d'énergie. Cumulable.",
    pill: "CEE",
  },
  {
    name: "Éco-PTZ",
    amount: "jusqu'à 50 000 €",
    desc: "Prêt à taux zéro pour financer le reste à charge.",
    pill: "0%",
  },
];

const DRI_STATS = [
  { value: "4,8M", label: "passoires énergétiques en France", source: "Données 2024" },
  { value: "F & G", label: "logements interdits à la location d'ici 2028" },
  { value: "90%", label: "des travaux finançables avec les aides" },
  { value: "54", label: "département d'intervention" },
];

const DRI_TESTIMONIALS = [
  {
    quote: "Le DPE réalisé par Diag Renov Immo a été très précis et m'a permis de mieux comprendre les performances énergétiques de ma maison.",
    name: "Lucas",
    role: "Propriétaire — Nancy",
  },
  {
    quote: "Service impeccable et conseils avisés, je recommande vivement Diag Renov Immo !",
    name: "Marie",
    role: "Propriétaire — Lunéville",
  },
  {
    quote: "Alex nous a accompagnés de A à Z sur notre projet de rénovation globale. On a obtenu 78% d'aides, on n'aurait jamais pensé.",
    name: "Famille Bertrand",
    role: "Maison année 70 — Pont-à-Mousson",
  },
];

const DRI_BLOG = [
  {
    cat: "Réglementation",
    date: "Avril 2026",
    slug: "passoires-energetiques-france",
    title: "Passoires énergétiques : 4,8 millions de logements à rénover en France",
    excerpt: "G interdit depuis 2025, F dès 2028 : ce que chaque propriétaire doit anticiper pour éviter les sanctions et bénéficier des aides.",
    readTime: "5 min",
  },
  {
    cat: "Aides",
    date: "Janvier 2026",
    slug: "mon-accompagnateur-renov-avantages",
    title: "Comment un Mon Accompagnateur Rénov' transforme votre rénovation",
    excerpt: "Expertise sur mesure, soutien administratif, jusqu'à 90 % de subventions : voici pourquoi passer par un MAR change tout.",
    readTime: "5 min",
  },
  {
    cat: "Audit",
    date: "Mars 2026",
    slug: "audit-energetique-valeur-maison",
    title: "Audit énergétique : améliorez la valeur et le confort de votre maison",
    excerpt: "Valorisation immobilière, économies sur les factures, planification des travaux : pourquoi l'audit est l'étape clé avant tout projet.",
    readTime: "5 min",
  },
  {
    cat: "DPE",
    date: "Avril 2026",
    slug: "comprendre-le-dpe",
    title: "Qu'est-ce qu'un DPE et pourquoi est-ce si important ?",
    excerpt: "De A à G, le DPE classe votre logement selon sa consommation énergétique. Un outil essentiel pour chaque propriétaire.",
    readTime: "4 min",
  },
  {
    cat: "Solaire",
    date: "Mars 2026",
    slug: "etude-photovoltaique-important",
    title: "Panneaux photovoltaïques : pourquoi une étude préalable est indispensable",
    excerpt: "Performance maximale, rentabilité, conformité réglementaire : une étude préalable fait toute la différence.",
    readTime: "4 min",
  },
  {
    cat: "Chauffage",
    date: "Février 2026",
    slug: "rentabilite-chauffage",
    title: "Rentabilité du chauffage : un enjeu majeur pour votre confort et votre budget",
    excerpt: "PAC, granulés, hybride : comment choisir et maximiser l'efficacité de votre système de chauffage en Lorraine.",
    readTime: "3 min",
  },
];

const DRI_FAQ = [
  {
    q: "Combien coûte un DPE ?",
    a: "Entre 100 et 250 € selon la surface et la complexité du logement. Devis gratuit en ligne.",
  },
  {
    q: "Combien de temps est valable un DPE ?",
    a: "10 ans pour les DPE réalisés depuis le 1er juillet 2021.",
  },
  {
    q: "Pourquoi passer par un Accompagnateur Rénov' ?",
    a: "Obligatoire pour bénéficier de MaPrimeRénov' Ampleur. Et notre prestation peut être prise en charge jusqu'à 2 000 €.",
  },
];

const DRI_PROCESS = [
  { n: 1, title: "Premier contact", desc: "Échange téléphonique gratuit pour cerner votre projet." },
  { n: 2, title: "Visite sur site", desc: "Inspection complète du logement et relevés techniques." },
  { n: 3, title: "Rapport & scénarios", desc: "Livraison du rapport avec scénarios chiffrés et aides applicables." },
  { n: 4, title: "Accompagnement", desc: "Montage des dossiers d'aides et suivi des artisans." },
];

window.DRI = {
  CONTACT: DRI_CONTACT,
  SERVICES: DRI_SERVICES,
  DPE: DRI_DPE,
  AIDES: DRI_AIDES,
  STATS: DRI_STATS,
  TESTIMONIALS: DRI_TESTIMONIALS,
  BLOG: DRI_BLOG,
  FAQ: DRI_FAQ,
  PROCESS: DRI_PROCESS,
};
