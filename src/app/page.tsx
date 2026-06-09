import { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'Pragyan | Meaningful Brand Perspective',
  description: "At Pragyan, we transform conviction into strategy, identity, communication, and growth.",
  alternates: {
    canonical: 'https://www.mypragyan.com',
  },
};

export default function Home() {
  return <HomeClient />;
}
