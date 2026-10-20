import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { getPanchangForDate, CITIES_LIST } from '../data/panchangData';
import { 
  Calendar, 
  Sun, 
  Moon, 
  Clock, 
  MapPin, 
  AlertTriangle, 
  CheckCircle, 
  Sparkles, 
  Info,
  CalendarCheck
} from 'lucide-react';

const CHOGHADIYA_TIMINGS = [
  { time: '06:24 AM - 07:54 AM', name: 'Shubh (Auspicious)', nature: 'Good', desc: 'Favorable for prayer and education' },
  { time: '07:54 AM - 09:24 AM', name: 'Rog (Inauspicious)', nature: 'Bad', desc: 'Avoid signing contracts' },
  { time: '09:24 AM - 10:54 AM', name: 'Udveg (Inauspicious)', nature: 'Bad', desc: 'Mental stress window' },
  { time: '10:54 AM - 12:24 PM', name: 'Char (Neutral)', nature: 'Neutral', desc: 'Good for journeys and travel' },
  { time: '12:24 PM - 01:54 PM', name: 'Labh (Gain)', nature: 'Good', desc: 'Commercial enterprise opening' },
  { time: '01:54 PM - 03:24 PM', name: 'Amrit (Nectar)', nature: 'Good', desc: 'Supreme auspicious muhurat' },
  { time: '03:24 PM - 04:54 PM', name: 'Kaal (Inauspicious)', nature: 'Bad', desc: 'Rahu Kaal overlap - pause work' }
];

const UPCOMING_FESTIVALS = [
  { name: 'Sharad Purnima', date: 'October 28, 2026', significance: 'Kheer offering under divine full moon light for health and Lakshmi grace' },
  { name: 'Karwa Chauth', date: 'November 01, 2026', significance: 'Sacred fast observed by spouses for marital longevity and prosperity' },
  { name: 'Dhanteras & Kuber Puja', date: 'November 10, 2026', significance: 'First day of Deepavali festival, welcoming health and purchasing metals' },
  { name: 'Diwali Lakshmi-Ganesh Puja', date: 'November 12, 2026', significance: 'Grand festival of lights and business accounts consecration' }
];

export const PanchangPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { city: appCity, setCity: setAppCity } = useApp();

  const queryDate = searchParams.get('date') || new Date().toISOString().split('T')[0];
  const queryCity = searchParams.get('city') || appCity || 'Dubai';

  const [date, setDate] = useState(queryDate);
  const [city, setCity] = useState(queryCity);

  const panchang = getPanchangForDate(date, city);

  const handleDateChange = (newDate: string) => {
    setDate(newDate);
    setSearchParams({ date: newDate, city });
  };

  const handleCityChange = (newCity: string) => {
    setCity(newCity);
    setAppCity(newCity);
    setSearchParams({ date, city: newCity });
  };

  return (
    <div className="min-h-screen bg-ivory py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-saffron-100 text-saffron-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Vedic Ephemeris & Panchangam</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900">
            Daily Hindu Panchang for {city}
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
            Five limbs of Vedic time: Tithi, Nakshatra, Yoga, Karana, and Vara with solar planetary positions calibrated for {city}, UAE coordinates.
          </p>
        </div>

        {/* Date & City Selector Control Bar */}
        <div className="bg-white rounded-3xl p-5 shadow-sm border border-gold-200 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            
            <div className="flex items-center gap-2 bg-ivory px-3 py-2 rounded-xl border border-gold-300 text-xs">
              <Calendar className="w-4 h-4 text-saffron-600" />
              <span className="font-bold text-charcoal-800">Date:</span>
              <input
                type="date"
                value={date}
                onChange={(e) => handleDateChange(e.target.value)}
                className="bg-transparent font-semibold text-charcoal-900 focus:outline-none cursor-pointer"
              />
            </div>

            <div className="flex items-center gap-2 bg-ivory px-3 py-2 rounded-xl border border-gold-300 text-xs">
              <MapPin className="w-4 h-4 text-maroon-700" />
              <span className="font-bold text-charcoal-800">City:</span>
              <select
                value={city}
                onChange={(e) => handleCityChange(e.target.value)}
                className="bg-transparent font-semibold text-charcoal-900 focus:outline-none cursor-pointer"
              >
                {CITIES_LIST.map(c => (
                  <option key={c.city} value={c.city}>
                    {c.city} ({c.country})
                  </option>
                ))}
              </select>
            </div>

          </div>

          <div className="text-xs text-charcoal-500 font-medium">
            Formatted: <strong className="text-maroon-900">{panchang.formattedDate}</strong>
          </div>
        </div>

        {/* Demo Disclaimer */}
        <div className="p-3 bg-amber-50 border border-amber-200 rounded-2xl text-xs text-amber-900 flex items-center gap-2">
          <Info className="w-4 h-4 text-amber-700 shrink-0" />
          <span>
            <strong>Astronomical Sample Notice:</strong> Panchang timings are calculated algorithmically for interface demonstration. For life-altering marriage or Griha Pravesh dates, always cross-verify with a personal family priest.
          </span>
        </div>

        {/* Core Panchang Limbs Grid */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-spiritual border border-gold-300 space-y-8">
          
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-gold-200">
            <div>
              <span className="text-[10px] text-charcoal-400 uppercase font-bold tracking-wider block">Lunar Month & Era</span>
              <h2 className="font-serif font-bold text-2xl text-charcoal-900">{panchang.hinduMonth}</h2>
              <p className="text-xs text-saffron-700 font-semibold">{panchang.season} • {panchang.paksha}</p>
            </div>

            <div className="flex items-center gap-6 text-xs text-charcoal-700 font-medium">
              <div className="flex items-center gap-2 p-3 bg-ivory rounded-2xl border border-gold-100">
                <Sun className="w-5 h-5 text-amber-500" />
                <div>
                  <span className="text-[10px] text-charcoal-400 uppercase font-bold block">Sunrise</span>
                  <strong>{panchang.sunrise}</strong>
                </div>
              </div>
              <div className="flex items-center gap-2 p-3 bg-ivory rounded-2xl border border-gold-100">
                <Moon className="w-5 h-5 text-indigo-400" />
                <div>
                  <span className="text-[10px] text-charcoal-400 uppercase font-bold block">Sunset</span>
                  <strong>{panchang.sunset}</strong>
                </div>
              </div>
            </div>
          </div>

          {/* 5 Angas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="p-4 rounded-2xl bg-ivory border border-gold-200 space-y-1">
              <span className="text-[10px] text-charcoal-400 uppercase font-bold tracking-wider">Tithi (Lunar Phase)</span>
              <p className="font-serif font-bold text-base text-maroon-900">{panchang.tithi}</p>
              <p className="text-[11px] text-charcoal-500">Governs prosperity & fasting vows</p>
            </div>

            <div className="p-4 rounded-2xl bg-ivory border border-gold-200 space-y-1">
              <span className="text-[10px] text-charcoal-400 uppercase font-bold tracking-wider">Nakshatra (Lunar Constellation)</span>
              <p className="font-serif font-bold text-base text-maroon-900">{panchang.nakshatra}</p>
              <p className="text-[11px] text-charcoal-500">Dictates mental vitality & rituals</p>
            </div>

            <div className="p-4 rounded-2xl bg-ivory border border-gold-200 space-y-1">
              <span className="text-[10px] text-charcoal-400 uppercase font-bold tracking-wider">Yoga (Sun-Moon Alignment)</span>
              <p className="font-serif font-bold text-base text-maroon-900">{panchang.yoga}</p>
              <p className="text-[11px] text-emerald-700 font-semibold">Positive spiritual resonance</p>
            </div>

            <div className="p-4 rounded-2xl bg-ivory border border-gold-200 space-y-1">
              <span className="text-[10px] text-charcoal-400 uppercase font-bold tracking-wider">Karana (Half Tithi)</span>
              <p className="font-serif font-bold text-base text-maroon-900">{panchang.karana}</p>
              <p className="text-[11px] text-charcoal-500">Favorable for vocational deeds</p>
            </div>

          </div>

          {/* Auspicious & Inauspicious Muhurats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-gold-200">
            <div className="p-5 rounded-2xl bg-emerald-50/80 border border-emerald-200 space-y-2">
              <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                <span>Abhijit Muhurat (Auspicious)</span>
              </div>
              <p className="font-serif text-lg font-bold text-emerald-950">
                {panchang.abhijitMuhurat}
              </p>
              <p className="text-xs text-emerald-800 leading-relaxed">
                The 8th Muhurat of the day, ruled by Lord Vishnu. Bestows triumph and protection for any deed commenced during this period.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-rose-50/80 border border-rose-200 space-y-2">
              <div className="flex items-center gap-2 text-rose-900 font-bold text-sm">
                <AlertTriangle className="w-5 h-5 text-rose-600" />
                <span>Rahu Kaal (Inauspicious)</span>
              </div>
              <p className="font-serif text-lg font-bold text-rose-950">
                {panchang.rahuKaal}
              </p>
              <p className="text-xs text-rose-800 leading-relaxed">
                Ruled by Rahu. Traditional wisdom recommends deferring major financial commitments or long outbound travels during these minutes.
              </p>
            </div>
          </div>

        </div>

        {/* Choghadiya Timings Table */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gold-200 space-y-4">
          <div className="border-b border-charcoal-100 pb-3">
            <h3 className="font-serif font-bold text-xl text-charcoal-900">
              Day Choghadiya Timings for {city}
            </h3>
            <p className="text-xs text-charcoal-500">
              Traditional seven-part daylight intervals used for immediate travel and ritual starts.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead>
                <tr className="border-b border-charcoal-200 text-charcoal-500 uppercase tracking-wider text-[10px]">
                  <th className="py-2.5 px-3">Time Slot</th>
                  <th className="py-2.5 px-3">Choghadiya</th>
                  <th className="py-2.5 px-3">Nature</th>
                  <th className="py-2.5 px-3">Recommendation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-charcoal-100">
                {CHOGHADIYA_TIMINGS.map((slot, i) => (
                  <tr key={i} className="hover:bg-gold-50/50">
                    <td className="py-3 px-3 font-semibold text-charcoal-900 whitespace-nowrap">{slot.time}</td>
                    <td className="py-3 px-3 font-bold text-maroon-900">{slot.name}</td>
                    <td className="py-3 px-3">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        slot.nature === 'Good'
                          ? 'bg-emerald-100 text-emerald-800'
                          : slot.nature === 'Bad'
                          ? 'bg-rose-100 text-rose-800'
                          : 'bg-charcoal-100 text-charcoal-800'
                      }`}>
                        {slot.nature}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-charcoal-600">{slot.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Upcoming Festivals Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gold-200 space-y-4">
          <div className="border-b border-charcoal-100 pb-3">
            <h3 className="font-serif font-bold text-xl text-charcoal-900">
              Upcoming Hindu Vrats & Festivals in UAE
            </h3>
            <p className="text-xs text-charcoal-500">
              Key sacred dates and observance guidelines for {panchang.hinduMonth}.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {UPCOMING_FESTIVALS.map((fest, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-ivory border border-gold-200 space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif font-bold text-sm text-maroon-900">{fest.name}</h4>
                  <span className="text-[11px] font-semibold text-saffron-700 bg-saffron-50 px-2.5 py-0.5 rounded-full border border-saffron-200">
                    {fest.date}
                  </span>
                </div>
                <p className="text-xs text-charcoal-600 leading-relaxed pt-1">
                  {fest.significance}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
