'use client';

import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// Main Modal Style
const mainStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'var(--black)', // #1e1e1e
  color: 'var(--white)', // #f5f5f5
  border: '2px solid var(--blue)', // #00bcd4 border
  borderRadius: '12px',
  boxShadow: '0 8px 32px rgba(0, 188, 212, 0.2)',
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

// Project Container Style
const projectContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem',
  width: '90%',
  maxWidth: '1200px',
  margin: '0 auto',
  '@media (min-width: 768px)': {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: '2rem',
  },
};

// Project Item Style
const projectItemStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  alignItems: 'center',
  justifyContent: 'space-between', // Distribute content evenly
  width: '100%',
  minHeight: '400px', // Ensure all cards have the same minimum height
  bgcolor: 'var(--black)',
  border: '1px solid var(--blue)', // #00bcd4 border
  borderRadius: '10px',
  p: 3,
  boxShadow: '0 4px 16px rgba(0, 188, 212, 0.15)',
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 6px 24px rgba(0, 188, 212, 0.25)',
  },
  '@media (min-width: 768px)': {
    width: '33%',
    maxWidth: '380px',
    flex: '1 1 0', // Ensure equal sizing in row layout
  },
};

// Image Style
const imageStyle = {
  width: '200px',
  height: '200px',
  objectFit: 'cover',
  borderRadius: '8px',
  border: '2px solid var(--blue)', // #00bcd4 border
  flexShrink: 0,
  '@media (min-width: 768px)': {
    width: '150px',
    height: '150px',
    border: '3px solid var(--blue)',
    '&:hover': {
      borderColor: 'var(--white)',
      transform: 'scale(1.08)',
    },
  },
};

// Text Container Style
const textContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
  textAlign: 'center',
  width: '100%',
  px: 2,
  flexGrow: 1, // Allow text container to expand to fill space
};

// Image Wrapper Style to Ensure Centering
const imageWrapperStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
};

export default function ProjectsModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
          style: { backgroundColor: 'rgba(30, 30, 30, 0.85)' },
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
              textShadow: '0 2px 4px rgba(0, 188, 212, 0.3)',
            }}
          >
            Projects
          </Typography>
          <Box sx={projectContainerStyle}>
            {/* Project 1 */}
            <Box sx={projectItemStyle}>
              <Box sx={textContainerStyle}>
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    fontWeight: 600,
                    color: 'var(--blue)',
                    position: 'relative',
                    pb: 1,
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      bottom: '0',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '50px',
                      height: '2px',
                      bgcolor: 'var(--white)',
                    },
                  }}
                >
                  CandyBar <br></br>E-Commerce App
                </Typography>
                <Box sx={imageWrapperStyle}>
                  <Box
                    component="img"
                    src="./backgrounds/candybar-app-screenshot1.png"
                    alt="CandyBar E-Commerce Platform"
                    sx={imageStyle}
                  />
                </Box>
                <Typography
                  variant="body2"
                  sx={{ fontSize: '0.95rem', lineHeight: 1.6 }}
                >
                  An ongoing e-commerce mobile app for purchasing specialty treats, featuring advanced search and filtering capabilities and virtual shop functionality.
                </Typography>
                <div className="flex justify-center gap-4">
                  <a
                    href="https://candybar-ecommerce-application.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      sx={{
                        bgcolor: 'var(--blue)',
                        color: 'var(--white)',
                        padding: '0.5rem 1rem',
                        fontSize: '.8rem',
                        fontWeight: 600,
                        border: '2px solid var(--white)',
                        borderRadius: '8px',
                        mt: 1,
                        transition: 'background-color 0.3s, color 0.3s',
                        '&:hover': {
                          bgcolor: 'var(--white)',
                          color: 'var(--blue)',
                          borderColor: 'var(--blue)',
                        },
                      }}
                      aria-label="View CandyBar E-Commerce Platform"
                    >
                      App
                    </Button>
                  </a>
                  <a
                    href="https://github.com/Michael-Anderson92/candybar-ecommerce-application"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      sx={{
                        bgcolor: 'var(--blue)',
                        color: 'var(--white)',
                        padding: '0.5rem 1rem',
                        fontSize: '.8rem',
                        fontWeight: 600,
                        border: '2px solid var(--white)',
                        borderRadius: '8px',
                        mt: 1,
                        transition: 'background-color 0.3s, color 0.3s',
                        '&:hover': {
                          bgcolor: 'var(--white)',
                          color: 'var(--blue)',
                          borderColor: 'var(--blue)',
                        },
                      }}
                      aria-label="View Github Link"
                    >
                      GitHub
                    </Button>
                  </a>
                </div>
              </Box>
            </Box>

            {/* Project 2 */}
            <Box sx={projectItemStyle}>
              <Box sx={textContainerStyle}>
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    fontWeight: 600,
                    color: 'var(--blue)',
                    position: 'relative',
                    pb: 1,
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      bottom: '0',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '50px',
                      height: '2px',
                      bgcolor: 'var(--white)',
                    },
                  }}
                >
                  GitCentral <br></br>Developer Forum
                </Typography>
                <Box sx={imageWrapperStyle}>
                  <Box
                    component="img"
                    src="./backgrounds/gitcentral-screenshot1.png"
                    alt="GitCentral Developer Forum"
                    sx={imageStyle}
                  />
                </Box>
                <Typography
                  variant="body2"
                  sx={{ fontSize: '0.95rem', lineHeight: 1.6 }}
                >
                  A forum-style dashboard enabling developers to create forums, posts, and comments. Developed as my third project during General Assembly’s Full Stack Bootcamp.
                </Typography>
                <div className="flex justify-center gap-4">
                  <a
                    href="https://gitcentral.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      sx={{
                        bgcolor: 'var(--blue)',
                        color: 'var(--white)',
                        padding: '0.5rem 1rem',
                        fontSize: '.8rem',
                        fontWeight: 600,
                        border: '2px solid var(--white)',
                        borderRadius: '8px',
                        mt: 1,
                        transition: 'background-color 0.3s, color 0.3s',
                        '&:hover': {
                          bgcolor: 'var(--white)',
                          color: 'var(--blue)',
                          borderColor: 'var(--blue)',
                        },
                      }}
                      aria-label="View GitCentral Developer Forum"
                    >
                      App
                    </Button>
                  </a>
                  <a
                    href="https://github.com/Michael-Anderson92/GitCentral-App.git"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      sx={{
                        bgcolor: 'var(--blue)',
                        color: 'var(--white)',
                        padding: '0.5rem 1rem',
                        fontSize: '.8rem',
                        fontWeight: 600,
                        border: '2px solid var(--white)',
                        borderRadius: '8px',
                        mt: 1,
                        transition: 'background-color 0.3s, color 0.3s',
                        '&:hover': {
                          bgcolor: 'var(--white)',
                          color: 'var(--blue)',
                          borderColor: 'var(--blue)',
                        },
                      }}
                      aria-label="View GitCentral Developer Forum"
                    >
                      GitHub
                    </Button>
                  </a>
                </div>
              </Box>
            </Box>

            {/* Project 3 */}
            <Box sx={projectItemStyle}>
              <Box sx={textContainerStyle}>
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    fontWeight: 600,
                    color: 'var(--blue)',
                    position: 'relative',
                    pb: 1,
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      bottom: '0',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '50px',
                      height: '2px',
                      bgcolor: 'var(--white)',
                    },
                  }}
                >
                  Health Nut <br></br>Metrics Tracker
                </Typography>
                <Box sx={imageWrapperStyle}>
                  <Box
                    component="img"
                    src="./backgrounds/health-nut-screenshot1.png"
                    alt="Health Nut Metrics Tracker"
                    sx={imageStyle}
                  />
                </Box>
                <Typography
                  variant="body2"
                  sx={{ fontSize: '0.95rem', lineHeight: 1.6 }}
                >
                  A simple health-tracking application that allows users to keep track of important health metrics.
                </Typography>
                <div className="flex justify-center gap-4">
                  <a
                    href="https://health-nut-1c88ef5e7455.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      sx={{
                        bgcolor: 'var(--blue)',
                        color: 'var(--white)',
                        padding: '0.5rem 1rem',
                        fontSize: '.8rem',
                        fontWeight: 600,
                        border: '2px solid var(--white)',
                        borderRadius: '8px',
                        mt: 1,
                        transition: 'background-color 0.3s, color 0.3s',
                        '&:hover': {
                          bgcolor: 'var(--white)',
                          color: 'var(--blue)',
                          borderColor: 'var(--blue)',
                        },
                      }}
                      aria-label="View GitCentral Developer Forum"
                    >
                      App
                    </Button>
                  </a>
                  <a
                    href="https://github.com/Michael-Anderson92/men-stack-crud-app-project"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      sx={{
                        bgcolor: 'var(--blue)',
                        color: 'var(--white)',
                        padding: '0.5rem 1rem',
                        fontSize: '.8rem',
                        fontWeight: 600,
                        border: '2px solid var(--white)',
                        borderRadius: '8px',
                        mt: 1,
                        transition: 'background-color 0.3s, color 0.3s',
                        '&:hover': {
                          bgcolor: 'var(--white)',
                          color: 'var(--blue)',
                          borderColor: 'var(--blue)',
                        },
                      }}
                      aria-label="View Health Nut GitHub"
                    >
                      GitHub
                    </Button>
                  </a>
                </div>
              </Box>
            </Box>
          </Box>
          <Button
            sx={{
              bgcolor: 'var(--blue)',
              color: 'var(--white)',
              padding: '0.75rem 1.5rem',
              fontSize: '.9rem',
              fontWeight: 600,
              border: '2px solid var(--white)',
              borderRadius: '8px',
              marginTop: '2.5rem',
              transition: 'background-color 0.3s, color 0.3s',
              '&:hover': {
                bgcolor: 'var(--white)',
                color: 'var(--blue)',
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