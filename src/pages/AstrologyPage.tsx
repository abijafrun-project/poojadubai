import React, { useState } from 'react';
import { ASTROLOGY_SERVICES } from '../data/astrologyData';
import { useApp } from '../context/AppContext';
import { 
  Sparkles, 
  Compass, 
  HeartHandshake, 
  Calendar, 
  ShieldCheck, 
  Check, 
  ArrowRight, 
  Info,
  Clock,
  User,
  PhoneCall
} from 'lucide-react';

export const AstrologyPage: React.FC = () => {
  const { formatPrice, showToast, user } = useApp();

  // Selected Service for Inquiry
  const [selectedServiceId, setSelectedServiceId] = useState<string>('kundli-birth-chart');
  
  // Form State
  const [name, setName] = useState(user?.name || 'Aarav Mehta');
  const [phone, setPhone] = useState(user?.phone || '+971 50 123 4567');
  const [birthDate, setBirthDate] = useState('1992-06-18');
  const [birthTime, setBirthTime] = useState('07:45');
  const [birthPlace, setBirthPlace] = useState('Dubai, UAE');
  const [specificConcern, setSpecificConcern] = useState('Career promotion timing and business expansion for 2026-2027.');
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const activeService = ASTROLOGY_SERVICES.find(s => s.id === selectedServiceId) || ASTROLOGY_SERVICES[0];

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    showToast('Astrology consultation inquiry submitted! Demo report generated below.', 'success');
  };

  return (
    <div className="min-h-screen bg-ivory py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-saffron-100 text-saffron-800 text-xs font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>Authentic Parashari & Jaimini Jyotish</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900">
            Vedic Astrology & Shubh Muhurat Services
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
            Consult experienced Jyotish Acharyas for accurate Janma Kundli analysis, marriage compatibility (Kundli Milan), dosha remedies, and auspicious Muhurat calculation in Dubai & worldwide.
          </p>
        </div>

        {/* Disclaimer */}
        <div className="p-3 bg-amber-50 border border-amber-200 rounded-2xl text-xs text-amber-900 flex items-center gap-2">
          <Info className="w-4 h-4 text-amber-700 shrink-0" />
          <span>
            <strong>Client Demonstration Notice:</strong> Astrological readings and chart forecasts provided here are illustrative sample representations for client interface demonstration.
          </span>
        </div>

        {/* Astrology Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ASTROLOGY_SERVICES.map(service => {
            const isSelected = service.id === selectedServiceId;
            return (
              <div
                key={service.id}
                className={`bg-white rounded-3xl p-6 border transition-all duration-300 flex flex-col justify-between group ${
                  isSelected
                    ? 'border-maroon-800 ring-2 ring-maroon-800 shadow-spiritual-lg'
                    : 'border-gold-200 shadow-sm hover:shadow-spiritual'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-saffron-700 uppercase tracking-wider flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {service.duration}
                    </span>
                    <span className="font-serif text-lg font-bold text-maroon-900">
                      {formatPrice(service.priceAED)}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-lg text-charcoal-900 group-hover:text-maroon-800 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-charcoal-600 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-charcoal-100 text-xs text-charcoal-700">
                    <p className="font-bold text-[11px] text-charcoal-900 uppercase">Key Benefits:</p>
                    {service.benefits.slice(0, 3).map((benefit, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-[11px]">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-gold-100">
                  <button
                    onClick={() => {
                      setSelectedServiceId(service.id);
                      setIsSubmitted(false);
                      const el = document.getElementById('astrology-form');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`w-full py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
                      isSelected
                        ? 'bg-maroon-800 text-white shadow'
                        : 'bg-ivory text-charcoal-800 border border-gold-300 hover:bg-gold-100'
                    }`}
                  >
                    {isSelected ? '✓ Selected for Inquiry' : 'Select Service'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Consultation Inquiry Form */}
        <div id="astrology-form" className="bg-white rounded-3xl p-6 sm:p-10 shadow-spiritual border border-gold-300">
          <div className="border-b border-gold-100 pb-4 mb-6">
            <span className="text-xs font-bold text-saffron-600 uppercase tracking-widest">
              Schedule Consultation
            </span>
            <h2 className="font-serif font-bold text-2xl text-charcoal-900 mt-1">
              Request Your {activeService.title}
            </h2>
            <p className="text-xs text-charcoal-500">
              Selected Service Fee: <strong className="text-maroon-900">{formatPrice(activeService.priceAED)}</strong> (Includes PDF chart & video session)
            </p>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleInquirySubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-charcoal-800">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-3 rounded-xl bg-ivory border border-gold-300 text-xs text-charcoal-900 focus:outline-none focus:border-maroon-800"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-bold text-charcoal-800">
                    WhatsApp Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full p-3 rounded-xl bg-ivory border border-gold-300 text-xs text-charcoal-900 focus:outline-none focus:border-maroon-800"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-bold text-charcoal-800">
                    Date of Birth <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    className="w-full p-3 rounded-xl bg-ivory border border-gold-300 text-xs text-charcoal-900 focus:outline-none focus:border-maroon-800"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-bold text-charcoal-800">
                    Exact Time of Birth (with AM/PM) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="time"
                    required
                    value={birthTime}
                    onChange={(e) => setBirthTime(e.target.value)}
                    className="w-full p-3 rounded-xl bg-ivory border border-gold-300 text-xs text-charcoal-900 focus:outline-none focus:border-maroon-800"
                  />
                </div>

              </div>

              <div className="space-y-1">
                <label className="block text-xs font-bold text-charcoal-800">
                  Place of Birth (City & Country) <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={birthPlace}
                  onChange={(e) => setBirthPlace(e.target.value)}
                  placeholder="e.g. Dubai, UAE or Mumbai, India"
                  className="w-full p-3 rounded-xl bg-ivory border border-gold-300 text-xs text-charcoal-900 focus:outline-none focus:border-maroon-800"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-bold text-charcoal-800">
                  Specific Questions or Life Areas (Career, Marriage, Health)
                </label>
                <textarea
                  rows={3}
                  value={specificConcern}
                  onChange={(e) => setSpecificConcern(e.target.value)}
                  className="w-full p-3 rounded-xl bg-ivory border border-gold-300 text-xs text-charcoal-900 focus:outline-none focus:border-maroon-800"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-maroon-800 to-maroon-900 hover:from-maroon-900 hover:to-maroon-950 text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-gold-300" />
                <span>Submit Inquiry & Generate Sample Report</span>
              </button>
            </form>
          ) : (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="p-4 bg-emerald-50 border border-emerald-300 rounded-2xl flex items-center gap-3 text-xs text-emerald-900">
                <Check className="w-5 h-5 text-emerald-600 shrink-0" />
                <div>
                  <p className="font-bold">Inquiry Received for {name}!</p>
                  <p className="text-[11px] text-emerald-700">
                    A senior Jyotish Acharya has been notified. Below is an illustrative sample chart calculation.
                  </p>
                </div>
              </div>

              {/* Sample Kundli Output Card */}
              <div className="p-6 bg-ivory rounded-2xl border border-gold-300 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-gold-200">
                  <div>
                    <h3 className="font-serif font-bold text-base text-charcoal-900">
                      Sample Kundli Overview (Illustrative Demo)
                    </h3>
                    <p className="text-xs text-charcoal-500">
                      Calculated for {birthPlace} • {birthDate} at {birthTime}
                    </p>
                  </div>
                  <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-gold-200 text-charcoal-800">
                    Parashara System
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div className="p-2.5 bg-white rounded-xl border border-gold-100">
                    <span className="text-charcoal-400 text-[10px] block uppercase font-bold">Lagna (Ascendant)</span>
                    <strong className="text-maroon-900">Karka (Cancer)</strong>
                  </div>
                  <div className="p-2.5 bg-white rounded-xl border border-gold-100">
                    <span className="text-charcoal-400 text-[10px] block uppercase font-bold">Moon Sign (Rashi)</span>
                    <strong className="text-maroon-900">Vrishabha (Taurus)</strong>
                  </div>
                  <div className="p-2.5 bg-white rounded-xl border border-gold-100">
                    <span className="text-charcoal-400 text-[10px] block uppercase font-bold">Janma Nakshatra</span>
                    <strong className="text-maroon-900">Rohini (Pada 2)</strong>
                  </div>
                  <div className="p-2.5 bg-white rounded-xl border border-gold-100">
                    <span className="text-charcoal-400 text-[10px] block uppercase font-bold">Current Mahadasha</span>
                    <strong className="text-maroon-900">Jupiter (Guru)</strong>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-xl border border-gold-200 text-xs text-charcoal-700 space-y-1.5 leading-relaxed">
                  <p className="font-bold text-charcoal-900">Astrological Commentary:</p>
                  <p>
                    Moon exalted in Taurus bestows sharp intuitive acumen and emotional resilience. The current Jupiter Mahadasha indicates substantial career expansion and potential real-estate or residential transitions in late 2026.
                  </p>
                  <p className="text-[11px] text-saffron-800 font-semibold pt-1">
                    Recommended Upaya: Performing a Brihaspati or Satyanarayan Katha on Thursdays to augment professional prosperity.
                  </p>
                </div>

                <div className="flex gap-2 justify-end pt-2">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-4 py-2 bg-charcoal-800 text-white rounded-xl text-xs font-semibold hover:bg-charcoal-900"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
