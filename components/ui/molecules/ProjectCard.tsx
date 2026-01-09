'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  logo: string; // Just string for now
  technologies: string[];
  link: string;
  gradientFrom?: string;
  gradientTo?: string;
  borderColor?: string;
}

export default function ProjectCard({
  title,
  description,
  logo,
  technologies,
  link,
  gradientFrom = '#007FFF',
  gradientTo = '#624CAB',
  borderColor = '#eab308',
}: ProjectCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [hasBeenHovered, setHasBeenHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsFlipped(true);
    setHasBeenHovered(true);
  };

  const handleMouseLeave = () => {
    if (hasBeenHovered) {
      setIsFlipped(false);
    }
  };

  const handleLearnMore = () => {
    setIsFlipped(false);
    setHasBeenHovered(false);
    window.open(link, '_blank');
  };

  // Check if logo is an image path
  const isImage = logo.startsWith('/') || logo.startsWith('http');

  return (
    <div
      className="relative w-[400px] h-[500px] rounded-2xl border-4 overflow-hidden cursor-pointer group"
      style={{
        borderColor: borderColor,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* STATE 1: Gradient + Logo */}
      <div
        className={`absolute inset-0 flex flex-col transition-opacity duration-500 ${
          isFlipped ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {/* Top Section - Logo (2x height) */}
        <div
          className="flex-[2] px-2 pt-2 flex items-center justify-center"
          style={{
            background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
          }}
        >
          {isImage ? (
            <div className="relative w-48 h-48">
              <Image
                src={logo}
                alt={title}
                fill
                className="object-contain select-none"
                sizes="192px"
              />
            </div>
          ) : (
            <div className="text-9xl select-none">
              {logo}
            </div>
          )}
        </div>

        {/* Bottom Section - Title + Description (1x height) */}
        <div className="flex-1 bg-portfolio-black p-3 flex flex-col justify-start">
          <h3 className="text-2xl font-bold text-white mb-2">
            {title}
          </h3>
          <p className="text-gray-400 text-base line-clamp-4">
            {description}
          </p>
        </div>
      </div>

      {/* STATE 2: Technologies + Button */}
      <div
        className={`absolute inset-0 flex flex-col transition-opacity duration-500 ${
          isFlipped ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: 'rgba(10, 10, 10, 0.95)',
          backdropFilter: 'blur(10px)',
        }}
      >
        {/* Top Section - Technologies (2x height) */}
        <div className="flex-[2] px-2 pt-2 overflow-auto">
          <div className="bg-background-lighter/50 rounded-xl p-6 h-full flex flex-col justify-center">
            <h4 className="text-white font-semibold mb-4 text-lg">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 text-sm font-medium rounded-full bg-portfolio-blue/20 text-portfolio-blue border border-portfolio-blue/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section - Learn More Button (1x height) */}
        <div className="flex-1 p-6 flex items-center">
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
      </div>

      {/* Hover glow effect */}
      <div 
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          boxShadow: `0 0 40px ${gradientFrom}40`,
        }}
      />
    </div>
  );
}
