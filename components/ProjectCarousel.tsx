'use client';

import ProjectCard from '@/components/ui/molecules/ProjectCard';

// Project data with card properties
const projects = [
  {
    id: 1,
    title: 'Elaview',
    description: 'B2B advertising marketplace connecting advertisers with physical advertising space owners. Features escrow payments, proof verification, and automated payouts.',
    logo: '📱',
    link: 'https://elaview.com',
    tags: ['Next.js', 'tRPC', 'Prisma', 'Stripe'],
    gradientFrom: '#00bcd4', // Portfolio Blue
    gradientTo: '#0891b2',
    borderColor: '#eab308', // Yellow
  },
  {
    id: 2,
    title: 'Analytics Dashboard',
    description: 'Real-time analytics platform with interactive visualizations, custom reporting, and data export capabilities. Built for scale and performance.',
    logo: '📊',
    link: 'https://github.com/yourusername/analytics',
    tags: ['Next.js', 'D3.js', 'PostgreSQL', 'Redis'],
    gradientFrom: '#10b981', // Green
    gradientTo: '#059669',
    borderColor: '#00bcd4', // Blue
  },
  {
    id: 3,
    title: 'Task Manager Pro',
    description: 'Collaborative task management system with real-time updates, team workspaces, and intelligent priority sorting.',
    logo: '✅',
    link: 'https://github.com/yourusername/taskmanager',
    tags: ['React', 'TypeScript', 'Firebase', 'Tailwind'],
    gradientFrom: '#eab308', // Yellow
    gradientTo: '#ca8a04',
    borderColor: '#10b981', // Green
  },
];

export default function ProjectCarousel() {
  return (
    <section className="w-full py-16 md:py-24">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-7xl md:text-7xl font-bold text-portfolio-white mb-2">
          Recent Work
        </h2>
        <p className="text-foreground-muted text-lg">
          Building solutions that scale
        </p>
      </div>

      {/* Cards Container */}
      <div className="max-w-[1600px] mx-auto px-8 flex flex-wrap justify-center gap-16">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            logo={project.logo}
            technologies={project.tags}
            link={project.link}
            gradientFrom={project.gradientFrom}
            gradientTo={project.gradientTo}
            borderColor={project.borderColor}
          />
        ))}
      </div>
    </section>
  );
}