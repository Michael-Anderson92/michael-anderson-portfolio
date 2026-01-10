'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    <footer className="relative z-10 mt-32 md:mt-48 bg-gradient-to-t from-portfolio-black via-portfolio-black to-transparent">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        {/* Top Section - CTA */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-portfolio-white mb-4">
            Let's Build Something Together
          </h2>
          <p className="text-foreground-muted text-base md:text-lg max-w-2xl mx-auto mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <a
            href="mailto:contact@andersondesigns.io"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-portfolio-blue text-portfolio-black font-semibold text-lg hover:bg-portfolio-blue-light transition-colors duration-300 hover:shadow-lg hover:shadow-portfolio-blue/30"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Get In Touch
          </a>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-border/50 to-transparent mb-12" />

        {/* Middle Section - Social Links */}
        <motion.div 
          className="flex flex-col items-center gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="text-foreground-muted text-sm uppercase tracking-wider">
            Connect with me
          </p>
          <SocialLinks />
        </motion.div>

        {/* Bottom Section - Copyright */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-foreground-muted text-sm">
            © {new Date().getFullYear()} Michael Anderson. All rights reserved.
          </p>
          <p className="text-foreground-muted/60 text-xs mt-2">
            Built with Next.js, GSAP, and Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
