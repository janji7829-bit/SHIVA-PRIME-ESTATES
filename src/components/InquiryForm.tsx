/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, Phone, Sparkles, MapPin, Coffee, Users2 } from 'lucide-react';
import { LeadInquiry } from '../types';
import { DarkBlueprintBackground } from './LuxuryBackgroundEffects';

interface InquiryFormProps {
  selectedProperty: string;
}

export default function InquiryForm({ selectedProperty }: InquiryFormProps) {
  const [formData, setFormData] = useState<LeadInquiry>({
    name: '',
    phone: '',
    email: '',
    propertyInterest: '',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<LeadInquiry>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [savedInquiries, setSavedInquiries] = useState<LeadInquiry[]>([]);

  // Update property interest when selectedProperty prop changes (e.g., clicked from cards)
  useEffect(() => {
    if (selectedProperty) {
      setFormData(prev => ({ ...prev, propertyInterest: selectedProperty }));
      // Scroll to the Enquiry form section when selectedProperty changes
      const formSection = document.getElementById('enquire');
      if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [selectedProperty]);

  const propertiesDropdown = [
    { value: '', label: 'Select Property of Interest *' },
    { value: 'General Inquiry', label: 'General Land Inquiry' },
    { value: 'Shiva Elite Enclave', label: 'Shiva Elite Enclave (Gated Plots - Mokila)' },
    { value: 'Shiva Golden Meadows', label: 'Shiva Golden Meadows (Farmland - Chevella)' },
    { value: 'Shiva Valley View Plots', label: 'Shiva Valley View Plots (Residential - Devanahalli)' },
    { value: 'Shiva Royal Farms & Orchards', label: 'Shiva Royal Farms (Farmland - Shadnagar)' },
    { value: 'Shiva Heights Commercial Hub', label: 'Shiva Heights Commercial Hub (Adibatla)' },
    { value: 'Shiva Pristine Greens', label: 'Shiva Pristine Greens (Investment - Yadagirigutta)' }
  ];

  const validateForm = (): boolean => {
    const tempErrors: Partial<LeadInquiry> = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = 'Full Name is required';
      isValid = false;
    } else if (formData.name.trim().length < 3) {
      tempErrors.name = 'Name must be at least 3 characters';
      isValid = false;
    }

    // Indian phone number validation
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.phone.trim()) {
      tempErrors.phone = 'Phone Number is required';
      isValid = false;
    } else if (!phoneRegex.test(formData.phone.trim())) {
      tempErrors.phone = 'Enter a valid 10-digit Indian phone number';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required';
      isValid = false;
    } else if (!emailRegex.test(formData.email.trim())) {
      tempErrors.email = 'Enter a valid email address';
      isValid = false;
    }

    if (!formData.propertyInterest) {
      tempErrors.propertyInterest = 'Please select a property of interest';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for that field on input
    if (errors[name as keyof LeadInquiry]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate server side submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Store in LocalStorage so user can see they are persistent
      const updatedInquiries = [...savedInquiries, formData];
      setSavedInquiries(updatedInquiries);
      localStorage.setItem('shiva_prime_estate_leads', JSON.stringify(updatedInquiries));

      // Reset form (except propertyInterest in case they click again)
      setFormData({
        name: '',
        phone: '',
        email: '',
        propertyInterest: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="enquire" className="py-24 relative overflow-hidden text-white">
      {/* Visual gradients */}
      <DarkBlueprintBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-mono tracking-widest text-brand-gold uppercase font-semibold">
            Secure Your Plot
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight mt-2">
            Schedule a <span className="text-gold-gradient">Free Site Visit</span> & Consultation
          </h2>
          <p className="text-gray-300 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
            Fill out the inquiry form below. Our dedicated relationship managers will call you back within 15 minutes to organize a physical layout visit.
          </p>
          <div className="h-1 w-20 bg-brand-gold mx-auto mt-4 rounded-full" />
        </div>

        {/* Form and Benefits layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Site visit benefits */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-10 bg-brand-blue-light/20 border border-white/10 p-8 sm:p-10 rounded-2xl">
            <div className="space-y-6">
              <h3 className="text-2xl font-display font-bold text-brand-gold flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-brand-gold" /> VIP Site Visit Experience
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                We believe land buying is a momentous family event. That’s why we offer a highly-curated, zero-pressure premium site visit experience.
              </p>

              <div className="space-y-5 pt-4">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-brand-blue-dark border border-brand-gold/20 text-brand-gold rounded-lg">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm sm:text-base font-display">15-Minute Callback</h4>
                    <p className="text-gray-400 text-xs sm:text-sm mt-0.5">Receive immediate details, location maps, and brochures on WhatsApp.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-brand-blue-dark border border-brand-gold/20 text-brand-gold rounded-lg">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm sm:text-base font-display">Complimentary Chauffeur Services</h4>
                    <p className="text-gray-400 text-xs sm:text-sm mt-0.5">Free AC SUV pickup and drop-off from your home for your entire family.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-brand-blue-dark border border-brand-gold/20 text-brand-gold rounded-lg">
                    <Coffee className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm sm:text-base font-display">Guided Site Consultations</h4>
                    <p className="text-gray-400 text-xs sm:text-sm mt-0.5">Walk the layout lines with structural engineers and enjoy hot filter coffee.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Trust Metrics */}
            <div className="border-t border-white/10 pt-6 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Users2 className="h-5 w-5 text-brand-gold" />
                <span className="text-xs sm:text-sm text-gray-300 font-medium">Site visits this week:</span>
              </div>
              <span className="text-sm font-bold text-brand-gold bg-brand-blue-dark border border-brand-gold/20 px-3 py-1 rounded-md">
                42 Families Scheduled
              </span>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-7 bg-white text-gray-900 rounded-2xl p-8 sm:p-10 shadow-2xl border border-gray-100 relative">
            
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="border-b border-gray-100 pb-4">
                    <h3 className="text-2xl font-display font-bold text-brand-blue">Property Inquiry Form</h3>
                    <p className="text-gray-500 text-xs sm:text-sm mt-1">Please enter your accurate contact details below.</p>
                  </div>

                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs sm:text-sm font-semibold text-brand-blue font-mono uppercase tracking-wider block">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Anand Vardhan"
                      className={`w-full px-4 py-3 rounded-lg border text-sm sm:text-base focus:outline-none transition-all ${
                        errors.name
                          ? 'border-red-500 focus:ring-1 focus:ring-red-500 bg-red-50/20'
                          : 'border-gray-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue'
                      }`}
                    />
                    {errors.name && <p className="text-red-500 text-xs font-semibold">{errors.name}</p>}
                  </div>

                  {/* Phone & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone Input */}
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-xs sm:text-sm font-semibold text-brand-blue font-mono uppercase tracking-wider block">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-3.5 text-gray-400 text-xs sm:text-sm font-mono">+91</span>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          maxLength={10}
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="9876543210"
                          className={`w-full pl-12 pr-4 py-3 rounded-lg border text-sm sm:text-base focus:outline-none transition-all ${
                            errors.phone
                              ? 'border-red-500 focus:ring-1 focus:ring-red-500 bg-red-50/20'
                              : 'border-gray-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue'
                          }`}
                        />
                      </div>
                      {errors.phone && <p className="text-red-500 text-xs font-semibold">{errors.phone}</p>}
                    </div>

                    {/* Email Input */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs sm:text-sm font-semibold text-brand-blue font-mono uppercase tracking-wider block">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="anand@example.com"
                        className={`w-full px-4 py-3 rounded-lg border text-sm sm:text-base focus:outline-none transition-all ${
                          errors.email
                            ? 'border-red-500 focus:ring-1 focus:ring-red-500 bg-red-50/20'
                            : 'border-gray-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue'
                        }`}
                      />
                      {errors.email && <p className="text-red-500 text-xs font-semibold">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Property Selection */}
                  <div className="space-y-1.5">
                    <label htmlFor="propertyInterest" className="text-xs sm:text-sm font-semibold text-brand-blue font-mono uppercase tracking-wider block">
                      Select Land / Property Interest *
                    </label>
                    <select
                      id="propertyInterest"
                      name="propertyInterest"
                      value={formData.propertyInterest}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg border text-sm sm:text-base focus:outline-none transition-all bg-white cursor-pointer ${
                        errors.propertyInterest
                          ? 'border-red-500 focus:ring-1 focus:ring-red-500 bg-red-50/20'
                          : 'border-gray-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue'
                      }`}
                    >
                      {propertiesDropdown.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    {errors.propertyInterest && (
                      <p className="text-red-500 text-xs font-semibold">{errors.propertyInterest}</p>
                    )}
                  </div>

                  {/* Message Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs sm:text-sm font-semibold text-brand-blue font-mono uppercase tracking-wider block">
                      Tell Us Your Requirements (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="e.g. Looking to visit this weekend. Interested in East facing plots with clear highway access."
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue text-sm sm:text-base focus:outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-brand-blue hover:bg-brand-blue-light text-brand-gold font-bold rounded-lg shadow-lg shadow-brand-blue/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-85"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-brand-gold" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Submitting Inquiry...
                      </>
                    ) : (
                      <>
                        <Send className="h-4.5 w-4.5 text-brand-gold" />
                        Request Callback & Details
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-10 px-4 flex flex-col items-center justify-center space-y-6"
                >
                  <div className="bg-emerald-50 text-emerald-600 p-4 rounded-full shadow-inner border border-emerald-100">
                    <CheckCircle2 className="h-16 w-16" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-3xl font-display font-bold text-brand-blue">Thank You, Anand!</h3>
                    <p className="text-emerald-700 font-semibold font-mono tracking-wide text-xs uppercase bg-emerald-50 border border-emerald-100 px-3 py-1 rounded w-fit mx-auto">
                      Inquiry Logged successfully
                    </p>
                    <p className="text-gray-500 text-sm max-w-md mx-auto pt-2 leading-relaxed">
                      We have sent your custom layout brochure and pricing PDF to your registered phone number via WhatsApp. A relationship executive will contact you shortly to schedule your guided AC SUV site visit.
                    </p>
                  </div>

                  <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-6 px-6 py-2.5 bg-gray-100 hover:bg-gray-200 text-brand-blue font-bold text-sm rounded-md transition-all cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
