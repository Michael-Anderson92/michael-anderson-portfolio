'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function HeroSection() {
  const simpleRef = useRef<HTMLSpanElement>(null);
  const dataDrivenRef = useRef<HTMLSpanElement>(null);
  const applicationsRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const header = document.querySelector('header');

    // SET INITIAL STATES - Everything hidden
    if (header) {
      gsap.set(header, {
        y: -100,
        opacity: 0,
      });
    }

    gsap.set(simpleRef.current, { opacity: 0, x: -50, rotation: -10 });
    gsap.set(dataDrivenRef.current, { opacity: 0, scale: 0.5 });
    gsap.set(applicationsRef.current, { opacity: 0, y: 50 });

    // CREATE TIMELINE WITH LONGER DELAY
    const masterTl = gsap.timeline({
      delay: 0.5, // More breathing room
    });

    // 1. FIRST: Animate hero text
    masterTl.to(simpleRef.current, {
      opacity: 1,
      x: 0,
      rotation: 0,
      duration: 1,
      ease: 'power3.out',
    })
    .to(dataDrivenRef.current, {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: 'back.out(2)',
    }, '-=0.5')
    .to(applicationsRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
    }, '-=0.5');

    // 2. THEN: Animate header (after hero completes)
    if (header) {
      masterTl.to(header, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
      }, '+=0');
    }

  }, []);

  return (
    <section className="min-h-[70vh] w-full px-4 flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full">
        <h1 className="font-display text-portfolio-white text-5xl md:text-6xl lg:text-8xl text-center font-bold px-4 leading-snug tracking-tight">
          I build{" "}
          <span ref={simpleRef} className="inline-block text-portfolio-blue">
            simple,
          </span>
          <br />
          <span ref={dataDrivenRef} className="inline-block text-green-500">
            data-driven
          </span>{" "}
          <span ref={applicationsRef} className="inline-block text-yellow">
            applications.
          </span>
        </h1>
      </div>
    </section>
  );
}