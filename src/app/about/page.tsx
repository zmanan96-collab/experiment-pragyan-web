import AboutClient from './AboutClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About — Pragyan',
};

export default function About() {
  return <AboutClient />;
}
