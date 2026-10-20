import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useApp, CURRENCIES } from '../../context/AppContext';
import { SacredDiyaIcon } from './MandalaDecor';
import { CITIES_LIST } from '../../data/panchangData';
import { PUJA_CATEGORIES } from '../../data/pujasData';
import { 
  ChevronDown, 
  MapPin, 
  ShoppingBag, 
  User as UserIcon, 
  Menu, 
  X, 
  Sparkles, 
  Globe, 
  Search, 
  Calendar, 
  BookOpen, 
  PhoneCall,
  Check,
  LogOut,
  CalendarCheck
} from 'lucide-react';

export const Header: React.FC = () => {
  const { 
    country, 
    setCountry, 
    city, 
    setCity, 
    currency, 
    setCurrency, 
    cartCount, 
    setIsCartOpen,
    user,
    logout
  } = useApp();

  const navigate = useNavigate();
  const location = useLocation();

  // Dropdown states
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isCitiesOpen, setIsCitiesOpen] = useState(false);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [isCurrencyDropdownOpen, setIsCurrencyDropdownOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close dropdowns when clicking outside
  const servicesRef = useRef<HTMLDivElement>(null);
  const citiesRef = useRef<HTMLDivElement>(null);
  const currencyRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
      if (citiesRef.current && !citiesRef.current.contains(event.target as Node)) {
        setIsCitiesOpen(false);
      }
      if (currencyRef.current && !currencyRef.current.contains(event.target as Node)) {
        setIsCurrencyDropdownOpen(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    setIsCitiesOpen(false);
    setIsUserMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Top Banner Bar */}
      <div className="bg-maroon-950 text-gold-200 text-xs py-1.5 px-4 border-b border-gold-500/20">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-saffron-300 font-medium">
              <SacredDiyaIcon className="w-3.5 h-3.5" glow={false} />
              <span>Vedic Pujas & Havans in Dubai, UAE & Worldwide</span>
            </span>
            <span className="hidden md:inline text-gold-500/40">•</span>
            <span className="hidden md:inline text-ivory/80 text-[11px]">
              Verified Brahmin Pandits • 100% Pure Organic Samagri
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            {/* Currency Selector */}
            <div className="relative" ref={currencyRef}>
              <button
                onClick={() => setIsCurrencyDropdownOpen(!isCurrencyDropdownOpen)}
                className="flex items-center gap-1 text-ivory/90 hover:text-gold-300 font-medium transition-colors"
                aria-label="Select currency"
              >
                <span>Currency: <strong className="text-gold-300">{currency}</strong></span>
                <ChevronDown className="w-3 h-3" />
              </button>

              {isCurrencyDropdownOpen && (
                <div className="absolute right-0 mt-1.5 w-48 bg-white text-charcoal-800 rounded-xl shadow-spiritual-lg border border-gold-300 py-1.5 z-50">
                  <div className="px-3 py-1 text-[10px] uppercase font-bold tracking-wider text-charcoal-400 border-b border-charcoal-100">
                    Display Currency
                  </div>
                  {Object.entries(CURRENCIES).map(([code, item]) => (
                    <button
                      key={code}
                      onClick={() => {
                        setCurrency(code);
                        setIsCurrencyDropdownOpen(false);
                      }}
                      className="w-full text-left px-3 py-1.5 text-xs hover:bg-gold-50 flex items-center justify-between transition-colors"
                    >
                      <span className="font-medium text-charcoal-700">{item.label}</span>
                      {currency === code && <Check className="w-3.5 h-3.5 text-maroon-800" />}
                    </button>
                  ))}
                  <div className="px-3 py-1 text-[9px] text-charcoal-400 bg-ivory border-t border-charcoal-100 mt-1">
                    Demo conversion rates
                  </div>
                </div>
              )}
            </div>

            <span className="text-gold-500/40">|</span>

            {/* Helpline */}
            <a 
              href="tel:+971585924188" 
              className="flex items-center gap-1 text-ivory/90 hover:text-gold-300 transition-colors"
            >
              <PhoneCall className="w-3 h-3 text-saffron-400" />
              <span className="hidden sm:inline">Dubai Helpline:</span>
              <span className="font-semibold">+971 58 592 4188</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gold-200/80 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-maroon-800 via-maroon-900 to-maroon-950 flex items-center justify-center shadow-md border border-gold-400/40 group-hover:scale-105 transition-transform">
                <SacredDiyaIcon className="w-7 h-7" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-serif font-extrabold text-2xl tracking-tight text-maroon-900">
                    Divya<span className="text-saffron-600">Puja</span>
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-saffron-100 text-saffron-800 border border-saffron-300">
                    UAE
                  </span>
                </div>
                <p className="text-[10px] text-charcoal-500 tracking-wider uppercase font-medium -mt-1">
                  Vedic Pandit & Ritual Services
                </p>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6">
              
              {/* Puja Services Dropdown */}
              <div className="relative" ref={servicesRef}>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  onMouseEnter={() => setIsServicesOpen(true)}
                  className="flex items-center gap-1 text-sm font-semibold text-charcoal-700 hover:text-maroon-800 py-2 transition-colors"
                  aria-expanded={isServicesOpen}
                >
                  <span>Puja Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180 text-maroon-800' : ''}`} />
                </button>

                {isServicesOpen && (
                  <div 
                    onMouseLeave={() => setIsServicesOpen(false)}
                    className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-spiritual-lg border border-gold-200 p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                  >
                    <div className="px-3 py-1.5 text-xs font-bold text-maroon-900 border-b border-gold-100 mb-2 flex items-center justify-between">
                      <span>Ritual Categories</span>
                      <Link 
                        to="/pujas" 
                        onClick={() => setIsServicesOpen(false)}
                        className="text-[11px] text-saffron-600 hover:underline"
                      >
                        View All 16+ Pujas →
                      </Link>
                    </div>
                    <div className="space-y-1">
                      {PUJA_CATEGORIES.filter(c => c.id !== 'all').map(cat => (
                        <Link
                          key={cat.id}
                          to={`/pujas?category=${cat.id}`}
                          onClick={() => setIsServicesOpen(false)}
                          className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium text-charcoal-700 hover:bg-gold-50 hover:text-maroon-900 transition-colors"
                        >
                          <span>{cat.label}</span>
                          <span className="text-[10px] text-charcoal-400">Explore</span>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-2 pt-2 border-t border-gold-100 bg-ivory p-2.5 rounded-xl">
                      <p className="text-[11px] font-semibold text-maroon-900">Custom Vedic Sankalp?</p>
                      <p className="text-[10px] text-charcoal-500">Need a specific Gotra ritual in UAE? Speak with an Acharya.</p>
                      <Link
                        to="/contact"
                        onClick={() => setIsServicesOpen(false)}
                        className="text-[11px] font-bold text-saffron-700 hover:text-saffron-800 inline-block mt-1"
                      >
                        Consult an Acharya →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Cities Dropdown */}
              <div className="relative" ref={citiesRef}>
                <button
                  onClick={() => setIsCitiesOpen(!isCitiesOpen)}
                  onMouseEnter={() => setIsCitiesOpen(true)}
                  className="flex items-center gap-1 text-sm font-semibold text-charcoal-700 hover:text-maroon-800 py-2 transition-colors"
                  aria-expanded={isCitiesOpen}
                >
                  <MapPin className="w-3.5 h-3.5 text-saffron-600" />
                  <span>Cities</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isCitiesOpen ? 'rotate-180 text-maroon-800' : ''}`} />
                </button>

                {isCitiesOpen && (
                  <div 
                    onMouseLeave={() => setIsCitiesOpen(false)}
                    className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-spiritual-lg border border-gold-200 p-3 z-50"
                  >
                    <div className="px-3 py-1 text-xs font-bold text-maroon-900 border-b border-gold-100 mb-2">
                      UAE & Global Service Hubs
                    </div>
                    <div className="space-y-1 max-h-60 overflow-y-auto">
                      {CITIES_LIST.map(c => (
                        <button
                          key={c.city}
                          onClick={() => {
                            setCity(c.city);
                            setCountry(c.country);
                            setIsCitiesOpen(false);
                          }}
                          className={`w-full text-left px-3 py-1.5 rounded-lg text-xs flex items-center justify-between transition-colors ${
                            city === c.city ? 'bg-saffron-50 text-maroon-900 font-bold' : 'text-charcoal-700 hover:bg-gold-50'
                          }`}
                        >
                          <div>
                            <span className="block">{c.city}</span>
                            <span className="text-[10px] text-charcoal-400">{c.country}</span>
                          </div>
                          {city === c.city && <Check className="w-3.5 h-3.5 text-saffron-600" />}
                        </button>
                      ))}
                    </div>
                    <div className="mt-2 pt-2 border-t border-gold-100">
                      <Link
                        to="/international"
                        onClick={() => setIsCitiesOpen(false)}
                        className="block text-center text-[11px] font-bold text-maroon-800 hover:underline"
                      >
                        View All International Locations →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Direct links */}
              <Link 
                to="/pujas?format=online" 
                className="text-sm font-semibold text-charcoal-700 hover:text-maroon-800 transition-colors flex items-center gap-1.5"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>E-Puja</span>
              </Link>

              <Link 
                to="/shop" 
                className="text-sm font-semibold text-charcoal-700 hover:text-maroon-800 transition-colors"
              >
                Shop (Samagri)
              </Link>

              <Link 
                to="/astrology" 
                className="text-sm font-semibold text-charcoal-700 hover:text-maroon-800 transition-colors"
              >
                Astrology
              </Link>

              <Link 
                to="/panchang" 
                className="text-sm font-semibold text-charcoal-700 hover:text-maroon-800 transition-colors"
              >
                Panchang
              </Link>

              <Link 
                to="/international" 
                className="text-sm font-semibold text-charcoal-700 hover:text-maroon-800 transition-colors flex items-center gap-1"
              >
                <Globe className="w-3.5 h-3.5 text-charcoal-500" />
                <span>International</span>
              </Link>
            </nav>

            {/* Right Action Icons & CTA */}
            <div className="flex items-center gap-3">
              
              {/* Location Badge */}
              <button
                onClick={() => setIsLocationModalOpen(true)}
                className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-ivory hover:bg-gold-100 border border-gold-300 text-xs font-semibold text-charcoal-800 transition-colors"
                title="Change default city/country"
              >
                <MapPin className="w-3.5 h-3.5 text-saffron-600 shrink-0" />
                <span>{city}, UAE</span>
                <ChevronDown className="w-3 h-3 text-charcoal-400" />
              </button>

              {/* Cart Drawer Trigger */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 rounded-xl text-charcoal-700 hover:text-maroon-900 hover:bg-gold-50 transition-colors"
                aria-label={`Shopping cart with ${cartCount} items`}
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-saffron-500 text-white text-[10px] font-bold flex items-center justify-center shadow-sm">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* User Account Menu / Login */}
              {user ? (
                <div className="relative" ref={userMenuRef}>
                  <button
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="flex items-center gap-2 p-1.5 rounded-xl hover:bg-gold-50 transition-colors border border-transparent hover:border-gold-300"
                    aria-label="User profile menu"
                  >
                    <div className="w-8 h-8 rounded-full bg-maroon-800 text-ivory font-bold text-xs flex items-center justify-center border border-gold-400">
                      {user.name.charAt(0)}
                    </div>
                    <span className="hidden md:inline text-xs font-semibold text-charcoal-800 max-w-[90px] truncate">
                      {user.name}
                    </span>
                    <ChevronDown className="w-3 h-3 text-charcoal-400 hidden md:inline" />
                  </button>

                  {isUserMenuOpen && (
                    <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-spiritual-lg border border-gold-200 py-2 z-50">
                      <div className="px-4 py-2 border-b border-gold-100">
                        <p className="text-xs font-bold text-charcoal-900">{user.name}</p>
                        <p className="text-[11px] text-charcoal-500 truncate">{user.email}</p>
                        <span className="inline-block mt-1 text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800">
                          Demo Devotee Session
                        </span>
                      </div>

                      <div className="py-1">
                        <Link
                          to="/my-bookings"
                          onClick={() => setIsUserMenuOpen(false)}
                          className="flex items-center gap-2 px-4 py-2 text-xs text-charcoal-700 hover:bg-gold-50 hover:text-maroon-900"
                        >
                          <CalendarCheck className="w-4 h-4 text-saffron-600" />
                          <span>My Bookings</span>
                        </Link>
                        <Link
                          to="/profile"
                          onClick={() => setIsUserMenuOpen(false)}
                          className="flex items-center gap-2 px-4 py-2 text-xs text-charcoal-700 hover:bg-gold-50 hover:text-maroon-900"
                        >
                          <UserIcon className="w-4 h-4 text-maroon-700" />
                          <span>Profile & Addresses</span>
                        </Link>
                      </div>

                      <div className="pt-1 border-t border-gold-100">
                        <button
                          onClick={() => {
                            logout();
                            setIsUserMenuOpen(false);
                          }}
                          className="w-full text-left flex items-center gap-2 px-4 py-2 text-xs text-red-600 hover:bg-red-50"
                        >
                          <LogOut className="w-4 h-4" />
                          <span>Logout</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to="/login"
                  className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-charcoal-800 hover:text-maroon-800 px-3 py-2 rounded-xl hover:bg-gold-50 transition-colors"
                >
                  <UserIcon className="w-4 h-4" />
                  <span>Login</span>
                </Link>
              )}

              {/* Book a Pandit CTA Button */}
              <Link
                to="/book"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-maroon-800 to-maroon-900 hover:from-maroon-900 hover:to-maroon-950 text-white text-xs font-bold tracking-wide shadow-md hover:shadow-spiritual transition-all transform hover:-translate-y-0.5 border border-gold-400/30"
              >
                <Sparkles className="w-3.5 h-3.5 text-gold-300" />
                <span>Book a Pandit</span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl text-charcoal-800 hover:bg-gold-50 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-gold-200 px-4 pt-2 pb-6 space-y-4 shadow-xl">
            {/* Mobile Location & Currency Bar */}
            <div className="flex items-center justify-between p-3 bg-ivory rounded-xl border border-gold-200 text-xs">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-saffron-600" />
                <span className="font-semibold text-charcoal-800">{city}, {country}</span>
              </div>
              <button
                onClick={() => setIsLocationModalOpen(true)}
                className="text-maroon-800 font-bold underline"
              >
                Change
              </button>
            </div>

            {/* Mobile Nav Links */}
            <div className="space-y-1">
              <Link
                to="/pujas"
                className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-charcoal-800 hover:bg-gold-50"
              >
                All 16+ Puja Services
              </Link>
              <Link
                to="/pujas?format=online"
                className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-charcoal-800 hover:bg-gold-50 flex items-center justify-between"
              >
                <span>Online E-Puja</span>
                <span className="px-2 py-0.5 text-[10px] bg-emerald-100 text-emerald-800 rounded-full font-bold">Live</span>
              </Link>
              <Link
                to="/pandits"
                className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-charcoal-800 hover:bg-gold-50"
              >
                Verified Pandits Directory
              </Link>
              <Link
                to="/shop"
                className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-charcoal-800 hover:bg-gold-50"
              >
                Shop Puja Samagri
              </Link>
              <Link
                to="/astrology"
                className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-charcoal-800 hover:bg-gold-50"
              >
                Vedic Astrology & Kundli
              </Link>
              <Link
                to="/panchang"
                className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-charcoal-800 hover:bg-gold-50"
              >
                Daily Hindu Panchang
              </Link>
              <Link
                to="/international"
                className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-charcoal-800 hover:bg-gold-50"
              >
                International Services (UAE, US, UK, etc.)
              </Link>
              <Link
                to="/blog"
                className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-charcoal-800 hover:bg-gold-50"
              >
                Spiritual Resources & Blog
              </Link>
            </div>

            {/* Mobile User links */}
            <div className="pt-2 border-t border-gold-100 space-y-2">
              {user ? (
                <>
                  <Link
                    to="/my-bookings"
                    className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-charcoal-700"
                  >
                    <CalendarCheck className="w-4 h-4 text-saffron-600" />
                    <span>My Bookings ({user.name})</span>
                  </Link>
                  <Link
                    to="/profile"
                    className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-charcoal-700"
                  >
                    <UserIcon className="w-4 h-4 text-maroon-700" />
                    <span>My Profile</span>
                  </Link>
                  <button
                    onClick={logout}
                    className="w-full text-left px-3 py-2 text-sm font-medium text-red-600"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  className="block text-center py-2 text-sm font-bold text-maroon-800 border border-maroon-800 rounded-xl"
                >
                  Login to Account
                </Link>
              )}

              {/* Mobile CTA */}
              <Link
                to="/book"
                className="block text-center py-3 bg-maroon-900 text-white font-bold rounded-xl shadow-md"
              >
                Book a Pandit Now
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Location Selector Modal */}
      {isLocationModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-gold-300">
            <div className="flex items-center justify-between pb-3 border-b border-gold-100">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-saffron-600" />
                <h3 className="font-serif font-bold text-xl text-charcoal-900">Select Service Location</h3>
              </div>
              <button
                onClick={() => setIsLocationModalOpen(false)}
                className="p-1 rounded-full text-charcoal-400 hover:text-charcoal-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-charcoal-600 mt-2">
              DivyaPuja defaults to Dubai, UAE for physical priest visits, with worldwide streaming available for E-Pujas.
            </p>

            <div className="grid grid-cols-2 gap-2.5 mt-4 max-h-72 overflow-y-auto p-1">
              {CITIES_LIST.map(item => (
                <button
                  key={item.city}
                  onClick={() => {
                    setCity(item.city);
                    setCountry(item.country);
                    setIsLocationModalOpen(false);
                  }}
                  className={`p-3 rounded-xl text-left border transition-all ${
                    city === item.city
                      ? 'border-maroon-800 bg-saffron-50/70 text-maroon-950 font-bold shadow-sm ring-1 ring-maroon-800'
                      : 'border-charcoal-200 bg-white hover:border-gold-400 text-charcoal-700'
                  }`}
                >
                  <p className="text-sm font-semibold">{item.city}</p>
                  <p className="text-xs text-charcoal-400">{item.country}</p>
                </button>
              ))}
            </div>

            <div className="mt-5 pt-3 border-t border-charcoal-100 flex justify-end">
              <button
                onClick={() => setIsLocationModalOpen(false)}
                className="px-5 py-2 bg-maroon-800 text-white rounded-xl text-xs font-semibold hover:bg-maroon-900"
              >
                Confirm Location
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
