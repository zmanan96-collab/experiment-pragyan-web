import { Metadata } from 'next';
import Reveal from '../../components/Reveal';
import WorkGrid from './WorkGrid';

export const metadata: Metadata = {
  title: 'Work — Pragyan',
  description: "Our portfolio of work across strategy, branding, and communication.",
  alternates: {
    canonical: 'https://www.mypragyan.com/work',
  },
};

export default function Work() {
  return (
    <article aria-label="Work Portfolio" className="bg-[#fcfcfc] min-h-screen text-black pt-[140px] pb-28">
      <div className="wrap px-8 md:px-[4vw] lg:px-[6vw] xl:px-[8vw] w-full">
        {/* Page Title */}
        <Reveal className="mb-10 text-center">
          <span className="text-nav-label tracking-[0.22em] uppercase text-[#6a6a6a] block mb-3">Portfolio</span>
          <h1 className="text-[40px] md:text-[56px] font-bold text-black tracking-tight leading-none uppercase">
            Our Work
          </h1>
        </Reveal>

        <WorkGrid />
      </div>
    </article>
  );
}
