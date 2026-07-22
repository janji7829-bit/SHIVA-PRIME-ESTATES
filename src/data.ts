/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Property, Testimonial, GalleryItem } from './types';

// Asset URLs resolved dynamically via Vite import.meta.url so they work in both dev and production build
const heroBgImg = new URL('./assets/images/hero_land_bg_1784314530917.jpg', import.meta.url).href;
const gatedPlotImg = new URL('./assets/images/property_gated_plot_modern_villas_1784382886025.jpg', import.meta.url).href;
const farmlandPlotImg = new URL('./assets/images/property_farmland_plots_1784380843329.jpg', import.meta.url).href;
const residentialCourtImg = new URL('./assets/images/property_residential_court_1784381281558.jpg', import.meta.url).href;
const commercialBmrdaImg = new URL('./assets/images/property_commercial_bmrda_1784382373032.jpg', import.meta.url).href;
const investmentPerungalathurImg = new URL('./assets/images/property_investment_perungalathur_chennai_1784644676855.jpg', import.meta.url).href;

export const TRUST_STATS = [
  { value: '15+', label: 'Years of Trust' },
  { value: '2,800+', label: 'Plots Handled & Sold' },
  { value: '1,950+', label: 'Happy Land Owners' },
  { value: '100%', label: 'Legally Verified Titles' }
];

export const FEATURED_PROPERTIES: Property[] = [
  {
    id: 'prop-elite-enclave',
    name: 'Shiva Elite Enclave',
    location: 'Mokila, Gachibowli Extension, Hyderabad',
    size: '240 - 500 Sq. Yds',
    price: '₹48 Lakhs onwards',
    image: gatedPlotImg,
    type: 'Gated Plot',
    tags: ['HMDA Approved Layout', 'Gated Community', 'Ready to Build'],
    features: ['40 & 30 Feet Blacktop Roads', 'Underground Drainage', 'Overhead Water Tank', '24/7 Manned Security', 'Underground Electricity'],
    isVerified: true,
    facing: 'Corner Plot'
  },
  {
    id: 'prop-golden-meadows',
    name: 'Shiva Golden Meadows',
    location: 'Chevella, Agricultural Zone, Telangana',
    size: '0.25 - 1.0 Acre',
    price: '₹35 Lakhs onwards',
    image: farmlandPlotImg,
    type: 'Farmland',
    tags: ['Clear Title Deed', 'Sandalwood Plantation', 'High Appreciation'],
    features: ['Automated Drip Irrigation', 'Fenced Compound Wall', 'Mango & Sandalwood Trees', 'Caretaker Residence', 'Excellent Groundwater'],
    isVerified: true,
    facing: 'East'
  },
  {
    id: 'prop-valley-view',
    name: 'Shiva Valley View Plots',
    location: 'Devanahalli, near Airport, North Bangalore',
    size: '1200 - 2400 Sq. Ft',
    price: '₹55 Lakhs onwards',
    image: residentialCourtImg,
    type: 'Residential Plot',
    tags: ['BIAAPA Approved', 'Scenic Foothill View', '90% Bank Loan Approved'],
    features: ['Modern Clubhouse', 'Jogging Track & Parks', 'Underground Sewage System', 'LED Streetlighting', 'Avenue Plantation'],
    isVerified: true,
    facing: 'North'
  },
  {
    id: 'prop-royal-farms',
    name: 'Shiva Royal Farms & Orchards',
    location: 'Shadnagar Outskirts, Hyderabad',
    size: '5 Guntas (605 Sq. Yds)',
    price: '₹19.5 Lakhs onwards',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
    type: 'Farmland',
    tags: ['DTCP Approved Layout', 'Fruit Plantation', 'Weekend Resort Access'],
    features: ['10 Years Maintenance Included', '24/7 Security & CCTV', 'Organic Fruit-bearing trees', 'Gated Boundary Fencing', 'Electricity Hookup'],
    isVerified: true,
    facing: 'East'
  },
  {
    id: 'prop-heights-commercial',
    name: 'Shiva Kengeri Commercial Hub',
    location: 'Kengeri Mysore Road, Bangalore',
    size: '1200 - 4000 Sq. Ft',
    price: '₹45 Lakhs onwards',
    image: commercialBmrdaImg,
    type: 'Commercial Plot',
    tags: ['BMRDA Approved Layout', 'Mysore Road NH-275 Facing', 'Immediate Registration'],
    features: ['Underground Drainage & Water', 'Avenue Plantation & Palm Trees', '100% LED Street Lighting', 'Ready to Construct Commercial Spaces', 'Clear Land Titles'],
    isVerified: true,
    facing: 'East'
  },
  {
    id: 'prop-pristine-greens',
    name: 'Shiva Perungalathur Elite',
    location: 'Perungalathur, near Tambaram, South Chennai',
    size: '1000 - 2400 Sq. Ft',
    price: '₹32 Lakhs onwards',
    image: investmentPerungalathurImg,
    type: 'Investment Land',
    tags: ['CMDA Approved Layout', 'Near Perungalathur Station', 'High Appreciation Zone'],
    features: ['Excellent Ground Water', 'Gated Community Compound', 'Clear CMDA Title Deeds', '24/7 CCTV & Security', 'Blacktop Roads & Streetlights'],
    isVerified: true,
    facing: 'North'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Ranganathan K. S.',
    role: 'Retired Banker, SBI',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80',
    rating: 5,
    text: 'Shiva Prime Estates made my dream of owning farmland come true. Their documentation is flawless. The Chevella project was handed over with all sandalwood trees planted exactly as promised. Exceptional support throughout the registration.',
    propertyPurchased: 'Shiva Golden Meadows (0.5 Acre Farmland)'
  },
  {
    id: 'test-2',
    name: 'Priyanka Sharma',
    role: 'Senior Software Architect, Microsoft',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80',
    rating: 5,
    text: 'Being an NRI, I was very cautious about legal approvals. Shiva Prime Estates provided the complete HMDA approval set and link documents within an hour of asking. I purchased two plots in Elite Enclave and they have already appreciated by 25% in 18 months.',
    propertyPurchased: 'Shiva Elite Enclave (300 Sq. Yds Plot)'
  },
  {
    id: 'test-3',
    name: 'Dr. Srinivas Rao',
    role: 'Chief Cardiologist, Care Hospitals',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80',
    rating: 5,
    text: 'The best part about Shiva Prime Estates is their transparency. No hidden charges, no false promises. They organized 3 separate site visits with my family to Devanahalli before we finalized. Highly recommend them for secure land investing.',
    propertyPurchased: 'Shiva Valley View Plots'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    url: heroBgImg,
    caption: 'Overview of rolling green layouts at Mokila Project Site',
    category: 'Site Progress'
  },
  {
    id: 'gal-2',
    url: gatedPlotImg,
    caption: 'Finished blacktop roads and boundary markers installed',
    category: 'Site Progress'
  },
  {
    id: 'gal-3',
    url: farmlandPlotImg,
    caption: 'Organic farmland sandalwood trees thriving under caretaker supervision',
    category: 'Farmland'
  },
  {
    id: 'gal-4',
    url: investmentPerungalathurImg,
    caption: 'CMDA approved premium residential plots for sale at Perungalathur Chennai',
    category: 'Site Progress'
  },
  {
    id: 'gal-5',
    url: commercialBmrdaImg,
    caption: 'BMRDA approved commercial plots near Kengeri Mysore Road highway',
    category: 'Site Progress'
  },
  {
    id: 'gal-6',
    url: residentialCourtImg,
    caption: 'Birds-eye view of the magnificent central courtyard park',
    category: 'Site Progress'
  }
];

export const WHY_CHOOSE_US_POINTS = [
  {
    title: 'Legally Verified Properties',
    description: 'Every single plot undergoes rigorous multi-layer legal checks, ensuring 100% litigation-free titles. Link documents span over 30 years.'
  },
  {
    title: 'Clear Documentation',
    description: 'All layouts are approved by top civic bodies (HMDA, DTCP, BIAAPA, YTDA). We supply complete approval plans, EC, and land conversion certificates.'
  },
  {
    title: 'Prime Locations',
    description: 'We strategically position our land banks next to rapidly growing industrial hubs, state highways, temple zones, and future IT corridors for maximum ROI.'
  },
  {
    title: 'Transparent & Affordable Pricing',
    description: 'No hidden brokerages, charges, or surprise fees. Complete transparency in registration charges and developmental costs.'
  },
  {
    title: 'Dedicated Customer Support & Care',
    description: 'From guided physical site visits in our company vehicles, to loan approvals, registration assistance, and post-sale layout caretaking.'
  }
];
