'use client';

import * as React from 'react';
import Link from 'next/link';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import VerticalLinearStepper from '@/components/VerticalLinearStepper';
const theme = createTheme({
  palette: {
    primary: {
      main: '#007FFF',
      dark: '#0066CC',
    },
  },
});

export default function Page() {
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{
        backgroundColor: 'var(--black)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <main className="flex-grow flex flex-col p-6">
        <div>
          <h1 
            className="text-3xl text-center"
            style={{
              color: 'var(--blue)',
              lineHeight: '64px',
            }}>Michael Anderson</h1>
          <h3 
            className="text-2xl text-center"
            style={{
              color: 'var(--white)',
              marginBottom: '2vh',
            }}>Full Stack Web Developer</h3>
        </div>

        <div></div>

        <div>
          <VerticalLinearStepper />
        </div>
        
        
      </main>
    </div>
  );
}
