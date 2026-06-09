import AboutClient from './AboutClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Pragyan | Brand Strategy Agency, Ahmedabad',
  description: 'Pragyan is a human-lens branding agency based in Ahmedabad. We combine strategy, storytelling, and design to build brands that founders are proud of.',
  alternates: {
    canonical: 'https://www.mypragyan.com/about',
  },
};

export default function About() {
  return <AboutClient />;
}
