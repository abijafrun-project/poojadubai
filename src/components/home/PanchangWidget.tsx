import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { getPanchangForDate, CITIES_LIST } from '../../data/panchangData';
import { 
  Calendar, 
  Sun, 
  Moon, 
  Clock, 
  MapPin, 
  AlertTriangle, 
  CheckCircle, 
  ChevronRight, 
  Sparkles,
  Info
} from 'lucide-react';

export const PanchangWidget: React.FC = () => {
  const { city, setCity } = useApp();
  const todayStr = new Date().toISOString().split('T')[0];
  const [selectedDate, setSelectedDate] = useState<string>(todayStr);

  const panchang = getPanchangForDate(selectedDate, city);

  return (
    <section className="py-12 bg-ivory border-b border-gold-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Title & Date/City selectors */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-maroon-800 text-xs font-bold uppercase tracking-widest mb-1.5">
              <Sparkles className="w-3.5 h-3.5 text-saffron-500" />
              <span>Vedic Ephemeris & Auspicious Timings</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal-900">
              Today's Hindu Panchang
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-500 mt-1">
              {panchang.formattedDate} • Calculated for {city}, UAE
            </p>
          </div>

          {/* Controls: Date Picker & City Switcher */}
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="flex items-center gap-1.5 px-3 py-2 bg-white rounded-xl border border-gold-300 text-xs shadow-sm">
              <Calendar className="w-4 h-4 text-saffron-600 shrink-0" />
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="bg-transparent text-charcoal-800 font-semibold focus:outline-none cursor-pointer"
              />
            </div>

            <div className="flex items-center gap-1.5 px-3 py-2 bg-white rounded-xl border border-gold-300 text-xs shadow-sm">
              <MapPin className="w-4 h-4 text-maroon-700 shrink-0" />
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="bg-transparent text-charcoal-800 font-semibold focus:outline-none cursor-pointer pr-2"
              >
                {CITIES_LIST.map(c => (
                  <option key={c.city} value={c.city}>
                    {c.city} ({c.country})
                  </option>
                ))}
              </select>
            </div>

            <Link
              to={`/panchang?date=${selectedDate}&city=${encodeURIComponent(city)}`}
              className="px-4 py-2 bg-maroon-800 hover:bg-maroon-900 text-white rounded-xl text-xs font-semibold shadow transition-colors flex items-center gap-1"
            >
              <span>Full Panchang</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Main Panchang Grid Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-spiritual border border-gold-300/80 relative overflow-hidden">
          
          {/* Top Month & Season Banner */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-6 border-b border-gold-100 text-xs">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-maroon-50 text-maroon-900 font-bold border border-maroon-200">
                {panchang.hinduMonth}
              </span>
              <span className="px-3 py-1 rounded-full bg-saffron-50 text-saffron-900 font-semibold border border-saffron-200">
                {panchang.season}
              </span>
            </div>

            <div className="flex items-center gap-4 text-charcoal-600 font-medium">
              <span className="flex items-center gap-1">
                <Sun className="w-4 h-4 text-amber-500" />
                Sunrise: <strong>{panchang.sunrise}</strong>
              </span>
              <span className="flex items-center gap-1">
                <Moon className="w-4 h-4 text-indigo-400" />
                Sunset: <strong>{panchang.sunset}</strong>
              </span>
            </div>
          </div>

          {/* 5 Core Limbs (Panchang Elements) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            
            {/* Tithi */}
            <div className="p-4 rounded-2xl bg-ivory border border-gold-200 space-y-1">
              <span className="text-[10px] uppercase font-bold text-charcoal-400 tracking-wider">
                1. Tithi (Lunar Day)
              </span>
              <p className="text-sm sm:text-base font-serif font-bold text-maroon-900">
                {panchang.tithi.split(' up to')[0]}
              </p>
              <p className="text-[11px] text-charcoal-500">
                {panchang.tithi.includes('up to') ? `Ends at ${panchang.tithi.split('up to')[1]}` : 'Active all day'}
              </p>
            </div>

            {/* Nakshatra */}
            <div className="p-4 rounded-2xl bg-ivory border border-gold-200 space-y-1">
              <span className="text-[10px] uppercase font-bold text-charcoal-400 tracking-wider">
                2. Nakshatra (Mansion)
              </span>
              <p className="text-sm sm:text-base font-serif font-bold text-maroon-900">
                {panchang.nakshatra.split(' up to')[0]}
              </p>
              <p className="text-[11px] text-charcoal-500">
                {panchang.nakshatra.includes('up to') ? `Ends at ${panchang.nakshatra.split('up to')[1]}` : 'Active all day'}
              </p>
            </div>

            {/* Yoga */}
            <div className="p-4 rounded-2xl bg-ivory border border-gold-200 space-y-1">
              <span className="text-[10px] uppercase font-bold text-charcoal-400 tracking-wider">
                3. Yoga
              </span>
              <p className="text-sm sm:text-base font-serif font-bold text-maroon-900">
                {panchang.yoga}
              </p>
              <p className="text-[11px] text-emerald-700 font-medium">
                Favorable for auspicious beginnings
              </p>
            </div>

            {/* Karana */}
            <div className="p-4 rounded-2xl bg-ivory border border-gold-200 space-y-1">
              <span className="text-[10px] uppercase font-bold text-charcoal-400 tracking-wider">
                4. Karana (Half Tithi)
              </span>
              <p className="text-sm sm:text-base font-serif font-bold text-maroon-900">
                {panchang.karana.split(' up to')[0]}
              </p>
              <p className="text-[11px] text-charcoal-500">
                {panchang.karana.includes('up to') ? `Ends at ${panchang.karana.split('up to')[1]}` : 'Active'}
              </p>
            </div>

          </div>

          {/* Muhurat Highlights: Abhijit vs Rahu Kaal */}
          <div className="mt-6 pt-6 border-t border-gold-100 grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Abhijit Muhurat */}
            <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-950">
                    Abhijit Muhurat (Shubh Kaal)
                  </h4>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-200 text-emerald-900">
                    Most Auspicious
                  </span>
                </div>
                <p className="text-sm font-bold text-emerald-900 mt-0.5">
                  {panchang.abhijitMuhurat}
                </p>
                <p className="text-[11px] text-emerald-700 mt-1">
                  Ideal window for starting new commercial contracts, signing leases, and performing puja sankalpas.
                </p>
              </div>
            </div>

            {/* Rahu Kaal */}
            <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200 flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-rose-600 text-white flex items-center justify-center shrink-0">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-rose-950">
                    Rahu Kaal (Ashubh Kaal)
                  </h4>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-200 text-rose-900">
                    Avoid New Deeds
                  </span>
                </div>
                <p className="text-sm font-bold text-rose-900 mt-0.5">
                  {panchang.rahuKaal}
                </p>
                <p className="text-[11px] text-rose-700 mt-1">
                  Traditional period to avoid commencing fresh financial ventures or departing on long travels.
                </p>
              </div>
            </div>

          </div>

          {/* Sample Astronomical Demonstration Label */}
          <div className="mt-5 pt-3 border-t border-charcoal-100 flex items-center justify-between flex-wrap gap-2 text-[11px] text-charcoal-500">
            <div className="flex items-center gap-1.5 text-charcoal-600">
              <Info className="w-3.5 h-3.5 text-saffron-600 shrink-0" />
              <span>
                <strong>Sample Demo Data:</strong> Panchang timings are modeled algorithmically for Dubai coordinates (25.2048° N, 55.2708° E) for interface demonstration.
              </span>
            </div>
            <Link
              to="/panchang"
              className="text-maroon-800 font-bold hover:underline"
            >
              Consult Vedic Astrologer for Muhurat →
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};
