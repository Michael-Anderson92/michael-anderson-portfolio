'use client';

import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const SkillsContent = () => {
  const skills = [
    {
      category: 'Languages',
      items: [
        { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      ]
    },
    {
      category: 'Libraries & Frameworks',
      items: [
        { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
        { name: 'Django', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
        { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
        { name: 'TailwindCSS', logo: 'https://nanostack.io/_next/image?url=https%3A%2F%2Fnanostack.s3.ap-south-1.amazonaws.com%2F1708452954835Group%20451.png&w=828&q=75' }
      ]
    },
    {
      category: 'Databases & Cloud',
      items: [
        { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
        { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
        { name: 'AWS', logo: 'https://www.pngall.com/wp-content/uploads/13/AWS-Logo-PNG-Pic.png' },
        { name: 'Supabase', logo: 'https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png' }
      ]
    }
  ];

  return (
    <Box className="text-[#f5f5f5] w-full p-8">
      <Typography variant="h2" className="text-4xl mb-8 absolute top-0 text-center font-bold">
        Skills & Technologies
      </Typography>

      {/* <Grid container spacing={4}>
        {skills.map((category) => (
          <Grid item xs={12} md={4} key={category.category}>
            <Box className="border border-[#00bcd4] rounded-lg mt-8 p-16 w-full h-full">
              <Typography variant="h5" className="mb-4 text-center text-[#00bcd4]">
                {category.category}
              </Typography>
              <Grid container spacing={2} justifyContent="center">
                {category.items.map((skill) => (
                  <Grid item xs={6} key={skill.name}>
                    <Box className="flex flex-col items-center">
                      <img 
                        src={skill.logo} 
                        alt={skill.name}
                        className="w-12 h-12 mb-2 transition-transform hover:scale-110"
                      />
                      <Typography variant="body2" className="text-center">
                        {skill.name}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        ))}
      </Grid> */}
    </Box>
  );
};

export default SkillsContent;