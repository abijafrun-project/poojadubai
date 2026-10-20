export type PujaCategory = 
  | 'popular' 
  | 'festival' 
  | 'dosha' 
  | 'griha' 
  | 'sanskar' 
  | 'mukti';

export interface PujaPackage {
  id: 'pandit-only' | 'pandit-samagri' | 'complete';
  name: string;
  priceAED: number;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface Puja {
  id: string;
  title: string;
  subtitle: string;
  category: PujaCategory;
  categoryLabel: string;
  priceAED: number;
  duration: string;
  image: string;
  rating: number;
  reviewsCount: number;
  description: string;
  significance: string;
  reasons: string[];
  process: { step: number; title: string; desc: string }[];
  samagriList: string[];
  languages: string[];
  formats: ('At Home' | 'Online E-Puja' | 'Temple / Other Venue')[];
  packages: PujaPackage[];
  faqs: { question: string; answer: string }[];
  deity: string;
  tag?: string;
}

export interface Pandit {
  id: string;
  name: string;
  title: string;
  image: string;
  experienceYears: number;
  rating: number;
  reviewCount: number;
  languages: string[];
  specializations: string[];
  locations: string[];
  bio: string;
  verified: boolean;
  education: string;
  vedicTradition: string;
  totalPujasCompleted: number;
}

export interface Product {
  id: string;
  name: string;
  category: 'Puja Thali Sets' | 'Incense and Diyas' | 'Havan Samagri' | 'Kalash and Religious Items' | 'Festival Essentials' | 'Complete Puja Kits';
  priceAED: number;
  rating: number;
  reviewsCount: number;
  image: string;
  description: string;
  contents: string[];
  inStock: boolean;
  featured?: boolean;
  origin: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Booking {
  id: string;
  bookingRef: string;
  pujaId: string;
  pujaTitle: string;
  pujaImage: string;
  serviceType: 'At Home' | 'Online E-Puja' | 'Other Venue';
  date: string;
  timeSlot: string;
  city: string;
  address: string;
  country: string;
  language: string;
  packageId: string;
  packageName: string;
  priceAED: number;
  currency: string;
  customerName: string;
  phone: string;
  email: string;
  specialInstructions?: string;
  status: 'Confirmed' | 'Pandit Assigned' | 'Completed' | 'Pending Review';
  createdAt: string;
  isOnlineStream?: boolean;
}

export interface AstrologyService {
  id: string;
  title: string;
  subtitle: string;
  priceAED: number;
  duration: string;
  icon: string;
  description: string;
  benefits: string[];
  deliverables: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  readTime: string;
  author: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
  tags: string[];
}

export interface PanchangInfo {
  date: string;
  formattedDate: string;
  city: string;
  country: string;
  tithi: string;
  nakshatra: string;
  yoga: string;
  karana: string;
  sunrise: string;
  sunset: string;
  rahuKaal: string;
  abhijitMuhurat: string;
  hinduMonth: string;
  season: string;
  paksha: string;
  sunSign: string;
  moonSign: string;
}

export interface UserSession {
  id: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  country: string;
  avatar?: string;
  isDemo: boolean;
}

export interface CurrencyConfig {
  code: string;
  symbol: string;
  rateAgainstAED: number; // For demo display conversion
  label: string;
}
