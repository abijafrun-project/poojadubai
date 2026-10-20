import { Puja } from '../types';

export const PUJAS_DATA: Puja[] = [
  {
    id: 'griha-pravesh-puja',
    title: 'Griha Pravesh Puja',
    subtitle: 'Auspicious Housewarming Vedic Ritual for Peace & Prosperity',
    category: 'griha',
    categoryLabel: 'Griha Shanti',
    priceAED: 499,
    duration: '2.5 - 3.5 Hours',
    image: 'https://images.unsplash.com/photo-1609358905581-e50153860699?auto=format&fit=crop&w=1000&q=80',
    rating: 4.95,
    reviewsCount: 342,
    deity: 'Lord Ganesha, Goddess Lakshmi & Vastu Purusha',
    tag: 'Most Popular',
    description: 'Griha Pravesh is the auspicious ceremony performed before entering a newly constructed or bought home. Consecrated Vedic mantras invoke divine blessings of Vastu Purusha, Lord Ganesha, and Navagrahas to dispel negative energies and fill the abode with health, wealth, and harmony.',
    significance: 'According to Vastu Shastra, entering a new dwelling without consecration may attract unresolved subtle energies. Performing Griha Pravesh establishes divine harmony between the five primordial elements (Pancha Bhootas) and the home occupants.',
    reasons: [
      'Entering a newly purchased villa or apartment in Dubai & UAE',
      'Neutralizing architectural or Vastu doshas before residing',
      'Purifying the domestic environment after structural renovations',
      'Invoking wealth, peace of mind, longevity, and family unity'
    ],
    process: [
      { step: 1, title: 'Dwar Puja & Toran Bandhan', desc: 'Sanctifying the main threshold and tying auspicious mango leaves.' },
      { step: 2, title: 'Gau Puja & Milk Boiling (Kshira Paak)', desc: 'Symbolic ritual of boiling milk until it overflows for endless abundance.' },
      { step: 3, title: 'Ganesh & Kalash Sthapana', desc: 'Invoking Vignaharta and water deities inside consecrated copper vessels.' },
      { step: 4, title: 'Navagraha & Vastu Shanti Havan', desc: 'Offering ahuti to the sacred fire while chanting Vedic mantras.' },
      { step: 5, title: 'Maha Aarti & Mangal Prasad', desc: 'Distribution of consecrated prasad and holy water sprinkling throughout the premises.' }
    ],
    samagriList: [
      'Ganga Jal, Rose Water & Cow Urine (Gomutra)',
      'Copper Kalash, Nariyal (Coconut) with thread',
      'Pure Desi Ghee, Havan Kund, Mango wood sticks',
      'Navadhanya (Nine grains), Yellow mustard seeds, Kumkum, Haldi',
      'Fresh Marigold garlands, Betel nuts & leaves, Camphor, Dhoop'
    ],
    languages: ['Hindi', 'English', 'Sanskrit', 'Tamil', 'Telugu', 'Kannada', 'Bengali', 'Marathi', 'Gujarati'],
    formats: ['At Home', 'Online E-Puja', 'Temple / Other Venue'],
    packages: [
      {
        id: 'pandit-only',
        name: 'Pandit Only',
        priceAED: 499,
        description: 'Experienced Vedic Pandit arrives at your venue with personal ritual utensils and sacred books.',
        features: [
          '1 Verified Vedic Pandit',
          'Complete ritual recital & guidance',
          'Samagri checklist provided in advance',
          'Dwar Puja, Kalash Sthapana & Vastu Havan',
          'Aarti & family blessing'
        ]
      },
      {
        id: 'pandit-samagri',
        name: 'Pandit with Puja Samagri',
        priceAED: 799,
        popular: true,
        description: 'Complete peace of mind. Pandit brings all 45+ organic samagri items, fresh flowers, and holy havan wood.',
        features: [
          '1 Senior Vedic Pandit',
          'All 45+ premium organic samagri items included',
          'Fresh marigold garlands & puja flowers',
          'Brass Havan Kund & pure A2 Desi Ghee',
          'Navagraha & Vastu Yantra consecration',
          'Prasad preparation guidance'
        ]
      },
      {
        id: 'complete',
        name: 'Complete Grand Arrangement',
        priceAED: 1299,
        description: 'Lavish VIP arrangement with 2 Acharyas, floral altar decor, copper kalash gift, and catered satvik prasad box.',
        features: [
          '2 Vedic Acharyas for simultaneous chanting',
          'Complete premium samagri & exotic flowers',
          'Custom floral altar (Mandap) arrangement',
          'Consecrated brass Vastu Purusha idol gift',
          '50 portions of Satvik sweet prasad boxes',
          'Digital high-definition photo/video keepsake'
        ]
      }
    ],
    faqs: [
      {
        question: 'How do we choose the most auspicious date for Griha Pravesh in Dubai?',
        answer: 'Our senior Vedic astrologers calculate the shubh muhurat based on your birth star (Janma Nakshatra), sunrise times in Dubai, and the Lunar calendar. You can also view our live Panchang.'
      },
      {
        question: 'Do we need to arrange anything from our side?',
        answer: 'If you choose the "Pandit with Puja Samagri" package, you only need to provide basic kitchen items like milk, sugar, a gas stove or burner for boiling milk, and fruits.'
      },
      {
        question: 'Can this be performed in Dubai apartments with smoke alarms?',
        answer: 'Yes! Our pandits specialize in residential UAE apartment pujas using low-smoke organic samagri and compact havan kunds that comply with building safety guidelines.'
      }
    ]
  },
  {
    id: 'satyanarayan-puja',
    title: 'Satyanarayan Puja',
    subtitle: 'Sacred Katha and Havan for Gratitude, Fulfillment & Prosperity',
    category: 'popular',
    categoryLabel: 'Popular Pujas',
    priceAED: 399,
    duration: '2 - 2.5 Hours',
    image: 'https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&w=1000&q=80',
    rating: 4.98,
    reviewsCount: 512,
    deity: 'Lord Vishnu (Satyanarayan Swamy)',
    tag: 'Bestseller',
    description: 'Shri Satyanarayan Puja is one of the most revered Hindu rituals performed to express gratitude to Lord Vishnu. Reciting the sacred 5 chapters of Satyanarayan Katha brings domestic bliss, professional victory, and spiritual upliftment.',
    significance: 'Originating in the Skanda Purana, this puja reminds devotees that truth (Satya) is the highest virtue. It is commonly performed on Purnima (full moon), milestones, promotions, and family celebrations.',
    reasons: [
      'Monthly observance on Purnima (Full Moon Day)',
      'Celebrating personal milestones, promotions, and new ventures',
      'Recovery from illness and removal of family tribulations',
      'Fulfilling deep spiritual sankalpas and gratitude offerings'
    ],
    process: [
      { step: 1, title: 'Ganapati & Navagraha Puja', desc: 'Initial prayers to remove impediments and appease planetary forces.' },
      { step: 2, title: 'Lord Satyanarayan Avahana', desc: 'Consecration of the deity on a bed of rice inside an altar.' },
      { step: 3, title: 'Panchamrit Abhishek & Alankaram', desc: 'Offering 5 sacred liquids, tulsi leaves, and yellow sandalwood.' },
      { step: 4, title: 'Five Chapters Katha Recital', desc: 'Elucidation of the divine stories with spiritual interpretations.' },
      { step: 5, title: 'Havan & Panchamrit Maha Prasad', desc: 'Havan followed by the distribution of roasted wheat flour Sheera (Panjiri).' }
    ],
    samagriList: [
      'Tulsi Dal (Basil leaves), Rawa / Wheat flour, Cow Ghee, Sugar',
      'Panchamrit (Milk, Yogurt, Honey, Ghee, Jaggery/Sugar)',
      'Banana stems for altar pillars, Yellow cloth, Betel leaves',
      'Supari, Janeu, Mauli thread, Saffron, Sandalwood paste'
    ],
    languages: ['Hindi', 'English', 'Sanskrit', 'Tamil', 'Telugu', 'Kannada', 'Bengali', 'Marathi', 'Gujarati'],
    formats: ['At Home', 'Online E-Puja', 'Temple / Other Venue'],
    packages: [
      {
        id: 'pandit-only',
        name: 'Pandit Only',
        priceAED: 399,
        description: 'Vedic pandit guides the family through the complete Katha and ritual recitation.',
        features: ['1 Vedic Pandit', 'Complete Katha narrative', 'Samagri list emailed beforehand', 'Aarti & Sankalp']
      },
      {
        id: 'pandit-samagri',
        name: 'Pandit with Puja Samagri',
        priceAED: 599,
        popular: true,
        description: 'All sacred ingredients, fresh flowers, banana pillars, and havan materials included.',
        features: ['1 Vedic Pandit', 'All 35+ dry & wet samagri items', 'Fresh Tulsi leaves & garlands', 'Havan materials included', 'Prasad blessing']
      },
      {
        id: 'complete',
        name: 'Complete Grand Arrangement',
        priceAED: 899,
        description: 'Full decor, prasad preparation, senior acharya, and brass deity frame included.',
        features: ['2 Pandits', 'Altar floral decoration', 'All samagri & freshly made Panchamrit prasad', 'Framed Satyanarayan yantra']
      }
    ],
    faqs: [
      {
        question: 'Which day is best for Satyanarayan Puja?',
        answer: 'While Purnima (full moon) is the most auspicious day, it can also be performed on Thursdays, Ekadashis, or any auspicious weekend.'
      },
      {
        question: 'Can this puja be conducted online via video call?',
        answer: 'Yes! We host interactive live E-Pujas where our pandit recites live from the temple sanctum while you participate with sankalp from home.'
      }
    ]
  },
  {
    id: 'rudrabhishek-puja',
    title: 'Rudrabhishek Puja',
    subtitle: 'Powerful Shiva Abhishek for Health, Inner Peace & Karmic Liberation',
    category: 'popular',
    categoryLabel: 'Popular Pujas',
    priceAED: 449,
    duration: '2 - 3 Hours',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80',
    rating: 4.97,
    reviewsCount: 289,
    deity: 'Lord Shiva (Mahadev)',
    tag: 'Spiritual Power',
    description: 'Rudrabhishek is a sacred Vedic ritual in which Shivling is bathed with 11 sacred dravyas while chanting the powerful Sri Rudram from the Yajurveda. It washes away negative karmas, grants health, and bestows supreme mental clarity.',
    significance: 'Sri Rudram is revered in Vedic tradition as one of the most potent hymns for invoking Mahadeva. The vibration of the Namakam and Chamakam stotras dissolves astrological malefic effects and calms agitated minds.',
    reasons: [
      'Overcoming long-standing physical ailments and psychological anxieties',
      'Removing Saturn (Shani) and Rahu astrological afflictions',
      'Observing Mahashivratri, Shravan Maas, or Pradosham',
      'Attaining inner stillness, spiritual growth, and protection'
    ],
    process: [
      { step: 1, title: 'Laghu Nyasa & Shiva Sankalpa', desc: 'Attuning devotee energy with consecrated Shiva mantras.' },
      { step: 2, title: 'Ekadasa Dravya Abhishek', desc: 'Bathing Shivling with Ganga water, Panchamrit, Bhasma, Sugarcane juice, and Honey.' },
      { step: 3, title: 'Sri Rudram & Chamakam Chanting', desc: 'Continuous rhythm of Vedic chants by trained scholars.' },
      { step: 4, title: 'Bilva Patra & Bhasma Alankaram', desc: 'Decorating with 108 fresh Bel leaves, lotus, and Chandan.' },
      { step: 5, title: 'Maha Mrityunjaya Havan & Aarti', desc: 'Final fire oblations for health, longevity, and moksha.' }
    ],
    samagriList: [
      'Bilva Patra (Bel leaves), Bhasma (Sacred ash), Dhatura flowers',
      'Ganga Jal, Raw Milk, Curd, Honey, Sugarcane juice, Sandalwood',
      'Camphor, Akshat, White flowers, Janeu, Attar (Spiritual perfume)'
    ],
    languages: ['Hindi', 'English', 'Sanskrit', 'Tamil', 'Telugu', 'Kannada', 'Marathi'],
    formats: ['At Home', 'Online E-Puja', 'Temple / Other Venue'],
    packages: [
      {
        id: 'pandit-only',
        name: 'Pandit Only',
        priceAED: 449,
        description: 'Vedic scholar chanting Sri Rudram Namakam and Chamakam.',
        features: ['1 Certified Vedic Pandit', 'Complete Rudram chanting', 'Abhishek direction', 'Maha Aarti']
      },
      {
        id: 'pandit-samagri',
        name: 'Pandit with Puja Samagri',
        priceAED: 699,
        popular: true,
        description: 'All 11 sacred dravyas, fresh Bilva leaves, and brass Abhishek stand included.',
        features: ['1 Senior Shastri', 'All 11 Abhishek liquids & fresh Bel leaves', 'Bhasma & Chandan', 'Maha Mrityunjaya Havan']
      },
      {
        id: 'complete',
        name: 'Complete Grand Arrangement',
        priceAED: 1099,
        description: 'Conducted by 2 Veda scholars with special Rudraksha energization.',
        features: ['2 Senior Veda Pundits', 'Complete samagri & fresh exotic flowers', 'Energized 5-Mukhi Rudraksha gift', 'Full temple setup']
      }
    ],
    faqs: [
      {
        question: 'Do we need a Shivling at home?',
        answer: 'If you do not possess a Shivling, our pandit will bring a consecrated Sphatik (crystal) or Narmadeshwar Shivling for the ritual ceremony.'
      }
    ]
  },
  {
    id: 'diwali-puja',
    title: 'Diwali Lakshmi-Ganesh Puja',
    subtitle: 'Grand Deepavali Consecration for Abundance, Wealth & Good Fortune',
    category: 'festival',
    categoryLabel: 'Festival Pujas',
    priceAED: 599,
    duration: '2 - 3 Hours',
    image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1000&q=80',
    rating: 5.0,
    reviewsCount: 680,
    deity: 'Goddess Mahalakshmi, Lord Ganesha & Lord Kuber',
    tag: 'Festive High Demand',
    description: 'The pinnacle celebration of light over darkness. On Diwali evening, invocations to Goddess Lakshmi and Lord Ganesha invite eternal auspiciousness, financial growth, business prosperity, and harmony into homes and offices.',
    significance: 'Diwali marks the welcoming of Mahalakshmi on Amavasya night. Proper shubh muhurat puja with genuine Vedic mantras opens pathways for enduring wealth (Sthir Lakshmi).',
    reasons: [
      'Consecrating business accounts, offices, and retail establishments',
      'Welcoming Goddess Lakshmi into household treasuries and lockers',
      'Lighting sacred 16 or 21 diyas according to Vedic traditions',
      'Invoking Lord Kuber for wealth retention and enterprise expansion'
    ],
    process: [
      { step: 1, title: 'Deepa Jyoti Prarambham', desc: 'Lighting master brass diya and invoking Agni Devata.' },
      { step: 2, title: 'Kuber & Bahi-Khata Pujan', desc: 'Blessing accounts books, devices, checkbooks, and financial tools.' },
      { step: 3, title: 'Shodashopachara Lakshmi Puja', desc: '16 offerings including Kamal Gatta, lotus flowers, and silver coins.' },
      { step: 4, title: 'Kanakadhara & Sri Suktam Path', desc: 'Sacred poetic hymns by Adi Shankaracharya to awaken prosperity.' },
      { step: 5, title: 'Maha Lakshmi Aarti & Deepotsav', desc: 'Grand aarti and ceremonial placement of diyas across all doorframes.' }
    ],
    samagriList: [
      'Kamal Gatta (Lotus seeds), Fresh Pink Lotus flowers, Supari',
      'Silver coins / Lakshmi idol, Kuber Yantra, Pure Ghee diyas',
      'Kheel (Puffed paddy), Batashe (Sugar drops), Dry fruits, Mithai'
    ],
    languages: ['Hindi', 'English', 'Sanskrit', 'Tamil', 'Telugu', 'Kannada', 'Bengali', 'Marathi', 'Gujarati'],
    formats: ['At Home', 'Online E-Puja', 'Temple / Other Venue'],
    packages: [
      {
        id: 'pandit-only',
        name: 'Pandit Only',
        priceAED: 599,
        description: 'Vedic pandit guides you precisely at the prime Diwali Shubh Muhurat.',
        features: ['1 Vedic Pandit at Diwali Muhurat', 'Sri Suktam & Lakshmi Ashtakam chanting', 'Kuber & Account book blessing']
      },
      {
        id: 'pandit-samagri',
        name: 'Pandit with Puja Samagri',
        priceAED: 899,
        popular: true,
        description: 'Includes fresh lotus flowers, earthen clay diyas, pure cow ghee, and full samagri.',
        features: ['1 Senior Vedic Pandit', '21 Handcrafted clay diyas & pure cow ghee', 'Lotus flowers & marigold malas', 'Full dry samagri kit']
      },
      {
        id: 'complete',
        name: 'Complete Corporate / Home Deluxe',
        priceAED: 1499,
        description: 'Ideal for luxury villas and corporate offices across Dubai, DIFC, and Business Bay.',
        features: ['2 Senior Pandits', 'Corporate Bahi-Khata consecration', 'Elaborate rangoli & floral entrance decor', 'Silver plated Lakshmi coin souvenir']
      }
    ],
    faqs: [
      {
        question: 'Can we book for specific Muhurat slots in Dubai on Diwali?',
        answer: 'Yes! We allocate time slots according to Pradosh Kaal, Vrishabha Lagna, and Nishita Kaal for Dubai.'
      }
    ]
  },
  {
    id: 'dhanteras-puja',
    title: 'Dhanteras & Kuber Puja',
    subtitle: 'Vedic Invocations to Lord Dhanvantari & Kuber on Dhantrayodashi',
    category: 'festival',
    categoryLabel: 'Festival Pujas',
    priceAED: 449,
    duration: '1.5 - 2 Hours',
    image: 'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=1000&q=80',
    rating: 4.93,
    reviewsCount: 174,
    deity: 'Lord Dhanvantari & Lord Kuber',
    tag: 'Health & Wealth',
    description: 'Performed on the thirteenth lunar day of Krishna Paksha, Dhanteras venerates Lord Dhanvantari (the celestial healer) for radiant physical health and Lord Kuber for boundless wealth.',
    significance: 'Dhanvantari emerged with the pot of Amrit during Samudra Manthan on this day. Worshipping on Dhanteras shields families from untimely health crises and blesses newly bought metals or jewelry.',
    reasons: [
      'Blessing newly purchased gold, silver, brass, or electronic goods',
      'Invoking the blessings of Lord Dhanvantari for holistic vitality',
      'Lighting the Yamadeep for protection of ancestors and loved ones'
    ],
    process: [
      { step: 1, title: 'Dhanvantari Avahana', desc: 'Invoking the god of Ayurvedic wellness with health mantras.' },
      { step: 2, title: 'Kuber Yantra Pujan', desc: 'Anointing sacred geometric plates of the treasurer of the devas.' },
      { step: 3, title: 'New Utensil / Metal Blessing', desc: 'Sanctifying gold, silver, or brass objects acquired during Dhanteras.' },
      { step: 4, title: 'Yamadeep Danam', desc: 'Consecrating special south-facing four-wick diya for safety.' }
    ],
    samagriList: ['Coriander seeds (Dhaniya), Jaggery, Kuber Yantra, Four-wick diya, Mustard oil, Cow ghee, Batashe'],
    languages: ['Hindi', 'English', 'Sanskrit', 'Gujarati', 'Marathi', 'Tamil', 'Telugu'],
    formats: ['At Home', 'Online E-Puja', 'Temple / Other Venue'],
    packages: [
      { id: 'pandit-only', name: 'Pandit Only', priceAED: 449, description: 'Complete Dhanteras ritual recital.', features: ['1 Vedic Pandit', 'Dhanvantari & Kuber puja', 'Metals sanctification'] },
      { id: 'pandit-samagri', name: 'Pandit with Puja Samagri', priceAED: 699, popular: true, description: 'All items including brass diya & Kuber yantra.', features: ['1 Pandit', 'Complete Samagri box', 'Yamadeep setup', 'Kuber Yantra'] },
      { id: 'complete', name: 'Deluxe Celebration', priceAED: 999, description: 'Includes gold/silver consecration and health havan.', features: ['2 Pandits', 'Health Havan', 'Floral altar decor'] }
    ],
    faqs: [{ question: 'What items should we keep ready for blessing?', answer: 'Keep your newly purchased gold/silver, utensils, or company ledger ready at the altar.' }]
  },
  {
    id: 'ganesh-puja',
    title: 'Ganesh Puja & Atharvashirsha Path',
    subtitle: 'Invoking the Remover of Obstacles for Unconditional Success',
    category: 'popular',
    categoryLabel: 'Popular Pujas',
    priceAED: 349,
    duration: '1.5 - 2 Hours',
    image: 'https://images.unsplash.com/photo-1567591414240-e2216bf33b5c?auto=format&fit=crop&w=1000&q=80',
    rating: 4.96,
    reviewsCount: 420,
    deity: 'Lord Ganesha (Vighnaharta)',
    tag: 'New Beginnings',
    description: 'Lord Ganesha is universally worshipped first before commencing any venture. This puja includes Ganapati Atharvashirsha chanting with Modak offerings to erase hurdles and guarantee victory in professional or personal tasks.',
    significance: 'Ganapati Atharvashirsha is a core Upanishadic text that identifies Ganesha as the supreme cosmic consciousness, the root chakra (Muladhara) governor.',
    reasons: [
      'Inauguration of new companies, storefronts, or office spaces',
      'Beginning exams, college admissions, or career transitions',
      'Removing chronic impediments and stagnation in ongoing projects'
    ],
    process: [
      { step: 1, title: 'Prana Pratishtha', desc: 'Breathing divine life force into the clay/brass Ganesha form.' },
      { step: 2, title: '21 Durva Grass Offerings', desc: 'Offering fresh 21 shoots of sacred bermuda grass with individual names.' },
      { step: 3, title: 'Atharvashirsha Avartan', desc: 'Repetition of the Vedic stotra with modak offerings.' },
      { step: 4, title: 'Maha Mangal Aarti', desc: 'Enthusiastic aarti with dhol, shankh, and modak distribution.' }
    ],
    samagriList: ['Fresh Durva grass, 21 Modaks, Red Hibiscus flowers, Sindoor, Yellow Janeu, Coconut, Betel leaves'],
    languages: ['Hindi', 'English', 'Sanskrit', 'Marathi', 'Tamil', 'Telugu', 'Kannada', 'Gujarati'],
    formats: ['At Home', 'Online E-Puja', 'Temple / Other Venue'],
    packages: [
      { id: 'pandit-only', name: 'Pandit Only', priceAED: 349, description: 'Vedic pandit recitation.', features: ['1 Vedic Pandit', 'Atharvashirsha Path', '21 Durva offering guidance'] },
      { id: 'pandit-samagri', name: 'Pandit with Puja Samagri', priceAED: 549, popular: true, description: 'Includes fresh Durva, red hibiscus, and modak prasad.', features: ['1 Pandit', 'Complete Samagri', 'Fresh Durva & Hibiscus', 'Modak box'] },
      { id: 'complete', name: 'Complete Grand Arrangement', priceAED: 849, description: 'Deluxe setup with eco-friendly Ganesha idol.', features: ['2 Pandits', 'Clay Ganesha idol included', 'Grand floral altar'] }
    ],
    faqs: [{ question: 'Is this suitable for office inaugurations in Dubai?', answer: 'Yes, our pandits frequently conduct corporate Ganesh Pujas across Dubai and UAE.' }]
  },
  {
    id: 'navagraha-shanti-puja',
    title: 'Navagraha Shanti Puja & Havan',
    subtitle: 'Appeasing the Nine Planetary Lords for Cosmic Balance & Fortune',
    category: 'dosha',
    categoryLabel: 'Dosha Nivaran',
    priceAED: 549,
    duration: '3 - 3.5 Hours',
    image: 'https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?auto=format&fit=crop&w=1000&q=80',
    rating: 4.94,
    reviewsCount: 230,
    deity: 'The Nine Planetary Deities (Surya, Chandra, Mangal, etc.)',
    tag: 'Astrological Remedy',
    description: 'A specialized Vedic ritual designed to neutralize planetary afflictions (Graha Doshas), Sade Sati, Manglik Dosha, and planetary period (Dasha) clashes through nine sacred cereals and tailored mantras.',
    significance: 'Vedic astrology teaches that our lives are governed by the nine celestial forces. Performing Navagraha Shanti aligns planetary frequencies and protects against misfortune.',
    reasons: [
      'Neutralizing Shani Sade Sati, Kantaka Shani, or Dhaiya',
      'Pacifying Rahu-Ketu or Manglik Dosha affecting relationships',
      'Restoring balance when entering an unfavorable Mahadasha'
    ],
    process: [
      { step: 1, title: 'Navagraha Mandala Drawing', desc: 'Drawing nine geometric squares with colored cereals.' },
      { step: 2, title: 'Graha Avahana & Beej Mantras', desc: 'Invoking each planetary lord with specific sacred vibrations.' },
      { step: 3, title: 'Nine Woods (Samidha) Havan', desc: 'Offering nine distinct botanical twigs into the holy fire.' },
      { step: 4, title: 'Purna Ahuti & Shanti Path', desc: 'Final closure oblation bringing tranquility to all directional gates.' }
    ],
    samagriList: ['Navadhanya (9 grains), 9 Colored cloths, 9 Samidha sticks, Pure Ghee, Navagraha Yantra, Navaratna powder'],
    languages: ['Hindi', 'English', 'Sanskrit', 'Tamil', 'Telugu', 'Kannada', 'Bengali'],
    formats: ['At Home', 'Online E-Puja', 'Temple / Other Venue'],
    packages: [
      { id: 'pandit-only', name: 'Pandit Only', priceAED: 549, description: 'Vedic priest with specialized astrological expertise.', features: ['1 Astrologer-Pandit', 'Mandala drawing guidance', 'Complete 9 Beej Mantras'] },
      { id: 'pandit-samagri', name: 'Pandit with Puja Samagri', priceAED: 849, popular: true, description: 'Includes 9 colored fabrics, 9 grains, and 9 medicinal woods.', features: ['1 Senior Shastri', 'Complete Navadhanya & 9 Samidhas', 'Navagraha Yantra', 'Havan Kund'] },
      { id: 'complete', name: 'Grand Shanti with 2 Pandits', priceAED: 1299, description: 'Comprehensive ritual with personalized Kundli review.', features: ['2 Specialized Acharyas', 'Detailed birth chart review', 'All samagri included'] }
    ],
    faqs: [{ question: 'Can our birth charts be examined before the puja?', answer: 'Yes! Our astrologer-pandits cross-reference your birth details to emphasize relevant graha mantras.' }]
  },
  {
    id: 'vastu-shanti-puja',
    title: 'Vastu Shanti Puja',
    subtitle: 'Harmonizing Living & Working Spaces with Cosmic Earth Energies',
    category: 'griha',
    categoryLabel: 'Griha Shanti',
    priceAED: 529,
    duration: '2.5 - 3 Hours',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    rating: 4.92,
    reviewsCount: 198,
    deity: 'Vastu Purusha & Ashta Dikpalas',
    tag: 'Space Cleansing',
    description: 'Vastu Shanti rectifies energetic discrepancies in properties where structural modifications cannot be made. It placates the 45 deities residing in the Vastu Mandala and shields the occupants from directional faults.',
    significance: 'Vastu Purusha is the cosmic guardian of structures. Honoring his grid ensures natural airflow, psychological comfort, wealth preservation, and healthy relationships.',
    reasons: [
      'Remedying structural flaws in leased villas and apartments in Dubai',
      'Pre-occupancy purification of commercial premises, clinics, or warehouses',
      'Removing persistent disputes or chronic sleeplessness in home occupants'
    ],
    process: [
      { step: 1, title: 'Digbandhana & Bhumi Shodhana', desc: 'Sealing the 8 compass cardinal directions.' },
      { step: 2, title: 'Vastu Purusha Mandala Pujan', desc: 'Offering prayers to the 45 energy zones.' },
      { step: 3, title: 'Vedic Vastu Havan', desc: 'Purifying fire offering with medicinal herbs.' },
      { step: 4, title: 'Copper Pyramid / Yantra Installation', desc: 'Fixing consecrated yantra at energetic focal points.' }
    ],
    samagriList: ['Vastu Yantra, Navaratna, Copper wire/nail, Ganga Jal, Panchagavya, White mustard seeds, Sandalwood'],
    languages: ['Hindi', 'English', 'Sanskrit', 'Telugu', 'Tamil', 'Kannada', 'Gujarati'],
    formats: ['At Home', 'Online E-Puja', 'Temple / Other Venue'],
    packages: [
      { id: 'pandit-only', name: 'Pandit Only', priceAED: 529, description: 'Vedic ritual expert for space purification.', features: ['1 Vedic Pandit', 'Directional purification', 'Sankalp for family'] },
      { id: 'pandit-samagri', name: 'Pandit with Puja Samagri', priceAED: 799, popular: true, description: 'Includes consecrated Vastu Yantra and medicinal havan herbs.', features: ['1 Senior Shastri', 'Full Samagri & Vastu Yantra', 'Directional markers', 'Low-smoke havan'] },
      { id: 'complete', name: 'Complete Vastu Remediation', priceAED: 1199, description: 'Includes on-site Vastu compass analysis and remedial energetic kit.', features: ['2 Pandits', 'Vastu compass analysis', 'Brass energy pyramids', 'Grand Shanti havan'] }
    ],
    faqs: [{ question: 'Does this require breaking walls or reconstruction?', answer: 'Not at all. Vedic Vastu Shanti uses mantra, yantra, and havan energies without any physical alterations.' }]
  },
  {
    id: 'marriage-puja',
    title: 'Vivah Sanskar (Vedic Marriage Ceremony)',
    subtitle: 'Sacred Seven Steps (Saptapadi) & Vedic Nuptial Consecration',
    category: 'sanskar',
    categoryLabel: 'Sanskar Ceremonies',
    priceAED: 999,
    duration: '3.5 - 5 Hours',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=80',
    rating: 4.99,
    reviewsCount: 165,
    deity: 'Lord Shiva & Parvati, Lord Vishnu & Lakshmi',
    tag: 'Sacred Union',
    description: 'An authentic Vedic wedding ceremony conducting Kanyadaan, Panigrahana, Saptapadi (seven circumambulations), and Mangalsutra Dharan, uniting two souls and families under the divine presence of Agni Devata.',
    significance: 'Vivah is the most important of the 16 Vedic Sanskars, symbolizing dharma, artha, kama, and moksha shared in eternal spiritual partnership.',
    reasons: [
      'Destination Hindu weddings in Dubai, Abu Dhabi, and UAE luxury resorts',
      'Traditional Mandap ceremonies with multi-lingual Vedic pandits',
      'Court wedding blessings and intimate spiritual ceremonies'
    ],
    process: [
      { step: 1, title: 'Varagaman & Madhuparka', desc: 'Welcoming the groom with holy water and honey mixture.' },
      { step: 2, title: 'Kanyadaan & Hasta Melap', desc: 'Sacred handing of bride’s hand into groom’s hand with chanting.' },
      { step: 3, title: 'Laja Homa & Agni Pradakshina', desc: 'Puffed rice offerings into the wedding sacred fire.' },
      { step: 4, title: 'Saptapadi (Seven Vows)', desc: 'Seven sacred steps taken together binding love, loyalty, and sustenance.' },
      { step: 5, title: 'Mangalsutra & Sindoor Daan', desc: 'Sacred matrimonial necklace and vermillion anointment.' }
    ],
    samagriList: ['Sacred wedding fire samagri, Puffed rice (Laja), Yellow thread, Turmeric roots, Coconut, Silk stoles'],
    languages: ['Hindi', 'English', 'Sanskrit', 'Gujarati', 'Punjabi', 'Tamil', 'Telugu', 'Bengali'],
    formats: ['At Home', 'Temple / Other Venue'],
    packages: [
      { id: 'pandit-only', name: 'Senior Acharya (English/Hindi)', priceAED: 999, description: 'Eloquent wedding priest explaining every ritual to guests.', features: ['1 Senior Wedding Priest', 'Multi-lingual explanation', 'Full ritual guidance', 'Marriage certificate blessing'] },
      { id: 'pandit-samagri', name: 'Acharya with Complete Samagri', priceAED: 1499, popular: true, description: 'All ceremonial items, sacred havan materials, and prasad.', features: ['1 Chief Acharya + 1 Assistant Pandit', 'All wedding samagri & fresh garlands', 'Brass havan kund', 'Custom souvenir vows card'] },
      { id: 'complete', name: 'Grand Destination Wedding Package', priceAED: 2499, description: 'Complete turnkey ritual package with 2 Chief Acharyas and live Shehnai music coordination.', features: ['2 Chief Acharyas', 'Pre-wedding Ganesh & Gauri puja', 'Complete royal samagri setup', 'Personalized keepsake framed certificate'] }
    ],
    faqs: [{ question: 'Do the pandits explain the vows in English for global guests?', answer: 'Yes, our priests fluently narrate the deep philosophical significance of each vow in fluent English and Hindi.' }]
  },
  {
    id: 'lakshmi-puja',
    title: 'Mahalakshmi Puja & Sri Suktam',
    subtitle: 'Consecration for Steady Prosperity, Cash Flow & Family Abundance',
    category: 'popular',
    categoryLabel: 'Popular Pujas',
    priceAED: 399,
    duration: '2 Hours',
    image: 'https://images.unsplash.com/photo-1605647540924-852290f6b0d5?auto=format&fit=crop&w=1000&q=80',
    rating: 4.95,
    reviewsCount: 310,
    deity: 'Goddess Mahalakshmi',
    tag: 'Wealth & Grace',
    description: 'Dedicated invocations to Ashta Lakshmi (the eight facets of wealth: food, courage, knowledge, progeny, enterprise, gold, spiritual joy, and victory) with honey abhishek and lotus blossoms.',
    significance: 'Worshipping Mahalakshmi with sincerity eliminates financial blockages and brings gentle peace into household affairs.',
    reasons: ['Monthly Friday pujas, Varalakshmi Vratam, or enterprise blessings', 'Improving business turnover and eliminating debts', 'Celebrating prosperity milestones'],
    process: [
      { step: 1, title: 'Ashta Lakshmi Avahana', desc: 'Invoking the 8 forms of wealth inside consecrated Kalash.' },
      { step: 2, title: 'Kumkumarchana', desc: 'Chanting 1000 or 108 names with fresh kumkum on silver idol.' },
      { step: 3, title: 'Sri Suktam Havan', desc: '16 holy ahutis with bilva fruits, lotus seeds, and cow ghee.' }
    ],
    samagriList: ['Red flowers, Kumkum, Lotus seeds, Honey, Silver coin, Cardamom garland, Puffed paddy'],
    languages: ['Hindi', 'English', 'Sanskrit', 'Tamil', 'Telugu', 'Kannada', 'Bengali'],
    formats: ['At Home', 'Online E-Puja', 'Temple / Other Venue'],
    packages: [
      { id: 'pandit-only', name: 'Pandit Only', priceAED: 399, description: 'Complete Sri Suktam path.', features: ['1 Vedic Priest', 'Sri Suktam chant', 'Kumkumarchana'] },
      { id: 'pandit-samagri', name: 'Pandit with Puja Samagri', priceAED: 649, popular: true, description: 'Includes fresh lotus flowers and Kumkumarchana kit.', features: ['1 Senior Shastri', 'Fresh lotus flowers & Kumkum kit', 'Dry fruits & honey', 'Havan samagri'] },
      { id: 'complete', name: 'Grand Lakshmi Arrangement', priceAED: 999, description: 'With silver coin gift and 2 Pandits.', features: ['2 Pandits', 'Silver Lakshmi coin included', 'Exotic flower altar', 'Ashta Lakshmi yantra'] }
    ],
    faqs: [{ question: 'Can this be performed on Fridays at our office in Dubai?', answer: 'Absolutely, Friday mornings or evenings are popular for retail and commercial premises in Dubai.' }]
  },
  {
    id: 'ganesh-havan',
    title: 'Maha Ganapati Havan',
    subtitle: 'Sacred Fire Sacrifice with 108 Ahutis for Universal Victory',
    category: 'popular',
    categoryLabel: 'Popular Pujas',
    priceAED: 449,
    duration: '2 - 2.5 Hours',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1000&q=80',
    rating: 4.96,
    reviewsCount: 245,
    deity: 'Lord Maha Ganapati',
    tag: 'Fire Consecration',
    description: 'A transformative fire ritual where 108 modaks, coconut pieces, sugarcane, and herbal herbs are offered into the consecrated sacrificial flame to dissolve immovable obstacles.',
    significance: 'Ganapati Havan is considered the foundational Vedic cure for stubborn stagnation in commercial deals, pending litigation, or stalled life transitions.',
    reasons: ['Overcoming prolonged project delays or legal hurdles', 'Beginning new fiscal years and commercial enterprises', 'Annual purification of residence and family vitality'],
    process: [
      { step: 1, title: 'Agni Mukham', desc: 'Lighting holy Agni with sacred camphor and twigs.' },
      { step: 2, title: 'Ashta Dravya Samarpana', desc: 'Offering eight holy ingredients: Modak, sugarcane, banana, honey, puffed rice, jaggery, coconut, and sesame.' },
      { step: 3, title: 'Maha Purna Ahuti', desc: 'Final silk-wrapped coconut offering with celebratory chanting.' }
    ],
    samagriList: ['Dry coconut halves, Sugarcane pieces, Puffed paddy, Ghee, Ashta Dravya mix, Sacred wood'],
    languages: ['Hindi', 'English', 'Sanskrit', 'Tamil', 'Telugu', 'Kannada', 'Marathi'],
    formats: ['At Home', 'Online E-Puja', 'Temple / Other Venue'],
    packages: [
      { id: 'pandit-only', name: 'Pandit Only', priceAED: 449, description: 'Expert havan acharya.', features: ['1 Vedic Priest', 'Havan fire guidance', '108 ahutis'] },
      { id: 'pandit-samagri', name: 'Pandit with Puja Samagri', priceAED: 699, popular: true, description: 'Includes Havan Kund and Ashta Dravya ingredients.', features: ['1 Senior Shastri', 'Brass Havan Kund', 'Ashta Dravya mix', 'Smoke-less dry wood'] },
      { id: 'complete', name: 'Grand Ganapati Yagya', priceAED: 1099, description: 'Conducted by 2 Acharyas with 1008 Beej Mantra ahutis.', features: ['2 Senior Acharyas', '1008 Beej Mantra ahutis', 'Grand modak prasad', 'Sanctified Ganesha Yantra'] }
    ],
    faqs: [{ question: 'How is the smoke managed inside UAE residences?', answer: 'We use premium odorless camphor, dried cow dung cakes, and pure ghee producing pleasant Vedic aroma without excessive smoke.' }]
  },
  {
    id: 'pitra-dosh-puja',
    title: 'Pitra Dosh Nivaran & Tarpan',
    subtitle: 'Ancestral Rites for Forgiveness, Peace of Departed Souls & Lineage Blessings',
    category: 'dosha',
    categoryLabel: 'Dosha Nivaran',
    priceAED: 599,
    duration: '2.5 - 3 Hours',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1000&q=80',
    rating: 4.91,
    reviewsCount: 184,
    deity: 'Lord Vishnu, Lord Yama & Ancestors (Pitras)',
    tag: 'Ancestral Peace',
    description: 'Specialized Vedic rite offering Til (black sesame), Kusha grass water, and Pinda Daan to honor forefathers, dissolving ancestral debts and unblocking progeny and financial growth.',
    significance: 'Pitra Rin (ancestral debt) is recognized in Hindu scriptures as a primary cause of repetitive setbacks. Satisfied ancestors bestow uninterrupted blessings on living lineage.',
    reasons: ['Persistent family disagreements or delays in childbearing', 'Observing Shradh Paksha (Pitru Paksha) or Amavasya', 'Pacifying planetary combinations indicating Pitra Dosha in Kundli'],
    process: [
      { step: 1, title: 'Kusha Snanam & Pavitri Dharan', desc: 'Wearing sacred Kusha ring for purification.' },
      { step: 2, title: 'Tarpan Vidhi', desc: 'Offering water infused with barley and black sesame to three generations of ancestors.' },
      { step: 3, title: 'Pinda Daan', desc: 'Crafting and offering rice spheres to departed souls.' },
      { step: 4, title: 'Brahmana Bhojanam / Danam', desc: 'Offering food, grains, and dakshina to priests on behalf of ancestors.' }
    ],
    samagriList: ['Black sesame seeds (Kala Til), Kusha grass mat and rings, Barley (Jau), Cooked rice, Ghee, White flowers'],
    languages: ['Hindi', 'English', 'Sanskrit', 'Bengali', 'Tamil', 'Telugu', 'Gujarati'],
    formats: ['At Home', 'Online E-Puja', 'Temple / Other Venue'],
    packages: [
      { id: 'pandit-only', name: 'Pandit Only', priceAED: 599, description: 'Priest certified in Garuda Purana rites.', features: ['1 Specialized Priest', 'Tarpan and Pinda Daan', 'Lineage recitation'] },
      { id: 'pandit-samagri', name: 'Pandit with Puja Samagri', priceAED: 849, popular: true, description: 'All items including Kusha rings, black sesame, and pinda materials.', features: ['1 Priest', 'Complete Tarpan kit', 'Kusha grass items', 'Cow feeding donation arranged'] },
      { id: 'complete', name: 'Complete Shradh & Danam Arrangement', priceAED: 1199, description: 'Includes Gau-sewa (cow feeding) and food donation arranged in sacred tirthas.', features: ['2 Priests', 'Full Pinda Daan', 'Tirtha Kshetra sankalp', 'Gau Danam sponsorship'] }
    ],
    faqs: [{ question: 'Can this be performed if we only know names of some ancestors?', answer: 'Yes! Vedic mantras incorporate universal prayers for known and unknown ancestors up to seven generations.' }]
  },
  {
    id: 'durga-puja',
    title: 'Maha Durga Puja & Chandi Path',
    subtitle: 'Invoking the Divine Mother for Protection, Courage & Triumph over Evil',
    category: 'festival',
    categoryLabel: 'Festival Pujas',
    priceAED: 549,
    duration: '2.5 - 3.5 Hours',
    image: 'https://images.unsplash.com/photo-1570784332176-fdd73da66f03?auto=format&fit=crop&w=1000&q=80',
    rating: 4.98,
    reviewsCount: 375,
    deity: 'Goddess Durga (Mahishasuramardini)',
    tag: 'Divine Protection',
    description: 'Ceremonial invocation of Maa Durga with Durga Saptashati recital, Kumkumarchana, and red hibiscus flowers to overcome hidden adversaries, fear, and life battles.',
    significance: 'Maa Durga embodies the combined shakti of all devas. Chandi Path is the supreme armor against all negative psychic or environmental attacks.',
    reasons: ['Observing Sharad or Chaitra Navratri milestones', 'Protection against malicious jealousy or hidden enemies', 'Courage and mental resilience in times of adversity'],
    process: [
      { step: 1, title: 'Devi Avahana & Shodashopachara', desc: 'Welcoming the goddess with conch and bell recitals.' },
      { step: 2, title: 'Durga Saptashati Path', desc: 'Reading the 13 sacred chapters of Markandeya Purana.' },
      { step: 3, title: 'Kumkum & Lalita Sahasranama Archana', desc: 'Consecrating with vermillion and 1000 holy names.' },
      { step: 4, title: 'Chandi Havan & Maha Aarti', desc: 'Fire offering with red cloth, cloves, camphor, and sweets.' }
    ],
    samagriList: ['Red chunri, Fresh red hibiscus, Shringar items (bangles, bindi, alta), Cloves, Cardamom, Ghee, Camphor'],
    languages: ['Hindi', 'English', 'Sanskrit', 'Bengali', 'Tamil', 'Telugu', 'Gujarati'],
    formats: ['At Home', 'Online E-Puja', 'Temple / Other Venue'],
    packages: [
      { id: 'pandit-only', name: 'Pandit Only', priceAED: 549, description: 'Vedic priest chanting Durga Saptashati.', features: ['1 Vedic Priest', 'Saptashati Path recital', 'Devi Aarti'] },
      { id: 'pandit-samagri', name: 'Pandit with Puja Samagri', priceAED: 849, popular: true, description: 'All shringar items, red chunri, and havan materials.', features: ['1 Senior Shastri', 'Full Shringar kit for Maa Durga', 'Fresh red flowers', 'Havan materials'] },
      { id: 'complete', name: 'Grand Chandi Homa Deluxe', priceAED: 1399, description: 'Elaborate yagya performed by 2 priests with full Devi decor.', features: ['2 Vedic Priests', 'Elaborate Chandi Havan', 'Complete Shringar & Altar decor', 'Durga Yantra'] }
    ],
    faqs: [{ question: 'Can this be arranged for Bengali Durga Puja societies in UAE?', answer: 'Yes, we provide specialized Bengali Purohits well-versed in Purohit Darpan for community and family pujas.' }]
  },
  {
    id: 'navratri-puja',
    title: 'Navratri Kalash Sthapana & 9-Day Akhand Deep',
    subtitle: 'Nine Nights of Sacred Consecration to the Nine Divine Mother Forms',
    category: 'festival',
    categoryLabel: 'Festival Pujas',
    priceAED: 499,
    duration: '2 Hours (Day 1) + Ongoing guidance',
    image: 'https://images.unsplash.com/photo-1538370965046-79c0d6907d47?auto=format&fit=crop&w=1000&q=80',
    rating: 4.97,
    reviewsCount: 310,
    deity: 'The Navadurgas (Shailaputri to Siddhidatri)',
    tag: 'Nine Days of Grace',
    description: 'Starting with Ghatasthapana (Kalash establishment) and sowing of barley seeds (Jowar), this ritual opens the holy nine days of transformation, culminative Kanya Pujan, and Vijayadashami blessings.',
    significance: 'Navratri signifies the victory of sattva over tamas. Sowing barley mirrors fertile growth, while Akhand Jyoti ensures continuous divine light.',
    reasons: ['Observing Chaitra or Sharad Navratri at home', 'Ghatasthapana on Pratipada and Kanya Pujan on Ashtami/Navami', 'Family spiritual rejuvenation and fasting sanctification'],
    process: [
      { step: 1, title: 'Ghatasthapana & Jowar Bopan', desc: 'Consecrating earthen pot and sowing barley in sacred soil.' },
      { step: 2, title: 'Akhand Jyoti Prajwalan', desc: 'Lighting continuous flame with pure cow ghee.' },
      { step: 3, title: 'Navarna Mantra Japa', desc: 'Chanting the powerful 9-syllable Chamunda mantra.' },
      { step: 4, title: 'Kanya Pujan Guidance', desc: 'Rituals for worshipping 9 young girls on Ashtami/Navami.' }
    ],
    samagriList: ['Earthen flat dish, Sacred soil, Barley seeds, Earthen pot (Kalash), Akhand diya, Red cloth, Raw coconut'],
    languages: ['Hindi', 'English', 'Sanskrit', 'Gujarati', 'Marathi', 'Tamil', 'Bengali'],
    formats: ['At Home', 'Online E-Puja', 'Temple / Other Venue'],
    packages: [
      { id: 'pandit-only', name: 'Ghatasthapana (Day 1)', priceAED: 499, description: 'Pandit conducts full Day 1 Kalash Sthapana.', features: ['1 Vedic Priest', 'Ghatasthapana & Akhand Diya setup', 'Navarna Mantra initiation'] },
      { id: 'pandit-samagri', name: 'Complete Navratri Opening Kit', priceAED: 799, popular: true, description: 'Includes sacred soil, barley seeds, Kalash, and Akhand brass diya.', features: ['1 Priest', 'Earthen pot & pure soil', 'Barley seeds & brass diya', '9-day prayer guide'] },
      { id: 'complete', name: 'Full 9-Day Festival Support', priceAED: 1599, description: 'Day 1 Ghatasthapana + Ashtami Havan + Kanya Pujan closure.', features: ['Pandit visits on Day 1 & Day 8/9', 'Ashtami Maha Havan', 'Kanya gifts & prasad kit'] }
    ],
    faqs: [{ question: 'How do we maintain the Akhand Jyoti during the week?', answer: 'Our pandits instruct you with practical, safe tips on wick adjustment and ghee refills so the flame burns safely.' }]
  },
  {
    id: 'mundan-sanskar',
    title: 'Mundan Sanskar (Chudakarana)',
    subtitle: 'First Haircut Vedic Ceremony for Child’s Longevity & Intellectual Awakening',
    category: 'sanskar',
    categoryLabel: 'Sanskar Ceremonies',
    priceAED: 449,
    duration: '2 Hours',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80',
    rating: 4.93,
    reviewsCount: 156,
    deity: 'Lord Ganesha, Kuldevata & Lord Surya',
    tag: 'Child Sanskar',
    description: 'Chudakarana or Mundan is the eighth of the 16 Hindu sanskars. Shaving the child’s birth hair cleanses past-life karmic impressions, activates the sahasrara chakra, and promotes healthy future hair and brain development.',
    significance: 'Vedic biology holds that shaving fetal hair frees the skull for radiant solar energy absorption and sharpens the intellect.',
    reasons: ['Conducted in child’s 1st, 3rd, or 5th year of age', 'Fulfilling vows to Kuldevata or family deity', 'Blessing child with vibrant health, memory, and longevity'],
    process: [
      { step: 1, title: 'Ganesh & Matrika Pujan', desc: 'Invoking Ganesha and mother deities to guard the infant.' },
      { step: 2, title: 'Kusha Grass Hair Blessing', desc: 'Priest touches hair with holy Kusha grass and chants mantras.' },
      { step: 3, title: 'First Haircut (Kshaur)', desc: 'Barber shaves hair while Vedic shlokas are recited.' },
      { step: 4, title: 'Sandalwood (Chandan) Lepam', desc: 'Applying cooling turmeric and chandan paste to head.' }
    ],
    samagriList: ['Turmeric powder, Sandalwood paste, Curd, Ganga Jal, White cloth for hair collection, Sweets, Janeu'],
    languages: ['Hindi', 'English', 'Sanskrit', 'Tamil', 'Telugu', 'Kannada', 'Bengali', 'Gujarati'],
    formats: ['At Home', 'Temple / Other Venue'],
    packages: [
      { id: 'pandit-only', name: 'Pandit Only', priceAED: 449, description: 'Vedic priest conducting full ritual and sankalp.', features: ['1 Vedic Priest', 'Matrika Pujan', 'Shanti Havan for infant'] },
      { id: 'pandit-samagri', name: 'Pandit with Puja Samagri', priceAED: 699, popular: true, description: 'Includes all organic cooling herbs, white silk cloth, and havan items.', features: ['1 Senior Shastri', 'Cooling Chandan & Haldi lepam', 'White silk collection pouch', 'Full havan samagri'] },
      { id: 'complete', name: 'Deluxe Sanskar Package', priceAED: 999, description: 'Includes experienced gentle pediatric barber coordination.', features: ['1 Senior Pandit', 'Pediatric-friendly sanitized barber', 'Complete samagri & baby blessing keepsake'] }
    ],
    faqs: [{ question: 'Do you provide a sanitized barber for the baby?', answer: 'Yes, in our Deluxe package we coordinate with a specialized, experienced professional for infants.' }]
  },
  {
    id: 'naming-ceremony',
    title: 'Namkaran Sanskar (Naming Ceremony)',
    subtitle: 'Vedic Naming Ritual Based on Janma Nakshatra & Astrological Syllables',
    category: 'sanskar',
    categoryLabel: 'Sanskar Ceremonies',
    priceAED: 399,
    duration: '1.5 - 2 Hours',
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1000&q=80',
    rating: 4.95,
    reviewsCount: 182,
    deity: 'Lord Ganesha, Surya Devata & Nakshatra Lords',
    tag: 'Newborn Welcome',
    description: 'The fifth Vedic sanskar performed on the 11th or 12th day after birth (or convenient weekend). The child is given their identity based on the planetary syllable of their Janma Nakshatra, whispered into their right ear by father and family.',
    significance: 'A person’s name carries sound vibrations (nada) that resonate with cosmic forces throughout their life. Proper Namkaran anchors their astrological destiny.',
    reasons: ['Selecting astrologically aligned first syllable for the newborn', 'Welcoming baby into community and family tree', 'Purification of home after birth quarantine period (Sutak)'],
    process: [
      { step: 1, title: 'Janma Nakshatra Calculation', desc: 'Priest calculates the lucky starting letter from birth time.' },
      { step: 2, title: 'Panchagavya Shuddhi', desc: 'Purification of parents and infant with sacred water.' },
      { step: 3, title: 'Karna Whispering (Karna Jaap)', desc: 'Father gently whispers the secret and social name into baby’s right ear using betel leaf.' },
      { step: 4, title: 'Cradle Ceremony (Thottil / Jhula)', desc: 'Placing baby into decorated cradle with lullabies and aarti.' }
    ],
    samagriList: ['Betel leaf, Raw rice on bronze thali, Honey, Gold/silver ring, New clothes for baby, Flowers, Panchamrit'],
    languages: ['Hindi', 'English', 'Sanskrit', 'Tamil', 'Telugu', 'Kannada', 'Bengali', 'Marathi', 'Gujarati'],
    formats: ['At Home', 'Online E-Puja', 'Temple / Other Venue'],
    packages: [
      { id: 'pandit-only', name: 'Pandit Only', priceAED: 399, description: 'Vedic priest with Nakshatra name analysis.', features: ['1 Vedic Priest', 'Birth chart nakshatra syllables calculation', 'Karna jaap guidance'] },
      { id: 'pandit-samagri', name: 'Pandit with Puja Samagri', priceAED: 629, popular: true, description: 'All items including bronze thali for rice writing and holy honey.', features: ['1 Priest', 'Complete Samagri box', 'Bronze plate for baby name writing', 'Panchamrit items'] },
      { id: 'complete', name: 'Grand Cradle & Name Celebration', priceAED: 949, description: 'Includes cradle floral decor guidance and printed birth chart horoscope.', features: ['2 Pandits', 'Personalized Kundli chart booklet', 'Complete samagri & baby silver amulet'] }
    ],
    faqs: [{ question: 'What if we already selected a name we love?', answer: 'Our pandits can derive an astrological secret name (Gupt Naam) matching the nakshatra while sanctifying your chosen social name.' }]
  }
];

export const PUJA_CATEGORIES = [
  { id: 'all', label: 'All Pujas' },
  { id: 'popular', label: 'Popular Pujas' },
  { id: 'festival', label: 'Festival Pujas' },
  { id: 'dosha', label: 'Dosha Nivaran' },
  { id: 'griha', label: 'Griha Shanti' },
  { id: 'sanskar', label: 'Sanskar Ceremonies' },
  { id: 'mukti', label: 'Mukti Karmas' }
];
