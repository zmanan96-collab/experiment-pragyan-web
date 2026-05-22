'use client';

import React from 'react';

interface MarqueeProps {
  text?: string;
  speed?: number;
  className?: string;
  bg?: string;
}

const Marquee = ({ text, speed, className, bg = '#4B3FD4' }: MarqueeProps) => {
  const words = text ? [text] : ['GROWTH.', 'WISDOM.', 'ACTION.'];

  return (
    <div
      className={`py-[12px] overflow-hidden border-y border-white/5 w-full ${className || ''}`}
      style={{ backgroundColor: bg }}
    >
      <div className="flex whitespace-nowrap overflow-hidden">
        <div className="flex animate-marquee shrink-0">
          {[...Array(12)].map((_, i) => (
            <span key={i} className="text-[clamp(14px,1.05vw,19px)] font-space font-light tracking-[0.4em] uppercase text-white px-16 leading-none">
              {words[i % words.length]}
            </span>
          ))}
        </div>
        <div className="flex animate-marquee shrink-0" aria-hidden="true">
          {[...Array(12)].map((_, i) => (
            <span key={i} className="text-[clamp(14px,1.05vw,19px)] font-space font-light tracking-[0.4em] uppercase text-white px-16 leading-none">
              {words[i % words.length]}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
