import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Puja } from '../../types';
import { useApp } from '../../context/AppContext';
import { Star, Clock, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export const PujaCard: React.FC<{ puja: Puja }> = ({ puja }) => {
  const { formatPrice } = useApp();
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-gold-200/90 shadow-sm hover:shadow-spiritual-lg transition-all duration-300 flex flex-col group hover:-translate-y-1">
      {/* Image with Tag & Price Pill */}
      <div className="relative h-48 sm:h-52 overflow-hidden">
        <img
          src={puja.image}
          alt={puja.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-black/30" />

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-maroon-900/90 text-ivory backdrop-blur-md border border-gold-400/40">
            {puja.categoryLabel}
          </span>
        </div>

        {/* Featured Tag if present */}
        {puja.tag && (
          <div className="absolute top-3 right-3">
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-saffron-500 text-white shadow-sm flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-gold-200" />
              <span>{puja.tag}</span>
            </span>
          </div>
        )}

        {/* Rating and Reviews */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs text-white bg-black/50 px-2.5 py-1 rounded-lg backdrop-blur-md">
          <Star className="w-3.5 h-3.5 text-saffron-400 fill-saffron-400" />
          <span className="font-bold">{puja.rating}</span>
          <span className="text-white/70 text-[10px]">({puja.reviewsCount})</span>
        </div>

        {/* Duration */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1 text-[11px] text-white/90 bg-black/50 px-2 py-1 rounded-lg backdrop-blur-md">
          <Clock className="w-3 h-3 text-gold-300" />
          <span>{puja.duration}</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="font-serif font-bold text-lg text-charcoal-900 group-hover:text-maroon-800 transition-colors line-clamp-1">
            <Link to={`/pujas/${puja.id}`}>{puja.title}</Link>
          </h3>
          <p className="text-xs text-saffron-700 font-semibold line-clamp-1 mt-0.5">
            {puja.deity}
          </p>
          <p className="text-xs text-charcoal-600 line-clamp-2 mt-2 leading-relaxed">
            {puja.description}
          </p>
        </div>

        {/* Formats & Pricing Row */}
        <div className="pt-3 border-t border-charcoal-100 flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase font-bold text-charcoal-400 block">Indicative From</span>
            <span className="font-serif text-lg font-extrabold text-maroon-900">
              {formatPrice(puja.priceAED)}
            </span>
          </div>

          <div className="text-right">
            <span className="text-[10px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              Verified Pandits
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          <Link
            to={`/pujas/${puja.id}`}
            className="px-3 py-2.5 text-center text-xs font-semibold text-charcoal-800 bg-ivory hover:bg-gold-100 border border-gold-300 rounded-xl transition-all"
          >
            View Details
          </Link>

          <button
            onClick={() => navigate(`/book/${puja.id}`)}
            className="px-3 py-2.5 text-center text-xs font-bold text-white bg-gradient-to-r from-maroon-800 to-maroon-900 hover:from-maroon-900 hover:to-maroon-950 rounded-xl transition-all shadow-sm hover:shadow flex items-center justify-center gap-1 group-hover:border-gold-400/40"
          >
            <span>Book Now</span>
            <ArrowRight className="w-3.5 h-3.5 text-gold-300" />
          </button>
        </div>
      </div>
    </div>
  );
};
