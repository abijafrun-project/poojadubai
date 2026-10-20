import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { PANDITS_DATA } from '../data/panditsData';
import { Pandit } from '../types';
import { 
  ShieldCheck, 
  Star, 
  MapPin, 
  Languages, 
  Award, 
  Search, 
  Filter, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export const PanditsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('all');
  const [selectedSpecialization, setSelectedSpecialization] = useState<string>('all');

  const allLanguages = ['all', 'Hindi', 'English', 'Sanskrit', 'Tamil', 'Telugu', 'Kannada', 'Bengali', 'Marathi', 'Gujarati'];
  const allSpecializations = ['all', 'Griha Pravesh', 'Vastu Shanti', 'Rudrabhishek', 'Satyanarayan Puja', 'Durga Puja', 'Vivah Sanskar', 'Navagraha Shanti'];

  const filteredPandits = useMemo(() => {
    return PANDITS_DATA.filter(pandit => {
      if (selectedLanguage !== 'all' && !pandit.languages.includes(selectedLanguage)) {
        return false;
      }
      if (selectedSpecialization !== 'all' && !pandit.specializations.includes(selectedSpecialization)) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = pandit.name.toLowerCase().includes(q);
        const matchesTitle = pandit.title.toLowerCase().includes(q);
        const matchesBio = pandit.bio.toLowerCase().includes(q);
        if (!matchesName && !matchesTitle && !matchesBio) return false;
      }
      return true;
    });
  }, [searchQuery, selectedLanguage, selectedSpecialization]);

  return (
    <div className="min-h-screen bg-ivory py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-saffron-100 text-saffron-800 text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Vedic Scholar Directory</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900">
            Gurukul-Trained Pandits in UAE & Worldwide
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
            Connect with highly qualified Vedic priests proficient in authentic Karma-Kanda traditions, multi-lingual Katha recitals, and residential apartment rituals.
          </p>
        </div>

        {/* Disclaimer */}
        <div className="p-3 bg-amber-50 border border-amber-200 rounded-2xl text-xs text-amber-900 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0" />
          <span>
            <strong>Client Demonstration Notice:</strong> Profiles shown below are fictional illustrative personas created for client demonstration purposes.
          </span>
        </div>

        {/* Filter Box */}
        <div className="bg-white rounded-3xl p-5 shadow-sm border border-gold-200 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search pandit by name or tradition..."
                className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-ivory border border-gold-200 text-xs text-charcoal-900 focus:outline-none focus:border-maroon-800"
              />
            </div>

            {/* Language Filter */}
            <div>
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="w-full py-2.5 px-3 rounded-xl bg-ivory border border-gold-200 text-xs font-semibold text-charcoal-700 focus:outline-none focus:border-maroon-800"
              >
                <option value="all">Language: All Languages</option>
                {allLanguages.filter(l => l !== 'all').map(lang => (
                  <option key={lang} value={lang}>{lang}</option>
                ))}
              </select>
            </div>

            {/* Specialization Filter */}
            <div>
              <select
                value={selectedSpecialization}
                onChange={(e) => setSelectedSpecialization(e.target.value)}
                className="w-full py-2.5 px-3 rounded-xl bg-ivory border border-gold-200 text-xs font-semibold text-charcoal-700 focus:outline-none focus:border-maroon-800"
              >
                <option value="all">Specialization: All Rituals</option>
                {allSpecializations.filter(s => s !== 'all').map(spec => (
                  <option key={spec} value={spec}>{spec}</option>
                ))}
              </select>
            </div>

          </div>
        </div>

        {/* Pandits Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPandits.map(pandit => (
            <div
              key={pandit.id}
              className="bg-white rounded-3xl p-6 border border-gold-200 shadow-sm hover:shadow-spiritual-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Profile Top */}
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={pandit.image}
                    alt={pandit.name}
                    className="w-20 h-20 rounded-2xl object-cover border-2 border-gold-400 shadow shrink-0"
                  />
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5">
                      <h3 className="font-serif font-bold text-base text-charcoal-900 group-hover:text-maroon-800 transition-colors">
                        {pandit.name}
                      </h3>
                      <span title="Demo Verified Priest">
                        <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                      </span>
                    </div>
                    <p className="text-xs text-saffron-700 font-semibold">{pandit.title}</p>
                    <div className="flex items-center gap-1 text-xs text-charcoal-600">
                      <Star className="w-3.5 h-3.5 fill-saffron-400 text-saffron-400" />
                      <span className="font-bold">{pandit.rating}</span>
                      <span className="text-charcoal-400 text-[11px]">({pandit.reviewCount} reviews)</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-charcoal-600 line-clamp-3 leading-relaxed mb-4">
                  {pandit.bio}
                </p>

                {/* Info List */}
                <div className="space-y-2 text-xs border-t border-charcoal-100 pt-3">
                  <div className="flex items-center justify-between">
                    <span className="text-charcoal-500 text-[11px]">Experience:</span>
                    <strong className="text-charcoal-800">{pandit.experienceYears}+ Years</strong>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-charcoal-500 text-[11px]">Languages:</span>
                    <span className="text-charcoal-800 font-medium text-[11px] truncate max-w-[170px]">
                      {pandit.languages.join(', ')}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-charcoal-500 text-[11px]">Service Hub:</span>
                    <span className="text-charcoal-800 font-medium text-[11px] truncate max-w-[170px]">
                      {pandit.locations[0]}
                    </span>
                  </div>

                  <div className="pt-2">
                    <span className="text-[10px] text-charcoal-400 uppercase font-bold block mb-1">
                      Ritual Specializations
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {pandit.specializations.map((spec, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded-md bg-ivory text-charcoal-700 border border-gold-200 text-[10px] font-medium"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-5 mt-4 border-t border-gold-100 flex gap-2">
                <Link
                  to={`/pandits/${pandit.id}`}
                  className="flex-1 py-2.5 text-center text-xs font-semibold text-charcoal-800 bg-ivory hover:bg-gold-100 border border-gold-300 rounded-xl transition-colors"
                >
                  View Profile
                </Link>
                <Link
                  to={`/book?pandit=${encodeURIComponent(pandit.name)}`}
                  className="px-5 py-2.5 text-center text-xs font-bold text-white bg-maroon-800 hover:bg-maroon-900 rounded-xl transition-colors shadow-sm"
                >
                  Book Pandit
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
