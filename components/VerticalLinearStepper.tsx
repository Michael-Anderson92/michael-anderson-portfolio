'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

interface Step {
  label: string;
  description: string;
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#00bcd4',
      contrastText: '#f5f5f5',
    },
    background: {
      default: '#1e1e1e',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#f5f5f5',
      secondary: '#616161',
    },
  },
});

const steps: Step[] = [
  { label: 'My Mission', description: 'Crafting seamless digital experiences that go beyond expectations, I aim to build scalable and efficient solutions that are tailor-made to meet your unique needs.',
  },
  { 
    label: 'My Approach', description: 'Combining innovative designs with robust architecture, I deliver optimized, user-centered applications. My focus is on long-term scalability and performance.',
  },
  { 
    label: 'My Commitment', description: 'Every line of code I write comes with a dedication to quality and precision. I thrive on creating solutions that empower businesses and improve user experiences.',
  },
  {
    label: 'Core Values', description: 'Transparency, collaboration, and adaptability. I work alongside my clients to ensure their vision is realized while creating a foundation for growth and innovation.',
  },
  { 
    label: 'Results-Driven Solutions', description: 'From concept to completion, I pride myself on delivering applications that are efficient, scalable, and capable of handling even the most demanding requirements.',
  },
  {
    label: 'My Expertise', description: 'I specialize in scalable backend systems, dynamic frontend designs, and seamless integrations, ensuring all projects exceed performance and usability standards.',
  }
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const stepRefs = React.useRef<(HTMLDivElement | null)[]>([]);
  const [stepTops, setStepTops] = React.useState<number[]>([]);
  

  // Measure each step's top offset relative to the page
  React.useEffect(() => {
    const updateStepTops = () => {
      const tops = stepRefs.current.map(ref => {
        if (!ref) return 0;
        const rect = ref.getBoundingClientRect();
        return rect.top + window.scrollY;
      });
      setStepTops(tops);
    };
    updateStepTops();
    window.addEventListener('resize', updateStepTops);
    return () => window.removeEventListener('resize', updateStepTops);
  }, [steps.length]);

  // Listen to window scroll
  React.useEffect(() => {
    const onScroll = () => {
      if (!stepTops.length) return;
      const scrollY = window.scrollY + window.innerHeight / 1.5; // Trigger a bit before center
      let newActive = 0;
      for (let i = 0; i < stepTops.length; i++) {
        if (scrollY >= stepTops[i]) {
          newActive = i;
        } else {
          break;
        }
      }
      setActiveStep(newActive);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [stepTops]);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ maxWidth: 420, margin: '0 auto', py: 4 }}>
        <Box>
          {steps.map((step, idx) => (
            <Box
              key={step.label}
              ref={(el: HTMLDivElement | null) => { stepRefs.current[idx] = el; }}
              sx={{
                mb: 3,
                p: 3,
                borderRadius: 2,
                background: 'var(--black)',
                border: activeStep === idx
                  ? '2px solid var(--blue)'
                  : '1px solid var(--gray)',
                transition: 'background 0.3s, border 0.3s',
                boxShadow: activeStep === idx
                  ? '0 2px 12px 0 rgba(0,188,212,0.15)'
                  : 'none',
                  textAlign: 'center',
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: activeStep === idx ? 'var(--blue)' : 'var(--gray)',
                  fontWeight: 600,
                  mb: 1,
                  transition: 'color 0.3s',
                }}
              >
                {step.label}
              </Typography>
              <Typography
                sx={{
                  color: activeStep === idx ? 'var(--white)' : 'var(--gray)',
                  transition: 'color 0.3s',
                }}
              >
                {step.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </ThemeProvider>
  );
}
