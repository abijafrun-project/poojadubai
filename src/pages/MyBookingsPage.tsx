import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { 
  CalendarCheck, 
  MapPin, 
  Clock, 
  Calendar, 
  Trash2, 
  Sparkles, 
  ShieldCheck, 
  Video, 
  Home,
  Plus
} from 'lucide-react';

export const MyBookingsPage: React.FC = () => {
  const { bookings, cancelBooking, formatPrice, user } = useApp();

  return (
    <div className="min-h-screen bg-ivory py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gold-200 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-saffron-100 text-saffron-800 text-xs font-bold uppercase tracking-wider mb-1.5">
              <CalendarCheck className="w-3.5 h-3.5" />
              <span>Devotee Dashboard</span>
            </div>
            <h1 className="font-serif text-3xl font-bold text-charcoal-900">
              My Sacred Bookings
            </h1>
            <p className="text-xs sm:text-sm text-charcoal-500">
              Manage your upcoming ceremonies, timings, and pandit allocations in UAE.
            </p>
          </div>

          <Link
            to="/book"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-maroon-800 hover:bg-maroon-900 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow"
          >
            <Plus className="w-4 h-4" />
            <span>Book New Ceremony</span>
          </Link>
        </div>

        {/* Demo Notice Banner */}
        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <p className="font-bold">Local Storage Persistent Demo:</p>
            <p className="text-[11px] text-amber-800 mt-0.5 leading-relaxed">
              These bookings are saved in your browser's local storage for this interactive demonstration. You can create new bookings, test the complete wizard flow, or cancel demo entries.
            </p>
          </div>
        </div>

        {/* Bookings List */}
        {bookings.length > 0 ? (
          <div className="space-y-4">
            {bookings.map(booking => (
              <div
                key={booking.id}
                className="bg-white rounded-3xl p-6 border border-gold-300/80 shadow-sm hover:shadow-spiritual transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
              >
                <div className="flex items-start gap-4 flex-1">
                  <img
                    src={booking.pujaImage}
                    alt={booking.pujaTitle}
                    className="w-20 h-20 rounded-2xl object-cover shrink-0 border border-gold-200"
                  />
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xs font-bold text-maroon-900 bg-gold-100 px-2 py-0.5 rounded-md">
                        {booking.bookingRef}
                      </span>
                      <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                        ● {booking.status}
                      </span>
                    </div>

                    <h3 className="font-serif font-bold text-lg text-charcoal-900">
                      {booking.pujaTitle}
                    </h3>
                    <p className="text-xs text-saffron-700 font-semibold">
                      {booking.packageName}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-charcoal-500 pt-1">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-saffron-600" />
                        {booking.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-charcoal-400" />
                        {booking.timeSlot}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-maroon-700" />
                        {booking.city}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-row md:flex-col items-center md:items-end justify-between w-full md:w-auto gap-3 pt-4 md:pt-0 border-t md:border-t-0 border-charcoal-100">
                  <div className="text-left md:text-right">
                    <span className="text-[10px] text-charcoal-400 uppercase font-semibold block">Total Fee</span>
                    <span className="font-serif text-xl font-bold text-maroon-900">
                      {formatPrice(booking.priceAED)}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Link
                      to={`/booking-confirmation/${booking.bookingRef}`}
                      className="px-3.5 py-1.5 rounded-xl bg-ivory hover:bg-gold-100 border border-gold-300 text-charcoal-800 text-xs font-semibold transition-colors"
                    >
                      Receipt
                    </Link>
                    <button
                      onClick={() => cancelBooking(booking.id)}
                      className="p-1.5 rounded-xl text-charcoal-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                      title="Cancel Demo Booking"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border border-gold-200 space-y-4">
            <div className="w-16 h-16 rounded-full bg-saffron-100 text-saffron-600 flex items-center justify-center mx-auto">
              <CalendarCheck className="w-8 h-8" />
            </div>
            <h3 className="font-serif font-bold text-xl text-charcoal-900">No Ceremonies Booked Yet</h3>
            <p className="text-xs text-charcoal-500 max-w-sm mx-auto">
              You do not have any registered ceremonies in your session. Book your first Griha Pravesh, Satyanarayan, or Rudrabhishek puja.
            </p>
            <Link
              to="/book"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-maroon-800 text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-maroon-900"
            >
              <Sparkles className="w-4 h-4" />
              <span>Book a Ceremony Now</span>
            </Link>
          </div>
        )}

      </div>
    </div>
  );
};
