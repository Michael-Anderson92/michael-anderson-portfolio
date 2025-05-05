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

// Skills Container Style
const skillsContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem',
  width: '90%',
  maxWidth: '1200px',
  margin: '0 auto',
  '@media (min-width: 768px)': {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: '2rem',
  },
};

// Skill Category Style
const skillCategoryStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  minHeight: '300px',
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
    width: '48%',
    maxWidth: '580px',
    flex: '1 1 0',
  },
};

// Logo Container Style
const logoContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1rem',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
};

// Logo Style
const logoStyle = {
  width: '60px',
  height: '60px',
  objectFit: 'contain',
  borderRadius: '8px',
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.1)',
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
  flexGrow: 1,
};

export default function ProjectsModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Skills data organized by category
  const skills = [
    {
      category: 'Languages',
      items: [
        { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      ],
    },
    {
      category: 'Libraries',
      items: [
        { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'MUI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg' },
        { name: 'TailwindCSS', logo: 'https://nanostack.io/_next/image?url=https%3A%2F%2Fnanostack.s3.ap-south-1.amazonaws.com%2F1708452954835Group%20451.png&w=828&q=75' },
        { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
        { name: 'Bcrypt.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      ],
    },
    {
      category: 'Frameworks & Databases',
      items: [
        { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
        { name: 'Django', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
        { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
        { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      ],
    },
    {
      category: 'BaaS',
      items: [
        { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
        { name: 'Supabase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg' },
        { name: 'MongoDB Atlas', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'AWS', logo: 'https://www.pngall.com/wp-content/uploads/13/AWS-Logo-PNG-Pic.png' },
      ],
    },
  ];

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
        Skills
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
            Skills
          </Typography>

          <Box sx={skillsContainerStyle}>
            {skills.map((skillGroup) => (
              <Box key={skillGroup.category} sx={skillCategoryStyle}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: 'var(--blue)',
                    textAlign: 'center',
                  }}
                >
                  {skillGroup.category}
                </Typography>
                <Box sx={logoContainerStyle}>
                  {skillGroup.items.map((skill) => (
                    <Box key={skill.name} sx={{ textAlign: 'center' }}>
                      <img src={skill.logo} alt={skill.name} style={logoStyle} />
                      <Typography variant="caption" sx={{ color: 'var(--white)', mt: 1 }}>
                        {skill.name}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            ))}
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