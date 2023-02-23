import React from 'react';
import { GiBeamSatellite, GiAbstract020, GiChart } from 'react-icons/gi';
import { FaUserTie } from 'react-icons/fa';

export const mainLinks = [
  { id: 1, name: 'home', url: '/' },
  { id: 2, name: 'about', url: '/about' },
  { id: 3, name: 'products', url: '/products' },
  { id: 4, name: 'contact', url: '/contact' },
];

export const services = [
  {
    id: 1,
    title: 'Innovative',
    content:
      'We invest heavily in innovation to meet our customers’ ever-changing needs, with laser-like focus on creating sustainable businesses that benefit humanity.',
    icon: <GiBeamSatellite />,
  },
  {
    id: 2,
    title: 'Solutions',
    content:
      'Technology integration for us means going beyond survey instruments and developing geospatial tools that will provide effective decision-making solutions to the geospatial community.',
    icon: <GiAbstract020 />,
  },
  {
    id: 3,
    title: 'Professional',
    content:
      'We are honest professionals who understand the importance of knowing our business, leading by example and demonstrating humility along the way.',
    icon: <GiChart />,
  },
  {
    id: 4,
    title: 'Customer-focused',
    content:
      'We know our customers - success is paramount to our own, and we are dedicated to driving efficiency, productivity and quality for everyone we serve.',
    icon: <FaUserTie />,
  },
];
