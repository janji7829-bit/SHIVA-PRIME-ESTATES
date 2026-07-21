/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, Landmark, PhoneCall } from 'lucide-react';

const logo = new URL('../assets/images/shiva_prime_estates_logo_1784379690322.jpg', import.meta.url).href;

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Properties', href: '#properties' },
    { label: 'Why Choose Us', href: '#why-choose-us' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-blue-dark/95 backdrop-blur-md shadow-lg border-b border-brand-gold/20 py-3'
          : 'bg-gradient-to-b from-brand-blue-dark/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center space-x-2.5 group"
          >
            <div className="bg-brand-blue-dark/50 border border-brand-gold/30 p-1 rounded-lg shadow-md transition-all duration-300 group-hover:border-brand-gold flex-shrink-0">
              <img
                src={logo}
                alt="SPE Logo"
                className="h-16 w-16 object-cover rounded-md"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight flex items-center gap-1">
                SHIVA <span className="text-brand-gold">PRIME ESTATES</span>
              </span>
              <p className="text-[9px] font-mono tracking-[0.25em] text-brand-gold-light uppercase -mt-1 font-semibold">
                Since 2011 • Trusted Lands
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-medium text-gray-300 hover:text-brand-gold transition-colors duration-200 relative group py-2"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="#enquire"
              onClick={(e) => handleLinkClick(e, '#enquire')}
              className="inline-flex items-center justify-center px-5 py-2.5 border border-brand-gold bg-transparent hover:bg-brand-gold hover:text-brand-blue text-brand-gold text-sm font-semibold rounded-md transition-all duration-300 shadow-md hover:shadow-brand-gold/20"
            >
              Enquire Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-brand-blue-light focus:outline-none transition-colors"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible overflow-hidden'
        }`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-4 space-y-1 bg-brand-blue-dark/95 backdrop-blur-lg border-b border-brand-gold/10 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="block px-4 py-3 rounded-md text-base font-medium text-gray-300 hover:text-brand-gold hover:bg-brand-blue-light transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 pb-2 px-4">
            <a
              href="#enquire"
              onClick={(e) => handleLinkClick(e, '#enquire')}
              className="w-full flex items-center justify-center py-3 border border-brand-gold bg-brand-gold text-brand-blue text-base font-semibold rounded-md hover:bg-brand-gold-dark transition-all duration-300 shadow-md"
            >
              <PhoneCall className="mr-2 h-4 w-4" /> Enquire Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
