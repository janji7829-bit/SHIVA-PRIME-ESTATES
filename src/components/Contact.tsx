/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, Mail, MapPin, Calendar, Clock, MessageSquare } from 'lucide-react';
import { LightSurveyBackground } from './LuxuryBackgroundEffects';

export default function Contact() {
  const whatsappUrl = "https://wa.me/91999999999?text=Hello%20Shiva%20Prime%20Estates,%20I%20am%20interested%20in%20booking%20a%20site%20visit%20for%20your%20premium%20plots!";

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Light Survey Background */}
      <LightSurveyBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-mono tracking-widest text-brand-gold-dark uppercase font-semibold">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-brand-blue tracking-tight mt-2">
            Visit Our Head Office or <span className="text-gold-gradient-dark">Contact Us</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
            Our luxury experience centers are open 7 days a week. Drop by for a face-to-face consultation and fresh filter coffee.
          </p>
          <div className="h-1 w-20 bg-brand-gold mx-auto mt-4 rounded-full" />
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Direct Contacts */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-display font-bold text-brand-blue border-b border-gray-100 pb-4">
                Corporate Contacts
              </h3>

              {/* Phone Info */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-brand-blue text-brand-gold rounded-xl shadow-md shrink-0 border border-brand-gold/10">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-gray-400 font-mono uppercase tracking-wider">
                    Call Hotline (Toll-Free)
                  </h4>
                  <p className="text-brand-blue font-display font-bold text-lg mt-1 hover:text-brand-gold-dark transition-colors">
                    <a href="tel:+91999999999">+91 999999999</a>
                  </p>
                  <p className="text-gray-500 text-xs mt-0.5">Alternative support: +91 91000 84848</p>
                </div>
              </div>

              {/* Email Info */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-brand-blue text-brand-gold rounded-xl shadow-md shrink-0 border border-brand-gold/10">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-gray-400 font-mono uppercase tracking-wider">
                    Email Correspondence
                  </h4>
                  <p className="text-brand-blue font-semibold text-base mt-1 hover:text-brand-gold-dark transition-colors">
                    <a href="mailto:sales@shivaprimeestates.com">sales@shivaprimeestates.com</a>
                  </p>
                  <p className="text-gray-500 text-xs mt-0.5">General support: info@shivaprimeestates.com</p>
                </div>
              </div>

              {/* Office Address */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-brand-blue text-brand-gold rounded-xl shadow-md shrink-0 border border-brand-gold/10">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-gray-400 font-mono uppercase tracking-wider">
                    Corporate Head Office
                  </h4>
                  <p className="text-brand-blue font-medium text-sm sm:text-base mt-1 leading-relaxed">
                    Shiva Towers, 4th Floor, Block-B, Phase-2, HITEC City, Madhapur, Hyderabad, Telangana 500081
                  </p>
                </div>
              </div>
            </div>

            {/* Office Timing Cards */}
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 grid grid-cols-2 gap-4">
              <div className="flex items-start gap-2.5">
                <Calendar className="h-4.5 w-4.5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-brand-blue font-mono uppercase">Working Days</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Monday to Sunday (All days)</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="h-4.5 w-4.5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-brand-blue font-mono uppercase">Office Hours</h4>
                  <p className="text-xs text-gray-500 mt-0.5">9:00 AM — 8:00 PM (IST)</p>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Call Action */}
            <div className="pt-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center px-6 py-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold rounded-lg shadow-lg hover:shadow-[#25D366]/25 transition-all text-center gap-2 cursor-pointer group"
              >
                <MessageSquare className="h-5 w-5 fill-white text-[#25D366] group-hover:fill-white" />
                Chat with Land Specialist on WhatsApp
              </a>
            </div>
          </div>

          {/* Right Column: Interactive map */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-gray-50 p-2 flex-grow h-full min-h-[350px]">
              <iframe
                title="Shiva Prime Estates Head Office Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.183492582847!2d78.38139591487723!3d17.436573888048682!2m3!1f0!2f0!3f0!3m2!1i1242!2i768!4f13.1!3m3!1m2!1s0x3bcb93e43df3d527%3A0x6b86561f364020a5!2sHitech%20City%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1655000000000!5m2!1sen!2sin"
                className="w-full h-full min-h-[320px] rounded-xl border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
