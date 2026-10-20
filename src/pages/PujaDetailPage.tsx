import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PUJAS_DATA } from '../data/pujasData';
import { useApp } from '../context/AppContext';
import { PujaCard } from '../components/home/PujaCard';
import { 
  Clock, 
  Star, 
  ShieldCheck, 
  Check, 
  Sparkles, 
  Calendar, 
  MapPin, 
  Languages, 
  ArrowRight, 
  ChevronRight,
  Flame,
  HelpCircle,
  PackageCheck,
  Home,
  Video
} from 'lucide-react';

export const PujaDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { formatPrice, city } = useApp();

  const puja = PUJAS_DATA.find(p => p.id === id);

  // If not found, fall back to first puja
  const activePuja = puja || PUJAS_DATA[0];

  const [selectedPackageId, setSelectedPackageId] = useState<string>('pandit-samagri');

  const relatedPujas = PUJAS_DATA
    .filter(p => p.id !== activePuja.id && (p.category === activePuja.category || p.rating >= 4.95))
    .slice(0, 4);

  const handleBookNow = (packageId?: string) => {
    const pkg = packageId || selectedPackageId;
    navigate(`/book/${activePuja.id}?package=${pkg}`);
  };

  return (
    <div className="min-h-screen bg-ivory">
      
      {/* 1. Breadcrumbs */}
      <div className="bg-white border-b border-gold-200/60 py-3 px-4 sm:px-6 lg:px-8 text-xs text-charcoal-500">
        <div className="max-w-7xl mx-auto flex items-center gap-1.5 flex-wrap">
          <Link to="/" className="hover:text-maroon-800">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to="/pujas" className="hover:text-maroon-800">Puja Services</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-charcoal-400">{activePuja.categoryLabel}</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="font-bold text-maroon-900">{activePuja.title}</span>
        </div>
      </div>

      {/* 2. Hero Banner */}
      <section className="relative bg-gradient-to-r from-maroon-950 via-maroon-900 to-charcoal-950 text-white py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={activePuja.image}
            alt={activePuja.title}
            className="w-full h-full object-cover opacity-25 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-maroon-950/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-saffron-500 text-white">
                {activePuja.categoryLabel}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-gold-200 border border-white/10">
                Deity: {activePuja.deity}
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              {activePuja.title}
            </h1>
            <p className="text-base sm:text-lg text-gold-200 font-light">
              {activePuja.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-ivory/80 pt-2">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-gold-300" />
                <span>Duration: <strong>{activePuja.duration}</strong></span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-saffron-400 fill-saffron-400" />
                <span><strong>{activePuja.rating}</strong> ({activePuja.reviewsCount} devotee reviews)</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-saffron-400" />
                <span>Available across <strong>{city}, UAE & Online</strong></span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-4">
              <button
                onClick={() => handleBookNow()}
                className="px-8 py-3.5 bg-gradient-to-r from-saffron-500 to-saffron-600 hover:from-saffron-600 hover:to-saffron-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all flex items-center gap-2 transform hover:-translate-y-0.5"
              >
                <Sparkles className="w-4 h-4" />
                <span>Book This Puja Now</span>
              </button>

              <a
                href="#packages"
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs rounded-xl border border-gold-400/30 transition-colors"
              >
                View Packages & Pricing
              </a>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-5 border border-gold-400/40 shadow-xl space-y-3">
              <img
                src={activePuja.image}
                alt={activePuja.title}
                className="w-full h-48 object-cover rounded-2xl shadow-sm border border-gold-300/30"
              />
              <div className="text-xs space-y-1.5 pt-1 text-ivory/90">
                <div className="flex items-center justify-between">
                  <span className="text-gold-200">Starting Indicative Fee:</span>
                  <span className="font-serif text-xl font-bold text-white">{formatPrice(activePuja.priceAED)}</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-300 text-[11px]">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>Vedic Priest with Gotra Sankalp included</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Main Detail Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column (Content) */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Overview & Description */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-gold-200 shadow-sm space-y-4">
              <h2 className="font-serif text-2xl font-bold text-charcoal-900 border-b border-gold-100 pb-3">
                About {activePuja.title}
              </h2>
              <p className="text-sm text-charcoal-700 leading-relaxed">
                {activePuja.description}
              </p>

              <div className="p-4 rounded-2xl bg-ivory border border-gold-300/60 mt-4">
                <h3 className="font-serif font-bold text-sm text-maroon-900 mb-1">
                  Traditional Vedic Significance
                </h3>
                <p className="text-xs text-charcoal-600 leading-relaxed">
                  {activePuja.significance}
                </p>
              </div>
            </section>

            {/* Common Reasons / Benefits */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-gold-200 shadow-sm space-y-4">
              <h2 className="font-serif text-2xl font-bold text-charcoal-900 border-b border-gold-100 pb-3">
                Common Reasons to Perform
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {activePuja.reasons.map((reason, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-ivory border border-gold-100 text-xs text-charcoal-700">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{reason}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 5-Step Ritual Process */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-gold-200 shadow-sm space-y-5">
              <h2 className="font-serif text-2xl font-bold text-charcoal-900 border-b border-gold-100 pb-3">
                Step-by-Step Ritual Process (Vidhi)
              </h2>
              <div className="space-y-4">
                {activePuja.process.map(item => (
                  <div key={item.step} className="flex items-start gap-4 p-4 rounded-2xl bg-ivory border border-gold-200">
                    <span className="w-8 h-8 rounded-xl bg-maroon-800 text-white font-serif font-bold text-sm flex items-center justify-center shrink-0 shadow-sm">
                      {item.step}
                    </span>
                    <div>
                      <h4 className="font-serif font-bold text-sm text-charcoal-900">
                        {item.title}
                      </h4>
                      <p className="text-xs text-charcoal-600 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Samagri Checklist & Requirements */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-gold-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-gold-100 pb-3">
                <h2 className="font-serif text-2xl font-bold text-charcoal-900">
                  Key Samagri Requirements
                </h2>
                <span className="text-xs text-emerald-700 font-bold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Included in Samagri Package
                </span>
              </div>
              <p className="text-xs text-charcoal-600">
                When you select the "Pandit with Puja Samagri" package, our priest brings all of the following certified pure items with him:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {activePuja.samagriList.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-ivory border border-gold-100 text-xs text-charcoal-700">
                    <Flame className="w-3.5 h-3.5 text-saffron-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Packages & Pricing Section */}
            <section id="packages" className="bg-white rounded-3xl p-6 sm:p-8 border border-gold-200 shadow-sm space-y-6">
              <div className="text-center max-w-xl mx-auto space-y-1">
                <span className="text-xs font-bold text-saffron-600 uppercase tracking-widest">
                  Transparent Dubai Pricing
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal-900">
                  Select Your Ceremony Package
                </h2>
                <p className="text-xs text-charcoal-500">
                  All fees in {useApp().currency}. No hidden charges.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                {activePuja.packages.map(pkg => (
                  <div
                    key={pkg.id}
                    className={`rounded-2xl p-5 border flex flex-col justify-between transition-all ${
                      selectedPackageId === pkg.id
                        ? 'border-maroon-800 bg-saffron-50/40 shadow-spiritual ring-2 ring-maroon-800'
                        : 'border-gold-200 bg-white hover:border-gold-400'
                    }`}
                  >
                    <div>
                      {pkg.popular && (
                        <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-maroon-800 text-white uppercase tracking-wider mb-2">
                          Most Chosen
                        </span>
                      )}
                      <h3 className="font-serif font-bold text-base text-charcoal-900">
                        {pkg.name}
                      </h3>
                      <div className="my-3">
                        <span className="font-serif text-2xl font-extrabold text-maroon-900">
                          {formatPrice(pkg.priceAED)}
                        </span>
                      </div>
                      <p className="text-xs text-charcoal-600 mb-4 leading-relaxed">
                        {pkg.description}
                      </p>

                      <ul className="space-y-2 text-xs text-charcoal-700 border-t border-charcoal-100 pt-3">
                        {pkg.features.map((feat, fidx) => (
                          <li key={fidx} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 pt-3 border-t border-charcoal-100">
                      <button
                        onClick={() => {
                          setSelectedPackageId(pkg.id);
                          handleBookNow(pkg.id);
                        }}
                        className={`w-full py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-sm ${
                          selectedPackageId === pkg.id
                            ? 'bg-maroon-800 text-white hover:bg-maroon-900'
                            : 'bg-ivory text-charcoal-800 border border-gold-300 hover:bg-gold-100'
                        }`}
                      >
                        Choose {pkg.name.split(' ')[0]}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Puja FAQs */}
            {activePuja.faqs.length > 0 && (
              <section className="bg-white rounded-3xl p-6 sm:p-8 border border-gold-200 shadow-sm space-y-4">
                <h2 className="font-serif text-2xl font-bold text-charcoal-900 border-b border-gold-100 pb-3">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-3">
                  {activePuja.faqs.map((faq, i) => (
                    <details key={i} className="group p-3.5 rounded-xl bg-ivory border border-gold-100">
                      <summary className="font-serif font-semibold text-xs sm:text-sm text-charcoal-900 cursor-pointer list-none flex items-center justify-between">
                        <span>{faq.question}</span>
                        <ChevronRight className="w-4 h-4 text-maroon-800 group-open:rotate-90 transition-transform" />
                      </summary>
                      <p className="text-xs text-charcoal-600 mt-2.5 pt-2.5 border-t border-gold-200/60 leading-relaxed">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>
            )}

          </div>

          {/* Right Column (Sticky Booking Card & Info) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Sticky Booking CTA Card */}
            <div className="bg-white rounded-3xl p-6 border-2 border-gold-300 shadow-spiritual-lg sticky top-24 space-y-5">
              <div className="space-y-1 text-center">
                <span className="text-[11px] font-bold text-saffron-600 uppercase tracking-wider">
                  Instant Confirmation in UAE
                </span>
                <h3 className="font-serif font-bold text-xl text-charcoal-900">
                  Ready to Book This Ceremony?
                </h3>
                <p className="text-xs text-charcoal-500">
                  Lock your preferred Shubh Muhurat slot in {city}.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-ivory border border-gold-200 space-y-2 text-xs">
                <div className="flex items-center justify-between text-charcoal-600">
                  <span>Selected Ceremony:</span>
                  <strong className="text-charcoal-900">{activePuja.title}</strong>
                </div>
                <div className="flex items-center justify-between text-charcoal-600">
                  <span>Starting Fee:</span>
                  <strong className="text-maroon-900 font-serif text-base">{formatPrice(activePuja.priceAED)}</strong>
                </div>
                <div className="flex items-center justify-between text-charcoal-600">
                  <span>Priest Allocation:</span>
                  <span className="text-emerald-700 font-semibold">100% Verified Pandit</span>
                </div>
              </div>

              <button
                onClick={() => handleBookNow()}
                className="w-full py-3.5 bg-gradient-to-r from-maroon-800 to-maroon-900 hover:from-maroon-900 hover:to-maroon-950 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-gold-300" />
                <span>Proceed to Booking Wizard</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="space-y-2.5 text-xs text-charcoal-600 pt-2 border-t border-charcoal-100">
                <div className="flex items-center gap-2">
                  <Languages className="w-4 h-4 text-saffron-600 shrink-0" />
                  <span>Languages: <strong>Hindi, Sanskrit, Tamil, Telugu + 5 more</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Home className="w-4 h-4 text-saffron-600 shrink-0" />
                  <span>At Home Doorstep or Online Zoom</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Zero Cancellation Fee up to 24h prior</span>
                </div>
              </div>

              {/* Consultation Hotline */}
              <div className="p-3 rounded-xl bg-gold-50 border border-gold-200 text-center text-xs">
                <span className="text-charcoal-600">Need Gotra or Muhurat advice?</span>
                <a href="tel:+97143987654" className="block font-bold text-maroon-900 hover:underline mt-0.5">
                  Call Dubai Acharya: +971 4 398 7654
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* 4. Related Pujas */}
        {relatedPujas.length > 0 && (
          <div className="mt-16 pt-12 border-t border-gold-200/60 space-y-6">
            <h2 className="font-serif text-2xl font-bold text-charcoal-900">
              Related Sacred Ceremonies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedPujas.map(p => (
                <PujaCard key={p.id} puja={p} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
