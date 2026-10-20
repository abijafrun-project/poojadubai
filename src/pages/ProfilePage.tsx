import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  CalendarCheck, 
  LogOut, 
  ShieldCheck, 
  Sparkles,
  Check
} from 'lucide-react';

export const ProfilePage: React.FC = () => {
  const { user, updateUserProfile, logout, bookings, formatPrice } = useApp();
  const navigate = useNavigate();

  const [name, setName] = useState(user?.name || 'Rakshmi');
  const [email, setEmail] = useState(user?.email || 'aarav.mehta@example.com');
  const [phone, setPhone] = useState(user?.phone || '+971 50 123 4567');
  const [city, setCity] = useState(user?.city || 'Dubai');
  const [country, setCountry] = useState(user?.country || 'United Arab Emirates');

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    updateUserProfile({ name, email, phone, city, country });
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-ivory py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gold-200 pb-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-maroon-800 text-gold-300 font-serif font-black text-2xl flex items-center justify-center border-2 border-gold-400 shadow-md">
              {user ? user.name.charAt(0) : 'D'}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-serif font-bold text-2xl sm:text-3xl text-charcoal-900">
                  {user?.name || 'Guest User'}
                </h1>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  ● Active Session
                </span>
              </div>
              <p className="text-xs text-charcoal-500">
                {user?.email || 'Not logged in'} • {user?.city || 'Dubai'}, {user?.country || 'UAE'}
              </p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="self-start sm:self-auto inline-flex items-center gap-1.5 px-4 py-2 bg-red-50 hover:bg-red-100 text-red-700 text-xs font-bold rounded-xl border border-red-200 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left Form: Edit Profile */}
          <div className="md:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-gold-200 shadow-sm space-y-5">
            <h2 className="font-serif font-bold text-xl text-charcoal-900 border-b border-charcoal-100 pb-3">
              Profile Details
            </h2>

            <form onSubmit={handleSaveProfile} className="space-y-4">
              <div className="space-y-1">
                <label className="block text-xs font-bold text-charcoal-800">Full Name</label>
                <div className="relative">
                  <User className="w-4 h-4 text-charcoal-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-ivory border border-gold-300 text-xs text-charcoal-900 focus:outline-none focus:border-maroon-800"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-bold text-charcoal-800">Email Address</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-charcoal-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-ivory border border-gold-300 text-xs text-charcoal-900 focus:outline-none focus:border-maroon-800"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-bold text-charcoal-800">WhatsApp Mobile</label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-charcoal-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-ivory border border-gold-300 text-xs text-charcoal-900 focus:outline-none focus:border-maroon-800"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-charcoal-800">City</label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-ivory border border-gold-300 text-xs text-charcoal-900 focus:outline-none focus:border-maroon-800"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-charcoal-800">Country</label>
                  <input
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-ivory border border-gold-300 text-xs text-charcoal-900 focus:outline-none focus:border-maroon-800"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="px-6 py-2.5 bg-maroon-800 hover:bg-maroon-900 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow"
              >
                Save Profile Changes
              </button>
            </form>
          </div>

          {/* Right Summary Column */}
          <div className="md:col-span-5 space-y-4">
            
            <div className="bg-white rounded-3xl p-6 border border-gold-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-charcoal-100 pb-3">
                <h3 className="font-serif font-bold text-base text-charcoal-900">
                  Quick Navigation
                </h3>
                <Link to="/my-bookings" className="text-xs font-bold text-maroon-800 hover:underline">
                  View All ({bookings.length}) →
                </Link>
              </div>

              <div className="space-y-2 text-xs">
                <Link
                  to="/my-bookings"
                  className="flex items-center justify-between p-3 rounded-xl bg-ivory hover:bg-gold-50 border border-gold-100 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <CalendarCheck className="w-4 h-4 text-saffron-600" />
                    <span className="font-semibold text-charcoal-800">My Registered Bookings</span>
                  </div>
                  <span className="font-bold text-maroon-900">{bookings.length}</span>
                </Link>

                <Link
                  to="/cart"
                  className="flex items-center justify-between p-3 rounded-xl bg-ivory hover:bg-gold-50 border border-gold-100 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-gold-600" />
                    <span className="font-semibold text-charcoal-800">Samagri Basket</span>
                  </div>
                  <span className="font-semibold text-charcoal-500">View</span>
                </Link>
              </div>
            </div>

            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl space-y-1 text-xs text-emerald-900">
              <div className="flex items-center gap-1.5 font-bold">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>Verified Devotee Status</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                Your profile is synchronized with local storage. Any bookings made will show up automatically under your account.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
