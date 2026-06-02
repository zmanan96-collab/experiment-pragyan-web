'use client';

import React from 'react';

interface MarqueeProps {
  text?: string;
  speed?: number;
  className?: string;
  bg?: string;
}

const Marquee = ({ text, speed, className, bg = '#FFFFFF' }: MarqueeProps) => {
  const words = text ? [text] : ['Growth.', 'Wisdom.', 'Action.'];

  return (
    <div
      className={`py-[12px] overflow-hidden border-y border-black/5 w-full ${className || ''}`}
      style={{ backgroundColor: bg }}
    >
      <div className="flex whitespace-nowrap overflow-hidden">
        <div className="flex animate-marquee shrink-0">
          {[...Array(12)].map((_, i) => (
            <span key={i} className="text-nav-label tracking-[0.4em] text-black px-16 leading-none">
              {words[i % words.length]}
            </span>
          ))}
        </div>
        <div className="flex animate-marquee shrink-0" aria-hidden="true">
          {[...Array(12)].map((_, i) => (
            <span key={i} className="text-nav-label tracking-[0.4em] text-black px-16 leading-none">
              {words[i % words.length]}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
