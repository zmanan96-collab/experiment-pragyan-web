'use client';

import { useState } from 'react';
import Link from 'next/link';
import Reveal from '../../components/Reveal';

interface Project {
  title: string;
  category: string;
  image: string;
  alt: string;
  slug?: string;
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
    image: '/ATC-card.webp',
    alt: 'ATC Chains India branding case study — B2B brand identity by Pragyan'
  },
  {
    title: 'GLOBAL GUARDIANS SCHOOL',
    category: 'EDUCATION',
    image: '/ggs-card.webp',
    alt: 'Global Guardians School branding case study by Pragyan Ahmedabad'
  },
  {
    title: 'BHAVYA SRISHTI UDYOG',
    category: 'Sustainable Manufacturing / Bamboo',
    image: '/bsu-card.webp',
    alt: 'Bhavya Srishti Udyog sustainable brand identity by Pragyan'
  },
  {
    title: 'SHREEJI ENTERPRISE',
    category: 'Engineered Roofing Solutions / Manufacturing',
    image: '/card shree ji.webp',
    alt: 'Shreeji Enterprise roofing brand strategy case study by Pragyan'
  },
  {
    title: 'YASH ENGINEERS (INDIA) PVT LTD',
    category: 'Industrial Machinery / Manufacturing',
    image: '/yash-card.webp',
    alt: 'Yash Engineers India industrial brand identity by Pragyan',
    slug: 'yash-engineers-india'
  },
  {
    title: 'BHAKTINANDAN',
    category: 'Consumer Goods / Cold-Pressed Oils / Health & Wellness',
    image: '/Bhaktinandan-card.webp',
    alt: 'Bhaktinandan cold-pressed oil packaging and brand identity by Pragyan'
  },
  {
    title: 'GANESH VERMA',
    category: 'Personal Branding & LinkedIn',
    image: '/ganesh-card.webp',
    alt: 'Ganesh Verma personal branding and LinkedIn strategy by Pragyan'
  }
];

export default function WorkGrid() {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const filteredProjects = activeCategory === 'ALL'
    ? projects
    : projects.filter(project =>
      project.category.toUpperCase().includes(activeCategory.toUpperCase())
    );

  return (
    <>
      <h2 className="sr-only">Industries We've Worked In</h2>
      <div className="sr-only">
        <h3>Manufacturing</h3>
        <h3>D2C &amp; FMCG</h3>
        <h3>Education</h3>
        <h3>Personal Branding</h3>
      </div>
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mb-0">
        {filteredProjects.map((project, idx) => (
          <Reveal key={project.title} delay={idx * 0.05} className="group">
            <Link href={`/work/${project.slug || project.title.toLowerCase().replace(/ /g, '-')}`} className="block cursor-pointer">
              <div className="relative aspect-[4/3] rounded-[16px] overflow-hidden bg-gray-100 border border-black/5">
                <img
                  src={project.image}
                  alt={project.alt}
                  loading="lazy"
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
    </>
  );
}
