'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: 'Elaview',
    description: 'B2B advertising marketplace connecting advertisers with physical advertising space owners.',
    logo: '/projects/project1-3d.png',
    link: 'https://elaview.com',
    tags: ['Next.js', 'tRPC', 'Prisma', 'Stripe'],
    size: 'large',
  },
  {
    id: 2,
    title: 'Church Website',
    description: 'Event management & sermon archives with Sanity CMS.',
    logo: '/projects/project2-3d.png',
    link: 'https://ccfullerton.com',
    tags: ['Next.js', 'Sanity CMS'],
    size: 'small',
  },
  {
    id: 3,
    title: 'AdSmart AI',
    description: 'AI-powered marketing analytics and campaign optimization.',
    logo: '/projects/project3-3d.png',
    link: 'https://tryadsmartai.com',
    tags: ['AI/ML', 'Python'],
    size: 'small',
  },
  {
    id: 4,
    title: 'Portfolio',
    description: 'This website! Built with Next.js, GSAP animations, and Tailwind.',
    logo: '/projects/portfolio-3d.png',
    link: 'https://michaelanderson.dev',
    tags: ['Next.js', 'GSAP', 'Tailwind'],
    size: 'large',
  },
];

export default function BentoGridProjects() {
  const gridRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    if (!gridRef.current) return;

    const cards = cardsRef.current.filter(Boolean);

    gsap.set(cards, { opacity: 0, y: 50, scale: 0.95 });

    gsap.to(cards, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: gridRef.current,
        start: 'top 80%',
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="w-full py-16 md:py-24">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-5xl md:text-6xl font-bold text-portfolio-white mb-4">
          Recent Work
        </h2>
        <p className="text-foreground-muted text-lg">
          Building solutions that scale
        </p>
      </div>

      {/* Bento Grid */}
      <div className="max-w-7xl mx-auto px-4" ref={gridRef}>
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-auto md:grid-rows-2 gap-6 auto-rows-[280px]">
          {projects.map((project, index) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              ref={(el) => { cardsRef.current[index] = el; }}
              className={`
                group relative overflow-hidden rounded-2xl
                bg-background-light/50 backdrop-blur-lg
                border border-border/30
                transition-all duration-300
                hover:border-portfolio-blue/50
                hover:-translate-y-2
                hover:shadow-xl hover:shadow-portfolio-blue/10
                ${project.size === 'large' ? 'md:col-span-2' : 'col-span-1'}
              `}
            >
              {/* Content */}
              <div className="relative h-full p-6 flex flex-col justify-between">
                {/* Top: Logo & Title */}
                <div>
                  <div className="w-16 h-16 mb-4 relative">
                    <Image
                      src={project.logo}
                      alt={project.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-portfolio-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-foreground-muted text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Bottom: Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag: string, idx: number) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-portfolio-blue/10 text-portfolio-blue border border-portfolio-blue/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hover Arrow */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-6 h-6 text-portfolio-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-portfolio-blue/0 to-purple-600/0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}