'use client';

import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { SxProps, Theme } from '@mui/material/styles';

// Main Modal Style
const mainStyle: SxProps<Theme> = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'var(--black)', // #1e1e1e
  color: 'var(--white)', // #f5f5f5
  border: '2px solid var(--blue)', // #00bcd4 border
  borderRadius: '12px', // Softer corners
  boxShadow: '0 8px 32px rgba(0, 188, 212, 0.2)', // Subtle blue shadow
  p: 5,
  height: '100vh',
  width: '100vw',
  maxWidth: '100vw',
  outline: 'none',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  overflowY: 'auto',
};

// Responsive Project Container Style
const projectContainerStyle: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem', // Increased for better separation
  width: '90%',
  maxWidth: '1200px',
  margin: '0 auto',
};

// Project Item Style (Base)
const projectItemStyle: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  bgcolor: 'var(--black)', // Card background
  border: '1px solid var(--blue)', // #00bcd4 border
  borderRadius: '10px',
  p: 3,
  boxShadow: '0 4px 16px rgba(0, 188, 212, 0.15)', // Subtle shadow
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 6px 24px rgba(0, 188, 212, 0.25)',
  },
};

// Image Style
const imageStyle: SxProps<Theme> = {
  width: '300px',
  height: '300px',
  objectFit: 'cover',
  borderRadius: '8px',
  border: '2px solid var(--blue)', // #00bcd4 border
  flexShrink: 0,
  transition: 'border-color 0.3s, transform 0.3s',
  '&:hover': {
    borderColor: 'var(--white)', // #f5f5f5 on hover
    transform: 'scale(1.08)',
  },
};

// Text Container Style
const textContainerStyle: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
  textAlign: 'center',
  width: '100%',
  px: 2, // Added padding for text breathing room
};

// Responsive styles for larger screens
const responsiveStyles: { [key: string]: SxProps<Theme> } = {
  '@media (min-width: 768px)': {
    projectContainerStyle: {
      ...projectContainerStyle,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '3rem', // Larger gap on desktop
    },
    projectItemStyle: {
      ...projectItemStyle,
      width: '45%',
      maxWidth: '500px',
    },
    imageStyle: {
      ...imageStyle,
      width: '150px',
      height: '150px',
      border: '3px solid var(--blue)', // Thicker border on desktop
      '&:hover': {
        borderColor: 'var(--white)',
        transform: 'scale(1.08)',
      },
    },
  },
};

// Combine styles
const combinedProjectContainerStyle: SxProps<Theme> = {
  ...projectContainerStyle,
  '@media (min-width: 768px)': responsiveStyles['@media (min-width: 768px)'].projectContainerStyle,
};

const combinedProjectItemStyle: SxProps<Theme> = {
  ...projectItemStyle,
  '@media (min-width: 768px)': responsiveStyles['@media (min-width: 768px)'].projectItemStyle,
};

const combinedImageStyle: SxProps<Theme> = {
  ...imageStyle,
  '@media (min-width: 768px)': responsiveStyles['@media (min-width: 768px)'].imageStyle,
};

export default function ProjectsModal() {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Fallback image handler with proper typing
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = 'https://via.placeholder.com/150?text=Image+Not+Found';
  };

  return (
    <div>
      <Button
        sx={{
          height: '5vh',
          width: '20vw',
          marginX: '2vw',
          fontSize: '.8rem',
          color: '#00bcd4',
          bgcolor: 'var(--black)',
          border: '2px solid #00bcd4',
        }}
        variant="contained"
        onClick={handleOpen}
      >
        Projects
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        closeAfterTransition
        BackdropProps={{
          style: { backgroundColor: 'rgba(30, 30, 30, 0.85)' }, // Slightly darker backdrop
        }}
      >
        <Box sx={mainStyle}>
          <Typography
            id="modal-modal-title"
            variant="h5"
            component="h2"
            sx={{
              textAlign: 'center',
              marginBottom: '1.5rem',
              fontWeight: 700,
              textShadow: '0 2px 4px rgba(0, 188, 212, 0.3)', // Subtle blue shadow
            }}
          >
            My Projects
          </Typography>
          <Box sx={combinedProjectContainerStyle}>
            {/* Project 1 */}
            <Box sx={combinedProjectItemStyle}>
              <Box sx={textContainerStyle}>
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    fontWeight: 600,
                    color: 'var(--blue)', // #00bcd4
                    position: 'relative',
                    pb: 1,
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '50px',
                      height: '2px',
                      bgcolor: 'var(--white)', // #f5f5f5
                    },
                  }}
                >
                  CandyBar E-Commerce Platform
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontSize: '0.95rem', lineHeight: 1.6 }}
                >
                  An ongoing e-commerce platform for purchasing specialty treats, featuring advanced search and filtering capabilities and virtual shop functionality. Built with Next.js, Material-UI, Tailwind CSS, TypeScript, and Supabase (PostgreSQL).
                </Typography>
                <a
                  href="https://candybar-ecommerce-application.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    sx={{
                      bgcolor: 'var(--blue)', // #00bcd4
                      color: 'var(--white)', // #f5f5f5
                      padding: '0.5rem 1rem',
                      fontSize: '.8rem',
                      fontWeight: 600,
                      border: '2px solid var(--white)', // #f5f5f5
                      borderRadius: '8px',
                      mt: 1,
                      transition: 'background-color 0.3s, color 0.3s',
                      '&:hover': {
                        bgcolor: 'var(--white)', // #f5f5f5
                        color: 'var(--blue)', // #00bcd4
                        borderColor: 'var(--blue)',
                      },
                    }}
                    aria-label="View CandyBar E-Commerce Platform"
                  >
                    View
                  </Button>
                </a>
              </Box>
              <img
                src="./backgrounds/candybar-app-screenshot1.png"
                alt="CandyBar E-Commerce Platform"
                style={combinedImageStyle as React.CSSProperties}
                onError={handleImageError}
              />
            </Box>

            {/* Project 2 */}
            <Box sx={combinedProjectItemStyle}>
              <Box sx={textContainerStyle}>
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    fontWeight: 600,
                    color: 'var(--blue)', // #00bcd4
                    position: 'relative',
                    pb: 1,
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '50px',
                      height: '2px',
                      bgcolor: 'var(--white)', // #f5f5f5
                    },
                  }}
                >
                  GitCentral Developer Forum
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontSize: '0.95rem', lineHeight: 1.6 }}
                >
                  A forum-style dashboard enabling developers to create forums, posts, and comments. Developed as my third project during General Assembly’s Full Stack Bootcamp, showcasing expertise in the MERN stack (MongoDB, Express.js, React, Node.js).
                </Typography>
                <a
                  href="https://gitcentral.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    sx={{
                      bgcolor: 'var(--blue)', // #00bcd4
                      color: 'var(--white)', // #f5f5f5
                      padding: '0.5rem 1rem',
                      fontSize: '.8rem',
                      fontWeight: 600,
                      border: '2px solid var(--white)', // #f5f5f5
                      borderRadius: '8px',
                      mt: 1,
                      transition: 'background-color 0.3s, color 0.3s',
                      '&:hover': {
                        bgcolor: 'var(--white)', // #f5f5f5
                        color: 'var(--blue)', // #00bcd4
                        borderColor: 'var(--blue)',
                      },
                    }}
                    aria-label="View GitCentral Developer Forum"
                  >
                    View
                  </Button>
                </a>
              </Box>
              <img
                src="./backgrounds/gitcentral-screenshot1.png"
                alt="GitCentral Developer Forum"
                style={combinedImageStyle as React.CSSProperties}
                onError={handleImageError}
              />
            </Box>

            {/* Project 3 */}
            <Box sx={combinedProjectItemStyle}>
              <Box sx={textContainerStyle}>
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    fontWeight: 600,
                    color: 'var(--blue)', // #00bcd4
                    position: 'relative',
                    pb: 1,
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '50px',
                      height: '2px',
                      bgcolor: 'var(--white)', // #f5f5f5
                    },
                  }}
                >
                  Health Nut Metrics Tracker
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontSize: '0.95rem', lineHeight: 1.6 }}
                >
                  A CRUD application for tracking health metrics, with a focus on medication management. Built with EJS, MongoDB, Mongoose, and Express.js during my time at General Assembly.
                </Typography>
                <a
                  href="https://health-nut-1c88ef5e7455.herokuapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    sx={{
                      bgcolor: 'var(--blue)', // #00bcd4
                      color: 'var(--white)', // #f5f5f5
                      padding: '0.5rem 1rem',
                      fontSize: '.8rem',
                      fontWeight: 600,
                      border: '2px solid var(--white)', // #f5f5f5
                      borderRadius: '8px',
                      mt: 1,
                      transition: 'background-color 0.3s, color 0.3s',
                      '&:hover': {
                        bgcolor: 'var(--white)', // #f5f5f5
                        color: 'var(--blue)', // #00bcd4
                        borderColor: 'var(--blue)',
                      },
                    }}
                    aria-label="View Health Nut Metrics Tracker"
                  >
                    View
                  </Button>
                </a>
              </Box>
              <img
                src="./backgrounds/health-nut-screenshot1.png"
                alt="Health Nut Metrics Tracker"
                style={combinedImageStyle as React.CSSProperties}
                onError={handleImageError}
              />
            </Box>
          </Box>
          <Button
            sx={{
              bgcolor: 'var(--blue)', // #00bcd4
              color: 'var(--white)', // #f5f5f5
              padding: '0.75rem 1.5rem',
              fontSize: '.9rem',
              fontWeight: 600,
              border: '2px solid var(--white)', // #f5f5f5
              borderRadius: '8px',
              marginTop: '2.5rem',
              transition: 'background-color 0.3s, color 0.3s',
              '&:hover': {
                bgcolor: 'var(--white)', // #f5f5f5
                color: 'var(--blue)', // #00bcd4
                borderColor: 'var(--blue)',
              },
            }}
            onClick={handleClose}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
}