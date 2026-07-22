/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show the small chat tooltip after 3.5 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = "https://wa.me/91999999999?text=Hello%20Shiva%20Prime%20Estates,%20I%20am%20interested%20in%20inquiring%20about%20your%20premium%20open%20land%20plots.";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Tooltip bubble */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="mb-3 bg-brand-blue-dark text-white border border-brand-gold/20 px-4 py-3 rounded-xl shadow-2xl max-w-xs relative flex items-start gap-2.5"
          >
            <div className="flex-grow text-xs font-sans">
              <p className="font-bold text-brand-gold font-display text-sm">Need Assistance?</p>
              <p className="text-gray-300 mt-1 leading-relaxed">
                Click to instantly chat with our lead land surveyor on WhatsApp.
              </p>
            </div>
            
            {/* Close tooltip button */}
            <button
              onClick={() => setShowTooltip(false)}
              className="text-gray-400 hover:text-brand-gold p-0.5 rounded transition-colors shrink-0 cursor-pointer"
            >
              <X className="h-3 w-3" />
            </button>

            {/* Downward triangle arrow */}
            <div className="absolute bottom-[-6px] right-6 w-3 h-3 bg-brand-blue-dark border-r border-b border-brand-gold/20 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Bouncing WhatsApp Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full shadow-2xl flex items-center justify-center border border-[#128C7E]/20 transition-colors cursor-pointer group"
      >
        <MessageSquare className="h-6 w-6 fill-white text-[#25D366] group-hover:fill-white" />
      </motion.a>

    </div>
  );
}
