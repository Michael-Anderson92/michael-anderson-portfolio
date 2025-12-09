'use client';

import React from 'react';
import SocialLinks from './SocialLinks';

export default function Header() {
  return (
    <header
      className="sticky top-0 z-20 bg-[var(--black)] border-b border-[var(--gray)]/20 backdrop-blur-md"
      style={{
        backgroundColor: 'rgba(30, 30, 30, 0.95)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <div className="container mx-auto px-4 py-2">
        
        {/* Mobile Layout - Centered */}
        <div className="block md:hidden text-center">
          <h1
            className="text-3xl sm:text-4xl font-bold mb-1"
            style={{ color: 'var(--blue)' }}
          >
            Michael Anderson
          </h1>
          <h2
            className="text-lg sm:text-xl mb-3"
            style={{ color: 'var(--white)' }}
          >
            Full Stack Web Developer
          </h2>
          <SocialLinks />
        </div>

        {/* Desktop Layout - Split */}
        <div className="hidden md:flex items-center justify-between">
          
          {/* Left Side - Name and Title */}
          <div className="flex flex-col">
            <h1
              className="text-4xl lg:text-5xl font-bold mb-1"
              style={{ color: 'var(--blue)' }}
            >
              Michael Anderson
            </h1>
            <h2
              className="text-xl lg:text-2xl"
              style={{ color: 'var(--white)' }}
            >
              Full Stack Web Developer
            </h2>
          </div>

          {/* Right Side - Social Links with Labels */}
          <SocialLinks showLabels={true} />
        </div>
      </div>
    </header>
  );
}