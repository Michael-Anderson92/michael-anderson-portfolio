'use client';

import * as React from 'react';
import { useState, Suspense, useEffect, useRef } from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BackgroundBeams } from '@/components/ui/background-beams';
import Header from '@/components/Header';
import LiveDataStrip from '@/components/LiveDataStrip';
import HeroWrapper from '@/components/HeroWrapper';
import MainContentSection from '@/components/MainContentSection';
import Footer from '@/components/Footer';

gsap.registerPlugin(ScrollTrigger);

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
  palette: {
    primary: {
      main: '#007FFF',
      dark: '#0066CC',
    },
  },
});

export default function Page() {
  const [isLoaded, setIsLoaded] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const mainContentRef = useRef<HTMLDivElement>(null);

  // First reset - as early as possible
  useEffect(() => {
    // Immediate scroll to top
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  // Second reset - after component mount
  useEffect(() => {
    // Disable browser scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Force scroll again
    window.scrollTo(0, 0);
    
    // Also force on window load
    const handleLoad = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    window.addEventListener('load', handleLoad);
    
    // Set a timeout as backup
    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);

    setIsLoaded(true);

    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(timeoutId);
    };
  }, []);

  // Nav fade out animation when reaching white section
  useEffect(() => {
    if (!isLoaded || !navRef.current || !mainContentRef.current) return;

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
      
      const ctx = gsap.context(() => {
        gsap.to(navRef.current, {
          opacity: 0,
          y: -30,
          pointerEvents: 'none',
          ease: 'power2.out',
          scrollTrigger: {
            trigger: mainContentRef.current,
            start: 'top bottom',
            end: 'top 60%',
            scrub: 0.3,
            // markers: true, // Uncomment to debug
          },
        });
      });

      return () => ctx.revert();
    }, 100);

    return () => clearTimeout(timer);
  }, [isLoaded]);

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-portfolio-black flex items-center justify-center">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="min-h-screen bg-portfolio-black relative overflow-x-hidden">
        {/* Background Layer - Fixed behind everything */}
        <div className="fixed inset-0 z-background">
          <Suspense fallback={<div className="w-full h-full bg-portfolio-black" />}>
            <BackgroundBeams className="absolute top-0 left-0 w-full h-full" />
          </Suspense>
        </div>

        {/* Navigation Container - Fades out when reaching white section */}
        <div ref={navRef} className="fixed top-0 left-0 right-0 z-50 will-change-transform">
          {/* Live Data Strip */}
          <LiveDataStrip />
          {/* Header */}
          <Header />
        </div>

        {/* Hero Section - Full viewport, fades on scroll */}
        <HeroWrapper />

        {/* Main Content Section - Scrolls up naturally over hero */}
        <div ref={mainContentRef}>
          <MainContentSection />
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}