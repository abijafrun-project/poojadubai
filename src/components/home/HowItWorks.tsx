import React from 'react';
import { Sparkles, Calendar, Flame, HeartHandshake } from 'lucide-react';
import { SacredDiyaIcon } from '../common/MandalaDecor';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Select Your Puja',
      desc: 'Choose from 16+ authentic Vedic rituals, Havans, and Sanskars suited for your family milestone or festival.',
      icon: Sparkles
    },
    {
      num: '02',
      title: 'Book Your Pandit',
      desc: 'Pick your preferred date, Shubh Muhurat, ceremony language, and package with transparent AED pricing.',
      icon: Calendar
    },
    {
      num: '03',
      title: 'Perform the Puja',
      desc: 'Our verified Vedic Pandit arrives with authentic organic samagri, or hosts an interactive live HD E-Puja.',
      icon: Flame
    },
    {
      num: '04',
      title: 'Receive Blessings',
      desc: 'Partake in sacred Vedic aarti, sanctify your abode, and distribute consecrated prasad with eternal peace.',
      icon: HeartHandshake
    }
  ];

  return (
    <section className="py-16 bg-white border-b border-gold-200/60 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-saffron-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-saffron-100 text-saffron-800 text-xs font-bold uppercase tracking-wider">
            <SacredDiyaIcon className="w-3.5 h-3.5" glow={false} />
            <span>Seamless Vedic Experience</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-900">
            How DivyaPuja Works
          </h2>
          <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
            From Muhurat selection to sacred aarti, we take care of every detail so you can immerse fully in devotion.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative bg-ivory rounded-3xl p-6 border border-gold-200 shadow-sm hover:shadow-spiritual transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-maroon-800 to-maroon-950 text-gold-300 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-serif text-2xl font-black text-gold-400/60 group-hover:text-gold-500 transition-colors">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-lg text-charcoal-900 group-hover:text-maroon-800 transition-colors mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs text-charcoal-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-gold-200/60 flex items-center text-[11px] font-bold text-saffron-700">
                  <span>Step {idx + 1} of 4</span>
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
