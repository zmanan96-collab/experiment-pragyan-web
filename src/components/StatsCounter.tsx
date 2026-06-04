import React from 'react';

interface StatsCounterProps {
  stats: {
    title: string;
    subtitle: string;
    items: { value: string; label: string }[];
    context?: string;
  };
}

export function AnimatedNumber({ value }: { value: string }) {
  return <span>{value}</span>;
}

export default function StatsCounter({ stats }: StatsCounterProps) {
  const animatedItems = stats.items.filter(item => !/[x×]/.test(item.value));
  const staticItems = stats.items.filter(item => /[x×]/.test(item.value));

  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-16 py-12 border-t border-[#76777b]/20">
      <div className="grid grid-cols-4 md:grid-cols-12 gap-6">
        <div className="col-span-4 md:col-span-3 mb-6 md:mb-0">
          <h2 className="text-[11px] md:text-xs font-bold tracking-wider text-[#76777b] uppercase">
            {stats.title}
          </h2>
          <p className="text-xs text-[#76777b] mt-1 italic">
            {stats.subtitle}
          </p>
        </div>
        <div className="col-span-4 md:col-span-9">
          {/* Row 1: Pure Numbers Grid (4 columns on desktop) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {animatedItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#76777b]/20 rounded-lg p-6 flex flex-col justify-between hover:border-black transition-colors duration-300"
              >
                <div>
                  <div className="text-4xl md:text-5xl font-extrabold text-black tracking-tight mb-2 whitespace-nowrap">
                    <AnimatedNumber value={item.value} />
                  </div>
                  <div className="text-xs md:text-sm font-semibold text-[#555] uppercase tracking-wider leading-snug">
                    {item.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: Longer Stats / Non-animating sentence (Centered with respect to the cards above) */}
          {staticItems.length > 0 && (
            <div className="mt-8 text-center w-full">
              {staticItems.map((item, idx) => {
                const sentence = item.label.includes('Monthly reach grew')
                  ? item.label.replace('Monthly reach grew', `Monthly reach grew ${item.value}`)
                  : `${item.value} ${item.label}`;
                return (
                  <p key={idx} className="text-sm md:text-base font-normal text-black leading-relaxed">
                    {sentence}
                  </p>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Divider line matching the width of the top border (breaking out of horizontal padding) */}
      {staticItems.length > 0 && (
        <div className="border-b border-[#76777b]/20 mt-8 mb-8 w-auto mx-[-1rem] md:mx-[-4rem]"></div>
      )}

      {/* Row 3: Context note card (full-width border-dashed card) */}
      {stats.context && (
        <div className="grid grid-cols-4 md:grid-cols-12 gap-6">
          <div className="hidden md:block md:col-span-3"></div>
          <div className="col-span-4 md:col-span-9">
            <div className="bg-[#fdfdfd] border border-dashed border-[#76777b]/30 rounded-lg p-6 hover:border-black transition-colors duration-300">
              <span className="text-[10px] font-extrabold text-[#76777b] tracking-widest uppercase mb-2.5 block">
                Context
              </span>
              <p className="text-sm md:text-base font-medium text-black leading-relaxed">
                {stats.context}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
