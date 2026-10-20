import { AstrologyService } from '../types';

export const ASTROLOGY_SERVICES: AstrologyService[] = [
  {
    id: 'kundli-birth-chart',
    title: 'Detailed Vedic Kundli & Life Forecast',
    subtitle: 'Comprehensive 40-Page Planetary Analysis & 5-Year Roadmap',
    priceAED: 249,
    duration: '45-Min Video / PDF Consultation',
    icon: 'Compass',
    description: 'An exhaustive examination of your Lagna, Rashi, Navamsha (D9) chart, and current Mahadasha-Antardasha cycles. Uncover your core strengths, career potential, health indicators, and karmic life purpose.',
    benefits: [
      'Pinpoint prime career acceleration and financial growth periods',
      'Identify subconscious planetary blockages and karmic patterns',
      'Actionable gemstone and mantra recommendations',
      'Audio recording and PDF chart copy provided'
    ],
    deliverables: [
      'Comprehensive Vedic Birth Chart (South & North Indian formats)',
      '12 House planetary strengths (Shadbala analysis)',
      'Vimshottari Dasha timeline for next 10 years',
      'Vedic remedies (Upayas) and favorable gemstones'
    ]
  },
  {
    id: 'compatibility-consultation',
    title: 'Kundli Milan & Marriage Compatibility',
    subtitle: 'Ashtakoota & Dashakoota Harmony Evaluation for Prospective Couples',
    priceAED: 299,
    duration: '45-Min Live Session with Senior Jyotish Acharya',
    icon: 'HeartHandshake',
    description: 'Going beyond simple 36-gun matching, our scholars evaluate emotional bonding, mental affinity, health compatibility, progeny indicators, and longevity factors between partners.',
    benefits: [
      'Deep 36 Guna Ashtakoota score breakdown',
      'Manglik Dosha analysis and mutual cancellation rules',
      'Remedies for Nadi Dosha or Bhakoot Dosha where applicable',
      'Informed guidance for parents and couples before solemnizing union'
    ],
    deliverables: [
      'Comparative chart overlay & Guna Milan score card',
      'Dosha presence report and specific remedy protocol',
      'Auspicious wedding month guidance'
    ]
  },
  {
    id: 'muhurat-consultation',
    title: 'Shubh Muhurat Auspicious Timing Calculation',
    subtitle: 'Panchang Alignment for Griha Pravesh, Weddings, Business & Travel',
    priceAED: 149,
    duration: 'Written Report + 20-Min Q&A',
    icon: 'Calendar',
    description: 'Timing is everything in Vedic cosmology. Calculate the most propitious planetary alignment (Lagna, Choghadiya, Hora, and Tithi) customized specifically for your location in Dubai, UAE, or overseas.',
    benefits: [
      'Calculate exact date and minute window for maximal prosperity',
      'Avoid Rahu Kaal, Yamagandam, and Gulika Kaal clashes',
      'Specific alignment with the host’s Janma Nakshatra'
    ],
    deliverables: [
      'Top 3 prioritized auspicious dates with minute-by-minute time windows',
      'List of dos and don’ts during the Muhurat window',
      'Personalized sankalp text for the occasion'
    ]
  },
  {
    id: 'dosha-analysis',
    title: 'Dosha Nivaran Analysis (Sade Sati, Kaal Sarp, Mangal)',
    subtitle: 'In-Depth Evaluation of Planetary Afflictions & Vedic Solutions',
    priceAED: 219,
    duration: '30-Min Consultation + Vedic Remedial Plan',
    icon: 'ShieldCheck',
    description: 'Understand the exact nature of planetary challenges such as Saturn Sade Sati, Kaal Sarp Dosha, Pitra Dosha, or Guru Chandal Yoga, along with authentic non-fear-based Vedic remediations.',
    benefits: [
      'Clear myth-busting explanations without fearmongering',
      'Practical charity (Daan), mantra, and fasting recommendations',
      'Exact transition timeline when the affliction subsides'
    ],
    deliverables: [
      'Comprehensive Dosha diagnostic breakdown',
      'Recommended Puja, Rudraksha, or Yantra solution',
      'Daily mantra recitation guide'
    ]
  },
  {
    id: 'annual-horoscope',
    title: 'Varshapal (Annual Solar Return Forecast)',
    subtitle: 'Month-by-Month Predictive Guide for Your Upcoming Year',
    priceAED: 279,
    duration: 'Written 25-Page Report + 30-Min Call',
    icon: 'Sparkles',
    description: 'Based on the Tajika astrology system of annual charts (Varshakundali) calculated from the exact moment the Sun returns to your natal position each birthday.',
    benefits: [
      'Quarterly insights into business, investments, and health',
      'Guidance on high-risk months versus harvest months',
      'Birthday consecration suggestions'
    ],
    deliverables: [
      'Tajika Annual Solar Return Chart',
      'Muntha and Varsheshwara lord analysis',
      'Month-by-month predictive commentary'
    ]
  }
];
