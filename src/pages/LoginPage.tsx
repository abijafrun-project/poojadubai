import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { SacredDiyaIcon } from '../components/common/MandalaDecor';
import { Lock, Mail, User, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';

export const LoginPage: React.FC = () => {
  const { loginDemo, user, showToast } = useApp();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCustomLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && password.trim()) {
      loginDemo('devotee');
      navigate('/my-bookings');
    } else {
      showToast('Please enter your email and password.', 'error');
    }
  };

  const handleQuickDemoDevotee = () => {
    loginDemo('devotee');
    navigate('/my-bookings');
  };

  const handleQuickDemoPriest = () => {
    loginDemo('priest');
    navigate('/profile');
  };

  return (
    <div className="min-h-screen bg-ivory py-16 px-4 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 shadow-spiritual-lg border border-gold-300 space-y-6">
        
        {/* Brand Top */}
        <div className="text-center space-y-2">
          <div className="w-14 h-14 rounded-2xl bg-maroon-800 flex items-center justify-center mx-auto shadow-md border border-gold-400">
            <SacredDiyaIcon className="w-8 h-8" />
          </div>
          <h1 className="font-serif font-bold text-2xl text-charcoal-900">
            Welcome to DivyaPuja
          </h1>
          <p className="text-xs text-charcoal-500">
            Sign in to manage your ceremony bookings and saved addresses in UAE.
          </p>
        </div>

        {/* Demo Notice */}
        <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0" />
          <span>
            <strong>Client Demo Authentication:</strong> Instant one-click demo logins available below without OTP or password setup.
          </span>
        </div>

        {/* 1-Click Demo Login Buttons */}
        <div className="space-y-2 pt-1">
          <button
            type="button"
            onClick={handleQuickDemoDevotee}
            className="w-full py-3 px-4 bg-gradient-to-r from-maroon-800 to-maroon-900 hover:from-maroon-900 hover:to-maroon-950 text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow transition-all flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-gold-300" />
            <span>1-Click Login: Devotee (Rakshmi)</span>
          </button>

          <button
            type="button"
            onClick={handleQuickDemoPriest}
            className="w-full py-2.5 px-4 bg-ivory hover:bg-gold-100 text-charcoal-800 border border-gold-300 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2"
          >
            <span>1-Click Login: Pandit (Acharya Rajesh)</span>
          </button>
        </div>

        <div className="relative flex items-center justify-center text-xs text-charcoal-400">
          <span className="w-full border-t border-charcoal-200" />
          <span className="bg-white px-3 font-semibold uppercase text-[10px]">Or with credentials</span>
          <span className="w-full border-t border-charcoal-200" />
        </div>

        {/* Standard Form */}
        <form onSubmit={handleCustomLogin} className="space-y-4">
          <div className="space-y-1">
            <label className="block text-xs font-bold text-charcoal-800">Email Address</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-charcoal-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="devotee@example.com"
                className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-ivory border border-gold-300 text-xs text-charcoal-900 focus:outline-none focus:border-maroon-800"
              />
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-between text-xs">
              <label className="font-bold text-charcoal-800">Password</label>
              <span className="text-[11px] text-charcoal-400">Demo (Any string)</span>
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 text-charcoal-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-ivory border border-gold-300 text-xs text-charcoal-900 focus:outline-none focus:border-maroon-800"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-charcoal-800 hover:bg-charcoal-900 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow"
          >
            Sign In with Demo Account
          </button>
        </form>

        <p className="text-center text-xs text-charcoal-500">
          Don't have an account?{' '}
          <Link to="/register" className="font-bold text-maroon-800 hover:underline">
            Register Demo Account
          </Link>
        </p>

      </div>
    </div>
  );
};
