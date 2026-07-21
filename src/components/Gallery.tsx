/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_ITEMS } from '../data';
import { GalleryItem } from '../types';
import { ZoomIn, X, Camera } from 'lucide-react';
import { LightSurveyBackground } from './LuxuryBackgroundEffects';

export default function Gallery() {
  const [activeTab, setActiveTab] = useState<string>('All');
  const [lightboxImage, setLightboxImage] = useState<GalleryItem | null>(null);

  const tabs = ['All', 'Site Progress', 'Inauguration', 'Farmland', 'Customer Visit'];

  const filteredItems = activeTab === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeTab);

  return (
    <section id="gallery" className="py-24 relative overflow-hidden">
      {/* Light Survey Background */}
      <LightSurveyBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs sm:text-sm font-mono tracking-widest text-brand-gold-dark uppercase font-semibold">
            Visual Portfolios
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-brand-blue tracking-tight mt-2">
            Our <span className="text-gold-gradient-dark">Site & Project Gallery</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
            Real photos from our ongoing developments, community launches, and happy site visits with families. Transparency is our priority.
          </p>
          <div className="h-1 w-20 bg-brand-gold mx-auto mt-4 rounded-full" />
        </div>

        {/* Gallery Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold tracking-wide rounded-md transition-all duration-300 cursor-pointer ${
                activeTab === tab
                  ? 'bg-brand-blue-light text-brand-gold border-b-2 border-brand-gold'
                  : 'bg-gray-50 text-gray-500 hover:text-brand-blue hover:bg-gray-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid of Images */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                onClick={() => setLightboxImage(item)}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300"
              >
                {/* Image */}
                <img
                  src={item.url}
                  alt={item.caption}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-dark/90 via-brand-blue-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5" />

                {/* Hover Content */}
                <div className="absolute inset-x-5 bottom-5 z-10 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="bg-brand-gold text-brand-blue text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                    {item.category}
                  </span>
                  <h4 className="text-white font-display font-semibold text-sm sm:text-base mt-2 truncate">
                    {item.caption}
                  </h4>
                  <div className="flex items-center text-brand-gold-light text-xs mt-1.5 font-medium gap-1">
                    <ZoomIn className="h-3.5 w-3.5" /> Click to enlarge
                  </div>
                </div>

                {/* Small indicator icon in corner (always visible) */}
                <div className="absolute top-3 right-3 bg-white/85 text-brand-blue p-2 rounded-full shadow-md group-hover:scale-0 transition-transform duration-300">
                  <Camera className="h-4 w-4" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Lightbox / Zoom-In Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxImage(null)}
              className="absolute inset-0 bg-brand-blue-dark/95 backdrop-blur-md"
            />

            {/* Lightbox Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative z-10 w-full max-w-4xl max-h-[85vh] flex flex-col overflow-hidden bg-brand-blue-dark border border-brand-gold/20 rounded-xl shadow-2xl"
            >
              {/* Image in Modal */}
              <div className="relative flex-grow flex items-center justify-center p-2 bg-brand-blue-dark">
                <img
                  src={lightboxImage.url}
                  alt={lightboxImage.caption}
                  className="max-w-full max-h-[70vh] object-contain rounded-lg"
                  referrerPolicy="no-referrer"
                />
                
                {/* Close Button */}
                <button
                  onClick={() => setLightboxImage(null)}
                  className="absolute top-4 right-4 bg-brand-blue text-white hover:text-brand-gold p-2.5 rounded-full shadow-md hover:bg-brand-blue-light transition-colors cursor-pointer"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Caption in Modal */}
              <div className="bg-brand-blue-dark/95 border-t border-white/10 p-5 text-left">
                <span className="bg-brand-gold text-brand-blue text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                  {lightboxImage.category}
                </span>
                <p className="text-white font-display text-base sm:text-lg font-medium mt-2">
                  {lightboxImage.caption}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
