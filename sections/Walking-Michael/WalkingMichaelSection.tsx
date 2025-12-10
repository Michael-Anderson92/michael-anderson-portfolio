// 'use client';

// import { useEffect, useRef, useState } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Image from 'next/image';
// import ProjectCard from '@/components/ui/molecules/ProjectCard';

// gsap.registerPlugin(ScrollTrigger);

// // Walk cycle frames (7 frames)
// const walkFrames = [
//   '/michael/michael-walk-1.png',
//   '/michael/michael-walk-2.png',
//   '/michael/michael-walk-3.png',
//   '/michael/michael-walk-4.png',
//   '/michael/michael-walk-5.png',
//   '/michael/michael-walk-6.png',
//   '/michael/michael-walk-7.png',
// ];

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
//     title: 'Church Website',
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

// export default function WalkingMichaelSection() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const projectsContainerRef = useRef<HTMLDivElement>(null);
//   const [currentFrame, setCurrentFrame] = useState(0);
//   const [isWalking, setIsWalking] = useState(false);

//   useEffect(() => {
//     if (!containerRef.current) return;

//     const projectsContainer = projectsContainerRef.current;

//     // Set initial states
//     gsap.set(projectsContainer, { x: 300, opacity: 0 });

//     // Create scroll timeline
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: 'top top',
//         end: '+=200%', // 2 viewports of scroll
//         scrub: 1,
//         pin: true,
//         anticipatePin: 1,
//         onUpdate: (self) => {
//           // Start walking when scrolling forward
//           if (self.direction === 1 && self.progress > 0.1) {
//             setIsWalking(true);
//           } else if (self.progress < 0.1 || self.progress > 0.9) {
//             setIsWalking(false);
//           }
//         },
//       }
//     });

//     // Projects slide in from right (0-2)
//     tl.to(projectsContainer, {
//       x: 0,
//       opacity: 1,
//       duration: 2,
//       ease: 'power2.out',
//     }, 0);

//     return () => {
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, []);

//   // Walk cycle animation
//   useEffect(() => {
//     if (!isWalking) {
//       setCurrentFrame(0); // Reset to first frame (standing-ish pose)
//       return;
//     }

//     const interval = setInterval(() => {
//       setCurrentFrame((prev) => (prev + 1) % walkFrames.length);
//     }, 100); // 100ms = smooth walking speed

//     return () => clearInterval(interval);
//   }, [isWalking]);

//   return (
//     <div 
//       ref={containerRef}
//       className="relative h-screen w-full bg-gradient-to-b from-gray-900 to-portfolio-black overflow-hidden pt-[calc(3rem+80px)]"
//     >
//       <div className="relative w-full h-full flex">
        
//         {/* LEFT SIDE - Michael (Walking in place) */}
//         <div className="w-1/2 h-full flex items-center justify-center">
//           <div className="relative w-80 h-[500px]">
//             {/* Frame-by-frame walking animation */}
//             <Image
//               src={isWalking ? walkFrames[currentFrame] : '/michael/michael.png'}
//               alt="Michael walking"
//               fill
//               sizes="320px"
//               className="object-contain mix-blend-screen"
//               priority
//             />
//           </div>
//         </div>

//         {/* RIGHT SIDE - Projects sliding in */}
//         <div 
//           ref={projectsContainerRef}
//           className="w-1/2 h-full flex items-center justify-center p-8"
//         >
//           <div className="flex flex-col gap-6 max-w-lg">
//             <h2 className="text-5xl font-bold text-white mb-4">Recent Work</h2>
//             {projects.map((project, index) => (
//               <div
//                 key={project.id}
//                 className="transform transition-all"
//                 style={{
//                   transitionDelay: `${index * 100}ms`,
//                 }}
//               >
//                 <ProjectCard
//                   title={project.title}
//                   description={project.description}
//                   logo={project.logo}
//                   technologies={project.tags}
//                   link={project.link}
//                   gradientFrom={project.gradientFrom}
//                   gradientTo={project.gradientTo}
//                   borderColor={project.borderColor}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>

//       {/* Scroll instruction */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 text-sm animate-bounce">
//         Scroll to see projects →
//       </div>
//     </div>
//   );
// }