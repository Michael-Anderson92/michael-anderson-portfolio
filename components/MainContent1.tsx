'use client';

import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Elaview',
    category: 'Web Application',
    description: 'B2B advertising marketplace connecting advertisers with physical advertising space owners. Features real-time bidding, analytics dashboard, and payment processing.',
    image: '/projects/elaview.png',
    link: 'https://elaview.com',
    tags: ['Next.js', 'tRPC', 'Prisma', 'Stripe'],
  },
  {
    id: 2,
    title: 'Church Website',
    category: 'CMS & Design',
    description: 'Modern church website with event management, sermon archives, and member portal. Built with a headless CMS for easy content updates.',
    image: '/projects/church.png',
    link: 'https://ccfullerton.com',
    tags: ['Next.js', 'Sanity CMS', 'Tailwind'],
  },
  {
    id: 3,
    title: 'JobHead',
    category: 'AI & Analytics',
    description: 'AI-powered marketing analytics platform that optimizes ad campaigns using machine learning. Provides actionable insights and automated recommendations.',
    image: '/projects/jobhead.png',
    link: 'https://tryadsmartai.com',
    tags: ['AI/ML', 'Python', 'React', 'FastAPI'],
  },
  {
    id: 4,
    title: 'AdSmart AI',
    category: 'Personal Site',
    description: 'This website! A modern portfolio featuring smooth scroll animations, interactive elements, and a clean design system.',
    image: '/projects/adsmart.png',
    link: 'https://michaelanderson.dev',
    tags: ['Next.js', 'GSAP', 'Tailwind', 'Framer Motion'],
  },
];

export default function MainContent1() {
  return (
    <section className="min-h-screen w-full py-16 md:py-24 px-4 md:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <p className="text-sm uppercase tracking-wider text-portfolio-gray mb-2">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-portfolio-black mb-4">
            Recent Work
          </h2>
          <p className="text-portfolio-gray text-base md:text-lg max-w-2xl">
            A selection of projects I&apos;ve worked on, from full-stack web applications to AI-powered platforms.
          </p>
        </div>

        {/* Project Grid - 2 columns on desktop, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              {/* Image Container - 16:10 Aspect Ratio */}
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-5">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="px-2 md:px-0">
                {/* Category - Subheader */}
                <p className="text-sm text-portfolio-gray mb-2">
                  {project.category}
                </p>

                {/* Title - Main Header */}
                <h3 className="text-2xl md:text-3xl font-semibold text-portfolio-black mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-portfolio-gray text-base leading-relaxed">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
