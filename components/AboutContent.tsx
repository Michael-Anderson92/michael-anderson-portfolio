'use client';

import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const AboutContent = () => {
  return (
    <Box className="text-[var(--white)] p-8">
      <Typography variant="h2" className="text-4xl mb-8 text-center font-bold">
        About Me
      </Typography>

      {/* <Grid container spacing={4}>
        <Grid item xs={12}>
          <Box className="border border-[var(--blue)] rounded-lg p-6">
            <Typography variant="body1" className="mb-4 text-lg">
              I'm a full-stack software engineer passionate about building innovative web applications and solving complex problems. With expertise in modern web technologies and a strong foundation in computer science, I create efficient, scalable, and user-friendly solutions.
            </Typography>

            <Typography variant="body1" className="mb-4 text-lg">
              My journey in software development began with a curiosity for how things work, leading me to explore various programming languages and frameworks. I specialize in JavaScript/TypeScript ecosystem, particularly React and Node.js, while maintaining proficiency in Python and other technologies.
            </Typography>

            <Typography variant="body1" className="text-lg">
              When I'm not coding, I enjoy staying up-to-date with the latest tech trends, contributing to open-source projects, and mentoring aspiring developers. I believe in writing clean, maintainable code and following best practices to deliver high-quality software solutions.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <div className="flex flex-row gap-4">
            <Box className="border border-[var(--blue)] rounded-lg p-6 w-screen w-1/2">
              <Typography variant="h5" className="mb-4 text-[var(--blue)]">
                Education
              </Typography>
              <Typography variant="body1" className="mb-2">
                • Autodidact Software Engineer
              </Typography>
              <Typography variant="body1" className="mb-2">
                • Full-Stack Bootcamp Graduate
              </Typography>
              <Typography variant="body1">
                • Various Technical Certifications
              </Typography>
            </Box>

            <Box className="border border-[var(--blue)] rounded-lg p-6 w-screen w-1/2">
              <Typography variant="h5" className="mb-4 text-[var(--blue)]">
                Interests
              </Typography>
              <Typography variant="body1" className="mb-2">
                • Web Development & Design
              </Typography>
              <Typography variant="body1" className="mb-2">
                • Cloud Computing & DevOps
              </Typography>
              <Typography variant="body1">
                • AI & Machine Learning
              </Typography>
            </Box>
          </div>
        </Grid>
      </Grid> */}
    </Box>
  );
};

export default AboutContent;