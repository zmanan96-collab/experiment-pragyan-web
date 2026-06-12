'use client';

import { useState } from 'react';
import Reveal from '../../components/Reveal';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQAccordion({ faqs }: { faqs: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-8 max-w-[900px]">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;

        return (
          <Reveal key={idx} delay={(idx + 1) * 0.1}>
            <div className="pb-6 border-b border-white/10">
              <button
                className="w-full flex items-center justify-between text-left group cursor-pointer"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
              >
                <h3 className="text-[20px] md:text-[24px] font-normal text-white transition-colors duration-300 group-hover:text-[#A1A1AA]">
                  {faq.question}
                </h3>
                <div className="relative w-6 h-6 shrink-0 flex items-center justify-center ml-4">
                  {/* Horizontal line */}
                  <span className={`absolute w-full h-[2px] bg-white transition-all duration-300 ${isOpen ? 'bg-[#A1A1AA] rotate-180' : 'group-hover:bg-[#A1A1AA]'}`}></span>
                  {/* Vertical line */}
                  <span className={`absolute h-full w-[2px] bg-white transition-all duration-300 ${isOpen ? 'bg-[#A1A1AA] rotate-90 opacity-0' : 'group-hover:bg-[#A1A1AA]'}`}></span>
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isOpen ? 'max-h-[500px] mt-6 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-main-desc text-[#A1A1AA]">
                  {faq.answer}
                </p>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
