import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, FileText, RotateCcw, ChevronRight } from 'lucide-react';

export const PrivacyPage: React.FC = () => (
  <div className="min-h-screen bg-ivory py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 shadow-spiritual border border-gold-300 space-y-6">
      <div className="border-b border-gold-200 pb-4">
        <span className="text-xs font-bold text-saffron-700 uppercase tracking-widest">Legal Transparency</span>
        <h1 className="font-serif font-bold text-3xl text-charcoal-900 mt-1">Privacy Policy</h1>
        <p className="text-xs text-charcoal-500">Last updated: October 2026 • DivyaPuja UAE</p>
      </div>

      <div className="text-xs sm:text-sm text-charcoal-700 space-y-4 leading-relaxed">
        <p>
          At DivyaPuja, we hold your personal sanctity and privacy in the highest esteem. This Privacy Policy details how we handle information collected during ceremony bookings, astrological inquiries, and samagri orders.
        </p>

        <h3 className="font-serif font-bold text-base text-maroon-900 pt-2">1. Information We Collect</h3>
        <p>
          When booking a puja, we collect necessary contact information (name, phone, email), residential or venue addresses for priest dispatch, and sacred astrological coordinates (Date of Birth, Time, Place of Birth, and Gotra) solely for accurate Vedic Sankalp and Muhurat calculation.
        </p>

        <h3 className="font-serif font-bold text-base text-maroon-900 pt-2">2. Confidentiality of Astrological Records</h3>
        <p>
          Your Kundli data, birth charts, and personal family concerns shared with our Jyotish Acharyas are strictly confidential and are never shared or commercialized with third-party advertising networks.
        </p>

        <h3 className="font-serif font-bold text-base text-maroon-900 pt-2">3. Demonstration Disclaimer</h3>
        <p>
          In this client demonstration prototype, user data and bookings are persisted only within your browser’s local storage. No actual external database exposure occurs.
        </p>
      </div>

      <div className="pt-4 border-t border-charcoal-100">
        <Link to="/" className="text-xs font-bold text-maroon-800 hover:underline">← Return to Home</Link>
      </div>
    </div>
  </div>
);

export const TermsPage: React.FC = () => (
  <div className="min-h-screen bg-ivory py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 shadow-spiritual border border-gold-300 space-y-6">
      <div className="border-b border-gold-200 pb-4">
        <span className="text-xs font-bold text-saffron-700 uppercase tracking-widest">Terms of Service</span>
        <h1 className="font-serif font-bold text-3xl text-charcoal-900 mt-1">Terms & Conditions</h1>
        <p className="text-xs text-charcoal-500">Effective Date: October 2026 • Dubai, UAE</p>
      </div>

      <div className="text-xs sm:text-sm text-charcoal-700 space-y-4 leading-relaxed">
        <p>
          Welcome to DivyaPuja. By using our website, booking pandits, or ordering puja samagri, you agree to comply with the terms set forth herein.
        </p>

        <h3 className="font-serif font-bold text-base text-maroon-900 pt-2">1. Nature of Services</h3>
        <p>
          DivyaPuja facilitates connections between devotees and verified independent Vedic pandits, Purohits, and astrologers for religious and cultural ceremonies.
        </p>

        <h3 className="font-serif font-bold text-base text-maroon-900 pt-2">2. Residential Apartment Safety</h3>
        <p>
          Devotees in Dubai and UAE residences agree to follow local building management rules. Our pandits use smokeless organic samagri to adhere to safety protocols.
        </p>

        <h3 className="font-serif font-bold text-base text-maroon-900 pt-2">3. Prototype Demonstration Notice</h3>
        <p>
          This website is presented as a demonstration showcase. Prices, pandit names, and reviews are sample representations created for design and evaluation purposes.
        </p>
      </div>

      <div className="pt-4 border-t border-charcoal-100">
        <Link to="/" className="text-xs font-bold text-maroon-800 hover:underline">← Return to Home</Link>
      </div>
    </div>
  </div>
);

export const CancellationPage: React.FC = () => (
  <div className="min-h-screen bg-ivory py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 shadow-spiritual border border-gold-300 space-y-6">
      <div className="border-b border-gold-200 pb-4">
        <span className="text-xs font-bold text-saffron-700 uppercase tracking-widest">Policy & Protection</span>
        <h1 className="font-serif font-bold text-3xl text-charcoal-900 mt-1">Cancellation & Rescheduling Policy</h1>
        <p className="text-xs text-charcoal-500">Zero-Stress Guarantees • UAE Operations</p>
      </div>

      <div className="text-xs sm:text-sm text-charcoal-700 space-y-4 leading-relaxed">
        <p>
          We understand that auspicious Muhurats, personal health, and family schedules may necessitate adjustments. DivyaPuja offers a compassionate, flexible cancellation policy.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl space-y-1">
            <h4 className="font-bold text-emerald-950 text-sm">Rescheduling (Zero Penalty)</h4>
            <p className="text-xs text-emerald-800">
              You may change your ceremony date or timing window up to 24 hours prior to the booked Muhurat without any fee.
            </p>
          </div>
          <div className="p-4 bg-ivory border border-gold-200 rounded-2xl space-y-1">
            <h4 className="font-bold text-charcoal-900 text-sm">Samagri Return Policy</h4>
            <p className="text-xs text-charcoal-600">
              Unopened brass thali sets, copper kalash, and dry samagri boxes may be returned within 7 days for a 100% refund.
            </p>
          </div>
        </div>

        <h3 className="font-serif font-bold text-base text-maroon-900 pt-2">How to Request Cancellation or Rescheduling:</h3>
        <p>
          Visit your <Link to="/my-bookings" className="text-maroon-800 font-bold underline">My Bookings</Link> dashboard, click on your ceremony reference, or contact our 24/7 Dubai support coordinator via WhatsApp at <strong>+971 58 592 4188</strong>.
        </p>
      </div>

      <div className="pt-4 border-t border-charcoal-100">
        <Link to="/" className="text-xs font-bold text-maroon-800 hover:underline">← Return to Home</Link>
      </div>
    </div>
  </div>
);
