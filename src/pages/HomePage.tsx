import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HeroSection } from '../components/home/HeroSection';
import { PanchangWidget } from '../components/home/PanchangWidget';
import { HowItWorks } from '../components/home/HowItWorks';
import { TestimonialCarousel } from '../components/home/TestimonialCarousel';
import { PujaCard } from '../components/home/PujaCard';
import { PUJAS_DATA, PUJA_CATEGORIES } from '../data/pujasData';
import { PANDITS_DATA } from '../data/panditsData';
import { SHOP_PRODUCTS } from '../data/shopData';
import { BLOG_POSTS } from '../data/blogData';
import { useApp } from '../context/AppContext';
import { 
  Sparkles, 
  ArrowRight, 
  Globe, 
  ShoppingBag, 
  BookOpen, 
  HelpCircle, 
  Check, 
  MapPin, 
  ShieldCheck,
  Star,
  ChevronRight,
  Flame,
  Award
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const { city, addToCart, formatPrice } = useApp();
  const navigate = useNavigate();

  // Filter pujas for the popular section
  const displayedPujas = selectedCategory === 'all'
    ? PUJAS_DATA.slice(0, 8)
    : PUJAS_DATA.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-ivory">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Today's Panchang Widget */}
      <PanchangWidget />

      {/* 3. Popular Puja Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-saffron-600 text-xs font-bold uppercase tracking-widest mb-1.5">
              <Flame className="w-4 h-4 text-maroon-800" />
              <span>Vedic Rituals & Ceremonies</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-900">
              Popular Hindu Puja Services
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-500 mt-1">
              Experienced pandits available for residential, office, and online E-Pujas in {city}.
            </p>
          </div>

          <Link
            to="/pujas"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-maroon-800 hover:text-maroon-950 transition-colors shrink-0"
          >
            <span>Explore All 16+ Pujas</span>
            <ArrowRight className="w-4 h-4 text-saffron-600" />
          </Link>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {PUJA_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all shadow-sm ${
                selectedCategory === cat.id
                  ? 'bg-maroon-800 text-white shadow-md'
                  : 'bg-white text-charcoal-700 hover:bg-gold-50 border border-gold-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Puja Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedPujas.map(puja => (
            <PujaCard key={puja.id} puja={puja} />
          ))}
        </div>

        {/* View All Bottom Link */}
        <div className="mt-12 text-center">
          <Link
            to="/pujas"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-white hover:bg-gold-50 text-maroon-900 font-bold text-xs uppercase tracking-wider border-2 border-gold-300 shadow transition-all hover:scale-[1.02]"
          >
            <span>View All 16+ Vedic Ceremonies</span>
            <ArrowRight className="w-4 h-4 text-saffron-600" />
          </Link>
        </div>
      </section>

      {/* 4. How It Works (4 Steps) */}
      <HowItWorks />

      {/* 5. Pandit Directory Spotlight */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 text-maroon-800 text-xs font-bold uppercase tracking-widest mb-1.5">
              <Award className="w-4 h-4 text-saffron-500" />
              <span>Verified Vedic Scholars</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-900">
              Meet Our Senior Pandits in UAE
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-500 mt-1">
              Thoroughly verified priests hailing from holy Varanasi, Kanchipuram, and Gokarna traditions.
            </p>
          </div>

          <Link
            to="/pandits"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-maroon-800 hover:text-maroon-950 transition-colors shrink-0"
          >
            <span>View All Pandit Profiles</span>
            <ArrowRight className="w-4 h-4 text-saffron-600" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PANDITS_DATA.slice(0, 3).map(pandit => (
            <div
              key={pandit.id}
              className="bg-white rounded-3xl p-6 border border-gold-200 shadow-sm hover:shadow-spiritual-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={pandit.image}
                    alt={pandit.name}
                    className="w-16 h-16 rounded-2xl object-cover border-2 border-gold-400 shadow-sm shrink-0"
                  />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h3 className="font-serif font-bold text-base text-charcoal-900 group-hover:text-maroon-800 transition-colors">
                        {pandit.name}
                      </h3>
                      <span title="Verified Demo Priest">
                        <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                      </span>
                    </div>
                    <p className="text-xs text-saffron-700 font-medium">{pandit.title}</p>
                    <div className="flex items-center gap-1 text-xs text-charcoal-600 mt-1">
                      <Star className="w-3.5 h-3.5 fill-saffron-400 text-saffron-400" />
                      <span className="font-bold">{pandit.rating}</span>
                      <span className="text-charcoal-400 text-[11px]">({pandit.reviewCount} reviews)</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-charcoal-600 line-clamp-3 leading-relaxed mb-4">
                  {pandit.bio}
                </p>

                {/* Badges */}
                <div className="space-y-2 text-xs border-t border-charcoal-100 pt-3">
                  <div className="flex items-center justify-between">
                    <span className="text-charcoal-500 text-[11px]">Experience:</span>
                    <strong className="text-charcoal-800">{pandit.experienceYears}+ Years</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-charcoal-500 text-[11px]">Languages:</span>
                    <span className="text-charcoal-700 font-medium text-[11px] truncate max-w-[150px]">
                      {pandit.languages.join(', ')}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-charcoal-500 text-[11px]">Tradition:</span>
                    <span className="text-charcoal-700 font-medium text-[11px] truncate max-w-[150px]">
                      {pandit.vedicTradition}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-gold-100 flex gap-2">
                <Link
                  to={`/pandits/${pandit.id}`}
                  className="flex-1 py-2.5 text-center text-xs font-semibold text-charcoal-800 bg-ivory hover:bg-gold-100 border border-gold-300 rounded-xl transition-colors"
                >
                  View Profile
                </Link>
                <Link
                  to={`/book?pandit=${encodeURIComponent(pandit.name)}`}
                  className="px-4 py-2.5 text-center text-xs font-bold text-white bg-maroon-800 hover:bg-maroon-900 rounded-xl transition-colors shadow-sm"
                >
                  Book
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Shop Puja Samagri Preview */}
      <section className="py-16 bg-white border-y border-gold-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="flex items-center gap-2 text-saffron-600 text-xs font-bold uppercase tracking-widest mb-1.5">
                <ShoppingBag className="w-4 h-4 text-maroon-800" />
                <span>Sacred Puja Essentials</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-900">
                Pure Puja Samagri Delivered in Dubai
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-500 mt-1">
                Handcrafted brass thalis, pure cow ghee wicks, havan herbs, and comprehensive ritual kits.
              </p>
            </div>

            <Link
              to="/shop"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-maroon-800 hover:text-maroon-950 transition-colors shrink-0"
            >
              <span>Explore Samagri Store</span>
              <ArrowRight className="w-4 h-4 text-saffron-600" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SHOP_PRODUCTS.slice(0, 4).map(product => (
              <div
                key={product.id}
                className="bg-ivory rounded-3xl overflow-hidden border border-gold-200 shadow-sm hover:shadow-spiritual-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-white/90 text-charcoal-800 backdrop-blur-md shadow-sm border border-gold-200">
                      {product.category}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="font-serif font-bold text-sm text-charcoal-900 group-hover:text-maroon-800 transition-colors line-clamp-2">
                      <Link to={`/shop/${product.id}`}>{product.name}</Link>
                    </h3>
                    <p className="text-[11px] text-charcoal-500 line-clamp-2 mt-1">
                      {product.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-gold-200/60 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-charcoal-400 uppercase font-semibold block">Price (AED)</span>
                      <span className="font-serif text-lg font-bold text-maroon-900">
                        {formatPrice(product.priceAED)}
                      </span>
                    </div>

                    <button
                      onClick={() => addToCart(product, 1)}
                      className="px-3.5 py-2 bg-saffron-500 hover:bg-saffron-600 text-white rounded-xl text-xs font-bold shadow-sm transition-all flex items-center gap-1.5"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Add</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Customer Testimonials Carousel */}
      <TestimonialCarousel />

      {/* 8. International Presence Banner */}
      <section className="py-16 bg-gradient-to-br from-maroon-900 via-maroon-950 to-charcoal-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/20 text-gold-300 text-xs font-bold uppercase tracking-wider border border-gold-400/30">
                <Globe className="w-4 h-4 text-saffron-400" />
                <span>Global Vedic Network</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
                Serving the Hindu Diaspora in UAE & 10+ Countries
              </h2>
              <p className="text-sm text-ivory/80 leading-relaxed max-w-xl">
                Whether you live in Dubai, Abu Dhabi, London, New York, Singapore, or Sydney, DivyaPuja delivers authentic Vedic ceremonies to your doorstep or via interactive live sanctum broadcasts.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {['UAE (Dubai & Abu Dhabi)', 'United States', 'United Kingdom', 'Singapore', 'Australia', 'Canada', 'Malaysia', 'Germany'].map(place => (
                  <span
                    key={place}
                    className="px-3 py-1.5 rounded-xl bg-white/10 text-xs font-medium text-gold-200 border border-white/10"
                  >
                    {place}
                  </span>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  to="/international"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-saffron-500 to-saffron-600 hover:from-saffron-600 hover:to-saffron-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all"
                >
                  <span>Explore International Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-gold-400/30 space-y-4">
              <h3 className="font-serif font-bold text-xl text-gold-200">
                Need an Online E-Puja from India?
              </h3>
              <p className="text-xs text-ivory/80 leading-relaxed">
                Connect your family across time zones. Our senior acharyas perform the live Sankalp in your Gotra and Nakshatra from sacred temple sanctums, while you witness and participate via HD live stream.
              </p>
              <div className="space-y-2 text-xs text-gold-300">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-saffron-400" />
                  <span>Interactive 2-way Zoom video session</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-saffron-400" />
                  <span>Prasad dispatch to Dubai & worldwide addresses</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-saffron-400" />
                  <span>Personalized Gotra & family member chanting</span>
                </div>
              </div>
              <Link
                to="/pujas?format=online"
                className="block text-center py-2.5 rounded-xl bg-white text-maroon-900 font-bold text-xs uppercase tracking-wider hover:bg-gold-50 transition-colors"
              >
                Book Live Online E-Puja
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 9. Spiritual Resources & Blog Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 text-maroon-800 text-xs font-bold uppercase tracking-widest mb-1.5">
              <BookOpen className="w-4 h-4 text-saffron-500" />
              <span>Vedic Knowledge Hub</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-900">
              Spiritual Insights & Ritual Guides
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-500 mt-1">
              Read practical preparation checklists, Muhurat insights, and Vedic scriptural explanations.
            </p>
          </div>

          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-maroon-800 hover:text-maroon-950 transition-colors shrink-0"
          >
            <span>View All Articles</span>
            <ArrowRight className="w-4 h-4 text-saffron-600" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_POSTS.slice(0, 3).map(post => (
            <article
              key={post.id}
              className="bg-white rounded-3xl overflow-hidden border border-gold-200 shadow-sm hover:shadow-spiritual-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-maroon-900/90 text-white backdrop-blur-md">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-center gap-2 text-[11px] text-charcoal-400 mb-1">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-serif font-bold text-base text-charcoal-900 group-hover:text-maroon-800 transition-colors line-clamp-2">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-xs text-charcoal-600 line-clamp-2 mt-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-charcoal-100 flex items-center justify-between">
                  <span className="text-[11px] text-charcoal-500 font-medium">{post.author}</span>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-xs font-bold text-saffron-700 hover:text-maroon-900 inline-flex items-center gap-1"
                  >
                    <span>Read Guide</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 10. FAQ Accordion Preview */}
      <section className="py-16 bg-white border-t border-gold-200/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-saffron-100 text-saffron-800 text-xs font-bold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Got Questions?</span>
            </div>
            <h2 className="font-serif text-3xl font-bold text-charcoal-900">
              Frequently Asked Questions in Dubai
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'How are pandits arranged for residential apartments in Dubai?',
                a: 'Our verified pandits are fully resident in the UAE and familiar with residential guidelines across Dubai Marina, Downtown, Palm Jumeirah, and JLT. They bring safe, low-smoke organic samagri ensuring strict compliance with local smoke alarm systems.'
              },
              {
                q: 'What is included in the "Pandit with Puja Samagri" package?',
                a: 'This comprehensive package includes the senior Vedic pandit and all 35-50 necessary ingredients: fresh flowers, certified pure cow ghee, sacred havan wood, copper kalash, earthen/brass lamps, and sandalwood paste.'
              },
              {
                q: 'Can we book pujas in our mother tongue?',
                a: 'Yes! We have Vedic scholars fluent in Hindi, Sanskrit, Tamil, Telugu, Kannada, Bengali, Marathi, and Gujarati, as well as English explanations for global family members.'
              },
              {
                q: 'What is your rescheduling and cancellation policy?',
                a: 'You can reschedule your puja up to 24 hours prior to the Shubh Muhurat at zero penalty through your My Bookings portal.'
              }
            ].map((faq, idx) => (
              <details
                key={idx}
                className="group bg-ivory rounded-2xl border border-gold-200 p-4 transition-all duration-200 open:shadow-sm"
              >
                <summary className="font-serif font-bold text-sm text-charcoal-900 cursor-pointer list-none flex items-center justify-between">
                  <span>{faq.q}</span>
                  <ChevronRight className="w-4 h-4 text-maroon-800 group-open:rotate-90 transition-transform" />
                </summary>
                <p className="text-xs text-charcoal-600 mt-3 leading-relaxed border-t border-gold-200/60 pt-3">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/faqs"
              className="text-xs font-bold text-maroon-800 hover:underline"
            >
              Have more questions? View complete FAQ page →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
