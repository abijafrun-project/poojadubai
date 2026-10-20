import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  location: string;
  puja: string;
  rating: number;
  date: string;
  excerpt: string;
  avatar: string;
}

const SAMPLE_TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Priyanka & Vikram Singhania',
    location: 'Dubai Marina, UAE',
    puja: 'Griha Pravesh & Vastu Shanti',
    rating: 5,
    date: 'September 2026',
    excerpt: 'We moved into our new apartment in Marina and were anxious about building fire alarms. Pandit Rajesh Sharma was outstanding—he used clean organic samagri, explained every mantra in fluent English for our children, and left our home filled with serene divine energy.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 't-2',
    name: 'Dr. Ramesh Sundaram',
    location: 'Downtown Dubai & Singapore',
    puja: 'Rudrabhishek & Sri Rudram',
    rating: 5,
    date: 'August 2026',
    excerpt: 'The authentic Vedic pronunciation by Pandit Venkatesh was deeply moving. It reminded me of the ancient temples of South India. Having all 11 abhishek liquids arranged without any hassle in Dubai made the experience truly peaceful.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 't-3',
    name: 'Ananya & Rahul Roy',
    location: 'Jumeirah Golf Estates, Dubai',
    puja: 'Satyanarayan Katha & Havan',
    rating: 5,
    date: 'July 2026',
    excerpt: 'The "Pandit with Puja Samagri" package was a lifesaver. Finding banana trees and fresh tulsi leaves in Dubai can be exhausting, but DivyaPuja brought everything spotless and fresh. Our entire family felt blessed.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 't-4',
    name: 'Siddharth Patel',
    location: 'Business Bay, Dubai',
    puja: 'Diwali Corporate Lakshmi Puja',
    rating: 5,
    date: 'October 2026',
    excerpt: 'We booked DivyaPuja for our tech firm’s Diwali opening in Business Bay. The priest arrived exactly on the Shubh Muhurat, sanctified our books and devices, and performed a graceful aarti that our team cherished.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
  }
];

export const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex(prev => (prev === 0 ? SAMPLE_TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex(prev => (prev === SAMPLE_TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  // Auto rotate every 6 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = SAMPLE_TESTIMONIALS[currentIndex];

  return (
    <section className="py-16 bg-ivory border-b border-gold-200/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-200 text-maroon-900 text-xs font-bold uppercase tracking-wider">
            <Quote className="w-3.5 h-3.5 text-saffron-600" />
            <span>Devotee Experiences</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-900">
            Trusted by Hindu Families Across UAE
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-500">
            Sample client reviews gathered from home ceremonies and online E-Pujas in Dubai.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto relative">
          
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-spiritual-lg border border-gold-300 relative">
            <Quote className="w-12 h-12 text-gold-300/40 absolute top-6 right-8 pointer-events-none" />

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              
              <img
                src={current.avatar}
                alt={current.name}
                className="w-20 h-20 rounded-2xl object-cover border-2 border-gold-400 shadow-md shrink-0"
              />

              <div className="flex-1 text-center sm:text-left space-y-3">
                {/* Stars */}
                <div className="flex items-center justify-center sm:justify-start gap-1">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-saffron-400 text-saffron-400" />
                  ))}
                </div>

                {/* Excerpt */}
                <p className="font-serif italic text-base sm:text-lg text-charcoal-800 leading-relaxed">
                  "{current.excerpt}"
                </p>

                {/* Author & Puja Info */}
                <div className="pt-2 border-t border-charcoal-100 flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h4 className="font-serif font-bold text-sm text-maroon-900">
                      {current.name}
                    </h4>
                    <p className="text-xs text-charcoal-500">
                      {current.location} • <strong className="text-saffron-700">{current.puja}</strong>
                    </p>
                  </div>
                  <span className="text-[11px] text-charcoal-400 font-medium">
                    {current.date}
                  </span>
                </div>
              </div>

            </div>

          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-6 px-4">
            
            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {SAMPLE_TESTIMONIALS.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all ${
                    currentIndex === idx ? 'w-8 bg-maroon-800' : 'w-2.5 bg-gold-300 hover:bg-gold-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-xl bg-white hover:bg-gold-50 border border-gold-300 text-charcoal-700 hover:text-maroon-900 flex items-center justify-center transition-colors shadow-sm"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-xl bg-white hover:bg-gold-50 border border-gold-300 text-charcoal-700 hover:text-maroon-900 flex items-center justify-center transition-colors shadow-sm"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>

          {/* Demonstration Notice */}
          <div className="mt-4 text-center">
            <span className="inline-flex items-center gap-1.5 text-[11px] text-charcoal-400">
              <ShieldCheck className="w-3.5 h-3.5 text-saffron-600" />
              <span>Sample illustrative testimonials generated for client demonstration.</span>
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
