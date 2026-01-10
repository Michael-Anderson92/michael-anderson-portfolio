'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import HeroSection from './HeroSection';

gsap.registerPlugin(ScrollTrigger);

// Custom hook for responsive breakpoint detection
function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);

    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [query]);

  return matches;
}

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

export default function ScrollTransitionSections() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const michaelProjectsRef = useRef<HTMLDivElement>(null);
  const michaelRef = useRef<HTMLDivElement>(null);
  const chatBubbleRef = useRef<HTMLDivElement>(null);
  const bentoGridRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const mobileCardsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  
  // Detect if we're on mobile (below md breakpoint - 768px)
  const isMobile = useMediaQuery('(max-width: 767px)');

  useEffect(() => {
    if (!containerRef.current || !heroRef.current || !michaelProjectsRef.current) return;

    const container = containerRef.current;
    const hero = heroRef.current;
    const michaelProjects = michaelProjectsRef.current;
    const michael = michaelRef.current;
    const chatBubble = chatBubbleRef.current;
    const cards = cardsRef.current.filter(Boolean);
    const mobileCards = mobileCardsRef.current.filter(Boolean);

    // Set initial states
    gsap.set(michaelProjects, { opacity: 0 });
    
    if (isMobile) {
      gsap.set(mobileCards, { opacity: 0, y: 40 });
    } else {
      gsap.set(michael, { scale: 0.5, opacity: 0, y: 50 });
      gsap.set(chatBubble, { scale: 0, opacity: 0 });
      gsap.set(cards, { opacity: 0, y: 30, scale: 0.95 });
    }

    // Create the main transition timeline
    const transitionTl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: '+=150%', // Pin for 1.5 viewport heights worth of scroll
        pin: true,
        anticipatePin: 1,
        scrub: 0.5, // Smooth scrub
        snap: {
          snapTo: [0, 1], // Snap to start or end only
          duration: { min: 0.4, max: 0.8 },
          ease: 'power2.inOut',
        },
      },
    });

    // PHASE 1: Hero fades out
    transitionTl.to(hero, {
      scale: 0.85,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.inOut',
    });

    // PHASE 2: Projects section fades in
    transitionTl.to(michaelProjects, {
      opacity: 1,
      duration: 0.5,
      ease: 'power2.out',
    }, '-=0.1');

    if (isMobile) {
      // Mobile: Cards stagger in
      transitionTl.to(mobileCards, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power3.out',
      }, '-=0.2');
    } else {
      // Desktop: Michael zooms in
      transitionTl.to(michael, {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power2.out',
      }, '-=0.3');

      // Chat bubble appears
      transitionTl.to(chatBubble, {
        scale: 1,
        opacity: 1,
        duration: 0.4,
        ease: 'back.out(2)',
      }, '-=0.2');

      // Bento grid cards stagger in
      transitionTl.to(cards, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power3.out',
      }, '-=0.3');
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [isMobile]);

  return (
    <div 
      ref={containerRef}
      className="relative h-screen w-full"
    >
      {/* Hero Section - Fades out */}
      <div 
        ref={heroRef}
        className="absolute inset-0 w-full h-full flex items-center justify-center pt-[calc(3rem+80px)] will-change-transform transform-gpu backface-hidden"
      >
        <HeroSection />
      </div>

      {/* Michael + Bento Grid Section - Fades in */}
      <div 
        ref={michaelProjectsRef}
        className="absolute inset-0 w-full h-full pt-[calc(3rem+80px)] px-4 md:px-8 pb-8 opacity-0"
      >
        {/* Desktop Layout */}
        <div className="hidden md:flex relative w-full h-full items-center justify-center gap-6">
          
          {/* LEFT: Michael Container */}
          <div 
            ref={michaelRef}
            className="w-[25%] h-[90%] bg-portfolio-black rounded-xl shadow-xl border border-border/30 px-8 py-12 flex flex-col items-center justify-center will-change-transform transform-gpu backface-hidden"
          >
            {/* Chat Bubble */}
            <div
              ref={chatBubbleRef}
              className="relative mb-4 bg-white rounded-2xl p-4 shadow-2xl max-w-[260px] will-change-transform transform-gpu backface-hidden"
            >
              <p className="text-portfolio-black text-base font-medium text-center">
                Thanks for stopping by! 👋<br />
                Check out my work →
              </p>
              {/* Chat bubble tail */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-t-[14px] border-t-white" />
            </div>

            {/* Michael Image */}
            <div className="relative w-72 h-[350px]">
              <Image
                src="/michael/michael.png"
                alt="Michael Anderson"
                fill
                sizes="288px"
                className="object-contain mix-blend-screen"
                priority
              />
            </div>
          </div>

          {/* RIGHT: Bento Grid */}
          <div 
            ref={bentoGridRef} 
            className="w-[70%] max-w-4xl h-[90%] bg-portfolio-black rounded-xl shadow-xl border border-border/30 px-12 py-12 flex flex-col justify-center"
          >
            {/* Section Title */}
            <div className="text-center mb-6">
              <h2 className="text-4xl md:text-5xl font-bold text-portfolio-white mb-2">
                Recent Work
              </h2>
              <p className="text-foreground-muted text-base">
                Building solutions that scale
              </p>
            </div>

            {/* Bento Grid - 5 columns */}
            <div className="grid grid-cols-5 grid-rows-2 gap-4 auto-rows-[200px]">
              {projects.map((project, index) => (
                <a
                  key={project.id}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  ref={(el) => { cardsRef.current[index] = el; }}
                  className={`
                    group relative overflow-hidden rounded-xl
                    bg-background-light/50 backdrop-blur-lg
                    border border-border/30
                    transition-all duration-300
                    hover:border-portfolio-blue/50
                    hover:-translate-y-1
                    hover:shadow-lg hover:shadow-portfolio-blue/10
                    will-change-transform transform-gpu backface-hidden
                    ${project.size === 'large' ? 'col-span-3' : 'col-span-2'}
                  `}
                >
                  {/* Content */}
                  <div className="relative h-full p-5 flex flex-col justify-between">
                    {/* Top: Logo & Title */}
                    <div>
                      <div className="w-12 h-12 mb-3 relative">
                        <Image
                          src={project.logo}
                          alt={project.title}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-portfolio-white mb-1">
                        {project.title}
                      </h3>
                      <p className="text-foreground-muted text-xs leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    {/* Bottom: Tags */}
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {project.tags.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 text-xs font-medium rounded-full bg-portfolio-blue/10 text-portfolio-blue border border-portfolio-blue/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Hover Arrow */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg className="w-5 h-5 text-portfolio-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

        </div>

        {/* Mobile Layout - Stackable Cards */}
        <div className="flex md:hidden flex-col w-full min-h-full pt-20">
          {/* Section Header */}
          <div className="text-center mb-6 px-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-portfolio-white mb-2">
              Recent Projects
            </h2>
            <p className="text-foreground-muted text-sm sm:text-base">
              Building solutions that scale
            </p>
          </div>

          {/* Stackable Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 pb-8">
            {projects.map((project, index) => (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                ref={(el) => { mobileCardsRef.current[index] = el; }}
                className="group relative overflow-hidden rounded-xl bg-portfolio-black/80 backdrop-blur-lg border border-border/30 transition-all duration-300 hover:border-portfolio-blue/50 hover:shadow-lg hover:shadow-portfolio-blue/10 will-change-transform transform-gpu backface-hidden"
              >
                <div className="relative p-5 flex flex-col">
                  {/* Logo & Title Row */}
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-14 h-14 relative flex-shrink-0">
                      <Image
                        src={project.logo}
                        alt={project.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-portfolio-white mb-1">
                        {project.title}
                      </h3>
                      <p className="text-foreground-muted text-sm leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 text-xs font-medium rounded-full bg-portfolio-blue/10 text-portfolio-blue border border-portfolio-blue/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Arrow Icon */}
                  <div className="absolute top-4 right-4">
                    <svg className="w-5 h-5 text-portfolio-blue/50 group-hover:text-portfolio-blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-portfolio-blue/0 to-purple-600/0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}