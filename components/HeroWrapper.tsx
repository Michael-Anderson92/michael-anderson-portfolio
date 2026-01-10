'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroSection from './HeroSection';

gsap.registerPlugin(ScrollTrigger);

export default function HeroWrapper() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const hero = heroRef.current;

    // Create scroll-triggered fade out animation
    gsap.to(hero, {
      opacity: 0,
      scale: 0.95,
      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end: 'bottom top',
        scrub: 0.5,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative h-screen w-full flex items-center justify-center pt-[calc(3rem+80px)] will-change-transform"
    >
      <HeroSection />
    </div>
  );
}
