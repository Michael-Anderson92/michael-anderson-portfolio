'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SocialLinks from './SocialLinks';

export default function Header() {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-20 bg-[var(--black)] border-b border-[var(--gray)]/20 backdrop-blur-md"
      style={{
        backgroundColor: 'rgba(30, 30, 30, 0.95)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <div className="container mx-auto px-4 py-2">
        <h1
          className="text-3xl sm:text-4xl lg:text-5xl text-center font-bold mb-1"
          style={{ color: 'var(--blue)' }}
        >
          Michael Anderson
        </h1>
        <h2
          className="text-lg sm:text-xl lg:text-2xl text-center mb-3"
          style={{ color: 'var(--white)' }}
        >
          Full Stack Web Developer
        </h2>
        <SocialLinks />
      </div>
    </motion.header>
  );
}