'use client';

import React from 'react';

interface MarqueeProps {
  text?: string;
  speed?: number;
  className?: string;
  bg?: string;
}

const Marquee = ({ text, speed, className, bg = '#434B9F' }: MarqueeProps) => {
  const words = text ? [text] : ['GROWTH.', 'WISDOM.', 'ACTION.'];
  
  return (
    <section 
      className={`py-[16px] overflow-hidden border-y border-white/5 w-full`}
      style={{ backgroundColor: bg }}
    >
      <div className="flex whitespace-nowrap overflow-hidden">
        <div className={`flex animate-marquee shrink-0 ${className || ''}`}>
          {[...Array(12)].map((_, i) => (
            <span key={i} className="text-[14px] font-space font-normal tracking-[0.4em] uppercase text-white px-16">
              {words[i % words.length]}
            </span>
          ))}
        </div>
        <div className={`flex animate-marquee shrink-0 ${className || ''}`} aria-hidden="true">
          {[...Array(12)].map((_, i) => (
            <span key={i} className="text-[14px] font-space font-normal tracking-[0.4em] uppercase text-white px-16">
              {words[i % words.length]}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marquee;
