'use client';

import MainContent1 from './MainContent1';
import MainContent2 from './MainContent2';

export default function MainContentSection() {
  return (
    <div className="relative z-10 mt-8 md:mt-12">
      {/* Main content container with white background and rounded corners */}
      <div 
        className="min-h-[200vh] flex flex-col bg-portfolio-white rounded-[2rem] md:rounded-[3rem] shadow-2xl"
      >
        {/* First Section - Projects */}
        <MainContent1 />
        
        {/* Second Section - Placeholder */}
        <MainContent2 />
      </div>
    </div>
  );
}
