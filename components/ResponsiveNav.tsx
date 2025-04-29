'use client';
import react from 'react';
import ContactModal from './ContactModal';
import ProjectsModal from './ProjectsModal';
import SkillsModal from './SkillsModal';

export default function ResponsiveNav() {
  return (
<nav className = "flex flex-row justify-center">
  <SkillsModal />
  <ProjectsModal />
  <ContactModal />
</nav>
  )
};