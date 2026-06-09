import { Metadata } from 'next';
import Reveal from '../../components/Reveal';
import WorkGrid from './WorkGrid';

export const metadata: Metadata = {
  title: 'Our Work — Branding Case Studies | Pragyan Agency',
  description: "Explore Pragyan's branding and marketing case studies across manufacturing, D2C, education, and FMCG. Real brands. Real strategy. Real results.",
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
          <h1 className="sr-only">Branding &amp; Marketing Case Studies</h1>
          <h2 className="sr-only">Real Projects. Real Strategy. Real Impact.</h2>
          <span className="text-[40px] md:text-[56px] font-bold text-black tracking-tight leading-none uppercase block" aria-hidden="true">
            Our Work
          </span>
        </Reveal>

        <WorkGrid />
      </div>
    </article>
  );
}
