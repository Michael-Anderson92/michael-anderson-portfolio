'use client';

import * as React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import VerticalLinearStepper from '@/components/VerticalLinearStepper';
import ResponsiveNav from '@/components/ResponsiveNav';

const theme = createTheme({
  palette: {
    primary: {
      main: '#007FFF',
      dark: '#0066CC',
    },
  },
});

const socialLinks = [
  {
    href: 'https://github.com/Michael-Anderson92',
    label: 'GitHub',
    svg: (
      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 0.297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387 0.6 0.113 0.82-0.258 0.82-0.577 0-0.285-0.011-1.04-0.017-2.04-3.338 0.724-4.042-1.416-4.042-1.416-0.546-1.387-1.333-1.756-1.333-1.756-1.089-0.745 0.084-0.729 0.084-0.729 1.205 0.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495 0.997 0.108-0.775 0.418-1.304 0.762-1.604-2.665-0.304-5.466-1.334-5.466-5.931 0-1.311 0.469-2.381 1.236-3.221-0.124-0.303-0.535-1.523 0.117-3.176 0 0 1.008-0.322 3.301 1.23 0.957-0.266 1.983-0.399 3.003-0.404 1.02 0.005 2.047 0.138 3.006 0.404 2.289-1.552 3.295-1.23 3.295-1.23 0.653 1.653 0.242 2.873 0.118 3.176 0.77 0.84 1.235 1.911 1.235 3.221 0 4.609-2.805 5.625-5.475 5.921 0.43 0.372 0.823 1.102 0.823 2.222 0 1.606-0.014 2.898-0.014 3.293 0 0.322 0.216 0.694 0.825 0.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    ),
  },
  {
    href: 'https://linkedin.com/in/Michael-Anderson92',
    label: 'LinkedIn',
    svg: (
      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 19h-2.5v-8.5h2.5v8.5zm-1.25-9.75c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm15.25 9.75h-2.5v-4.25c0-1.01-.02-2.31-1.41-2.31-1.41 0-1.63 1.1-1.63 2.23v4.33h-2.5v-8.5h2.4v1.16h.03c.33-.62 1.14-1.27 2.35-1.27 2.52 0 2.99 1.66 2.99 3.81v4.8z"/>
      </svg>
    ),
  },
  {
    href: 'https://michael-anderson.hashnode.dev/?source=top_nav_blog_home',
    label: 'Hashnode',
    svg: (
      <svg width="24" height="24" fill="currentColor" viewBox="0 0 337 337" aria-hidden="true">
        <path d="M168.5 0c-10.2 0-20.5 3.9-28.3 11.7l-128.5 128.5c-15.6 15.6-15.6 41 0 56.6l128.5 128.5c15.6 15.6 41 15.6 56.6 0l128.5-128.5c15.6-15.6 15.6-41 0-56.6l-128.5-128.5c-7.8-7.8-18.1-11.7-28.3-11.7zm0 60.5c59.7 0 108 48.3 108 108s-48.3 108-108 108-108-48.3-108-108 48.3-108 108-108zm0 40.5c-37.3 0-67.5 30.2-67.5 67.5s30.2 67.5 67.5 67.5 67.5-30.2 67.5-67.5-30.2-67.5-67.5-67.5z"/>
      </svg>
    ),
  },
];

export default function Page() {
  return (
    <ThemeProvider theme={theme}>
      <div
        className="flex flex-col min-h-screen"
        style={{
          backgroundColor: 'var(--black)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          
        }}
      >
        <main className="flex-grow flex flex-col">
        <header
  style={{
    position: 'sticky', // Set sticky positioning
    top: '0', // Sticks to the top of the viewport
    zIndex: '10', // Ensures it stays above other elements
    backgroundColor: 'var(--black)', // Keeps the background consistent as it scrolls
    width: '100%',

  }}
>
  <h1
    className="text-3xl text-center"
    style={{
      color: 'var(--blue)',
      lineHeight: '64px',
    }}
  >
    Michael Anderson
  </h1>
  <h3
    className="text-2xl text-center"
    style={{
      color: 'var(--white)',
      marginBottom: '1vh',
    }}
  >
    Full Stack Web Developer
  </h3>
  <nav className="flex justify-center gap-6 my-4 mx-auto">
    {socialLinks.map(({ href, label, svg }) => (
      <a
        key={label}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="transition-colors duration-200"
        style={{
          color: 'var(--white)',
        }}
      >
        {svg}
      </a>
    ))}
  </nav>
  <section className="my-4">
            <h1 className="text-center text-white italic">
              "Thanks for stopping by!"
            </h1>
          </section>
          <ResponsiveNav />
</header>

          

          <section className="p-2">
            <VerticalLinearStepper />
          </section>
        </main>
      </div>
    </ThemeProvider>
  );
}
