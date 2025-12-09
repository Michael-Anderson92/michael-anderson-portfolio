'use client';

import { useState } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  logo: string; // URL or emoji
  technologies: string[];
  link: string;
  gradientFrom?: string;
  gradientTo?: string;
  borderColor?: string; // Add this prop
}

export default function ProjectCard({
  title,
  description,
  logo,
  technologies,
  link,
  gradientFrom = '#007FFF',
  gradientTo = '#624CAB',
  borderColor = '#eab308', // Default yellow
}: ProjectCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [hasBeenHovered, setHasBeenHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsFlipped(true);
    setHasBeenHovered(true);
  };

  const handleMouseLeave = () => {
    // Only reset if user hovers out after the initial hover
    if (hasBeenHovered) {
      setIsFlipped(false);
    }
  };

  const handleLearnMore = () => {
    // Reset state when clicking Learn More
    setIsFlipped(false);
    setHasBeenHovered(false);
    // Navigate to link
    window.open(link, '_blank');
  };

  return (
    <div
      className="relative w-[400px] h-[500px] rounded-2xl border-4 overflow-hidden cursor-pointer group"
      style={{
        borderColor: borderColor, // Use the prop
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* State 1: Gradient + Logo */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
          isFlipped ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
        }}
      >
        {/* Logo */}
        <div className="text-9xl select-none">
          {logo}
        </div>
      </div>

      {/* State 2: Details + Button */}
      <div
        className={`absolute inset-0 p-8 flex flex-col justify-between transition-opacity duration-500 ${
          isFlipped ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: 'rgba(10, 10, 10, 0.95)',
          backdropFilter: 'blur(10px)',
        }}
      >
        {/* Content */}
        <div>
          {/* Title */}
          <h3 className="text-3xl font-bold text-white mb-4">
            {title}
          </h3>

          {/* Description */}
          <p className="text-gray-300 leading-relaxed mb-6">
            {description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs font-medium rounded-full bg-portfolio-blue/20 text-portfolio-blue border border-portfolio-blue/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Learn More Button */}
        <button
          onClick={handleLearnMore}
          className="w-full py-4 rounded-lg bg-gradient-to-r from-portfolio-blue to-purple-600 text-white font-semibold text-lg hover:shadow-lg hover:shadow-portfolio-blue/50 transition-all duration-300 flex items-center justify-center gap-2"
        >
          Learn More
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          boxShadow: `0 0 40px ${gradientFrom}40`,
        }}
      />
    </div>
  );
}