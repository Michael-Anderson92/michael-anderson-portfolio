'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const philosophies = [
  {
    icon: '🎯',
    title: 'User-Centric Architecture',
    description: 'Start with user needs, not tech stack. Design systems that scale with real-world usage and build interfaces that feel invisible.',
    stats: 'UX First'
  },
  {
    icon: '📊',
    title: 'Data-Driven Decisions',
    description: 'Instrument everything, measure what matters. Let metrics guide architecture choices and build feedback loops into the system.',
    stats: 'Metrics Matter'
  },
  {
    icon: '⚙️',
    title: 'Maintainable Systems',
    description: 'Write code others can understand. Document decisions, not just implementations. Design for the developer who comes after you.',
    stats: 'Built to Last'
  }
];

export default function PhilosophySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const cards = cardsRef.current;

    if (!section || !title) return;

    // Set initial states
    gsap.set(title, { opacity: 0, y: 30 });
    gsap.set(cards, { opacity: 0, y: 50, scale: 0.9 });

    // Create scroll-triggered animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 80%', // Start when section is 80% down the viewport
        end: 'top 20%',
        toggleActions: 'play none none none',
      }
    });

    // Animate title first
    tl.to(title, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
    })
    // Then stagger the cards
    .to(cards, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: 'back.out(1.4)',
    }, '-=0.4');

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="w-full px-4 py-16 md:py-24 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 text-portfolio-white"
        >
          How I Build
        </h2>
        <p className="text-center text-foreground-muted text-lg md:text-xl mb-12 max-w-3xl mx-auto">
          My approach to creating systems that scale, interfaces that work, and code that lasts.
        </p>

        {/* Philosophy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {philosophies.map((philosophy, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="group relative"
            >
              {/* Card */}
              <div 
                className="
                  relative h-full p-8 rounded-2xl
                  bg-background-light/50 backdrop-blur-lg
                  border border-border/30
                  transition-all duration-300
                  hover:bg-background-light/70
                  hover:border-portfolio-blue/50
                  hover:-translate-y-2
                  hover:shadow-xl hover:shadow-portfolio-blue/10
                  cursor-default
                "
              >
                {/* Icon */}
                <div className="text-6xl mb-6 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  {philosophy.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 text-portfolio-white">
                  {philosophy.title}
                </h3>

                {/* Description */}
                <p className="text-foreground-muted leading-relaxed mb-6">
                  {philosophy.description}
                </p>

                {/* Stats Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-portfolio-blue/10 border border-portfolio-blue/20">
                  <span className="text-sm font-semibold text-portfolio-blue">
                    {philosophy.stats}
                  </span>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-portfolio-blue/0 to-purple-600/0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}