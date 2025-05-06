'use client';
import React from 'react';
import ContactModal from './ContactModal';
import ProjectsModal from './ProjectsModal';
import SkillsModal from './SkillsModal';

export default function ResponsiveNav() {
  return (
    <nav
      className="flex flex-row justify-center pb-4"
      style={{
        boxShadow: '0 4px 4px -1px rgba(255, 255, 255, 0.1)',
      }}
    >
      <SkillsModal />
      <ProjectsModal />
      <ContactModal />
    </nav>
  );
}