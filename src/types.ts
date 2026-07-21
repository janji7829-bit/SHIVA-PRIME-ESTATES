/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Property {
  id: string;
  name: string;
  location: string;
  size: string;
  price: string;
  image: string;
  type: 'Gated Plot' | 'Farmland' | 'Residential Plot' | 'Commercial Plot' | 'Investment Land';
  tags: string[];
  features: string[];
  isVerified: boolean;
  facing?: 'East' | 'West' | 'North' | 'South' | 'Corner Plot';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  rating: number;
  text: string;
  propertyPurchased: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  caption: string;
  category: 'Site Progress' | 'Inauguration' | 'Farmland' | 'Customer Visit';
}

export interface LeadInquiry {
  name: string;
  phone: string;
  email: string;
  propertyInterest: string;
  message: string;
}
