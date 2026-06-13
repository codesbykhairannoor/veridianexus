import { notFound } from 'next/navigation';
import { locales, Locale } from '@/i18n-config';

// Load translation files dynamically
const dictionaries: Record<string, Record<string, string>> = {
  en: {
    // SEO
    'seo.home.title': 'Real-Time AI Provenance & Impact Intelligence',
    'seo.home.description': 'Veridia Nexus is the first real-time AI Provenance & Impact Intelligence Platform — ingesting, normalizing, and cross-referencing live signals across news, regulation, biotech, sustainability, and synthetic media.',
    'seo.home.keywords': 'AI provenance, truth infrastructure, deepfake attribution, AI governance, biotech AI, CRISPR AI, rare-earth-free motors, synthetic media provenance, Fable 5 audit, Mythos 5 forensics',
    'seo.home.ogTitle': 'Veridia Nexus — Real-Time AI Provenance & Impact Intelligence',
    'seo.home.ogDescription': 'The world’s first live signal intelligence platform for AI accountability, impact verification, and cross-domain provenance mapping.',
    'seo.home.ogAlt': 'Veridia Nexus — AI Provenance Intelligence Dashboard',
    'seo.home.twitterTitle': 'Veridia Nexus — Real-Time AI Provenance & Impact Intelligence',
    'seo.home.twitterDescription': 'Mapping truth at scale: Live regulatory feeds, biotech breakthroughs, synthetic media provenance, and sustainability signals — all in one verifiable graph.',

    // Hero
    'hero.live': 'LIVE SIGNAL INGESTION',
    'hero.titlePart1': 'Veridia Nexus',
    'hero.titlePart2': 'Real-Time AI Provenance & Impact Intelligence',
    'hero.description': 'The world\'s first live signal intelligence platform for AI accountability, impact verification, and cross-domain provenance mapping — built for auditors, regulators, biotech labs, and AI safety engineers.',
    'hero.ctaPrimary': 'Launch Dashboard',
    'hero.ctaSecondary': 'View Documentation',
    'hero.stat1': 'Global Signal Coverage',
    'hero.stat2': 'Uptime SLA',
    'hero.stat3': 'Verified Sources',
    'hero.stat4': 'Avg. Provenance Latency',

    // Signal Grid
    'signalGrid.live': 'Live Feed • Updated now',
    'signalGrid.news.title': 'Global News Signals',
    'signalGrid.news.description': 'Real-time ingestion of 12,000+ news outlets, fact-checked via cross-source provenance graphs.',
    'signalGrid.regulation.title': 'Regulatory Signals',
    'signalGrid.regulation.description': 'Live parsing of EU AI Act, US EO 14110, China AIGC Rules, and 47 national frameworks.',
    'signalGrid.biotech.title': 'Biotech Signals',
    'signalGrid.biotech.description': 'CRISPR targeting logs, protein folding predictions, clinical trial metadata, and gene-editing provenance.',
    'signalGrid.sustainability.title': 'Sustainability Signals',
    'signalGrid.sustainability.description': 'Rare-earth-free motor specs, carbon intensity scores, supply chain provenance, and green chemistry validation.',

    // Timeline
    'timeline.title': 'Provenance Resolution Flow',
    'timeline.item1.title': 'Signal Ingestion',
    'timeline.item1.description': 'Raw signal ingestion (news, PDFs, video transcripts, API streams) with cryptographic hash anchoring.',
    'timeline.item2.title': 'Cross-Domain Normalization',
    'timeline.item2.description': 'Entity resolution, temporal alignment, and semantic normalization using Veridia Ontology v4.2.',
    'timeline.item3.title': 'Attribution Graph Construction',
    'timeline.item3.description': 'Multi-hop provenance graph built on zero-knowledge attestations and decentralized identifiers (DIDs).',
    'timeline.item4.title': 'Impact Intelligence Output',
    'timeline.item4.description': 'Verifiable impact score, attribution confidence, and regulatory compliance vector exported as W3C Verifiable Credentials.',

    // Impact Metrics
    'impact.metrics.verifiedClaims': 'Verified Claims Rate',
    'impact.metrics.attributionAccuracy': 'Attribution Accuracy',
    'impact.metrics.impactScore': 'Impact Confidence Score',
    'impact.metrics.provenanceDepth': 'Provenance Depth',

    // Trust Carousel
    'trust.carousel.title': 'Trusted by Global Institutions',
    'trust.verified': 'Verified',
  },
  es: {
    'seo.home.title': 'Inteligencia de Procedencia e Impacto de IA en Tiempo Real',
    'seo.home.description': 'Veridia Nexus es la primera plataforma de inteligencia de procedencia e impacto de IA en tiempo real — que ingiere, normaliza y cruza señales en vivo de noticias, regulaciones, biotecnología, sostenibilidad y medios sintéticos.',
    'hero.titlePart1': 'Veridia Nexus',
    'hero.titlePart2': 'Inteligencia de Procedencia e Impacto de IA en Tiempo Real',
    'hero.description': 'La primera plataforma mundial de inteligencia de señales en vivo para responsabilidad de la IA, verificación de impacto y mapeo de procedencia cruzada.',
    'hero.ctaPrimary': 'Iniciar Panel de Control',
    'hero.ctaSecondary': 'Ver Documentación',
    'signalGrid.news.title': 'Señales de Noticias Globales',
    'signalGrid.regulation.title': 'Señales Regulatorias',
    'signalGrid.biotech.title': 'Señales Biotecnológicas',
    'signalGrid.sustainability.title': 'Señales de Sostenibilidad',
    'timeline.title': 'Flujo de Resolución de Procedencia',
    'trust.carousel.title': 'Confían en Nosotros Instituciones Globales',
  },
  ja: {
    'seo.home.title': 'リアルタイムAI由来性およびインパクト分析プラットフォーム',
    'seo.home.description': 'Veridia Nexusは、ニュース、規制、バイオテクノロジー、サステナビリティ、合成メディアなど、複数のソースからリアルタイムで信号を収集・正規化・相互参照する、世界初のAI由来性およびインパクト分析プラットフォームです。',
    'hero.titlePart1': 'Veridia Nexus',
    'hero.titlePart2': 'リアルタイムAI由来性およびインパクト分析',
    'hero.description': 'AIの説明責任、インパクト検証、クロスドメイン由来性マッピングのための、世界初のリアルタイム信号インテリジェンスプラットフォーム。',
    'hero.ctaPrimary': 'ダッシュボード起動',
    'hero.ctaSecondary': 'ドキュメンテーションを表示',
    'signalGrid.news.title': 'グローバルニュース信号',
    'signalGrid.regulation.title': '規制信号',
    'signalGrid.biotech.title': 'バイオテクノロジーシグナル',
    'signalGrid.sustainability.title': 'サステナビリティ信号',
    'timeline.title': '由来性解決フロー',
    'trust.carousel.title': '世界の機関が信頼する',
  },
  de: {
    'seo.home.title': 'Echtzeit-KI-Herkunfts- und Auswirkungsintelligenz',
    'seo.home.description': 'Veridia Nexus ist die erste Echtzeit-KI-Herkunfts- und Auswirkungsintelligenzplattform — die Live-Signale aus Nachrichten, Regulierung, Biotechnologie, Nachhaltigkeit und synthetischen Medien aufnimmt, normalisiert und miteinander verknüpft.',
    'hero.titlePart1': 'Veridia Nexus',
    'hero.titlePart2': 'Echtzeit-KI-Herkunfts- und Auswirkungsintelligenz',
    'hero.description': 'Die weltweit erste Live-Signal-Intelligenzplattform für KI-Verantwortlichkeit, Auswirkungsverifikation und herkunftsübergreifende Kartierung.',
    'hero.ctaPrimary': 'Dashboard starten',
    'hero.ctaSecondary': 'Dokumentation anzeigen',
    'signalGrid.news.title': 'Globale Nachrichtensignale',
    'signalGrid.regulation.title': 'Regulatorische Signale',
    'signalGrid.biotech.title': 'Biotechnologische Signale',
    'signalGrid.sustainability.title': 'Nachhaltigkeitssignale',
    'timeline.title': 'Herkunftsauflösungsprozess',
    'trust.carousel.title': 'Vertraut von globalen Institutionen',
  },
};

export const getTranslations = async (locale: Locale): Promise<Record<string, string>> => {
  if (!locales.includes(locale)) notFound();
  return dictionaries[locale] || dictionaries.en;
};