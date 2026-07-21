/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Gem } from 'lucide-react';

const logo = new URL('../assets/images/shiva_prime_estates_logo_1784379690322.jpg', import.meta.url).href;

interface PreloaderProps {
  onComplete: () => void;
}

const loadingStages = [
  'Verifying RERA Approvals...',
  'Authenticating Land Title Deeds...',
  'Measuring Plot Dimensions...',
  'Preparing Site Portfolios...',
  'Welcome to Shiva Prime Estates'
];

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [stageIndex, setStageIndex] = useState(0);

  useEffect(() => {
    // Progress counter animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        // Increment progress faster at the beginning, then slower
        const increment = prev < 50 ? Math.random() * 8 + 4 : Math.random() * 4 + 2;
        return Math.min(Math.floor(prev + increment), 100);
      });
    }, 80);

    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    // Map progress percentage to stages
    const stage = Math.min(
      Math.floor((progress / 100) * loadingStages.length),
      loadingStages.length - 1
    );
    setStageIndex(stage);

    if (progress === 100) {
      const timeout = setTimeout(() => {
        onComplete();
      }, 600); // Small delay to let the user see the 100% state
      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -40, filter: 'blur(10px)' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[100] bg-brand-blue-dark flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Decorative Gold & Blue Atmospheric Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-gold/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-blue-light/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-md px-6 text-center flex flex-col items-center">
        
        {/* Pulsing Brand Emblem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative mb-8"
        >
          {/* External golden rotating rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
            className="absolute -inset-4 border border-brand-gold/20 rounded-full pointer-events-none"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
            className="absolute -inset-2 border border-dashed border-brand-gold/40 rounded-full pointer-events-none"
          />

          <div className="bg-brand-blue-dark/50 border border-brand-gold/30 p-1.5 rounded-2xl shadow-2xl shadow-brand-gold/25 relative z-10">
            <img
              src={logo}
              alt="SPE Logo"
              className="h-24 w-24 object-cover rounded-xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

        {/* Brand Name */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-1 mb-10"
        >
          <span className="text-3xl font-display font-bold text-white tracking-wider flex items-center gap-1 justify-center">
            SHIVA <span className="text-brand-gold">PRIME ESTATES</span>
          </span>
          <p className="text-xs font-mono tracking-[0.3em] text-brand-gold-light uppercase font-semibold">
            Uncompromised Trust • Since 2011
          </p>
        </motion.div>

        {/* Loading progress card container */}
        <div className="w-full bg-brand-blue-light/30 border border-white/5 backdrop-blur-md p-6 rounded-2xl shadow-lg space-y-4">
          
          {/* Animated Stage Description */}
          <div className="h-6 overflow-hidden flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={stageIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-xs font-mono text-brand-gold font-medium tracking-wide"
              >
                {loadingStages[stageIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Progress Bar Track */}
          <div className="w-full bg-brand-blue-dark/80 h-1.5 rounded-full overflow-hidden border border-white/5 p-[1px]">
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut' }}
              className="h-full bg-gradient-to-r from-brand-gold-dark via-brand-gold to-brand-gold-light rounded-full shadow-md shadow-brand-gold/35"
            />
          </div>

          {/* Progress Counter & Checkmark */}
          <div className="flex justify-between items-center text-xs font-semibold">
            <div className="flex items-center gap-1.5 text-gray-400">
              <ShieldCheck className="h-4 w-4 text-brand-gold" />
              <span className="font-mono">RERA Certified Land</span>
            </div>
            <span className="text-brand-gold font-mono text-sm tracking-widest">{progress}%</span>
          </div>

        </div>

        {/* Footer info inside loader */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="absolute bottom-8 text-center text-[10px] font-mono uppercase tracking-[0.25em] text-white/40 flex items-center gap-2"
        >
          <Gem className="h-3.5 w-3.5 text-brand-gold/60" /> Secure Investment Pathway
        </motion.div>

      </div>
    </motion.div>
  );
}
