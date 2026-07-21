/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FEATURED_PROPERTIES } from '../data';
import { Property } from '../types';
import { MapPin, Maximize, CircleDollarSign, Check, Eye, HelpCircle } from 'lucide-react';
import { TopoMapBackground } from './LuxuryBackgroundEffects';

interface FeaturedPropertiesProps {
  onEnquireClick: (propertyName: string) => void;
}

export default function FeaturedProperties({ onEnquireClick }: FeaturedPropertiesProps) {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedPropertyDetail, setSelectedPropertyDetail] = useState<Property | null>(null);

  const filters = [
    'All',
    'Gated Plot',
    'Farmland',
    'Residential Plot',
    'Commercial Plot',
    'Investment Land'
  ];

  const filteredProperties = activeFilter === 'All'
    ? FEATURED_PROPERTIES
    : FEATURED_PROPERTIES.filter(prop => prop.type === activeFilter);

  return (
    <section id="properties" className="py-24 relative overflow-hidden">
      {/* Decorative backdrop elements */}
      <TopoMapBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs sm:text-sm font-mono tracking-widest text-brand-gold-dark uppercase font-semibold">
            Premier Land Inventory
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-brand-blue tracking-tight mt-2">
            Explore Our <span className="text-gold-gradient-dark">Featured Land Listings</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
            Each plot is strictly verified, physically bordered, and ready for immediate possession and registration. Filter to find your ideal investment.
          </p>
          <div className="h-1 w-20 bg-brand-gold mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Categories Bar */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                activeFilter === filter
                  ? 'bg-brand-blue text-brand-gold shadow-md shadow-brand-blue/25 border border-brand-blue'
                  : 'bg-white text-gray-600 hover:text-brand-blue border border-gray-200 hover:border-brand-blue/40'
              }`}
            >
              {filter === 'All' ? 'All Properties' : filter}
            </button>
          ))}
        </div>

        {/* Properties Grid with Framer Motion AnimatePresence */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProperties.map((property) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={property.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col group h-full"
              >
                {/* Image & Badges */}
                <div className="relative overflow-hidden aspect-[4/3] shrink-0">
                  <img
                    src={property.image}
                    alt={property.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 bg-brand-blue-dark/90 backdrop-blur-md text-brand-gold text-xs font-mono font-semibold px-3 py-1.5 rounded-md border border-brand-gold/30">
                    {property.type}
                  </span>
                  {/* Verified Badge */}
                  {property.isVerified && (
                    <span className="absolute top-4 right-4 bg-emerald-600 text-white text-[10px] font-bold tracking-widest uppercase px-2.5 py-1.5 rounded-md flex items-center gap-1 shadow-md">
                      <Check className="h-3 w-3" /> Verified
                    </span>
                  )}
                  {/* Facing Info */}
                  {property.facing && (
                    <span className="absolute bottom-4 left-4 bg-brand-blue/80 backdrop-blur-md text-white text-[10px] font-medium px-2.5 py-1 rounded">
                      {property.facing} Facing
                    </span>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-4">
                    <h3 className="text-xl font-display font-bold text-brand-blue leading-snug group-hover:text-brand-gold-dark transition-colors">
                      {property.name}
                    </h3>
                    <div className="flex items-start text-gray-500 text-xs sm:text-sm mt-2">
                      <MapPin className="h-4.5 w-4.5 text-brand-gold shrink-0 mr-1 mt-0.5" />
                      <span>{property.location}</span>
                    </div>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 gap-4 py-4 my-2 border-y border-gray-100 text-xs sm:text-sm">
                    <div className="flex items-center text-gray-600 gap-2">
                      <Maximize className="h-4.5 w-4.5 text-brand-gold shrink-0" />
                      <div>
                        <p className="text-[10px] text-gray-400 font-mono uppercase">Plot Area</p>
                        <p className="font-semibold">{property.size}</p>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-600 gap-2">
                      <CircleDollarSign className="h-4.5 w-4.5 text-brand-gold shrink-0" />
                      <div>
                        <p className="text-[10px] text-gray-400 font-mono uppercase">Pricing</p>
                        <p className="font-semibold text-brand-blue-light">{property.price}</p>
                      </div>
                    </div>
                  </div>

                  {/* Amenities highlights */}
                  <div className="space-y-1.5 mb-6 flex-grow">
                    <p className="text-[10px] text-gray-400 font-mono uppercase tracking-wider mb-2">Key Amenities</p>
                    {property.features.slice(0, 3).map((feat, index) => (
                      <div key={index} className="flex items-center text-xs text-gray-500 gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-gold shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-3 mt-auto pt-4 border-t border-gray-50">
                    <button
                      onClick={() => setSelectedPropertyDetail(property)}
                      className="px-4 py-2.5 border border-gray-200 hover:border-brand-blue text-brand-blue hover:bg-brand-blue-light/5 text-xs font-semibold rounded-md transition-all flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <Eye className="h-4 w-4" /> Details
                    </button>
                    <button
                      onClick={() => onEnquireClick(property.name)}
                      className="px-4 py-2.5 bg-brand-blue hover:bg-brand-blue-light text-brand-gold text-xs font-bold rounded-md shadow transition-all flex items-center justify-center gap-1 cursor-pointer"
                    >
                      Enquire Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProperties.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-gray-100 shadow-sm mt-8">
            <HelpCircle className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-brand-blue">No Properties Found</h3>
            <p className="text-gray-500 text-sm mt-1">Please select another property filter category.</p>
          </div>
        )}

      </div>

      {/* Property Details Modal */}
      <AnimatePresence>
        {selectedPropertyDetail && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPropertyDetail(null)}
              className="absolute inset-0 bg-brand-blue-dark/80 backdrop-blur-sm"
            />
            
            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-2xl w-full max-w-2xl relative z-10 overflow-hidden shadow-2xl border border-brand-gold/20 flex flex-col max-h-[90vh]"
            >
              {/* Header Image */}
              <div className="relative aspect-[16/9] shrink-0">
                <img
                  src={selectedPropertyDetail.image}
                  alt={selectedPropertyDetail.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <button
                  onClick={() => setSelectedPropertyDetail(null)}
                  className="absolute top-4 right-4 bg-brand-blue-dark/80 text-white hover:text-brand-gold p-2 rounded-full backdrop-blur-sm transition-colors cursor-pointer"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <span className="absolute bottom-4 left-4 bg-brand-blue text-brand-gold text-xs font-mono font-semibold px-3 py-1.5 rounded border border-brand-gold/30 shadow-md">
                  {selectedPropertyDetail.type}
                </span>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto space-y-6">
                <div>
                  <h3 className="text-2xl font-display font-bold text-brand-blue">
                    {selectedPropertyDetail.name}
                  </h3>
                  <div className="flex items-center text-gray-500 text-sm mt-2">
                    <MapPin className="h-4.5 w-4.5 text-brand-gold shrink-0 mr-1" />
                    <span>{selectedPropertyDetail.location}</span>
                  </div>
                </div>

                {/* Specs */}
                <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <div>
                    <span className="text-xs text-gray-400 font-mono uppercase tracking-wider block">Plot Sizing</span>
                    <span className="text-base font-bold text-brand-blue font-display mt-0.5 block">{selectedPropertyDetail.size}</span>
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 font-mono uppercase tracking-wider block">Total Pricing</span>
                    <span className="text-base font-bold text-brand-gold-dark font-display mt-0.5 block">{selectedPropertyDetail.price}</span>
                  </div>
                  {selectedPropertyDetail.facing && (
                    <div className="col-span-2 pt-2 border-t border-gray-200/60">
                      <span className="text-xs text-gray-400 font-mono uppercase tracking-wider block">Plot Directional Facing</span>
                      <span className="text-sm font-semibold text-brand-blue mt-0.5 block">{selectedPropertyDetail.facing} Facing Plot</span>
                    </div>
                  )}
                </div>

                {/* Badges / Highlights */}
                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-brand-blue font-mono uppercase tracking-wider">Project Features & Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedPropertyDetail.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-brand-gold-light/45 text-brand-blue-dark border border-brand-gold/20 font-medium px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Full Amenities */}
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-brand-blue font-mono uppercase tracking-wider">Premium Layout Development Features</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedPropertyDetail.features.map((feature, i) => (
                      <div key={i} className="flex items-start text-sm text-gray-600 gap-2">
                        <Check className="h-4.5 w-4.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action CTA */}
                <div className="pt-4 border-t border-gray-100 flex gap-3">
                  <button
                    onClick={() => {
                      onEnquireClick(selectedPropertyDetail.name);
                      setSelectedPropertyDetail(null);
                    }}
                    className="flex-1 py-3.5 bg-brand-blue hover:bg-brand-blue-light text-brand-gold font-bold rounded-lg shadow-lg shadow-brand-blue/20 hover:shadow-brand-blue/35 transition-all text-center cursor-pointer"
                  >
                    Send Direct Inquiry for {selectedPropertyDetail.name}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
