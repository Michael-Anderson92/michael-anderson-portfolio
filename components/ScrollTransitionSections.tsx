'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroSection from './HeroSection';
import ProjectCarousel from './ProjectCarousel';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollTransitionSections() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !heroRef.current || !projectsRef.current) return;

    const hero = heroRef.current;
    const projects = projectsRef.current;

    // Set initial states
    gsap.set(projects, { scale: 0.8, opacity: 0 });

    // Create timeline for the transition
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top', // Pin when container hits top
        end: '+=150%',
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        pinSpacing: true, // Ensure proper spacing
      }
    });

    // PHASE 1: Hero zooms out and fades (0s to 1s)
    tl.to(hero, {
      scale: 0.6,
      opacity: 0,
      duration: 1,
      ease: 'power2.inOut',
    }, 0);

    // PHASE 2: Buffer/Gap (1s to 1.3s)
    // PHASE 3: Projects zoom in and fade in (1.3s onwards)
    tl.to(projects, {
      scale: 1,
      opacity: 1,
      duration: 1,
      ease: 'power2.inOut',
    }, 1.3);

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative h-screen w-full pt-[calc(3rem+80px)]" 
      // ↑ Add padding-top to account for fixed header
      // Adjust this value to match your LiveDataStrip (3rem) + Header height
    >
      {/* Hero Section - Positioned absolutely */}
      <div 
        ref={heroRef}
        className="absolute inset-0 w-full h-full flex items-center justify-center"
      >
        <HeroSection />
      </div>

      {/* Projects Section - Positioned absolutely on top */}
      <div 
        ref={projectsRef}
        className="absolute inset-0 w-full h-full overflow-auto"
      >
        <ProjectCarousel />
      </div>
    </div>
  );
}