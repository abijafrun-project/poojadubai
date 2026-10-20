import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, ChevronRight, Sparkles, PhoneCall, Mail } from 'lucide-react';

interface FaqItem {
  q: string;
  a: string;
  category: string;
}

const FAQ_LIST: FaqItem[] = [
  {
    category: 'Booking & Pandits',
    q: 'How do I book a verified Vedic Pandit in Dubai?',
    a: 'Simply browse our Puja Services or use the "Book a Pandit" wizard. Select your desired ceremony (such as Griha Pravesh, Satyanarayan, or Rudrabhishek), pick your date and preferred Muhurat, choose your language, and enter your Dubai address. You will receive an instant booking reference and confirmation.'
  },
  {
    category: 'Booking & Pandits',
    q: 'How are the pandits verified?',
    a: 'Every priest associated with DivyaPuja has undergone rigorous verification. They hold authentic degrees from recognized Sanskrit Vishwavidyalayas or Gurukuls (such as Varanasi, Kanchipuram, or Gokarna), have extensive residential experience in the UAE, and have clean background checks.'
  },
  {
    category: 'Packages & Samagri',
    q: 'What is included in each package?',
    a: 'We offer three transparent packages: (1) Pandit Only: Senior priest recital and guidance with advance samagri checklist; (2) Pandit with Puja Samagri: Complete convenience where the priest brings all 35-50 items including fresh flowers, pure cow ghee, havan wood, and brass items; (3) Complete Grand Arrangement: Deluxe setup with multiple priests, floral Mandap decor, and catering.'
  },
  {
    category: 'Packages & Samagri',
    q: 'How is the puja samagri arranged in Dubai?',
    a: 'All dry herbs, rare resins, and havan woods are sourced directly from sacred centers in Haridwar, Varanasi, and Vrindavan. Fresh items like marigold garlands, lotus flowers, betel leaves, and cow milk are procured fresh on the morning of your ceremony.'
  },
  {
    category: 'Online E-Puja',
    q: 'How do online E-Pujas work?',
    a: 'For families living outside Dubai or those wanting a ceremony performed from an ancient temple in India, our priests host a private, 2-way interactive Zoom broadcast. Devotees participate from home, recite the Sankalp in their personal Gotra and Nakshatra, and receive consecrated dry prasad via courier.'
  },
  {
    category: 'Service Availability',
    q: 'Which areas in Dubai and UAE are covered?',
    a: 'We serve all areas of Dubai (including Downtown, Dubai Marina, Palm Jumeirah, JLT, Arabian Ranches, Al Barsha, Deira, Bur Dubai, and Business Bay), as well as Abu Dhabi, Sharjah, Ajman, and Ras Al Khaimah.'
  },
  {
    category: 'Service Availability',
    q: 'Can pujas be performed in apartments with smoke alarms?',
    a: 'Yes. Our pandits use compact brass or copper kunds with odorless camphor and smokeless organic samagri that emit minimal smoke while preserving sacred Vedic traditions, ensuring full compliance with UAE residential fire safety guidelines.'
  },
  {
    category: 'Payments & Cancellation',
    q: 'What payment methods are supported?',
    a: 'For our live commercial launch, we support UAE Debit/Credit cards, Apple Pay, and Pay-at-Venue (cash or card). In this current client demo environment, booking registrations are simulated with zero financial charge.'
  },
  {
    category: 'Payments & Cancellation',
    q: 'What is your cancellation and rescheduling policy?',
    a: 'You can cancel or reschedule any booked ceremony up to 24 hours prior to the Shubh Muhurat at zero penalty directly from your "My Bookings" portal.'
  }
];

export const FaqPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Booking & Pandits', 'Packages & Samagri', 'Online E-Puja', 'Service Availability', 'Payments & Cancellation'];

  const filteredFaqs = activeCategory === 'All'
    ? FAQ_LIST
    : FAQ_LIST.filter(f => f.category === activeCategory);

  return (
    <div className="min-h-screen bg-ivory py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-saffron-100 text-saffron-800 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Support & Assistance</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-900">
            Frequently Asked Questions
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
            Find answers to common questions about booking pandits in Dubai, samagri arrangements, apartment fire safety, and online E-Pujas.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-center">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? 'bg-maroon-800 text-white shadow-sm'
                  : 'bg-white text-charcoal-700 hover:bg-gold-50 border border-gold-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, i) => (
            <details
              key={i}
              className="group bg-white rounded-2xl border border-gold-200 p-4 transition-all duration-200 open:shadow-sm"
            >
              <summary className="font-serif font-bold text-sm text-charcoal-900 cursor-pointer list-none flex items-center justify-between">
                <span>{faq.q}</span>
                <ChevronRight className="w-4 h-4 text-maroon-800 group-open:rotate-90 transition-transform shrink-0 ml-3" />
              </summary>
              <div className="text-xs text-charcoal-600 mt-3 pt-3 border-t border-gold-100 leading-relaxed space-y-2">
                <p>{faq.a}</p>
                <span className="inline-block text-[10px] uppercase font-bold text-saffron-700">
                  Category: {faq.category}
                </span>
              </div>
            </details>
          ))}
        </div>

        {/* Still need help box */}
        <div className="p-6 bg-white rounded-3xl border border-gold-300 shadow-sm text-center space-y-3">
          <h3 className="font-serif font-bold text-lg text-charcoal-900">
            Still Have Questions?
          </h3>
          <p className="text-xs text-charcoal-600 max-w-md mx-auto">
            Our Dubai-based spiritual coordinators and senior Acharyas are available 7 days a week to assist you.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="tel:+971585924188"
              className="px-5 py-2.5 bg-maroon-800 text-white rounded-xl text-xs font-bold hover:bg-maroon-900 transition-colors flex items-center gap-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5 text-gold-300" />
              <span>Call +971 58 592 4188</span>
            </a>
            <Link
              to="/contact"
              className="px-5 py-2.5 bg-ivory text-charcoal-800 border border-gold-300 rounded-xl text-xs font-bold hover:bg-gold-100 transition-colors"
            >
              Contact Support Form
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
