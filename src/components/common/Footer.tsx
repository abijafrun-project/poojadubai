import React from 'react';
import { Link } from 'react-router-dom';
import { SacredDiyaIcon } from './MandalaDecor';
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Heart, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal-950 text-ivory/80 pt-16 pb-10 border-t-2 border-gold-500/40 relative overflow-hidden">
      {/* Decorative background radial tint */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-48 bg-gradient-to-b from-maroon-900/30 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top newsletter & trust row */}
        <div className="pb-12 mb-12 border-b border-charcoal-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-2">
            <div className="flex items-center gap-2 text-saffron-400 text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span>Vedic Panchang & Festival Alerts</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Stay Connected to Sacred Tithis in Dubai
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-300 max-w-lg">
              Receive timely notifications for upcoming Purnimas, Ekadashis, Shubh Muhurats, and festival preparations delivered to your inbox.
            </p>
          </div>

          <div className="lg:col-span-6">
            <form onSubmit={(e) => { e.preventDefault(); alert('Subscribed to DivyaPuja demo spiritual newsletter!'); }} className="flex flex-col sm:flex-row gap-2.5">
              <input
                type="email"
                required
                placeholder="Enter your email (e.g. devotee@example.com)"
                className="flex-1 px-4 py-3 rounded-xl bg-charcoal-900 border border-gold-500/30 text-white placeholder:text-charcoal-500 text-sm focus:outline-none focus:border-gold-400 transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-saffron-500 to-saffron-600 hover:from-saffron-600 hover:to-saffron-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2 shrink-0"
              >
                <span>Subscribe Free</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
            <p className="text-[11px] text-charcoal-400 mt-2">
              🕊️ No spam. Pure spiritual insights, Dubai sunrise timings, and sacred reminders.
            </p>
          </div>
        </div>

        {/* Main Footer Links Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 pb-12 border-b border-charcoal-800 text-xs">
          
          {/* Brand info */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-maroon-800 flex items-center justify-center border border-gold-400/40">
                <SacredDiyaIcon className="w-6 h-6" />
              </div>
              <span className="font-serif font-bold text-2xl text-white tracking-tight">
                Divya<span className="text-saffron-500">Puja</span>
              </span>
            </div>
            <p className="text-charcoal-300 leading-relaxed text-xs max-w-sm">
              The premier Hindu spiritual services platform in the United Arab Emirates and globally. Connecting devotees with verified Vedic scholars for authentic home rituals, sanctum E-Pujas, pure samagri, and Jyotish consultations.
            </p>

            <div className="space-y-2 text-xs text-charcoal-300 pt-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-saffron-400 shrink-0" />
                <span>Al Fahidi Historical District, Bur Dubai, Dubai, UAE</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-saffron-400 shrink-0" />
                <span>+971 58 592 4188</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-saffron-400 shrink-0" />
                <span>support@divyapuja.com</span>
              </div>
            </div>
          </div>

          {/* Column 1: Puja Services */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-gold-300 uppercase tracking-wider">
              Puja Services
            </h4>
            <ul className="space-y-2 text-charcoal-300">
              <li><Link to="/pujas/griha-pravesh-puja" className="hover:text-gold-200 transition-colors">Griha Pravesh Puja</Link></li>
              <li><Link to="/pujas/satyanarayan-puja" className="hover:text-gold-200 transition-colors">Satyanarayan Katha</Link></li>
              <li><Link to="/pujas/rudrabhishek-puja" className="hover:text-gold-200 transition-colors">Rudrabhishek Puja</Link></li>
              <li><Link to="/pujas/diwali-puja" className="hover:text-gold-200 transition-colors">Diwali Lakshmi Puja</Link></li>
              <li><Link to="/pujas/ganesh-puja" className="hover:text-gold-200 transition-colors">Maha Ganesh Puja</Link></li>
              <li><Link to="/pujas/navagraha-shanti-puja" className="hover:text-gold-200 transition-colors">Navagraha Shanti</Link></li>
              <li><Link to="/pujas" className="text-saffron-400 font-semibold hover:underline">View All 16+ Pujas →</Link></li>
            </ul>
          </div>

          {/* Column 2: Digital & Pandits */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-gold-300 uppercase tracking-wider">
              Sacred Offerings
            </h4>
            <ul className="space-y-2 text-charcoal-300">
              <li><Link to="/pujas?format=online" className="hover:text-gold-200 transition-colors">Online E-Puja</Link></li>
              <li><Link to="/pandits" className="hover:text-gold-200 transition-colors">Verified Pandit Directory</Link></li>
              <li><Link to="/shop" className="hover:text-gold-200 transition-colors">Puja Samagri Shop</Link></li>
              <li><Link to="/astrology" className="hover:text-gold-200 transition-colors">Kundli & Birth Charts</Link></li>
              <li><Link to="/astrology" className="hover:text-gold-200 transition-colors">Shubh Muhurat Service</Link></li>
              <li><Link to="/panchang" className="hover:text-gold-200 transition-colors">Dubai Daily Panchang</Link></li>
              <li><Link to="/blog" className="hover:text-gold-200 transition-colors">Spiritual Blog & Guides</Link></li>
            </ul>
          </div>

          {/* Column 3: Cities & Global */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-gold-300 uppercase tracking-wider">
              Global Presence
            </h4>
            <ul className="space-y-2 text-charcoal-300">
              <li><Link to="/international" className="hover:text-gold-200 transition-colors">Dubai & Abu Dhabi</Link></li>
              <li><Link to="/international" className="hover:text-gold-200 transition-colors">Sharjah & Ajman</Link></li>
              <li><Link to="/international" className="hover:text-gold-200 transition-colors">United States (USA)</Link></li>
              <li><Link to="/international" className="hover:text-gold-200 transition-colors">United Kingdom (UK)</Link></li>
              <li><Link to="/international" className="hover:text-gold-200 transition-colors">Singapore & Malaysia</Link></li>
              <li><Link to="/international" className="hover:text-gold-200 transition-colors">Australia & NZ</Link></li>
              <li><Link to="/international" className="text-saffron-400 font-semibold hover:underline">All 10 Countries →</Link></li>
            </ul>
          </div>

          {/* Column 4: Support & Legal */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-gold-300 uppercase tracking-wider">
              Support & Company
            </h4>
            <ul className="space-y-2 text-charcoal-300">
              <li><Link to="/about" className="hover:text-gold-200 transition-colors">About DivyaPuja</Link></li>
              <li><Link to="/contact" className="hover:text-gold-200 transition-colors">Contact Us</Link></li>
              <li><Link to="/faqs" className="hover:text-gold-200 transition-colors">Frequently Asked Questions</Link></li>
              <li><Link to="/cancellation" className="hover:text-gold-200 transition-colors">Cancellation & Rescheduling</Link></li>
              <li><Link to="/privacy" className="hover:text-gold-200 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-gold-200 transition-colors">Terms of Service</Link></li>
              <li><Link to="/my-bookings" className="hover:text-gold-200 transition-colors">My Bookings Portal</Link></li>
            </ul>
          </div>

        </div>

        {/* Demonstration Disclaimer Bar */}
        <div className="py-6 border-b border-charcoal-800 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-charcoal-900 border border-gold-500/20 text-[11px] text-gold-200/90 max-w-3xl mx-auto">
            <ShieldCheck className="w-4 h-4 text-saffron-400 shrink-0" />
            <span>
              <strong>Client Demonstration Notice:</strong> DivyaPuja is a demonstration platform built for presentation purposes. Sample pricing is displayed in AED. Bookings, authentication, and purchases are simulated in local storage.
            </span>
          </div>
        </div>

        {/* Bottom copyright and credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-charcoal-400">
          <p>© {new Date().getFullYear()} DivyaPuja UAE. All rights reserved. Original Vedic Spiritual Platform.</p>
          <div className="flex items-center gap-4 text-charcoal-400">
            <span>English</span>
            <span>•</span>
            <span>Hindi</span>
            <span>•</span>
            <span>Sanskrit</span>
            <span>•</span>
            <span>Tamil</span>
            <span>•</span>
            <span>Telugu</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
