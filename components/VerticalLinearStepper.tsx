'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00bcd4',
      contrastText: '#FFFFFF', // Optional: text color for better contrast
    },
  },
});

const steps = [
  {
    label: 'My passion',
    description: `12345`,
  },
  {
    label: 'My ethic',
    description: '12345',
  },
  {
    label: 'My performance',
    description: `12345`,
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ maxWidth: 400 }}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
                sx={{
                  '& .MuiStepLabel-label': {
                    color: activeStep === index ? '#624CAB' : '#4A306D', // Active = Royal Purple, Inactive = Darker Variant
                  },
                  '& .MuiStepLabel-iconContainer': {
                    color: activeStep === index ? '#624CAB' : '#624CAB', // Step icon color
                  },
                }}
                StepIconProps={{
                  sx: {
                    color: activeStep === index ? '#00bcd4' : '#00bcd4', // Step icon active/inactive colors
                  },
                }}
                optional={
                  index === steps.length - 1 ? (
                    <Typography variant="caption" sx={{ color: '#F5F5F5' }}>
                      Last step
                    </Typography>
                  ) : null
                }
              >
                {step.label}
              </StepLabel>
              <StepContent>
                <Typography sx={{ color: '#F5F5F5' }}>
                  {step.description}
                </Typography>
                <Box sx={{ mb: 2 }}>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{
                      mt: 1,
                      mr: 1,
                      backgroundColor: '#00bcd4',
                      '&:hover': { backgroundColor: '#ffffff' },
                    }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{
                      mt: 1,
                      mr: 1,
                      backgroundColor: '#00bcd4',
                      '&:hover': { backgroundColor: '#ffffff' },
                    }}
                  >
                    Back
                  </Button>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography sx={{ color: '#F5F5F5' }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button
              onClick={handleReset}
              sx={{
                mt: 1,
                mr: 1,
                backgroundColor: '#00bcd4',
                '&:hover': { backgroundColor: '#ffffff' },
              }}
            >
              Reset
            </Button>
          </Paper>
        )}
      </Box>
    </ThemeProvider>
  );
}