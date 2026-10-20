import React from 'react';
import { Link } from 'react-router-dom';
import { SacredDiyaIcon } from '../components/common/MandalaDecor';
import { Home, Sparkles, Search } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-ivory py-20 px-4 flex items-center justify-center text-center">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-12 shadow-spiritual border border-gold-300 space-y-5">
        <div className="w-16 h-16 rounded-3xl bg-maroon-800 text-gold-300 flex items-center justify-center mx-auto shadow-md">
          <SacredDiyaIcon className="w-10 h-10" />
        </div>
        
        <span className="font-mono text-3xl font-extrabold text-maroon-900 block">404</span>
        <h1 className="font-serif font-bold text-2xl text-charcoal-900">
          Sacred Path Not Found
        </h1>
        <p className="text-xs text-charcoal-600 leading-relaxed">
          The page or ritual reference you are looking for does not exist or has been relocated to another auspicious section.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row gap-2.5 justify-center">
          <Link
            to="/"
            className="px-6 py-3 bg-maroon-800 hover:bg-maroon-900 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
          <Link
            to="/pujas"
            className="px-6 py-3 bg-ivory hover:bg-gold-100 text-charcoal-800 border border-gold-300 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2"
          >
            <Search className="w-4 h-4 text-saffron-600" />
            <span>Browse All Pujas</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
