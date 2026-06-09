import AboutClient from './AboutClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About — Pragyan',
  description: 'Learn more about Pragyan and our story.',
  alternates: {
    canonical: 'https://www.mypragyan.com/about',
  },
};

export default function About() {
  return <AboutClient />;
}
