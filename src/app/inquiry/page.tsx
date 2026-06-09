import { Metadata } from 'next';
import InquiryClient from './InquiryClient';

export const metadata: Metadata = {
  title: 'Inquiry — Pragyan',
  description: "Reach out, and we'll figure it out together.",
  alternates: {
    canonical: 'https://www.mypragyan.com/inquiry',
  },
};

export default function Inquiry() {
  return <InquiryClient />;
}
