import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import confetti from 'canvas-confetti';
import { 
  CheckCircle2, 
  Calendar, 
  MapPin, 
  Languages, 
  Clock, 
  Sparkles, 
  ArrowRight, 
  Printer, 
  ShieldCheck,
  CalendarCheck,
  Home
} from 'lucide-react';

export const BookingConfirmationPage: React.FC = () => {
  const { bookingRef } = useParams<{ bookingRef: string }>();
  const { bookings, formatPrice } = useApp();

  const booking = bookings.find(b => b.bookingRef === bookingRef) || bookings[0];

  useEffect(() => {
    // Fire celebratory confetti on mount
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#641D32', '#E99A24', '#C6A15B', '#FFF9F0']
      });
    } catch {
      // safe fallback if canvas-confetti is not loaded
    }
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-ivory py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        
        {/* Success Header */}
        <div className="text-center space-y-3">
          <div className="w-20 h-20 rounded-3xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-md border-2 border-emerald-300">
            <CheckCircle2 className="w-12 h-12" />
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider border border-emerald-200">
            <span>Demo Booking Confirmed</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-900">
            Divine Blessings Await You!
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-600 max-w-lg mx-auto">
            Your ceremony booking reference has been successfully registered. A confirmation record is stored in your session.
          </p>
        </div>

        {/* Confirmation Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-spiritual-lg border border-gold-300 space-y-6">
          
          {/* Top Reference & Status */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-gold-200">
            <div>
              <span className="text-[10px] uppercase font-bold text-charcoal-400 block tracking-wider">
                Booking Reference ID
              </span>
              <p className="font-mono text-xl sm:text-2xl font-black text-maroon-900 tracking-wider">
                {booking?.bookingRef || bookingRef || 'DP-DXB-98421'}
              </p>
            </div>

            <div className="text-right">
              <span className="text-[10px] uppercase font-bold text-charcoal-400 block tracking-wider">
                Status
              </span>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                ● Confirmed (Demo)
              </span>
            </div>
          </div>

          {/* Ceremony Summary */}
          {booking && (
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-ivory border border-gold-200">
                <img
                  src={booking.pujaImage}
                  alt={booking.pujaTitle}
                  className="w-16 h-16 rounded-xl object-cover shrink-0 border border-gold-300"
                />
                <div>
                  <h3 className="font-serif font-bold text-lg text-charcoal-900">{booking.pujaTitle}</h3>
                  <p className="text-xs text-saffron-700 font-semibold">{booking.packageName}</p>
                  <p className="text-[11px] text-charcoal-500 mt-0.5">Format: {booking.serviceType}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-charcoal-700 pt-2">
                <div className="p-3 rounded-xl bg-ivory border border-gold-100 space-y-1">
                  <span className="text-[10px] uppercase font-bold text-charcoal-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-saffron-600" />
                    <span>Auspicious Date & Time</span>
                  </span>
                  <p className="font-bold text-charcoal-900">{booking.date}</p>
                  <p className="text-[11px] text-charcoal-500">{booking.timeSlot}</p>
                </div>

                <div className="p-3 rounded-xl bg-ivory border border-gold-100 space-y-1">
                  <span className="text-[10px] uppercase font-bold text-charcoal-400 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-maroon-700" />
                    <span>Venue Location</span>
                  </span>
                  <p className="font-bold text-charcoal-900">{booking.city}, {booking.country}</p>
                  <p className="text-[11px] text-charcoal-500 truncate">{booking.address}</p>
                </div>

                <div className="p-3 rounded-xl bg-ivory border border-gold-100 space-y-1">
                  <span className="text-[10px] uppercase font-bold text-charcoal-400 flex items-center gap-1">
                    <Languages className="w-3.5 h-3.5 text-gold-600" />
                    <span>Ritual Language</span>
                  </span>
                  <p className="font-bold text-charcoal-900">{booking.language}</p>
                  <p className="text-[11px] text-charcoal-500">Bilingual English explanation included</p>
                </div>

                <div className="p-3 rounded-xl bg-ivory border border-gold-100 space-y-1">
                  <span className="text-[10px] uppercase font-bold text-charcoal-400 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Estimated Amount</span>
                  </span>
                  <p className="font-serif font-extrabold text-base text-maroon-900">
                    {formatPrice(booking.priceAED)}
                  </p>
                  <p className="text-[11px] text-charcoal-500">Pay-at-venue or local cash/card demo</p>
                </div>
              </div>

              {booking.specialInstructions && (
                <div className="p-3 rounded-xl bg-gold-50 border border-gold-200 text-xs">
                  <span className="font-bold text-charcoal-800">Special Instructions:</span>
                  <p className="text-charcoal-600 mt-0.5">{booking.specialInstructions}</p>
                </div>
              )}
            </div>
          )}

          {/* Mandatory Demo Notice */}
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 space-y-1">
            <p className="font-bold">⚠️ Client Demonstration Environment:</p>
            <p className="text-[11px] leading-relaxed">
              This is a prototype booking simulation. In this demo version, no real pandit has been physically dispatched, no payment has been charged to your bank, and no automated external SMS has been delivered. You can review and manage this booking anytime from the <strong>My Bookings</strong> dashboard.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <Link
              to="/my-bookings"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-maroon-800 hover:bg-maroon-900 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow flex items-center justify-center gap-2"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>View in My Bookings</span>
            </Link>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={handlePrint}
                className="flex-1 sm:flex-initial px-4 py-3 rounded-xl bg-ivory hover:bg-gold-100 border border-gold-300 text-charcoal-800 font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
              >
                <Printer className="w-4 h-4 text-charcoal-500" />
                <span>Print Receipt</span>
              </button>

              <Link
                to="/"
                className="flex-1 sm:flex-initial px-4 py-3 rounded-xl bg-ivory hover:bg-gold-100 border border-gold-300 text-charcoal-800 font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
              >
                <Home className="w-4 h-4 text-charcoal-500" />
                <span>Return Home</span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
