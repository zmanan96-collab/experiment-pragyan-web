import { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
  title: 'Services — Pragyan',
  description: "Our services span strategy, branding, communication, and marketing.",
  alternates: {
    canonical: 'https://www.mypragyan.com/services',
  },
};

export default function Services() {
  return <ServicesClient />;
}
