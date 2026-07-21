/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShieldCheck, FileCheck, MapPin, BadgePercent, Headphones } from 'lucide-react';
import { WHY_CHOOSE_US_POINTS } from '../data';
import { DarkBlueprintBackground } from './LuxuryBackgroundEffects';

export default function WhyChooseUs() {
  // Let's pair each data point with an icon
  const icons = [
    <ShieldCheck className="h-8 w-8 text-brand-gold shrink-0" />,
    <FileCheck className="h-8 w-8 text-brand-gold shrink-0" />,
    <MapPin className="h-8 w-8 text-brand-gold shrink-0" />,
    <BadgePercent className="h-8 w-8 text-brand-gold shrink-0" />,
    <Headphones className="h-8 w-8 text-brand-gold shrink-0" />
  ];

  return (
    <section id="why-choose-us" className="py-24 text-white relative overflow-hidden">
      
      {/* Decorative blueprint background */}
      <DarkBlueprintBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-mono tracking-widest text-brand-gold uppercase font-semibold">
            Our Core Values
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight mt-2">
            Why Discerning Land Buyers <span className="text-gold-gradient">Choose Shiva Prime</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
            We don't just sell plots; we build foundations of multigenerational security. Here is how we guarantee a safe investment for you.
          </p>
          <div className="h-1 w-20 bg-brand-gold mx-auto mt-4 rounded-full" />
        </div>

        {/* Core Value Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US_POINTS.map((point, index) => (
            <div
              key={index}
              className={`bg-brand-blue-light/40 backdrop-blur-md border border-white/10 hover:border-brand-gold/40 p-8 rounded-2xl flex flex-col space-y-4 hover:shadow-xl hover:shadow-brand-gold/5 hover:-translate-y-1 transition-all duration-300 ${
                index === WHY_CHOOSE_US_POINTS.length - 1 && WHY_CHOOSE_US_POINTS.length % 3 !== 0
                  ? 'md:col-span-2 lg:col-span-1 max-w-2xl mx-auto md:w-full'
                  : ''
              }`}
            >
              {/* Icon Container */}
              <div className="p-3 bg-brand-blue-dark/80 rounded-xl w-fit border border-brand-gold/10">
                {icons[index] || <ShieldCheck className="h-8 w-8 text-brand-gold" />}
              </div>

              {/* Title & Description */}
              <div className="space-y-2">
                <h3 className="text-xl font-display font-bold text-white group-hover:text-brand-gold transition-colors">
                  {point.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Trust banner */}
        <div className="mt-16 bg-gradient-to-r from-brand-blue-light via-brand-blue-dark to-brand-blue-light border border-brand-gold/20 p-8 rounded-2xl text-center max-w-4xl mx-auto shadow-md">
          <p className="text-brand-gold-light text-base sm:text-lg font-display font-medium">
            "Land cannot be lost or stolen, nor can it be carried away. Purchased with common sense, paid for in full, and managed with reasonable care, it is about the safest investment in the world."
          </p>
          <span className="block text-xs font-mono tracking-wider text-gray-400 uppercase mt-3">— Franklin D. Roosevelt</span>
        </div>

      </div>
    </section>
  );
}
