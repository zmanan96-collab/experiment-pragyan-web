import { Metadata } from 'next';
import CultureClient from './CultureClient';

export const metadata: Metadata = {
  title: 'Culture — Pragyan',
  description: "Careers at Pragyan. We believe that how we work matters as much as what we create.",
  alternates: {
    canonical: 'https://www.mypragyan.com/culture',
  },
};

export default function Culture() {
  return <CultureClient />;
}
