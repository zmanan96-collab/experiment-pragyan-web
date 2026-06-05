'use client';

import { useState } from 'react';
import Link from 'next/link';
import Reveal from '../../components/Reveal';

interface Project {
  title: string;
  category: string;
  image: string;
}

const categories = [
  'ALL',
  'MANUFACTURING',
  'EDUCATION',
  'FASHION & BEAUTY',
  'PERSONAL BRANDING',
  'HEALTH & WELLNESS'
];

const projects: Project[] = [
  {
    title: 'ATC CHAINS INDIA',
    category: 'Manufacturing / Conveyor Components / Food & Beverage',
    image: '/card-03.webp'
  },
  {
    title: 'GLOBAL GUARDIANS SCHOOL',
    category: 'EDUCATION',
    image: '/card 01.webp'
  },
  {
    title: 'BHAVYA SRISHTI UDYOG',
    category: 'Sustainable Manufacturing / Bamboo',
    image: '/bsucard.jpg'
  },
  {
    title: 'SHREEJI ENTERPRISE',
    category: 'Engineered Roofing Solutions / Manufacturing',
    image: '/card shree ji.webp'
  },
  {
    title: 'YASH ENGINEERS (INDIA) PVT. LTD.',
    category: 'Industrial Machinery / Manufacturing',
    image: 'yashcard.svg'
  },
  {
    title: 'BHAKTINANDAN',
    category: 'Consumer Goods / Cold-Pressed Oils / Health & Wellness',
    image: '/bhakti.svg'
  },
  {
    title: 'GANESH VERMA',
    category: 'Personal Branding & LinkedIn',
    image: '/ganeshcard.svg'
  }
];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const filteredProjects = activeCategory === 'ALL'
    ? projects
    : projects.filter(project =>
      project.category.toUpperCase().includes(activeCategory.toUpperCase())
    );

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

        {/* Filters Header */}
        <div className="border-b border-black/5 pb-6 mb-12 overflow-x-auto scrollbar-hide">
          <div className="flex justify-start md:justify-center items-center gap-6 md:gap-10 min-w-max px-4">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`relative pb-2 text-[11px] md:text-[12px] font-bold tracking-[0.12em] uppercase transition-colors duration-300 ${isActive ? 'text-[#4b3fd4]' : 'text-gray-400 hover:text-black'
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mb-0">
          {filteredProjects.map((project, idx) => (
            <Reveal key={project.title} delay={idx * 0.05} className="group">
              <Link href={`/work/${project.title.toLowerCase().replace(/ /g, '-')}`} className="block cursor-pointer">
                <div className="relative aspect-[4/3] rounded-[16px] overflow-hidden bg-gray-100 border border-black/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 select-none pointer-events-none"
                  />
                </div>
                <h3 className="text-[15px] md:text-[17px] font-bold text-black uppercase mt-4.5 tracking-wider transition-colors duration-300 group-hover:text-[#4b3fd4]">
                  {project.title}
                </h3>
                <p className="text-[10px] md:text-[11px] font-semibold text-gray-400 uppercase tracking-widest mt-1">
                  {project.category}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </article>
  );
}
