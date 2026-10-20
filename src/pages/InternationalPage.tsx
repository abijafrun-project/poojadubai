import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp, CURRENCIES } from '../context/AppContext';
import { 
  Globe, 
  MapPin, 
  Check, 
  ShieldCheck, 
  Video, 
  Home, 
  PhoneCall, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface CountryInfo {
  name: string;
  code: string;
  flag: string;
  cities: string[];
  recommendedCurrency: string;
  hasInPersonPandits: boolean;
  hasLiveOnlineStream: boolean;
  localHub: string;
}

const COUNTRIES_LIST: CountryInfo[] = [
  {
    name: 'United Arab Emirates',
    code: 'UAE',
    flag: '🇦🇪',
    cities: ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Ras Al Khaimah'],
    recommendedCurrency: 'AED',
    hasInPersonPandits: true,
    hasLiveOnlineStream: true,
    localHub: 'Al Fahidi & Downtown Dubai'
  },
  {
    name: 'United States',
    code: 'USA',
    flag: '🇺🇸',
    cities: ['New York / NJ', 'Bay Area / San Francisco', 'Dallas', 'Chicago', 'Atlanta'],
    recommendedCurrency: 'USD',
    hasInPersonPandits: true,
    hasLiveOnlineStream: true,
    localHub: 'Edison, NJ & Fremont, CA'
  },
  {
    name: 'United Kingdom',
    code: 'UK',
    flag: '🇬🇧',
    cities: ['London (Wembley, Harrow)', 'Leicester', 'Birmingham', 'Manchester'],
    recommendedCurrency: 'GBP',
    hasInPersonPandits: true,
    hasLiveOnlineStream: true,
    localHub: 'Wembley, London'
  },
  {
    name: 'Singapore',
    code: 'SG',
    flag: '🇸🇬',
    cities: ['Singapore City', 'Little India', 'Jurong', 'Tampines'],
    recommendedCurrency: 'SGD',
    hasInPersonPandits: true,
    hasLiveOnlineStream: true,
    localHub: 'Serangoon Road'
  },
  {
    name: 'Australia',
    code: 'AU',
    flag: '🇦🇺',
    cities: ['Sydney (Parramatta, Harris Park)', 'Melbourne', 'Brisbane', 'Perth'],
    recommendedCurrency: 'AUD',
    hasInPersonPandits: true,
    hasLiveOnlineStream: true,
    localHub: 'Parramatta, Sydney'
  },
  {
    name: 'Canada',
    code: 'CA',
    flag: '🇨🇦',
    cities: ['Toronto (Brampton, Mississauga)', 'Vancouver (Surrey)', 'Calgary'],
    recommendedCurrency: 'CAD',
    hasInPersonPandits: true,
    hasLiveOnlineStream: true,
    localHub: 'Greater Toronto Area'
  },
  {
    name: 'Malaysia',
    code: 'MY',
    flag: '🇲🇾',
    cities: ['Kuala Lumpur', 'Batu Caves', 'Penang', 'Johor Bahru'],
    recommendedCurrency: 'USD',
    hasInPersonPandits: true,
    hasLiveOnlineStream: true,
    localHub: 'Brickfields, KL'
  },
  {
    name: 'New Zealand',
    code: 'NZ',
    flag: '🇳🇿',
    cities: ['Auckland', 'Wellington', 'Christchurch'],
    recommendedCurrency: 'AUD',
    hasInPersonPandits: false,
    hasLiveOnlineStream: true,
    localHub: 'Online Temple Sanctum'
  },
  {
    name: 'Germany',
    code: 'DE',
    flag: '🇩🇪',
    cities: ['Frankfurt', 'Berlin', 'Munich', 'Hamburg'],
    recommendedCurrency: 'EUR',
    hasInPersonPandits: false,
    hasLiveOnlineStream: true,
    localHub: 'European E-Puja Network'
  },
  {
    name: 'Netherlands',
    code: 'NL',
    flag: '🇳🇱',
    cities: ['Amsterdam', 'The Hague', 'Rotterdam', 'Eindhoven'],
    recommendedCurrency: 'EUR',
    hasInPersonPandits: false,
    hasLiveOnlineStream: true,
    localHub: 'European E-Puja Network'
  }
];

export const InternationalPage: React.FC = () => {
  const { country, setCountry, city, setCity, currency, setCurrency, showToast } = useApp();
  const navigate = useNavigate();

  const [selectedCountryName, setSelectedCountryName] = useState<string>(country || 'United Arab Emirates');
  const activeCountry = COUNTRIES_LIST.find(c => c.name === selectedCountryName) || COUNTRIES_LIST[0];
  const [selectedCityName, setSelectedCityName] = useState<string>(activeCountry.cities[0]);

  const handleCountrySwitch = (countryName: string) => {
    setSelectedCountryName(countryName);
    const target = COUNTRIES_LIST.find(c => c.name === countryName);
    if (target) {
      setSelectedCityName(target.cities[0]);
    }
  };

  const handleFindServices = () => {
    setCountry(activeCountry.name);
    setCity(selectedCityName);
    if (CURRENCIES[activeCountry.recommendedCurrency]) {
      setCurrency(activeCountry.recommendedCurrency);
    }
    showToast(`Active region set to ${selectedCityName}, ${activeCountry.name}!`, 'success');
    navigate('/pujas');
  };

  return (
    <div className="min-h-screen bg-ivory py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-saffron-100 text-saffron-800 text-xs font-bold uppercase tracking-wider">
            <Globe className="w-3.5 h-3.5" />
            <span>Worldwide Spiritual Network</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900">
            Global Hindu Puja & Pandit Services
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
            Headquartered in Dubai, UAE, DivyaPuja connects diaspora Hindu families across 10 countries with authentic Vedic pandits, local currency options, and high-definition E-Pujas.
          </p>
        </div>

        {/* Country & City Selector Hub Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-spiritual border-2 border-gold-300 space-y-6">
          <div className="border-b border-gold-200 pb-4">
            <h2 className="font-serif font-bold text-xl text-charcoal-900">
              Select Your Country & Region
            </h2>
            <p className="text-xs text-charcoal-500">
              Switching your region configures local pricing, available pandits, and time zone coordination.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            
            {/* Country Selector Column */}
            <div className="md:col-span-5 space-y-2">
              <label className="block text-xs font-bold text-charcoal-800 uppercase tracking-wider">
                Select Country (10 Supported)
              </label>
              <div className="space-y-1.5 max-h-80 overflow-y-auto pr-1">
                {COUNTRIES_LIST.map(item => (
                  <button
                    key={item.name}
                    onClick={() => handleCountrySwitch(item.name)}
                    className={`w-full p-3 rounded-xl border text-left text-xs font-semibold flex items-center justify-between transition-all ${
                      selectedCountryName === item.name
                        ? 'border-maroon-800 bg-saffron-50/70 text-maroon-900 ring-2 ring-maroon-800 shadow-sm'
                        : 'border-gold-200 bg-ivory text-charcoal-700 hover:bg-gold-50'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-xl">{item.flag}</span>
                      <span>{item.name}</span>
                    </div>
                    <span className="text-[10px] text-charcoal-400 font-mono">{item.code}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Region Details & City Picker Column */}
            <div className="md:col-span-7 bg-ivory rounded-2xl p-6 border border-gold-200 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-gold-200">
                <div className="flex items-center gap-2">
                  <span className="text-3xl">{activeCountry.flag}</span>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-charcoal-900">{activeCountry.name}</h3>
                    <p className="text-xs text-charcoal-500">Hub: {activeCountry.localHub}</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-maroon-900 bg-gold-100 px-3 py-1 rounded-full border border-gold-300">
                  Currency: {activeCountry.recommendedCurrency}
                </span>
              </div>

              {/* City Selection */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-charcoal-800">
                  Select Local City / Metro Area:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {activeCountry.cities.map(cityName => (
                    <button
                      key={cityName}
                      onClick={() => setSelectedCityName(cityName)}
                      className={`p-2.5 rounded-xl border text-xs font-semibold transition-all ${
                        selectedCityName === cityName
                          ? 'border-maroon-800 bg-white text-maroon-900 shadow-sm ring-1 ring-maroon-800'
                          : 'border-gold-200 bg-white/70 text-charcoal-700 hover:bg-white'
                      }`}
                    >
                      {cityName}
                    </button>
                  ))}
                </div>
              </div>

              {/* Service Availability Notice */}
              <div className="space-y-2 pt-2 border-t border-gold-200/80 text-xs text-charcoal-700">
                <p className="font-bold text-charcoal-900">Service Availability Notice:</p>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    {activeCountry.hasInPersonPandits
                      ? `In-person Gurukul-trained priests available for doorstep visits in ${selectedCityName}.`
                      : `In-person visits by prior appointment; full live interactive E-Puja available.`}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Live HD 2-Way Zoom Sanctum broadcast with family Gotra & Nakshatra sankalp.</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Consecrated prasad dispatch to residential addresses.</span>
                </div>
              </div>

              {/* Find Services Button */}
              <div className="pt-2">
                <button
                  onClick={handleFindServices}
                  className="w-full py-3.5 bg-gradient-to-r from-maroon-800 to-maroon-900 hover:from-maroon-900 hover:to-maroon-950 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-gold-300" />
                  <span>Find Available Services in {selectedCityName}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* Global Diaspora Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl p-6 border border-gold-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-maroon-100 text-maroon-800 flex items-center justify-center font-bold">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-base text-charcoal-900">
              Timezone Synchronized
            </h3>
            <p className="text-xs text-charcoal-600 leading-relaxed">
              Our astrologers calculate Shubh Muhurats adjusted precisely for Gulf Standard Time (GST), Eastern Time (ET), British Summer Time (BST), and Australian Eastern Time (AEST).
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-gold-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-saffron-100 text-saffron-700 flex items-center justify-center font-bold">
              <Video className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-base text-charcoal-900">
              Interactive E-Puja Sanctum
            </h3>
            <p className="text-xs text-charcoal-600 leading-relaxed">
              Family members living in different continents can join the same live consecrated ritual with private Zoom screen links and synchronized prayer mantras.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-gold-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-base text-charcoal-900">
              Transparent Local Pricing
            </h3>
            <p className="text-xs text-charcoal-600 leading-relaxed">
              Easily view indicative fees in AED, USD, GBP, EUR, INR, CAD, AUD, or SGD with zero hidden platform charges.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
