import { Metadata } from 'next';
import WorkClient from './WorkClient';

export const metadata: Metadata = {
  title: 'Work — Pragyan',
  description: "Our portfolio of work across strategy, branding, and communication.",
  alternates: {
    canonical: 'https://www.mypragyan.com/work',
  },
};

export default function Work() {
  return <WorkClient />;
}
