'use client';

import * as React from 'react';
import { useState, Suspense } from 'react';
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

// Temporary placeholder components - replace with your actual components





export default function Page() {
  const [currentView, setCurrentView] = useState('home');

  const renderContent = () => {
    switch (currentView) {
      case 'skills':
        return <SkillsContent />;
      case 'projects':
        return <ProjectsContent />;
      case 'about':
        return <AboutContent />;
      default:
        return <VerticalLinearStepper />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div
        className="grid grid-rows-[auto_1fr_auto] min-h-screen"
        style={{
          backgroundColor: 'var(--black)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          gridTemplateColumns: '1fr',
        }}
      >
        <Suspense fallback={<div className="w-full h-full bg-black" />}>
          <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-[1000]" />
        </Suspense>
        
        {/* Header Section - Grid Row 1 */}
        <Header />
        
        {/* Main Content - Grid Row 2 */}
        <main className="grid grid-cols-1 md:grid-cols-5 overflow-hidden relative">
          {/* Left Column */}
          <section className="md:col-span-2 overflow-y-auto border-r border-gray-800 relative" style={{ backgroundColor: 'var(--black)' }}>
            <div className="p-6">
              {/* Space for regular left column content */}
            </div>
          </section>

          {/* Right Column */}
          <section className="md:col-span-3 w-full overflow-y-auto" style={{ backgroundColor: 'var(--black)' }}>
            <div className="p-6">
              <Suspense fallback={<div className="mx-auto w-full h-[600px] bg-black" />}>
                {renderContent()}
              </Suspense>
            </div>
          </section>
        </main>

        {/* Bottom Navigation - Grid Row 3 */}
        <footer className="z-10" style={{ backgroundColor: 'var(--black)' }}>
          <Suspense fallback={<div className="w-full h-32 bg-black" />}>
            <BottomNav />
          </Suspense>
        </footer>

        {/* FlyoutMenu as an overlay - now passes setCurrentView */}
        
          <FlyoutMenu setCurrentView={setCurrentView} />
        
      </div>
    </ThemeProvider>
  );
}