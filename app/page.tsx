'use client';

import * as React from 'react';
import { useState, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import VerticalLinearStepper from '@/components/VerticalLinearStepper';
import { BackgroundBeams } from '@/components/ui/background-beams';
import FlyoutMenu from '@/components/FlyoutMenu';
import BottomNav from '@/components/BottomNav';
import Header from '@/components/Header';
import SkillsContent from '@/components/SkillsContent';
import AboutContent from '@/components/AboutContent';
import ProjectsContent from '@/components/ProjectsContent';
import HeroSection from '@/components/HeroSection';
import ProjectCarousel from '@/components/ProjectCarousel' // Changed from PhilosophySection
import LiveDataStrip from '@/components/LiveDataStrip';

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
  const [currentView, setCurrentView] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMenuHidden, setIsMenuHidden] = useState(false);

  React.useEffect(() => {
    setIsLoaded(true);
  }, []);

  const renderContent = () => {
    const contentVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0, 0, 0.2, 1] as const }
      },
      exit: {
        opacity: 0,
        y: -20,
        transition: { duration: 0.3 }
      }
    };

    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={currentView}
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="w-full relative z-header"
        >
          {currentView === 'skills' && <SkillsContent />}
          {currentView === 'projects' && (
            <ProjectsContent 
              onImageModalChange={setIsMenuHidden}
            />
          )}
          {currentView === 'about' && <AboutContent />}
          {currentView === 'home' && <VerticalLinearStepper />}
        </motion.div>
      </AnimatePresence>
    );
  };

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
        {/* Background Layer - Lowest Z-Index */}
        <div className="fixed inset-0 z-background">
          <Suspense fallback={<div className="w-full h-full bg-portfolio-black" />}>
            <BackgroundBeams className="absolute top-0 left-0 w-full h-full" />
          </Suspense>
        </div>

        {/* First Screen Section - Exactly 100vh */}
        <section className="h-screen flex flex-col relative z-content">
          {/* Live Data Strip */}
          <LiveDataStrip />

          {/* Header */}
          <Header />

          {/* Hero Section - Takes remaining space */}
          <HeroSection />
        </section>

        {/* Main Content Layer */}
        <div className="relative z-content">
          {/* Main Content */}
          <main className="relative">
            <ProjectCarousel /> {/* Changed from PhilosophySection */}
          </main>

          {/* Footer */}
          <footer className="relative z-header bg-portfolio-black">
            <Suspense fallback={<div className="w-full h-32 bg-portfolio-black" />}>
              <BottomNav />
            </Suspense>
          </footer>
        </div>

        {/* Side Navigation - Highest Z-Index - Only show when not hidden */}
        <AnimatePresence>
          {!isMenuHidden && (
            <motion.div
              className="fixed bottom-8 left-8 z-navigation"
              initial={{ opacity: 1, scale: 1 }}
              exit={{
                opacity: 0,
                scale: 0.8,
                transition: { duration: 0.2, ease: "easeInOut" }
              }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: { duration: 0.2, ease: "easeInOut" }
              }}
            >
              {/* <FlyoutMenu currentView={currentView} setCurrentView={setCurrentView} /> */}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
}