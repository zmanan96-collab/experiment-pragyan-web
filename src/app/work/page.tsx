'use client';

import { useState } from 'react';
import Reveal from '../../components/Reveal';
import Footer from '../../components/Footer';

interface Project {
  title: string;
  category: string;
  image: string;
}

const categories = [
  'ALL',
  'DESIGN FOR GOOD',
  'FASHION & BEAUTY',
  'FOOD & BEVERAGE',
  'HEALTH & WELLNESS',
  'HOME & LIFESTYLE',
  'TECH & FINANCE'
];

const projects: Project[] = [
  {
    title: 'HOCCO',
    category: 'FOOD & BEVERAGE',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'HK VITALS',
    category: 'HEALTH & WELLNESS',
    image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'GIMI GIMI',
    category: 'FOOD & BEVERAGE',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'FEIER',
    category: 'FASHION & BEAUTY',
    image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'THE WHOLE TRUTH',
    category: 'HEALTH & WELLNESS',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'PATTRI',
    category: 'FOOD & BEVERAGE',
    image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'NYKAA',
    category: 'FASHION & BEAUTY',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'NAILS OUR WAY',
    category: 'FASHION & BEAUTY',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'CITYFLO',
    category: 'TECH & FINANCE',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'HOOKED ON HOCCO',
    category: 'FOOD & BEVERAGE',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'LIGHTYEARS',
    category: 'HOME & LIFESTYLE',
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'UGAOO',
    category: 'DESIGN FOR GOOD',
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&q=80&w=800'
  }
];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const filteredProjects = activeCategory === 'ALL'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <article aria-label="Work Portfolio" className="bg-[#fcfcfc] min-h-screen text-black pt-[140px]">
      <div className="wrap px-8 md:px-[4vw] lg:px-[6vw] xl:px-[8vw] w-full">
        {/* Page Title */}
        <Reveal className="mb-10 text-center">
          <span className="text-nav-label tracking-[0.22em] uppercase text-[#6a6a6a] block mb-3">Portfolio</span>
          <h1 className="text-[40px] md:text-[56px] font-bold text-black tracking-tight leading-none uppercase">
            Our Work
          </h1>
        </Reveal>

        {/* Filters Header */}
        <div className="border-b border-black/5 pb-6 mb-12 overflow-x-auto scrollbar-hide">
          <div className="flex justify-start md:justify-center items-center gap-6 md:gap-10 min-w-max px-4">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`relative pb-2 text-[11px] md:text-[12px] font-bold tracking-[0.12em] uppercase transition-colors duration-300 ${
                    isActive ? 'text-[#4b3fd4]' : 'text-gray-400 hover:text-black'
                  }`}
                >
                  {category}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#4b3fd4] transition-all duration-300" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mb-24">
          {filteredProjects.map((project, idx) => (
            <Reveal key={project.title} delay={idx * 0.05} className="group cursor-pointer">
              <div className="relative aspect-[4/3] rounded-[16px] overflow-hidden bg-gray-100 border border-black/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 select-none pointer-events-none"
                />
              </div>
              <h3 className="text-[15px] md:text-[17px] font-bold text-black uppercase mt-4.5 tracking-wider transition-colors duration-300 group-hover:text-[#4b3fd4]">
                {project.title}
              </h3>
              <p className="text-[10px] md:text-[11px] font-semibold text-gray-400 uppercase tracking-widest mt-1">
                {project.category}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
      <Footer />
    </article>
  );
}
