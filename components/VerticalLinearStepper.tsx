'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

interface Step {
  label: string;
  description: string;
  icon: string;
}

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
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
  { 
    label: 'My Mission', 
    icon: '🎯',
    description: 'Crafting seamless digital experiences that go beyond expectations, I aim to build scalable and efficient solutions that are tailor-made to meet your unique needs.',
  },
  { 
    label: 'My Approach', 
    icon: '🚀',
    description: 'Combining innovative designs with robust architecture, I deliver optimized, user-centered applications. My focus is on long-term scalability and performance.',
  },
  { 
    label: 'My Commitment', 
    icon: '💎',
    description: 'Every line of code I write comes with a dedication to quality and precision. I thrive on creating solutions that empower businesses and improve user experiences.',
  },
  {
    label: 'Core Values', 
    icon: '🤝',
    description: 'Transparency, collaboration, and adaptability. I work alongside my clients to ensure their vision is realized while creating a foundation for growth and innovation.',
  },
  { 
    label: 'Results-Driven Solutions', 
    icon: '📈',
    description: 'From concept to completion, I pride myself on delivering applications that are efficient, scalable, and capable of handling even the most demanding requirements.',
  },
  {
    label: 'My Expertise', 
    icon: '⚡',
    description: 'I specialize in scalable backend systems, dynamic frontend designs, and seamless integrations, ensuring all projects exceed performance and usability standards.',
  }
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const stepRefs = React.useRef<(HTMLDivElement | null)[]>([]);
  const [stepTops, setStepTops] = React.useState<number[]>([]);
  
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

  React.useEffect(() => {
    const onScroll = () => {
      if (!stepTops.length) return;
      const scrollY = window.scrollY + window.innerHeight / 2; 
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
      <Box
        sx={{  
          maxWidth: { sm: 420, lg: 600 },
          margin: { sm: '0 auto', lg: '0 auto' },
          paddingBottom: 4,
          position: 'relative',
          zIndex: 20,
        }}
      >
        <Box>
          {steps.map((step, idx) => (
            <motion.div
              key={step.label}
              ref={(el: HTMLDivElement | null) => { stepRefs.current[idx] = el; }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Box
                sx={{
                  mt: idx === 0 ? 0 : 2, // Remove top margin from first box
                  p: 5,
                  borderRadius: 2,
                  background: activeStep === idx 
                    ? 'rgba(30, 30, 30, 0.95)' 
                    : 'rgba(30, 30, 30, 0.85)',
                  backdropFilter: 'blur(10px)',
                  border: activeStep === idx
                    ? '2px solid var(--blue, #00bcd4)'
                    : '1px solid var(--gray, #616161)',
                  transition: 'all 0.3s ease',
                  boxShadow: activeStep === idx
                    ? '0 4px 20px 0 rgba(0,188,212,0.2)'
                    : 'none',
                  textAlign: 'center',
                  position: 'relative',
                  zIndex: 21,
                  '&:hover': {
                    border: '1px solid var(--blue, #00bcd4)',
                    background: 'rgba(30, 30, 30, 0.95)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 2px 12px 0 rgba(0,188,212,0.15)',
                  },
                }}
              >
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 + 0.2 }}
                  style={{
                    fontSize: '3rem',
                    marginBottom: '1rem',
                  }}
                >
                  {step.icon}
                </motion.div>
                
                <Typography
                  variant="h6"
                  sx={{
                    color: activeStep === idx ? 'var(--blue, #00bcd4)' : 'var(--gray, #616161)',
                    fontWeight: 600,
                    mb: 3,
                    transition: 'color 0.3s',
                    fontSize: { xs: '1.25rem', md: '1.5rem' },
                  }}
                >
                  {step.label}
                </Typography>
                
                <Typography
                  sx={{
                    color: activeStep === idx ? 'var(--white, #f5f5f5)' : 'var(--gray, #616161)',
                    transition: 'color 0.3s',
                    fontSize: { xs: '0.95rem', md: '1rem' },
                    lineHeight: 1.6,
                    maxWidth: '500px',
                    margin: '0 auto',
                  }}
                >
                  {step.description}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Box>
    </ThemeProvider>
  );
}