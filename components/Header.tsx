'use client';

import React from 'react';
import SocialLinks from './SocialLinks';

export default function Header() {
  return (
    <header
      className="z-10"
      style={{
        position: 'sticky',
        top: '0',
        backgroundColor: 'var(--black)', 
        width: '100%',
      }}
    >
      <h1
        className="sm:text-4xl lg:text-7xl lg:pt-12 lg:pb-8 text-center"
        style={{ color: 'var(--blue)' }}
      >
        Michael Anderson
      </h1>
      <h3
        className="sm:text-2xl lg:text-4xl text-center align-center"
        style={{
          color: 'var(--white)',
          marginBottom: '1vh',
        }}
      >
        Full Stack Web Developer
      </h3>
      <SocialLinks />
    </header>
  );
}