import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { MapPin, PhoneCall, Mail, Clock, Send, ShieldCheck, Sparkles } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { showToast, city } = useApp();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('General Puja Consultation');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      showToast('Please fill out all required fields.', 'error');
      return;
    }
    setIsSent(true);
    showToast('Your message has been received! Our Dubai coordinator will respond shortly.', 'success');
  };

  return (
    <div className="min-h-screen bg-ivory py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-saffron-100 text-saffron-800 text-xs font-bold uppercase tracking-wider">
            <PhoneCall className="w-3.5 h-3.5" />
            <span>We Are Here to Serve You</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900">
            Contact DivyaPuja UAE
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
            Need guidance regarding Shubh Muhurats, customized family Gotra rituals, or corporate inaugurations in Dubai? Reach out to our spiritual coordinators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Contact Information & Dubai Hub Info */}
          <div className="md:col-span-5 space-y-6">
            
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gold-200 shadow-sm space-y-6">
              <h2 className="font-serif font-bold text-xl text-charcoal-900 border-b border-charcoal-100 pb-3">
                Dubai Head Office
              </h2>

              <div className="space-y-4 text-xs text-charcoal-700">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-maroon-100 text-maroon-800 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-charcoal-900 block font-serif text-sm">Physical Address:</strong>
                    <p className="text-charcoal-600 mt-0.5 leading-relaxed">
                      Suite 408, Al Fahidi Cultural Center, Bur Dubai, Dubai, United Arab Emirates
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-saffron-100 text-saffron-700 flex items-center justify-center shrink-0">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-charcoal-900 block font-serif text-sm">Dubai Hotlines:</strong>
                    <p className="text-charcoal-600 mt-0.5 font-semibold">
                      +971 58 592 4188 (WhatsApp 24/7)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gold-100 text-gold-800 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-charcoal-900 block font-serif text-sm">Email Support:</strong>
                    <p className="text-charcoal-600 mt-0.5">
                      support@divyapuja.com<br />
                      bookings@divyapuja.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-charcoal-900 block font-serif text-sm">Coordination Hours:</strong>
                    <p className="text-charcoal-600 mt-0.5">
                      Monday to Sunday: 06:00 AM – 10:00 PM (Gulf Standard Time)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-xs text-emerald-900 flex items-start gap-2.5">
              <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <strong className="block">Vedic Priest Dispatch Assurance</strong>
                <p className="text-[11px] text-emerald-800 mt-0.5 leading-relaxed">
                  All pandits arrive at least 30 minutes prior to the Shubh Muhurat window with certified pure samagri.
                </p>
              </div>
            </div>

          </div>

          {/* Contact Inquiry Form */}
          <div className="md:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-gold-300 shadow-spiritual">
            <h2 className="font-serif font-bold text-2xl text-charcoal-900 mb-2">
              Send a Spiritual Inquiry
            </h2>
            <p className="text-xs text-charcoal-500 mb-6">
              Fill in your details and our team will get in touch via WhatsApp or phone.
            </p>

            {isSent ? (
              <div className="p-6 bg-emerald-50 border border-emerald-300 rounded-2xl text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-200 text-emerald-800 flex items-center justify-center mx-auto">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-lg text-emerald-950">Thank You, {name}!</h3>
                <p className="text-xs text-emerald-800 max-w-sm mx-auto">
                  Your inquiry regarding "{subject}" has been logged in our demo system. An Acharya will review your request.
                </p>
                <button
                  onClick={() => setIsSent(false)}
                  className="px-5 py-2 bg-emerald-800 text-white rounded-xl text-xs font-semibold hover:bg-emerald-900"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-charcoal-800">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Aarav Mehta"
                      className="w-full p-3 rounded-xl bg-ivory border border-gold-300 text-xs text-charcoal-900 focus:outline-none focus:border-maroon-800"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-charcoal-800">WhatsApp Phone *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+971 50 123 4567"
                      className="w-full p-3 rounded-xl bg-ivory border border-gold-300 text-xs text-charcoal-900 focus:outline-none focus:border-maroon-800"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-charcoal-800">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="devotee@example.com"
                      className="w-full p-3 rounded-xl bg-ivory border border-gold-300 text-xs text-charcoal-900 focus:outline-none focus:border-maroon-800"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-charcoal-800">Subject</label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full p-3 rounded-xl bg-ivory border border-gold-300 text-xs font-semibold text-charcoal-900 focus:outline-none"
                    >
                      <option value="General Puja Consultation">General Puja Consultation</option>
                      <option value="Griha Pravesh Shubh Muhurat">Griha Pravesh Shubh Muhurat</option>
                      <option value="Vedic Wedding Officiation">Vedic Wedding Officiation</option>
                      <option value="Corporate Office Consecration">Corporate Office Consecration</option>
                      <option value="Kundli / Astrology Analysis">Kundli / Astrology Analysis</option>
                      <option value="Samagri Bulk Order Inquiry">Samagri Bulk Order Inquiry</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-bold text-charcoal-800">How Can We Assist You? *</label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Provide details about your planned ritual date, preferred language, or special sankalp requirements..."
                    className="w-full p-3 rounded-xl bg-ivory border border-gold-300 text-xs text-charcoal-900 focus:outline-none focus:border-maroon-800"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-maroon-800 to-maroon-900 hover:from-maroon-900 hover:to-maroon-950 text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-gold-300" />
                  <span>Send Spiritual Inquiry</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
