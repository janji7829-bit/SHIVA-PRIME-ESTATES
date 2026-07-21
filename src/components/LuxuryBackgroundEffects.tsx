/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';

// 1. Hero Luxury Background Effects (Deep Dark Luxury - Gold & Navy)
export default function LuxuryBackgroundEffects() {
  const nodes = [
    { id: 1, top: '15%', left: '10%', size: 6, delay: 0 },
    { id: 2, top: '25%', left: '75%', size: 8, delay: 1.5 },
    { id: 3, top: '45%', left: '20%', size: 5, delay: 0.8 },
    { id: 4, top: '65%', left: '85%', size: 7, delay: 2.2 },
    { id: 5, top: '80%', left: '40%', size: 6, delay: 1.1 },
    { id: 6, top: '35%', left: '50%', size: 8, delay: 2.5 },
    { id: 7, top: '70%', left: '15%', size: 9, delay: 1.8 },
    { id: 8, top: '12%', left: '88%', size: 5, delay: 0.5 },
  ];

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* High-Contrast Blueprint Grid Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-15 text-brand-gold" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="survey-grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="0" cy="0" r="2.5" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#survey-grid)" />
      </svg>

      {/* Floating survey blueprint diagonals & connection paths */}
      <svg className="absolute inset-0 w-full h-full opacity-25 text-brand-gold" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M-100,200 L1600,700 M900,-100 L400,1000"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="6 12"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -120 }}
          transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
        />
        <motion.path
          d="M100,900 L1800,400"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeDasharray="4 8"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: 100 }}
          transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
        />
      </svg>

      {/* Floating luxury survey coordinates & nodes */}
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          style={{
            position: 'absolute',
            top: node.top,
            left: node.left,
            width: node.size,
            height: node.size,
          }}
          className="rounded-full bg-brand-gold shadow-[0_0_15px_rgba(197,160,89,0.8)]"
          animate={{
            y: [0, -15, 0],
            opacity: [0.4, 0.9, 0.4],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 5 + node.size,
            repeat: Infinity,
            delay: node.delay,
            ease: 'easeInOut',
          }}
        >
          {/* Subtle gold concentric rings representing secure land boundaries */}
          <motion.div
            className="absolute -inset-6 border-2 border-brand-gold/30 rounded-full"
            animate={{ scale: [0.7, 2.2, 0.7], opacity: [0, 0.6, 0] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              delay: node.delay,
              ease: 'easeInOut',
            }}
          />
        </motion.div>
      ))}

      {/* Elegant moving radial lens flares / lighting highlights */}
      <motion.div
        animate={{
          x: [-120, 120, -120],
          y: [-60, 60, -60],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[15%] left-[25%] w-[550px] h-[550px] bg-brand-gold/15 rounded-full blur-[140px]"
      />

      <motion.div
        animate={{
          x: [120, -120, 120],
          y: [60, -60, 60],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-[15%] right-[20%] w-[500px] h-[500px] bg-brand-blue-light/35 rounded-full blur-[120px]"
      />
    </div>
  );
}

// 2. Light Survey Background (For About, Gallery, etc. - Highly visible golden topographic lines & active pulses)
export function LightSurveyBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Luxurious soft-glowing gradient backdrop - Champagne Cream, White and Gold tint */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FAF7F0] via-[#FFFFFF] to-[#F1ECE1]" />

      {/* High-Resolution Grid Overlay representing land surveying drafts (Higher opacity & contrast) */}
      <svg className="absolute inset-0 w-full h-full text-brand-gold-dark opacity-[0.22]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="light-master-grid" width="100" height="100" patternUnits="userSpaceOnUse">
            {/* Fine Grid lines */}
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="1" />
            {/* Sub-divisions */}
            <path d="M 50 0 L 50 100 M 0 50 L 100 50" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />
            {/* Elegant Plot Corner markers */}
            <circle cx="50" cy="50" r="2.5" fill="currentColor" />
            <circle cx="0" cy="0" r="2" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#light-master-grid)" />
      </svg>

      {/* Golden Architectural Blueprint Contours (Highly Visible, Multi-layered, Elegant) */}
      <svg className="absolute inset-x-0 top-0 w-full h-[650px] text-brand-gold-dark opacity-[0.38]" viewBox="0 0 1440 650" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M-100,150 Q250,50 600,200 T1300,100 T1600,300" stroke="currentColor" strokeWidth="1.5" />
        <path d="M-100,180 Q250,80 600,230 T1300,130 T1600,330" stroke="currentColor" strokeWidth="1.0" strokeDasharray="4 4" />
        <path d="M-100,210 Q250,110 600,260 T1300,160 T1600,360" stroke="currentColor" strokeWidth="2.0" />
        <path d="M-100,240 Q250,140 600,290 T1300,190 T1600,390" stroke="currentColor" strokeWidth="1.0" />
        
        {/* Plot survey lines and triangulation arcs */}
        <circle cx="600" cy="260" r="120" stroke="currentColor" strokeWidth="1.0" strokeDasharray="4 8" />
        <circle cx="600" cy="260" r="6" fill="currentColor" />
        <line x1="600" y1="140" x2="600" y2="380" stroke="currentColor" strokeWidth="1.0" strokeDasharray="3 3" />
        <line x1="480" y1="260" x2="720" y2="260" stroke="currentColor" strokeWidth="1.0" strokeDasharray="3 3" />
        
        {/* Survey text tags */}
        <text x="615" y="255" fontSize="12" fontFamily="monospace" fill="currentColor" opacity="0.95" fontWeight="bold">STATION_B (EL. 542m)</text>
        <text x="615" y="275" fontSize="11" fontFamily="monospace" fill="currentColor" opacity="0.8">N 17° 25' 12" / E 78° 32' 40"</text>
      </svg>

      {/* Highly visible elegant rotating Compass Rose representing true north orientation */}
      <div className="absolute right-[8%] top-[15%] w-[250px] h-[250px] opacity-[0.45] text-brand-gold-dark hidden md:block">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 50, ease: 'linear' }}
          className="w-full h-full relative"
        >
          <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="1.25" />
            <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1.0" strokeDasharray="2 2" />
            <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="1.0" />
            {/* Compass points */}
            <line x1="50" y1="2" x2="50" y2="98" stroke="currentColor" strokeWidth="1.0" />
            <line x1="2" y1="50" x2="98" y2="50" stroke="currentColor" strokeWidth="1.0" />
            {/* Major North Arrow */}
            <polygon points="50,12 55,38 45,38" fill="currentColor" />
            <polygon points="50,88 55,62 45,62" fill="currentColor" opacity="0.75" />
            <polygon points="12,50 38,55 38,45" fill="currentColor" opacity="0.75" />
            <polygon points="88,50 62,55 62,45" fill="currentColor" opacity="0.75" />
          </svg>
          <div className="absolute top-1 left-1/2 -translate-x-1/2 text-[12px] font-mono font-black text-brand-gold-dark">N</div>
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[12px] font-mono font-black text-brand-gold-dark">S</div>
          <div className="absolute left-1 top-1/2 -translate-y-1/2 text-[12px] font-mono font-black text-brand-gold-dark">W</div>
          <div className="absolute right-1 top-1/2 -translate-y-1/2 text-[12px] font-mono font-black text-brand-gold-dark">E</div>
        </motion.div>
      </div>

      {/* Elegant Golden drafting board margin markings (Ruler-like indicators) */}
      <div className="absolute left-4 inset-y-12 w-5 border-r-2 border-brand-gold/30 flex flex-col justify-between text-[10px] font-mono text-brand-gold-dark/60 select-none hidden lg:flex font-bold">
        <span>000m</span>
        <span>100m</span>
        <span>200m</span>
        <span>300m</span>
        <span>400m</span>
        <span>500m</span>
        <span>600m</span>
      </div>

      {/* Highly Visibly animated floating surveying path lines with moving coordinate pulse */}
      <svg className="absolute inset-0 w-full h-full text-brand-gold-dark opacity-35" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M 100 100 L 400 300 L 800 200 L 1200 500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="6 12"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -120 }}
          transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
        />
        <circle cx="100" cy="100" r="4" fill="currentColor" />
        <circle cx="400" cy="300" r="4" fill="currentColor" />
        <circle cx="800" cy="200" r="4" fill="currentColor" />
        <circle cx="1200" cy="500" r="4" fill="currentColor" />
      </svg>

      {/* Beautiful drifting survey nodes */}
      <div className="absolute inset-0">
        {[
          { id: 1, top: '20%', left: '15%' },
          { id: 2, top: '60%', left: '80%' },
          { id: 3, top: '80%', left: '30%' },
        ].map((node, index) => (
          <div key={index} className="absolute text-brand-gold-dark opacity-80" style={{ top: node.top, left: node.left }}>
            <motion.div 
              animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 4, delay: index * 1.3 }}
              className="w-4 h-4 rounded-full bg-brand-gold flex items-center justify-center text-[8px] font-bold text-white shadow-md shadow-brand-gold/50"
            >
              +
            </motion.div>
          </div>
        ))}
      </div>

      {/* Decorative ambient light spotlights */}
      <div className="absolute top-[20%] left-[-10%] w-[650px] h-[650px] bg-brand-gold/20 rounded-full blur-[140px]" />
      <div className="absolute bottom-[10%] right-[-10%] w-[650px] h-[650px] bg-brand-blue-light/20 rounded-full blur-[140px]" />
    </div>
  );
}

// 3. Topographic Map Background (For Featured Properties & Testimonials - Richer contours & details)
export function TopoMapBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Light elegant warm champagne-cream gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAF7F2] via-[#FFFFFF] to-[#EFECE3]" />

      {/* High-Resolution Landscape elevation contours with higher contrast */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.38] text-brand-gold-dark" viewBox="0 0 1200 1200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="topo-fade-high" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.6" />
            <stop offset="50%" stopColor="currentColor" stopOpacity="0.95" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        {/* Contours simulating rolling luxury villa estates hills */}
        <path d="M-100,100 C200,-50 300,300 700,150 C1100,0 1000,450 1300,350" fill="none" stroke="url(#topo-fade-high)" strokeWidth="1.75" />
        <path d="M-100,150 C200,0 300,350 700,200 C1100,50 1000,500 1300,400" fill="none" stroke="url(#topo-fade-high)" strokeWidth="1.25" strokeDasharray="3 3" />
        
        <path d="M-100,300 C250,150 400,500 800,350 C1200,200 1100,650 1300,550" fill="none" stroke="url(#topo-fade-high)" strokeWidth="2.0" />
        <path d="M-100,350 C250,200 400,550 800,400 C1200,250 1100,700 1300,600" fill="none" stroke="url(#topo-fade-high)" strokeWidth="1.25" />

        <path d="M-100,500 C300,350 500,700 900,550 C1300,400 1200,850 1300,750" fill="none" stroke="url(#topo-fade-high)" strokeWidth="2.5" />
        <path d="M-100,550 C300,400 500,750 900,600 C1300,450 1200,900 1300,800" fill="none" stroke="url(#topo-fade-high)" strokeWidth="1.25" strokeDasharray="4 4" />

        <path d="M-100,700 C350,550 600,900 1000,750 C1400,600 1300,1050 1300,950" fill="none" stroke="url(#topo-fade-high)" strokeWidth="2.75" />
        <path d="M-100,900 C400,750 700,1100 1100,950 C1500,800 1400,1250 1300,1150" fill="none" stroke="url(#topo-fade-high)" strokeWidth="2.0" />

        {/* Contour height elevation indicators */}
        <text x="350" y="320" fontSize="12" fontFamily="monospace" fill="currentColor" opacity="0.9" fontWeight="bold" transform="rotate(12, 350, 320)">510m</text>
        <text x="550" y="525" fontSize="12" fontFamily="monospace" fill="currentColor" opacity="0.9" fontWeight="bold" transform="rotate(8, 550, 525)">520m</text>
        <text x="750" y="730" fontSize="12" fontFamily="monospace" fill="currentColor" opacity="0.9" fontWeight="bold" transform="rotate(-5, 750, 730)">530m</text>
      </svg>

      {/* Architectural survey coordinate crosshairs (High Visibility) */}
      <svg className="absolute left-[8%] top-[20%] w-[120px] h-[120px] text-brand-gold-dark opacity-[0.45]" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="1.5" />
        <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="50" cy="50" r="22" fill="none" stroke="currentColor" strokeWidth="1.0" strokeDasharray="3 3" />
        <circle cx="50" cy="50" r="5" fill="currentColor" />
        <text x="56" y="44" fontSize="10" fontFamily="monospace" fill="currentColor" fontWeight="bold">POINT_ALPHA</text>
      </svg>

      {/* Floating survey notes watermark */}
      <div className="absolute bottom-[8%] left-[5%] text-[11px] font-mono text-brand-gold-dark/50 tracking-widest font-bold hidden lg:block">
        SHIVA PRIME ESTATES • HIGH-RESOLUTION MASTER PLAN SURVEY • VERSION 4.2
      </div>

      {/* Animated Floating Gold Ring */}
      <div className="absolute right-[12%] bottom-[25%] w-[180px] h-[180px] text-brand-gold-dark opacity-40">
        <motion.div
          animate={{ scale: [1, 1.15, 1], rotate: -360 }}
          transition={{ repeat: Infinity, duration: 20, ease: 'easeInOut' }}
          className="w-full h-full border-2 border-dashed border-brand-gold rounded-full flex items-center justify-center"
        >
          <div className="w-[80%] h-[80%] border border-brand-gold/65 rounded-full flex items-center justify-center">
            <span className="text-[9px] font-mono tracking-wider font-bold">PLOT_MARKER_09</span>
          </div>
        </motion.div>
      </div>

      {/* Luxury lighting accentuation */}
      <div className="absolute top-[15%] right-[5%] w-[550px] h-[550px] bg-brand-gold/20 rounded-full blur-[130px]" />
      <div className="absolute bottom-[15%] left-[5%] w-[550px] h-[550px] bg-brand-blue-light/20 rounded-full blur-[130px]" />
    </div>
  );
}

// 4. Dark Blueprint Background (For Why Choose Us & Dark Blocks)
export function DarkBlueprintBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* High-fidelity solid branding background */}
      <div className="absolute inset-0 bg-[#061427]" />

      {/* Blueprint Grid Lines mimicking land survey blueprints */}
      <svg className="absolute inset-0 w-full h-full opacity-15 text-brand-gold" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dark-blueprint-grid-high" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="1" />
            <path d="M 50 0 L 50 100 M 0 50 L 100 50" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 6" />
            <circle cx="50" cy="50" r="2.5" fill="currentColor" />
            <circle cx="0" cy="0" r="2.5" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dark-blueprint-grid-high)" />
      </svg>

      {/* Moving coordinate tracker text indicators */}
      <div className="absolute top-[15%] left-[8%] text-[10px] font-mono text-brand-gold/40 uppercase tracking-[0.2em] space-y-1 font-semibold">
        <div>SYS_COORD_EASTING: 432,912mE</div>
        <div>SYS_COORD_NORTHING: 1,932,450mN</div>
        <div>ZONE_ID: 44Q</div>
      </div>

      <div className="absolute bottom-[12%] right-[8%] text-[10px] font-mono text-brand-gold/40 uppercase tracking-[0.2em] space-y-1 text-right font-semibold">
        <div>DATUM: WGS-84</div>
        <div>PROJECTION: UTM</div>
        <div>RERA_INDEX_VERIFIED: PASS</div>
      </div>

      {/* Concentric circle architectural alignment guidelines */}
      <svg className="absolute left-[30%] top-[-20%] w-[650px] h-[650px] text-brand-gold opacity-15" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="95" fill="none" stroke="currentColor" strokeWidth="0.75" />
        <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
        <circle cx="100" cy="100" r="45" fill="none" stroke="currentColor" strokeWidth="0.75" strokeDasharray="4 8" />
        <path d="M100,5 L100,195 M5,100 L195,100" stroke="currentColor" strokeWidth="0.5" />
      </svg>

      {/* Radial Gold-Blue atmospheric mist glows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-brand-gold/15 rounded-full blur-[140px]" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-brand-blue-light/65 rounded-full blur-[140px]" />
    </div>
  );
}
