/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { TRUST_STATS } from '../data';
import { Target, Compass, Landmark, ShieldAlert } from 'lucide-react';
import { LightSurveyBackground } from './LuxuryBackgroundEffects';

export default function About() {
  return (
    <section id="about" className="py-24 overflow-hidden relative">
      {/* Absolute Decorative Watermark or BG circles */}
      <LightSurveyBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-mono tracking-widest text-brand-gold-dark uppercase font-semibold">
            About Shiva Prime Estates
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-brand-blue tracking-tight mt-2">
            The Benchmark of Trust in <span className="text-gold-gradient-dark">Land Acquisitions</span>
          </h2>
          <div className="h-1 w-20 bg-brand-gold mx-auto mt-4 rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Mission, Vision, Intro */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-display font-semibold text-brand-blue">
                Helping Families and Investors Secure Wealth Through Approved Open Plots.
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Established in 2011, <strong>Shiva Prime Estates</strong> was founded on a simple principle: absolute transparency in land dealings. For over a decade, we have been the most trusted partner for land buyers, specializing in carefully selected open residential plots, gated community layouts, and high-yield agricultural farmlands across high-growth corridors.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                We take care of the entire lifecycle of land acquisition—from strict legal scrutiny and physical title clearance to development of layouts with premium amenities, state registration, and post-sale caretaking. When you buy from Shiva, you buy peace of mind.
              </p>
            </div>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="border border-gray-100 bg-gray-50/50 p-6 rounded-xl flex flex-col space-y-3 hover:border-brand-gold/30 hover:bg-brand-gold-light/10 transition-all duration-300">
                <div className="bg-brand-blue-light text-brand-gold p-3 rounded-lg w-fit">
                  <Target className="h-6 w-6" />
                </div>
                <h4 className="text-lg font-display font-bold text-brand-blue">Our Mission</h4>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                  To provide accessible, legally pristine, and high-appreciation land opportunities that empower families and business owners to confidently secure their financial future.
                </p>
              </div>

              <div className="border border-gray-100 bg-gray-50/50 p-6 rounded-xl flex flex-col space-y-3 hover:border-brand-gold/30 hover:bg-brand-gold-light/10 transition-all duration-300">
                <div className="bg-brand-blue-light text-brand-gold p-3 rounded-lg w-fit">
                  <Compass className="h-6 w-6" />
                </div>
                <h4 className="text-lg font-display font-bold text-brand-blue">Our Vision</h4>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                  To be India's premier client-centric land developer, setting industry standards for absolute documentation accuracy, rapid development timelines, and long-term land guardianship.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Key Trust Statistics */}
          <div className="lg:col-span-5 bg-brand-blue text-white rounded-2xl p-8 sm:p-10 shadow-2xl relative overflow-hidden border border-brand-gold/30">
            {/* Absolute visual lines */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="relative z-10 space-y-8">
              <div className="border-b border-white/10 pb-6">
                <h3 className="text-2xl font-display font-bold text-brand-gold flex items-center gap-2">
                  <Landmark className="h-6 w-6 text-brand-gold" /> Why Shiva Stands Apart
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm mt-2 leading-relaxed">
                  Our statistical milestones are a testament to our customer-first philosophy and a decade of uncompromised service.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-8">
                {TRUST_STATS.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex flex-col"
                  >
                    <span className="text-3xl sm:text-4xl font-display font-extrabold text-white text-gold-gradient tracking-tight">
                      {stat.value}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-300 font-medium mt-1 leading-snug">
                      {stat.label}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Quote Badge */}
              <div className="pt-6 border-t border-white/10 flex items-start space-x-3 text-xs text-gray-400 italic">
                <ShieldAlert className="h-5 w-5 text-brand-gold shrink-0 mt-0.5" />
                <span>
                  "We verify every link document back to 1990 and clear all land survey boundaries before listing. Your investment is safe." — Legal Team, Shiva Prime Estates
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
