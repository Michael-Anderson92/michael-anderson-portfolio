'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function HeroSection() {
  const simpleRef = useRef<HTMLSpanElement>(null);
  const dataDrivenRef = useRef<HTMLSpanElement>(null);
  const applicationsRef = useRef<HTMLSpanElement>(null);
  const scaleTextRef = useRef<HTMLHeadingElement>(null);

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
    gsap.set(scaleTextRef.current, { opacity: 0, scale: 0.5 });

    // CREATE TIMELINE WITH LONGER DELAY
    const masterTl = gsap.timeline({
      delay: 0.5,
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

    // 2b. Neon Glow Effect
    masterTl
      .to(scaleTextRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'back.out(1.7)',
      }, '<')
      .to(scaleTextRef.current, {
        textShadow: '0 0 30px rgba(0, 188, 212, 1), 0 0 60px rgba(0, 188, 212, 0.5)',
        duration: 0.5,
        yoyo: true,
        repeat: 1,
      });
  }, []);

  return (
    <section
      className="w-full h-full px-4 py-12 md:py-16 flex items-center justify-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        <h1 className="font-display text-portfolio-white text-5xl md:text-6xl lg:text-8xl text-center font-bold px-4 md:px-6 leading-snug tracking-tight">
          I build{" "}
          <span ref={simpleRef} className="inline-block italic  text-portfolio-blue">
            scalable,
          </span>
          <br />
          <span ref={dataDrivenRef} className="inline-block italic text-green-500">
            full-stack
          </span>{" "}
          <span ref={applicationsRef} className="inline-block text-yellow">
            applications.
          </span>
        </h1>
      </div>
      {/* <div className="absolute bottom-10 right-10 text-xl md:text-2xl lg:text-3xl font-semibold text-portfolio-white/70 hover:text-portfolio-white cursor-pointer select-none" ref={scaleTextRef}>
        Learn more
      </div> */}
    </section>
  );
}