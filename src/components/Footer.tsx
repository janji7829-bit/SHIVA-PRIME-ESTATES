/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Landmark, Facebook, Instagram, Youtube, Linkedin, ArrowUp, Mail, Phone, MapPin } from 'lucide-react';

const logo = new URL('../assets/images/shiva_prime_estates_logo_1784379690322.jpg', import.meta.url).href;

export default function Footer() {
  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: 'https://facebook.com', label: 'Facebook' },
    { icon: <Instagram className="h-5 w-5" />, href: 'https://instagram.com', label: 'Instagram' },
    { icon: <Youtube className="h-5 w-5" />, href: 'https://youtube.com', label: 'YouTube' },
    { icon: <Linkedin className="h-5 w-5" />, href: 'https://linkedin.com', label: 'LinkedIn' }
  ];

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Featured Properties', href: '#properties' },
    { label: 'Why Choose Us', href: '#why-choose-us' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Client Testimonials', href: '#testimonials' },
    { label: 'Contact Support', href: '#contact' }
  ];

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-brand-blue-dark text-white border-t border-brand-gold/15 relative">
      
      {/* Scroll to Top Circle Button */}
      <button
        onClick={handleScrollTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-brand-gold hover:bg-brand-gold-dark text-brand-blue hover:text-brand-blue-dark p-3.5 rounded-full shadow-lg transition-all cursor-pointer group"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5 transform group-hover:-translate-y-0.5 transition-transform" />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home')}
              className="flex items-center space-x-2.5 w-fit group"
            >
              <div className="bg-brand-blue-dark/50 border border-brand-gold/30 p-1 rounded-lg text-brand-blue transition-all duration-300 group-hover:border-brand-gold flex-shrink-0">
                <img
                  src={logo}
                  alt="SPE Logo"
                  className="h-16 w-16 object-cover rounded-md"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="text-xl font-display font-bold text-white tracking-tight flex items-center gap-1">
                  SHIVA <span className="text-brand-gold">PRIME ESTATES</span>
                </span>
                <p className="text-[8px] font-mono tracking-[0.2em] text-brand-gold-light uppercase font-semibold">
                  Securing Legacies Since 2011
                </p>
              </div>
            </a>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed pt-2">
              The premium destination for secure, legally-cleared, high-yield open plots and agricultural farmlands in South India. Build your wealth with trust.
            </p>
            {/* Social icons */}
            <div className="flex space-x-3 pt-2">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2.5 bg-brand-blue border border-white/10 hover:border-brand-gold text-gray-400 hover:text-brand-gold rounded-full shadow-md transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-brand-gold font-mono uppercase tracking-wider">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-gray-400 hover:text-brand-gold text-xs sm:text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Office Locations */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-brand-gold font-mono uppercase tracking-wider">
              Prime Land Sites
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
              <li>
                <span className="text-white font-medium">Shiva Elite Enclave</span>
                <p className="text-gray-500 text-xs">Mokila, Gachibowli Outer Ring Road</p>
              </li>
              <li>
                <span className="text-white font-medium">Shiva Golden Meadows</span>
                <p className="text-gray-500 text-xs">Chevella, Agricultural Zone</p>
              </li>
              <li>
                <span className="text-white font-medium">Shiva Valley View Plots</span>
                <p className="text-gray-500 text-xs">Devanahalli near Airport, Bangalore</p>
              </li>
              <li>
                <span className="text-white font-medium">Shiva Royal Farms & Orchards</span>
                <p className="text-gray-500 text-xs">Shadnagar Outskirts, Hyderabad</p>
              </li>
            </ul>
          </div>

          {/* Core Support / Address Col */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-brand-gold font-mono uppercase tracking-wider">
              Corporate Office
            </h3>
            <ul className="space-y-3.5 text-xs sm:text-sm text-gray-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4.5 w-4.5 text-brand-gold shrink-0 mt-0.5" />
                <span>Shiva Towers, 4th Floor, Madhapur, HITEC City, Hyderabad, TS, 500081</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4.5 w-4.5 text-brand-gold shrink-0" />
                <span>+91 91000 83838</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4.5 w-4.5 text-brand-gold shrink-0" />
                <span>sales@shivaprimeestates.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal and copy rights */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 gap-4">
          <p className="text-center sm:text-left">
            © 2026 Shiva Prime Estates. All rights reserved. Built with uncompromised trust.
          </p>
          <div className="flex space-x-6">
            <a href="#privacy" className="hover:text-brand-gold transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-brand-gold transition-colors">Terms of Service</a>
            <a href="#rera" className="hover:text-brand-gold transition-colors">RERA Disclaimers</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
