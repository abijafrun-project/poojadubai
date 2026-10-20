import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PUJAS_DATA } from '../../data/pujasData';
import { useApp } from '../../context/AppContext';
import { 
  Search, 
  Sparkles, 
  ShieldCheck, 
  Home, 
  Video, 
  Clock, 
  ArrowRight, 
  Star,
  CheckCircle2,
  Calendar
} from 'lucide-react';

const QUICK_SUGGESTIONS = [
  'Griha Pravesh',
  'Satyanarayan Puja',
  'Rudrabhishek',
  'Diwali Lakshmi Puja',
  'Navagraha Shanti',
  'Ganesh Havan'
];

export const HeroSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();
  const { city } = useApp();

  const filteredPujas = searchTerm.trim().length > 0
    ? PUJAS_DATA.filter(p => 
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.deity.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.categoryLabel.toLowerCase().includes(searchTerm.toLowerCase())
      ).slice(0, 5)
    : [];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/pujas?search=${encodeURIComponent(searchTerm.trim())}`);
    } else {
      navigate('/pujas');
    }
  };

  return (
    <section className="relative min-h-[620px] lg:min-h-[700px] flex items-center justify-center bg-gradient-to-b from-maroon-950 via-maroon-900 to-charcoal-900 text-ivory overflow-hidden py-16 px-4 sm:px-6 lg:px-8">
      {/* Background Photography with Warm Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&w=2000&q=85"
          alt="Sacred Hindu Puja Ritual Altar with Diyas"
          className="w-full h-full object-cover object-center opacity-25 mix-blend-luminosity scale-105 transform hover:scale-100 transition-transform duration-10000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-maroon-950/80 to-maroon-950/90" />
      </div>

      {/* Decorative Mandala Glow Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-saffron-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold-500/10 rounded-full blur-2xl pointer-events-none" />

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        
        {/* City Location Trust Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/20 border border-gold-400/40 text-gold-200 text-xs font-semibold backdrop-blur-md shadow-sm">
          <span className="w-2 h-2 rounded-full bg-saffron-400 animate-ping" />
          <span>Serving Hindu Families in {city}, UAE & Worldwide</span>
        </div>

        {/* Primary Headline & Subtitle */}
        <div className="space-y-4">
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Bring Divine <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-saffron-400 to-gold-200">Blessings</span> Home
          </h1>
          <p className="max-w-3xl mx-auto text-base sm:text-lg lg:text-xl text-ivory/85 font-light leading-relaxed">
            Book experienced pandits for Hindu rituals, pujas, havans, and sacred ceremonies — at your home or online.
          </p>
        </div>

        {/* Interactive Search Bar & Autocomplete */}
        <div className="max-w-2xl mx-auto relative z-30">
          <form onSubmit={handleSearchSubmit} className="relative flex items-center">
            <div className="absolute left-4 text-saffron-400">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setTimeout(() => setIsFocused(false), 200)}
              placeholder="Search for a puja, ceremony, or ritual (e.g., Griha Pravesh, Satyanarayan)..."
              className="w-full pl-12 pr-32 py-4 rounded-2xl bg-white text-charcoal-900 placeholder:text-charcoal-400 text-sm font-medium shadow-spiritual-lg border-2 border-gold-400/60 focus:outline-none focus:border-saffron-500 focus:ring-4 focus:ring-saffron-500/20 transition-all"
            />
            <button
              type="submit"
              className="absolute right-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-maroon-800 to-maroon-900 hover:from-maroon-900 hover:to-maroon-950 text-white font-bold text-xs uppercase tracking-wider shadow transition-all hover:scale-[1.02]"
            >
              Search
            </button>
          </form>

          {/* Autocomplete Dropdown */}
          {isFocused && filteredPujas.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gold-300 text-left overflow-hidden z-40 animate-in fade-in slide-in-from-top-1 duration-150">
              <div className="p-2 space-y-1">
                {filteredPujas.map(puja => (
                  <button
                    key={puja.id}
                    onMouseDown={() => navigate(`/pujas/${puja.id}`)}
                    className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-gold-50 text-charcoal-800 transition-colors text-left"
                  >
                    <div className="flex items-center gap-3">
                      <img src={puja.image} alt={puja.title} className="w-10 h-10 object-cover rounded-lg" />
                      <div>
                        <p className="text-xs font-bold text-charcoal-900">{puja.title}</p>
                        <p className="text-[11px] text-charcoal-500">{puja.categoryLabel} • {puja.duration}</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-maroon-800">
                      View Details →
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quick Search Suggestions */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 mt-3 text-xs text-ivory/70">
            <span className="text-[11px] font-semibold text-gold-300">Popular:</span>
            {QUICK_SUGGESTIONS.map(item => (
              <button
                key={item}
                onClick={() => {
                  setSearchTerm(item);
                  navigate(`/pujas?search=${encodeURIComponent(item)}`);
                }}
                className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-ivory text-[11px] transition-colors border border-white/10"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            to="/book"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-saffron-500 via-saffron-600 to-saffron-700 hover:from-saffron-600 hover:to-saffron-800 text-white font-bold text-sm tracking-wide shadow-spiritual-lg hover:shadow-saffron-glow transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 border border-saffron-300/40"
          >
            <Sparkles className="w-4 h-4 text-gold-200" />
            <span>Book a Pandit Now</span>
          </Link>

          <Link
            to="/pujas"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/15 hover:bg-white/25 text-white font-semibold text-sm backdrop-blur-md border border-gold-400/40 transition-all flex items-center justify-center gap-2"
          >
            <span>Explore All 16+ Pujas</span>
            <ArrowRight className="w-4 h-4 text-gold-300" />
          </Link>
        </div>

        {/* Trust Indicators Pill Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto pt-6 border-t border-gold-500/20 text-left">
          
          <div className="flex items-center gap-3 p-3 rounded-2xl bg-maroon-900/60 border border-gold-500/30 backdrop-blur-sm">
            <div className="w-10 h-10 rounded-xl bg-gold-500/20 flex items-center justify-center text-gold-300 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Verified Brahmin Pandits</p>
              <p className="text-[11px] text-ivory/70">Gurukul trained scholars in UAE</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-2xl bg-maroon-900/60 border border-gold-500/30 backdrop-blur-sm">
            <div className="w-10 h-10 rounded-xl bg-saffron-500/20 flex items-center justify-center text-saffron-400 shrink-0">
              <Home className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">At-Home & E-Puja</p>
              <p className="text-[11px] text-ivory/70">Doorstep visits or live Zoom stream</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-2xl bg-maroon-900/60 border border-gold-500/30 backdrop-blur-sm">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-300 shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Effortless Booking</p>
              <p className="text-[11px] text-ivory/70">Complete samagri & muhurat sync</p>
            </div>
          </div>

        </div>

        {/* Sample Statistics Bar (Labeled Demo Data) */}
        <div className="pt-4">
          <div className="p-4 rounded-2xl bg-charcoal-900/80 border border-gold-500/20 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="font-serif text-2xl font-bold text-gold-300">4,850+</p>
              <p className="text-[10px] text-ivory/70 uppercase tracking-wider">Pujas Arranged</p>
              <span className="text-[9px] text-gold-500/70 block">(Sample Demo)</span>
            </div>
            <div>
              <p className="font-serif text-2xl font-bold text-gold-300">120+</p>
              <p className="text-[10px] text-ivory/70 uppercase tracking-wider">Certified Pandits</p>
              <span className="text-[9px] text-gold-500/70 block">(Sample Demo)</span>
            </div>
            <div>
              <p className="font-serif text-2xl font-bold text-gold-300 flex items-center justify-center gap-1">
                4.96 <Star className="w-4 h-4 fill-saffron-400 text-saffron-400 inline" />
              </p>
              <p className="text-[10px] text-ivory/70 uppercase tracking-wider">Devotee Rating</p>
              <span className="text-[9px] text-gold-500/70 block">(Sample Demo)</span>
            </div>
            <div>
              <p className="font-serif text-2xl font-bold text-gold-300">10+</p>
              <p className="text-[10px] text-ivory/70 uppercase tracking-wider">Global Countries</p>
              <span className="text-[9px] text-gold-500/70 block">(Sample Demo)</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
