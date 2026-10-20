import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { SacredDiyaIcon } from '../components/common/MandalaDecor';
import { User, Mail, Phone, MapPin, Lock, ShieldCheck, ArrowRight } from 'lucide-react';

export const RegisterPage: React.FC = () => {
  const { loginDemo, showToast, city: defaultCity } = useApp();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState(defaultCity || 'Dubai');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      showToast('Please enter your name and email.', 'error');
      return;
    }
    loginDemo('devotee');
    showToast(`Welcome, ${name}! Demo account registered successfully.`, 'success');
    navigate('/profile');
  };

  return (
    <div className="min-h-screen bg-ivory py-16 px-4 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 shadow-spiritual-lg border border-gold-300 space-y-6">
        
        <div className="text-center space-y-2">
          <div className="w-14 h-14 rounded-2xl bg-maroon-800 flex items-center justify-center mx-auto shadow-md border border-gold-400">
            <SacredDiyaIcon className="w-8 h-8" />
          </div>
          <h1 className="font-serif font-bold text-2xl text-charcoal-900">
            Create Devotee Account
          </h1>
          <p className="text-xs text-charcoal-500">
            Save your ceremony history, family Gotra, and Dubai addresses.
          </p>
        </div>

        <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0" />
          <span>
            <strong>Client Demonstration:</strong> No real OTP or SMS verification is sent.
          </span>
        </div>

        <form onSubmit={handleRegister} className="space-y-4">
          <div className="space-y-1">
            <label className="block text-xs font-bold text-charcoal-800">Full Name *</label>
            <div className="relative">
              <User className="w-4 h-4 text-charcoal-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Aarav Mehta"
                className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-ivory border border-gold-300 text-xs text-charcoal-900 focus:outline-none focus:border-maroon-800"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="block text-xs font-bold text-charcoal-800">Email Address *</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-charcoal-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="devotee@example.com"
                className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-ivory border border-gold-300 text-xs text-charcoal-900 focus:outline-none focus:border-maroon-800"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="block text-xs font-bold text-charcoal-800">WhatsApp Mobile *</label>
            <div className="relative">
              <Phone className="w-4 h-4 text-charcoal-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+971 50 123 4567"
                className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-ivory border border-gold-300 text-xs text-charcoal-900 focus:outline-none focus:border-maroon-800"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="block text-xs font-bold text-charcoal-800">City in UAE</label>
            <div className="relative">
              <MapPin className="w-4 h-4 text-charcoal-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Dubai"
                className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-ivory border border-gold-300 text-xs text-charcoal-900 focus:outline-none focus:border-maroon-800"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-maroon-800 to-maroon-900 hover:from-maroon-900 hover:to-maroon-950 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-1.5"
          >
            <span>Create Account (Demo)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <p className="text-center text-xs text-charcoal-500">
          Already registered?{' '}
          <Link to="/login" className="font-bold text-maroon-800 hover:underline">
            Sign In Here
          </Link>
        </p>

      </div>
    </div>
  );
};
