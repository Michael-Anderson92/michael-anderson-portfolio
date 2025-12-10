// 'use client';

// import { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import ProjectCard from '@/components/ui/molecules/ProjectCard';

// gsap.registerPlugin(ScrollTrigger);

// // Project data with card properties
// const projects = [
//   {
//     id: 1,
//     title: 'Elaview',
//     description: 'B2B advertising marketplace connecting advertisers with physical advertising space owners. Features escrow payments, proof verification, and automated payouts.',
//     logo: '/projects/project1-3d.png',
//     link: 'https://elaview.com',
//     tags: ['Next.js', 'tRPC', 'Prisma', 'Stripe'],
//     gradientFrom: '#00bcd4',
//     gradientTo: '#0891b2',
//     borderColor: '#eab308',
//   },
//   {
//     id: 2,
//     title: 'Calvary Chapel Fullerton',
//     description: 'Church website with event management, sermon archives, and community features. Built with Sanity CMS for easy content updates.',
//     logo: '/projects/project2-3d.png',
//     link: 'https://ccfullerton.com',
//     tags: ['Next.js', 'Sanity CMS', 'TypeScript', 'Tailwind'],
//     gradientFrom: '#10b981',
//     gradientTo: '#059669',
//     borderColor: '#00bcd4',
//   },
//   {
//     id: 3,
//     title: 'AdSmart AI',
//     description: 'AI-powered marketing analytics tool providing intelligent insights, campaign optimization, and automated reporting for data-driven decisions.',
//     logo: '/projects/project3-3d.png',
//     link: 'https://tryadsmartai.com',
//     tags: ['AI/ML', 'Next.js', 'Python', 'Analytics'],
//     gradientFrom: '#eab308',
//     gradientTo: '#ca8a04',
//     borderColor: '#10b981',
//   },
// ];

// export default function ProjectCarousel() {
//   const sectionRef = useRef<HTMLElement>(null);

//   useEffect(() => {
//     if (!sectionRef.current) return;

//     // Set initial state - zoomed out
//     gsap.set(sectionRef.current, {
//       scale: 0.8,
//       opacity: 0,
//     });

//     // Zoom in as section enters viewport
//     gsap.to(sectionRef.current, {
//       scale: 1,
//       opacity: 1,
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         start: 'top bottom', // Start when top of section hits bottom of viewport
//         end: 'top center',   // End when top of section hits center of viewport
//         scrub: 1,
//       }
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, []);

//   return (
//     <section 
//       ref={sectionRef}
//       className="w-full py-16 md:py-24"
//     >
//       {/* Section Title */}
//       <div className="text-center mb-12">
      
//         <p className="text-foreground-muted text-lg">
//           Building solutions that scale
//         </p>
//       </div>

//       {/* Cards Container */}
//       <div className="max-w-[1600px] mx-auto px-8 flex flex-wrap justify-center gap-16">
//         {projects.map((project) => (
//           <ProjectCard
//             key={project.id}
//             title={project.title}
//             description={project.description}
//             logo={project.logo}
//             technologies={project.tags}
//             link={project.link}
//             gradientFrom={project.gradientFrom}
//             gradientTo={project.gradientTo}
//             borderColor={project.borderColor}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }