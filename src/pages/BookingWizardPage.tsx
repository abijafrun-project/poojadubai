import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { PUJAS_DATA } from '../data/pujasData';
import { useApp } from '../context/AppContext';
import { 
  Check, 
  ChevronRight, 
  ChevronLeft, 
  Sparkles, 
  Calendar, 
  Clock, 
  MapPin, 
  Languages, 
  PackageCheck, 
  User, 
  CheckCircle2, 
  AlertCircle,
  ShieldCheck,
  Home,
  Video,
  Building
} from 'lucide-react';

const LANGUAGES_LIST = [
  'Hindi', 'English', 'Sanskrit', 'Tamil', 'Telugu', 
  'Kannada', 'Bengali', 'Marathi', 'Gujarati'
];

const TIME_SLOTS = [
  { id: 'morning-brahma', label: '06:00 AM - 08:30 AM', note: 'Brahma Muhurat (Most Auspicious)' },
  { id: 'morning-standard', label: '09:00 AM - 12:30 PM', note: 'Standard Morning Abhijit Window' },
  { id: 'afternoon', label: '01:30 PM - 04:30 PM', note: 'Afternoon Puja Slot' },
  { id: 'evening-sandhya', label: '05:30 PM - 08:30 PM', note: 'Pradosh Sandhya Aarti Window' },
  { id: 'night', label: '08:30 PM - 10:30 PM', note: 'Nishita Kaal (Special Havans)' }
];

export const BookingWizardPage: React.FC = () => {
  const { pujaId } = useParams<{ pujaId?: string }>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const { city: defaultCity, country: defaultCountry, formatPrice, addBooking, user } = useApp();

  // Wizard Step (1 through 8)
  const [currentStep, setCurrentStep] = useState<number>(() => {
    // If puja is already specified in URL, we can start at step 2 or stay at 1 with it selected
    return pujaId ? 2 : 1;
  });

  // Step 1: Selected Puja
  const initialPuja = PUJAS_DATA.find(p => p.id === pujaId) || PUJAS_DATA[0];
  const [selectedPuja, setSelectedPuja] = useState(initialPuja);

  // Step 2: Service Type
  const [serviceType, setServiceType] = useState<'At Home' | 'Online E-Puja' | 'Other Venue'>('At Home');

  // Step 3: Date & Preferred Time
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDateStr = tomorrow.toISOString().split('T')[0];

  const [date, setDate] = useState<string>(minDateStr);
  const [timeSlot, setTimeSlot] = useState<string>(TIME_SLOTS[1].label);

  // Step 4: Location Details
  const [city, setCity] = useState<string>(defaultCity || 'Dubai');
  const [address, setAddress] = useState<string>('Apartment 1402, Marina Gate 2, Dubai Marina');
  const [buildingType, setBuildingType] = useState<string>('Apartment / Flat');

  // Step 5: Language
  const [selectedLanguage, setSelectedLanguage] = useState<string>('Hindi');

  // Step 6: Package
  const packageParam = searchParams.get('package') || 'pandit-samagri';
  const [selectedPackageId, setSelectedPackageId] = useState<string>(packageParam);

  // Step 7: Devotee Contact Information
  const [fullName, setFullName] = useState<string>(user?.name || 'Rakshmi');
  const [phone, setPhone] = useState<string>(user?.phone || '+971 50 123 4567');
  const [email, setEmail] = useState<string>(user?.email || 'aarav.mehta@example.com');
  const [gotra, setGotra] = useState<string>('Kashyapa (Optional)');
  const [specialInstructions, setSpecialInstructions] = useState<string>(
    'Please advise the building security at reception. Low-smoke havan preferred.'
  );

  // Validation Error state
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Sync selected puja if URL param changes
  useEffect(() => {
    if (pujaId) {
      const match = PUJAS_DATA.find(p => p.id === pujaId);
      if (match) setSelectedPuja(match);
    }
  }, [pujaId]);

  // Selected package details
  const currentPackage = selectedPuja.packages.find(p => p.id === selectedPackageId) || selectedPuja.packages[1] || selectedPuja.packages[0];

  // Pricing calculations
  const basePriceAED = currentPackage.priceAED;
  const platformFeeAED = 0; // No platform fee in demo
  const totalAED = basePriceAED + platformFeeAED;

  // Step validation before proceeding
  const validateCurrentStep = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (currentStep === 1) {
      if (!selectedPuja) newErrors.puja = 'Please select a sacred puja to continue.';
    } else if (currentStep === 2) {
      if (!serviceType) newErrors.serviceType = 'Please choose a ceremony service format.';
    } else if (currentStep === 3) {
      if (!date) newErrors.date = 'Please select an auspicious date.';
      if (!timeSlot) newErrors.timeSlot = 'Please select a preferred Muhurat time slot.';
    } else if (currentStep === 4) {
      if (serviceType !== 'Online E-Puja') {
        if (!city.trim()) newErrors.city = 'Please enter your city in UAE.';
        if (!address.trim()) newErrors.address = 'Please provide full residential/venue address.';
      }
    } else if (currentStep === 5) {
      if (!selectedLanguage) newErrors.language = 'Please select a preferred ritual language.';
    } else if (currentStep === 6) {
      if (!selectedPackageId) newErrors.package = 'Please choose a package.';
    } else if (currentStep === 7) {
      if (!fullName.trim()) newErrors.fullName = 'Full Name is required.';
      if (!phone.trim()) newErrors.phone = 'Contact Phone Number is required.';
      if (!email.trim() || !email.includes('@')) newErrors.email = 'Valid Email Address is required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateCurrentStep()) {
      window.scrollTo({ top: 120, behavior: 'smooth' });
      setCurrentStep(prev => Math.min(prev + 1, 8));
    }
  };

  const handlePrev = () => {
    setErrors({});
    window.scrollTo({ top: 120, behavior: 'smooth' });
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmitBooking = () => {
    const finalBooking = addBooking({
      pujaId: selectedPuja.id,
      pujaTitle: selectedPuja.title,
      pujaImage: selectedPuja.image,
      serviceType,
      date,
      timeSlot,
      city: serviceType === 'Online E-Puja' ? 'Online Video Stream' : city,
      address: serviceType === 'Online E-Puja' ? 'Live Interactive Zoom Stream' : address,
      country: defaultCountry,
      language: selectedLanguage,
      packageId: currentPackage.id,
      packageName: currentPackage.name,
      priceAED: totalAED,
      currency: 'AED',
      customerName: fullName,
      phone,
      email,
      specialInstructions: `${gotra ? `Gotra: ${gotra}. ` : ''}${specialInstructions}`,
      status: 'Confirmed',
      isOnlineStream: serviceType === 'Online E-Puja'
    });

    navigate(`/booking-confirmation/${finalBooking.bookingRef}`);
  };

  const stepsHeader = [
    { num: 1, label: 'Puja' },
    { num: 2, label: 'Format' },
    { num: 3, label: 'Date' },
    { num: 4, label: 'Venue' },
    { num: 5, label: 'Language' },
    { num: 6, label: 'Package' },
    { num: 7, label: 'Devotee' },
    { num: 8, label: 'Review' }
  ];

  return (
    <div className="min-h-screen bg-ivory py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Wizard Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-saffron-100 text-saffron-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>8-Step Sacred Vedic Booking</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-900">
            Book Your Puja Ceremony in Dubai
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-500">
            Customize your ceremony with transparent AED pricing, authentic samagri, and verified scholars.
          </p>
        </div>

        {/* Progress Bar & Steps Tabs */}
        <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-sm border border-gold-200">
          
          {/* Visual Step Dots */}
          <div className="grid grid-cols-8 gap-1 items-center relative">
            {stepsHeader.map((step) => {
              const isCompleted = currentStep > step.num;
              const isCurrent = currentStep === step.num;

              return (
                <button
                  key={step.num}
                  onClick={() => {
                    if (step.num < currentStep) setCurrentStep(step.num);
                  }}
                  disabled={step.num > currentStep}
                  className="flex flex-col items-center group focus:outline-none"
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-all ${
                      isCompleted
                        ? 'bg-emerald-600 text-white shadow-sm'
                        : isCurrent
                        ? 'bg-maroon-800 text-white ring-4 ring-gold-300 shadow-md scale-110'
                        : 'bg-ivory text-charcoal-400 border border-charcoal-200'
                    }`}
                  >
                    {isCompleted ? <Check className="w-4 h-4" /> : step.num}
                  </div>
                  <span
                    className={`text-[10px] mt-1 hidden sm:block font-medium truncate max-w-[60px] ${
                      isCurrent ? 'font-bold text-maroon-900' : 'text-charcoal-400'
                    }`}
                  >
                    {step.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Progress Indicator Bar */}
          <div className="w-full bg-gold-100 h-2 rounded-full mt-4 overflow-hidden">
            <div
              className="bg-gradient-to-r from-maroon-800 to-saffron-500 h-full transition-all duration-300 rounded-full"
              style={{ width: `${(currentStep / 8) * 100}%` }}
            />
          </div>

          <div className="flex justify-between items-center text-[11px] text-charcoal-400 mt-2 px-1">
            <span>Step {currentStep} of 8: <strong>{stepsHeader[currentStep - 1].label}</strong></span>
            <span>{Math.round((currentStep / 8) * 100)}% Completed</span>
          </div>

        </div>

        {/* Wizard Main Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-spiritual-lg border border-gold-300">
          
          {/* STEP 1: Choose a Puja */}
          {currentStep === 1 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="border-b border-gold-100 pb-3">
                <h2 className="font-serif font-bold text-xl text-charcoal-900">
                  Step 1: Choose Your Sacred Ceremony
                </h2>
                <p className="text-xs text-charcoal-500">
                  Select the Vedic ritual you wish to perform. You can filter by category.
                </p>
              </div>

              {errors.puja && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  <span>{errors.puja}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[460px] overflow-y-auto p-1">
                {PUJAS_DATA.map(puja => (
                  <button
                    key={puja.id}
                    type="button"
                    onClick={() => setSelectedPuja(puja)}
                    className={`flex items-start gap-3 p-3.5 rounded-2xl border text-left transition-all ${
                      selectedPuja.id === puja.id
                        ? 'border-maroon-800 bg-saffron-50/70 shadow-sm ring-2 ring-maroon-800'
                        : 'border-gold-200 bg-ivory/50 hover:border-gold-400 hover:bg-gold-50/40'
                    }`}
                  >
                    <img
                      src={puja.image}
                      alt={puja.title}
                      className="w-14 h-14 rounded-xl object-cover shrink-0 border border-gold-200"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase text-saffron-700">{puja.categoryLabel}</span>
                        <span className="text-xs font-bold text-maroon-900">{formatPrice(puja.priceAED)}</span>
                      </div>
                      <h3 className="font-serif font-bold text-sm text-charcoal-900 truncate">{puja.title}</h3>
                      <p className="text-[11px] text-charcoal-500 line-clamp-1">{puja.subtitle}</p>
                      <span className="text-[10px] text-charcoal-400 mt-1 block">⏱ {puja.duration}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: Choose Service Type */}
          {currentStep === 2 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="border-b border-gold-100 pb-3">
                <h2 className="font-serif font-bold text-xl text-charcoal-900">
                  Step 2: Choose Service Format
                </h2>
                <p className="text-xs text-charcoal-500">
                  Select whether you would like the priest to visit your venue or conduct a sanctum live E-Puja.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                
                <button
                  type="button"
                  onClick={() => setServiceType('At Home')}
                  className={`p-5 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                    serviceType === 'At Home'
                      ? 'border-maroon-800 bg-saffron-50/80 shadow-spiritual ring-2 ring-maroon-800'
                      : 'border-gold-200 bg-ivory hover:border-gold-400'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-maroon-800 text-white flex items-center justify-center shadow">
                      <Home className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-base text-charcoal-900">At Home Ceremony</h3>
                      <p className="text-xs text-charcoal-600 mt-1">
                        Our verified Vedic Pandit arrives at your villa or apartment in Dubai/UAE with authentic ritual items.
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] text-emerald-800 font-bold bg-emerald-100 px-2 py-0.5 rounded-full mt-4 inline-block">
                    Popular in UAE
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setServiceType('Online E-Puja')}
                  className={`p-5 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                    serviceType === 'Online E-Puja'
                      ? 'border-maroon-800 bg-saffron-50/80 shadow-spiritual ring-2 ring-maroon-800'
                      : 'border-gold-200 bg-ivory hover:border-gold-400'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-saffron-600 text-white flex items-center justify-center shadow">
                      <Video className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-base text-charcoal-900">Live Online E-Puja</h3>
                      <p className="text-xs text-charcoal-600 mt-1">
                        Witness the ritual live from the temple sanctum via private 2-way Zoom video, with personalized Gotra Sankalp.
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] text-saffron-800 font-bold bg-saffron-100 px-2 py-0.5 rounded-full mt-4 inline-block">
                    Global Participation
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setServiceType('Other Venue')}
                  className={`p-5 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                    serviceType === 'Other Venue'
                      ? 'border-maroon-800 bg-saffron-50/80 shadow-spiritual ring-2 ring-maroon-800'
                      : 'border-gold-200 bg-ivory hover:border-gold-400'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-charcoal-800 text-white flex items-center justify-center shadow">
                      <Building className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-base text-charcoal-900">Commercial / Venue</h3>
                      <p className="text-xs text-charcoal-600 mt-1">
                        Ideal for corporate offices in DIFC, community banquet halls, retail shop openings, or outdoor resort weddings.
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] text-charcoal-700 font-bold bg-charcoal-100 px-2 py-0.5 rounded-full mt-4 inline-block">
                    Corporate & Venues
                  </span>
                </button>

              </div>
            </div>
          )}

          {/* STEP 3: Date & Preferred Time */}
          {currentStep === 3 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="border-b border-gold-100 pb-3">
                <h2 className="font-serif font-bold text-xl text-charcoal-900">
                  Step 3: Select Date & Auspicious Muhurat
                </h2>
                <p className="text-xs text-charcoal-500">
                  Choose your ceremony date and preferred timing window. Our astrologers verify alignment with Dubai sunrise.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Date Picker */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-charcoal-800 uppercase tracking-wider">
                    Ceremony Date <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      min={minDateStr}
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full p-3.5 rounded-2xl bg-ivory border border-gold-300 text-sm font-semibold text-charcoal-900 focus:outline-none focus:border-maroon-800"
                    />
                  </div>
                  <p className="text-[11px] text-charcoal-500">
                    📅 We recommend booking at least 24 hours in advance to secure senior Acharyas.
                  </p>
                </div>

                {/* Time Slot Picker */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-charcoal-800 uppercase tracking-wider">
                    Preferred Timing Window <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-2">
                    {TIME_SLOTS.map(slot => (
                      <button
                        key={slot.id}
                        type="button"
                        onClick={() => setTimeSlot(slot.label)}
                        className={`w-full p-3 rounded-xl border text-left text-xs flex items-center justify-between transition-colors ${
                          timeSlot === slot.label
                            ? 'border-maroon-800 bg-saffron-50 text-maroon-900 font-bold ring-1 ring-maroon-800'
                            : 'border-gold-200 bg-ivory text-charcoal-700 hover:bg-gold-50'
                        }`}
                      >
                        <div>
                          <p className="font-bold">{slot.label}</p>
                          <p className="text-[10px] text-charcoal-500">{slot.note}</p>
                        </div>
                        {timeSlot === slot.label && <Check className="w-4 h-4 text-maroon-800" />}
                      </button>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* STEP 4: City, Address, and Location */}
          {currentStep === 4 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="border-b border-gold-100 pb-3">
                <h2 className="font-serif font-bold text-xl text-charcoal-900">
                  Step 4: Location & Address Details
                </h2>
                <p className="text-xs text-charcoal-500">
                  {serviceType === 'Online E-Puja'
                    ? 'Enter your residential city for Vedic Sankalp invocation during the live broadcast.'
                    : 'Provide the exact address in Dubai or UAE where the priest should arrive.'}
                </p>
              </div>

              {serviceType === 'Online E-Puja' ? (
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl space-y-2 text-xs text-emerald-900">
                  <div className="flex items-center gap-2 font-bold text-sm">
                    <Video className="w-4 h-4 text-emerald-700" />
                    <span>Digital Live E-Puja Stream</span>
                  </div>
                  <p>
                    No physical home visit required. A private HD Zoom link will be sent to your email. Please ensure you provide your residential city for the geographic Vedic Sankalp statement (Desha & Kaala).
                  </p>
                  <div className="pt-2">
                    <label className="block text-xs font-bold text-charcoal-800 uppercase">Your Current City</label>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="e.g. Dubai, London, New York"
                      className="w-full mt-1 p-3 rounded-xl bg-white border border-gold-300 text-xs text-charcoal-900"
                    />
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-charcoal-800">
                        City / Emirate <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full p-3 rounded-xl bg-ivory border border-gold-300 text-xs font-semibold text-charcoal-900 focus:outline-none"
                      >
                        <option value="Dubai">Dubai</option>
                        <option value="Abu Dhabi">Abu Dhabi</option>
                        <option value="Sharjah">Sharjah</option>
                        <option value="Ajman">Ajman</option>
                        <option value="Ras Al Khaimah">Ras Al Khaimah</option>
                        <option value="Fujairah">Fujairah</option>
                        <option value="Umm Al Quwain">Umm Al Quwain</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-charcoal-800">
                        Premises Type
                      </label>
                      <select
                        value={buildingType}
                        onChange={(e) => setBuildingType(e.target.value)}
                        className="w-full p-3 rounded-xl bg-ivory border border-gold-300 text-xs font-semibold text-charcoal-900 focus:outline-none"
                      >
                        <option value="Apartment / Flat">Apartment / High-rise Flat</option>
                        <option value="Villa / Townhouse">Villa / Townhouse</option>
                        <option value="Corporate Office">Commercial / Corporate Office</option>
                        <option value="Banquet / Hotel Venue">Banquet / Hotel Venue</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-charcoal-800">
                      Full Address & Landmark <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={3}
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="e.g., Flat 1402, Marina Gate 2, Dubai Marina (Near Tram Station)"
                      className="w-full p-3 rounded-xl bg-ivory border border-gold-300 text-xs text-charcoal-900 focus:outline-none focus:border-maroon-800"
                    />
                    {errors.address && <p className="text-[11px] text-red-600">{errors.address}</p>}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* STEP 5: Select Preferred Language */}
          {currentStep === 5 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="border-b border-gold-100 pb-3">
                <h2 className="font-serif font-bold text-xl text-charcoal-900">
                  Step 5: Select Preferred Ritual Language
                </h2>
                <p className="text-xs text-charcoal-500">
                  Mantras are chanted in Sanskrit. The priest will narrate the Katha, instructions, and blessings in your chosen language.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {LANGUAGES_LIST.map(lang => (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => setSelectedLanguage(lang)}
                    className={`p-3.5 rounded-2xl border text-center transition-all ${
                      selectedLanguage === lang
                        ? 'border-maroon-800 bg-saffron-50 text-maroon-900 font-bold ring-2 ring-maroon-800 shadow-sm'
                        : 'border-gold-200 bg-ivory text-charcoal-700 hover:bg-gold-50'
                    }`}
                  >
                    <Languages className="w-5 h-5 mx-auto mb-1.5 text-saffron-600" />
                    <span className="text-xs font-bold">{lang}</span>
                  </button>
                ))}
              </div>

              <div className="p-3 bg-gold-50 border border-gold-200 rounded-xl text-xs text-charcoal-600">
                💡 <strong>Bilingual Service:</strong> All of our priests also speak English to ensure children and global guests understand each ritual.
              </div>
            </div>
          )}

          {/* STEP 6: Select Package */}
          {currentStep === 6 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="border-b border-gold-100 pb-3">
                <h2 className="font-serif font-bold text-xl text-charcoal-900">
                  Step 6: Select Ceremony Package
                </h2>
                <p className="text-xs text-charcoal-500">
                  Pick between Pandit Only, complete samagri included, or grand turnkey arrangements.
                </p>
              </div>

              <div className="space-y-3">
                {selectedPuja.packages.map(pkg => (
                  <button
                    key={pkg.id}
                    type="button"
                    onClick={() => setSelectedPackageId(pkg.id)}
                    className={`w-full p-4 rounded-2xl border text-left transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                      selectedPackageId === pkg.id
                        ? 'border-maroon-800 bg-saffron-50/70 ring-2 ring-maroon-800 shadow-sm'
                        : 'border-gold-200 bg-ivory hover:border-gold-400'
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-serif font-bold text-base text-charcoal-900">{pkg.name}</h3>
                        {pkg.popular && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-maroon-800 text-white">
                            Recommended
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-charcoal-600">{pkg.description}</p>
                      <div className="flex flex-wrap gap-2 pt-1 text-[11px] text-emerald-800">
                        {pkg.features.slice(0, 3).map((f, i) => (
                          <span key={i} className="inline-flex items-center gap-1">
                            <Check className="w-3 h-3 text-emerald-600" />
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="text-right sm:shrink-0">
                      <span className="text-[10px] text-charcoal-400 uppercase font-bold block">Fee (AED)</span>
                      <span className="font-serif text-2xl font-extrabold text-maroon-900">
                        {formatPrice(pkg.priceAED)}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 7: Enter Devotee Information */}
          {currentStep === 7 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="border-b border-gold-100 pb-3">
                <h2 className="font-serif font-bold text-xl text-charcoal-900">
                  Step 7: Devotee & Contact Information
                </h2>
                <p className="text-xs text-charcoal-500">
                  Provide your details for priest allocation and Vedic Sankalp coordination.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-charcoal-800">
                    Host / Devotee Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Aarav Mehta"
                    className="w-full p-3 rounded-xl bg-ivory border border-gold-300 text-xs text-charcoal-900 focus:outline-none focus:border-maroon-800"
                  />
                  {errors.fullName && <p className="text-[11px] text-red-600">{errors.fullName}</p>}
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-bold text-charcoal-800">
                    WhatsApp / Contact Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+971 50 123 4567"
                    className="w-full p-3 rounded-xl bg-ivory border border-gold-300 text-xs text-charcoal-900 focus:outline-none focus:border-maroon-800"
                  />
                  {errors.phone && <p className="text-[11px] text-red-600">{errors.phone}</p>}
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-bold text-charcoal-800">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. aarav.mehta@example.com"
                    className="w-full p-3 rounded-xl bg-ivory border border-gold-300 text-xs text-charcoal-900 focus:outline-none focus:border-maroon-800"
                  />
                  {errors.email && <p className="text-[11px] text-red-600">{errors.email}</p>}
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-bold text-charcoal-800">
                    Family Gotra (Optional for Sankalp)
                  </label>
                  <input
                    type="text"
                    value={gotra}
                    onChange={(e) => setGotra(e.target.value)}
                    placeholder="e.g. Kashyapa, Bharadwaj, Vashishta"
                    className="w-full p-3 rounded-xl bg-ivory border border-gold-300 text-xs text-charcoal-900 focus:outline-none focus:border-maroon-800"
                  />
                </div>

              </div>

              <div className="space-y-1">
                <label className="block text-xs font-bold text-charcoal-800">
                  Special Instructions or Building Access Notes
                </label>
                <textarea
                  rows={2}
                  value={specialInstructions}
                  onChange={(e) => setSpecialInstructions(e.target.value)}
                  placeholder="e.g. Please bring low-smoke samagri, apartment gate intercom code is 1402..."
                  className="w-full p-3 rounded-xl bg-ivory border border-gold-300 text-xs text-charcoal-900 focus:outline-none focus:border-maroon-800"
                />
              </div>

            </div>
          )}

          {/* STEP 8: Review Booking Summary & Pricing */}
          {currentStep === 8 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="border-b border-gold-100 pb-3">
                <h2 className="font-serif font-bold text-xl text-charcoal-900">
                  Step 8: Review Ceremony Summary & Confirm
                </h2>
                <p className="text-xs text-charcoal-500">
                  Verify your ritual specifications before confirming your demo booking.
                </p>
              </div>

              {/* Summary Cards */}
              <div className="bg-ivory rounded-2xl p-5 border border-gold-200 space-y-4 text-xs">
                
                <div className="flex items-center gap-4 pb-4 border-b border-gold-200">
                  <img
                    src={selectedPuja.image}
                    alt={selectedPuja.title}
                    className="w-16 h-16 rounded-xl object-cover border border-gold-300 shrink-0"
                  />
                  <div>
                    <span className="text-[10px] font-bold uppercase text-saffron-700">{selectedPuja.categoryLabel}</span>
                    <h3 className="font-serif font-bold text-base text-charcoal-900">{selectedPuja.title}</h3>
                    <p className="text-[11px] text-charcoal-500">Deity: {selectedPuja.deity} • Approx. {selectedPuja.duration}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-charcoal-700">
                  <div>
                    <span className="text-charcoal-400 font-semibold block text-[10px] uppercase">Service Format</span>
                    <strong className="text-charcoal-900">{serviceType}</strong>
                  </div>
                  <div>
                    <span className="text-charcoal-400 font-semibold block text-[10px] uppercase">Selected Date & Muhurat</span>
                    <strong className="text-charcoal-900">{date} ({timeSlot})</strong>
                  </div>
                  <div>
                    <span className="text-charcoal-400 font-semibold block text-[10px] uppercase">Location / City</span>
                    <strong className="text-charcoal-900">{city}, {defaultCountry}</strong>
                    <p className="text-[11px] text-charcoal-500 truncate">{address}</p>
                  </div>
                  <div>
                    <span className="text-charcoal-400 font-semibold block text-[10px] uppercase">Ritual Language</span>
                    <strong className="text-charcoal-900">{selectedLanguage} (with English explanation)</strong>
                  </div>
                  <div>
                    <span className="text-charcoal-400 font-semibold block text-[10px] uppercase">Selected Package</span>
                    <strong className="text-charcoal-900">{currentPackage.name}</strong>
                  </div>
                  <div>
                    <span className="text-charcoal-400 font-semibold block text-[10px] uppercase">Host Details</span>
                    <strong className="text-charcoal-900">{fullName}</strong>
                    <p className="text-[11px] text-charcoal-500">{phone} • {email}</p>
                  </div>
                </div>

              </div>

              {/* Price Breakdown in AED */}
              <div className="p-5 bg-white rounded-2xl border-2 border-gold-300 space-y-2">
                <h4 className="font-serif font-bold text-sm text-charcoal-900 pb-2 border-b border-charcoal-100">
                  Price Breakdown ({useApp().currency})
                </h4>
                <div className="flex justify-between text-xs text-charcoal-600">
                  <span>{currentPackage.name} Base Fee</span>
                  <span>{formatPrice(basePriceAED)}</span>
                </div>
                <div className="flex justify-between text-xs text-charcoal-600">
                  <span>Samagri & Doorstep Transportation (Dubai)</span>
                  <span className="text-emerald-700 font-bold">INCLUDED</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-maroon-900 pt-2 border-t border-charcoal-100">
                  <span>Total Indicative Amount</span>
                  <span className="font-serif text-lg">{formatPrice(totalAED)}</span>
                </div>
                <p className="text-[11px] text-charcoal-400 pt-1">
                  🔒 Demonstration Mode: No payment is collected. Demo booking will be recorded in your browser local storage.
                </p>
              </div>

            </div>
          )}

          {/* Navigation Buttons Row */}
          <div className="mt-8 pt-5 border-t border-gold-100 flex items-center justify-between">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={handlePrev}
                className="px-5 py-2.5 rounded-xl border border-gold-300 bg-ivory hover:bg-gold-100 text-charcoal-800 text-xs font-bold transition-colors flex items-center gap-1.5"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous Step</span>
              </button>
            ) : (
              <div />
            )}

            {currentStep < 8 ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-maroon-800 to-maroon-900 hover:from-maroon-900 hover:to-maroon-950 text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all flex items-center gap-1.5"
              >
                <span>Continue to Step {currentStep + 1}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmitBooking}
                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-saffron-500 via-saffron-600 to-saffron-700 hover:from-saffron-600 hover:to-saffron-800 text-white text-xs font-extrabold uppercase tracking-widest shadow-spiritual-lg transition-all flex items-center gap-2 transform hover:-translate-y-0.5"
              >
                <Sparkles className="w-4 h-4 text-gold-200" />
                <span>Confirm & Register Booking</span>
              </button>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
