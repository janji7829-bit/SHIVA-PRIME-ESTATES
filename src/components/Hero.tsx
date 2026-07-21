/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight, ChevronDown, CheckCircle2, ShieldCheck, Award } from 'lucide-react';
import LuxuryBackgroundEffects from './LuxuryBackgroundEffects';

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const targetElement = document.querySelector(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-blue-dark">
      {/* Background Image with Dark & Golden Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_land_bg_1784314530917.jpg"
          alt="Premium Shiva Prime Estates Land Plots"
          className="w-full h-full object-cover scale-105 filter brightness-[0.4] saturate-[1.1]"
          referrerPolicy="no-referrer"
        />
        {/* Navy/Blue Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue-dark via-brand-blue-dark/60 to-transparent" />
        
        {/* Highly polished, high-resolution luxury background animation */}
        <LuxuryBackgroundEffects />

        {/* Soft Golden Ambient Glow */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-brand-blue/30 rounded-full blur-[100px] pointer-events-none" />
      </div>

      {/* Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 flex flex-col items-center justify-center min-h-screen text-center">
        
        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 bg-brand-blue-light/80 backdrop-blur-md border border-brand-gold/30 px-4 py-2 rounded-full mb-6 shadow-md"
        >
          <ShieldCheck className="h-4 w-4 text-brand-gold" />
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-brand-gold-light uppercase font-mono">
            RERA Approved & Clear Title Plots
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white tracking-tight max-w-5xl leading-[1.1] mb-6"
        >
          Invest in Your Future with <span className="text-gold-gradient block sm:inline">Premium Land Properties</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-300 font-sans max-w-3xl leading-relaxed mb-10"
        >
          Verified Open Plots, Farmlands, and Investment Properties in high-appreciation pathways. Build your villa or secure your family wealth today.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto"
        >
          <button
            onClick={() => handleScrollTo('#properties')}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-brand-gold-dark via-brand-gold to-brand-gold-light text-brand-blue hover:text-brand-blue-dark font-semibold rounded-md shadow-lg shadow-brand-gold/25 hover:shadow-brand-gold/40 transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
          >
            View Properties
            <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => handleScrollTo('#contact')}
            className="w-full sm:w-auto px-8 py-4 border-2 border-white/80 hover:border-brand-gold bg-transparent text-white hover:text-brand-gold font-semibold rounded-md backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
          >
            Contact Us
          </button>
        </motion.div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full border-t border-white/10 pt-10 text-left"
        >
          <div className="flex items-start space-x-3">
            <div className="bg-brand-gold/10 p-2 rounded-lg mt-0.5">
              <CheckCircle2 className="h-5 w-5 text-brand-gold" />
            </div>
            <div>
              <h3 className="text-white font-semibold font-display">100% Legal Clearance</h3>
              <p className="text-gray-400 text-xs sm:text-sm mt-0.5">30-year link documents & immediate registration</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="bg-brand-gold/10 p-2 rounded-lg mt-0.5">
              <Award className="h-5 w-5 text-brand-gold" />
            </div>
            <div>
              <h3 className="text-white font-semibold font-display">Premium Amenities</h3>
              <p className="text-gray-400 text-xs sm:text-sm mt-0.5">Blacktop roads, secure compound, underground utilities</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="bg-brand-gold/10 p-2 rounded-lg mt-0.5">
              <ShieldCheck className="h-5 w-5 text-brand-gold" />
            </div>
            <div>
              <h3 className="text-white font-semibold font-display">Strategic High ROI</h3>
              <p className="text-gray-400 text-xs sm:text-sm mt-0.5">Fast-developing corridors with guaranteed growth</p>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
          onClick={() => handleScrollTo('#about')}
        >
          <span className="text-[10px] font-mono tracking-widest text-brand-gold-light uppercase mb-1">
            Discover More
          </span>
          <ChevronDown className="h-5 w-5 text-brand-gold" />
        </motion.div>
      </div>
    </section>
  );
}
