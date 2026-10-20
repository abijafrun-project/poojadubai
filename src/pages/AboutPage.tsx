import React from 'react';
import { Link } from 'react-router-dom';
import { SacredDiyaIcon } from '../components/common/MandalaDecor';
import { ShieldCheck, Heart, Sparkles, Award, Globe, Users, ArrowRight } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-ivory py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="w-16 h-16 rounded-3xl bg-maroon-800 flex items-center justify-center mx-auto shadow-md border-2 border-gold-400">
            <SacredDiyaIcon className="w-9 h-9" />
          </div>
          <span className="text-xs font-bold text-saffron-700 uppercase tracking-widest">
            Preserving Sacred Sanatana Heritage
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-charcoal-900">
            About DivyaPuja
          </h1>
          <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
            Bridging ancient Vedic tradition with contemporary convenience for Hindu families in Dubai, the UAE, and across the globe.
          </p>
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-spiritual border border-gold-300 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6 space-y-4">
            <span className="text-xs font-bold text-maroon-800 uppercase tracking-wider">
              Our Genesis in Dubai
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal-900 leading-tight">
              Honoring Sacred Traditions Away from Home
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
              Living in dynamic international hubs like Dubai often makes organizing traditional Hindu ceremonies challenging. Sourcing genuine organic havan herbs, finding verified Gurukul scholars fluent in your native language, and adhering to apartment smoke safety regulations can feel daunting.
            </p>
            <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
              DivyaPuja was established to eliminate this friction. We provide a single trusted sanctuary where devotees can book verified Brahmin priests, receive certified temple-grade samagri, and immerse in sincere devotion without logistical anxiety.
            </p>
          </div>

          <div className="md:col-span-6">
            <img
              src="https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&w=800&q=80"
              alt="Sacred Hindu Ritual Offerings"
              className="w-full h-80 object-cover rounded-2xl shadow-md border border-gold-200"
            />
          </div>
        </div>

        {/* Pillars / Values */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl p-6 border border-gold-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-maroon-800 text-gold-300 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-lg text-charcoal-900">
              Vedic Authenticity
            </h3>
            <p className="text-xs text-charcoal-600 leading-relaxed">
              Strict adherence to Vedic Karma-Kanda and Agamic scriptures. Every mantra is pronounced with genuine intonation (Svara).
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-gold-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-saffron-600 text-white flex items-center justify-center">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-lg text-charcoal-900">
              Compassionate Guidance
            </h3>
            <p className="text-xs text-charcoal-600 leading-relaxed">
              Our priests explain the deeper philosophical meaning of each vow and ritual in your family’s preferred language and English.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-gold-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-charcoal-800 text-gold-300 flex items-center justify-center">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-lg text-charcoal-900">
              Global Connection
            </h3>
            <p className="text-xs text-charcoal-600 leading-relaxed">
              Connecting diaspora families across UAE, US, UK, Singapore, and Australia through seamless physical visits and sanctum E-Pujas.
            </p>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="p-8 bg-gradient-to-r from-maroon-900 via-maroon-950 to-charcoal-950 text-white rounded-3xl border border-gold-400/40 text-center space-y-4">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gold-200">
            Experience the Peace of an Authentic Vedic Ceremony
          </h2>
          <p className="text-xs sm:text-sm text-ivory/80 max-w-xl mx-auto">
            Book your Griha Pravesh, Satyanarayan, or Rudrabhishek puja in Dubai today with complete peace of mind.
          </p>
          <div className="pt-2">
            <Link
              to="/book"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-saffron-500 to-saffron-600 hover:from-saffron-600 hover:to-saffron-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all"
            >
              <span>Book a Pandit Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
