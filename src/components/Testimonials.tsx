/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TESTIMONIALS } from '../data';
import { Star, Quote, ShieldCheck } from 'lucide-react';
import { TopoMapBackground } from './LuxuryBackgroundEffects';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      
      {/* Decorative Gold & Blue accents */}
      <TopoMapBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-mono tracking-widest text-brand-gold-dark uppercase font-semibold">
            Success Stories
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-brand-blue tracking-tight mt-2">
            What Our <span className="text-gold-gradient-dark">Land Owners Say</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
            Read stories of families, NRIs, doctors, and professionals who secure their land plots with Shiva Prime Estates.
          </p>
          <div className="h-1 w-20 bg-brand-gold mx-auto mt-4 rounded-full" />
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative group"
            >
              {/* Decorative quotation icon */}
              <Quote className="absolute top-6 right-8 h-10 w-10 text-brand-gold/15 group-hover:text-brand-gold/25 transition-colors duration-300" />

              <div className="space-y-4">
                {/* Star Rating */}
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4.5 w-4.5 ${
                        i < testimonial.rating
                          ? 'fill-brand-gold text-brand-gold'
                          : 'text-gray-200'
                      }`}
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>

              {/* Customer Profile Info */}
              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover border-2 border-brand-gold/40 shadow-sm"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-brand-blue font-display font-bold text-sm sm:text-base">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-400 text-xs font-medium">
                    {testimonial.role}
                  </p>
                  
                  {/* Verified Property purchased indicator */}
                  <span className="inline-flex items-center gap-1 text-[10px] bg-brand-gold-light/40 text-brand-blue-light font-semibold px-2 py-0.5 rounded mt-1.5 border border-brand-gold/10">
                    <ShieldCheck className="h-3 w-3 text-brand-gold-dark" /> Verified Purchase: {testimonial.propertyPurchased}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Core highlight bar */}
        <div className="mt-16 text-center">
          <p className="text-sm font-semibold text-brand-blue-light font-mono uppercase tracking-widest">
            Over 95% of our leads come from customer referrals. Secure yours today.
          </p>
        </div>

      </div>
    </section>
  );
}
