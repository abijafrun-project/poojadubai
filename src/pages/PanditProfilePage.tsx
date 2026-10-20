import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PANDITS_DATA } from '../data/panditsData';
import { 
  ShieldCheck, 
  Star, 
  MapPin, 
  Languages, 
  Award, 
  BookOpen, 
  Sparkles, 
  ArrowRight,
  ChevronRight,
  PhoneCall
} from 'lucide-react';

export const PanditProfilePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const pandit = PANDITS_DATA.find(p => p.id === id) || PANDITS_DATA[0];

  return (
    <div className="min-h-screen bg-ivory py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Breadcrumb */}
        <div className="text-xs text-charcoal-500 flex items-center gap-1.5 flex-wrap">
          <Link to="/" className="hover:text-maroon-800">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to="/pandits" className="hover:text-maroon-800">Pandits Directory</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="font-bold text-maroon-900">{pandit.name}</span>
        </div>

        {/* Profile Card Header */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-spiritual border border-gold-300">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <img
              src={pandit.image}
              alt={pandit.name}
              className="w-32 h-32 rounded-3xl object-cover border-4 border-gold-400 shadow-md shrink-0"
            />
            <div className="flex-1 text-center sm:text-left space-y-2">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <h1 className="font-serif font-bold text-2xl sm:text-3xl text-charcoal-900">
                  {pandit.name}
                </h1>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Demo Verified Scholar</span>
                </span>
              </div>
              <p className="text-sm font-semibold text-saffron-700">{pandit.title}</p>
              
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-charcoal-600 pt-1">
                <span className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-saffron-400 text-saffron-400" />
                  <strong>{pandit.rating}</strong> ({pandit.reviewCount} verified reviews)
                </span>
                <span>•</span>
                <span><strong>{pandit.experienceYears}+ Years</strong> of Vedic Practice</span>
                <span>•</span>
                <span><strong>{pandit.totalPujasCompleted}+</strong> Ceremonies Completed</span>
              </div>

              <div className="pt-4 flex flex-wrap gap-2 justify-center sm:justify-start">
                <Link
                  to={`/book?pandit=${encodeURIComponent(pandit.name)}`}
                  className="px-6 py-3 bg-gradient-to-r from-maroon-800 to-maroon-900 hover:from-maroon-900 hover:to-maroon-950 text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow-md transition-all flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-gold-300" />
                  <span>Book Ceremony with this Pandit</span>
                </Link>

                <a
                  href="tel:+971585924188"
                  className="px-4 py-3 bg-ivory hover:bg-gold-100 text-charcoal-800 border border-gold-300 rounded-xl text-xs font-bold transition-colors flex items-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-saffron-600" />
                  <span>Consultation Hotline</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Left Bio Column */}
          <div className="md:col-span-8 space-y-6">
            
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gold-200 shadow-sm space-y-4">
              <h2 className="font-serif font-bold text-xl text-charcoal-900 border-b border-gold-100 pb-3">
                Biography & Vedic Lineage
              </h2>
              <p className="text-sm text-charcoal-700 leading-relaxed">
                {pandit.bio}
              </p>
              
              <div className="p-4 bg-ivory rounded-2xl border border-gold-200 space-y-2 text-xs">
                <div>
                  <span className="text-charcoal-400 font-bold block uppercase text-[10px]">Vedic Tradition (Sampradaya):</span>
                  <strong className="text-charcoal-900 text-sm">{pandit.vedicTradition}</strong>
                </div>
                <div>
                  <span className="text-charcoal-400 font-bold block uppercase text-[10px]">Gurukul Education:</span>
                  <span className="text-charcoal-800 font-medium">{pandit.education}</span>
                </div>
              </div>
            </div>

            {/* Specializations */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gold-200 shadow-sm space-y-4">
              <h2 className="font-serif font-bold text-xl text-charcoal-900 border-b border-gold-100 pb-3">
                Ritual Specializations
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {pandit.specializations.map((spec, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 rounded-xl bg-ivory border border-gold-100 text-xs text-charcoal-800 font-semibold">
                    <Sparkles className="w-3.5 h-3.5 text-saffron-600 shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Info Column */}
          <div className="md:col-span-4 space-y-6">
            <div className="bg-white rounded-3xl p-6 border border-gold-200 shadow-sm space-y-4 text-xs">
              <h3 className="font-serif font-bold text-base text-charcoal-900 border-b border-charcoal-100 pb-2">
                Priest Attributes
              </h3>

              <div className="space-y-3">
                <div>
                  <span className="text-charcoal-400 block text-[10px] uppercase font-bold">Languages</span>
                  <p className="font-semibold text-charcoal-900">{pandit.languages.join(', ')}</p>
                </div>

                <div>
                  <span className="text-charcoal-400 block text-[10px] uppercase font-bold">Service Locations</span>
                  <ul className="mt-1 space-y-1 text-charcoal-700">
                    {pandit.locations.map((loc, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <MapPin className="w-3 h-3 text-maroon-700 shrink-0" />
                        <span>{loc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 border-t border-charcoal-100 text-[11px] text-charcoal-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 inline mr-1" />
                  <span>Criminal background check & Gurukul degree verified for UAE platform demonstration.</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
