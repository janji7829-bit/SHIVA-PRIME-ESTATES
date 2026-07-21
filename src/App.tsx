/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedProperties from './components/FeaturedProperties';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import InquiryForm from './components/InquiryForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [selectedProperty, setSelectedProperty] = useState<string>('');

  const handleEnquireClick = (propertyName: string) => {
    setSelectedProperty(propertyName);
    // Smooth scroll to Inquiry Form
    const enquirySection = document.getElementById('enquire');
    if (enquirySection) {
      enquirySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Animated Preloader Overlay */}
      <AnimatePresence mode="wait">
        {loading && (
          <Preloader onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-[#F8F9FA] font-sans text-gray-800 antialiased selection:bg-brand-gold selection:text-brand-blue-dark">
        {/* Navigation */}
        <Navbar />

        {/* Hero Banner Section */}
        <Hero />

        {/* About Corporate & Stats Section */}
        <About />

        {/* Featured Properties Inventory Grid */}
        <FeaturedProperties onEnquireClick={handleEnquireClick} />

        {/* Why Choose Us Trust Section */}
        <WhyChooseUs />

        {/* Project Site Progress & Events Gallery */}
        <Gallery />

        {/* Client Testimonials Section */}
        <Testimonials />

        {/* Interactive Inquiry Lead Capture Form */}
        <InquiryForm selectedProperty={selectedProperty} />

        {/* Office Contact Coordinates & Map Section */}
        <Contact />

        {/* Footer Details */}
        <Footer />

        {/* Float Messaging Access widget */}
        <FloatingWhatsApp />
      </div>
    </>
  );
}
