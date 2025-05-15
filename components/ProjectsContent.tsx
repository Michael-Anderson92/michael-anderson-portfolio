'use client';

import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const ProjectsContent = () => {
  const projects = [
    {
      title: "Ungrateful Developer",
      description: "The Ungrateful developer is an edgy, satirical take on the developer experience. It demonstrates my skills in NextJS, UI/UX design, and building a scalable, secure, and performant application. Don't forget to laugh.",
      technologies: ["Next.js", "TypeScript", "Material UI", "TailwindCSS"],
      githubLink: "https://github.com/Michael-Anderson92/ungrateful-dev",
      liveLink: "https://www.ungratefuldev.com/"
    },
    {
      title: "E-Commerce Platform", 
      description: "Full-stack e-commerce application with user authentication, product management, shopping cart, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      githubLink: "https://github.com/yourusername/ecommerce",
      liveLink: "https://yourecommerce.com"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management tool with real-time updates, team workspaces, and progress tracking features.",
      technologies: ["React", "Firebase", "Material UI", "Redux"],
      githubLink: "https://github.com/yourusername/taskmanager",
      liveLink: "https://yourtaskapp.com"
    }
  ];

  return (
    <Box className="text-[var(--white)] p-8">
        <Typography variant="h2" className="text-4xl mb-8 text-center font-bold">
        Projects
      </Typography> 

      {/* <Grid container spacing={4}>
        {projects.map((project) => (
          <Grid item xs={12} md={6} lg={4} key={project.title}>
            <Box className="border border-[var(--blue)] rounded-lg p-6 h-full hover:shadow-lg hover:shadow-[var(--blue)]/20 transition-all">
              <Typography variant="h5" className="mb-4 text-[var(--blue)]">
                {project.title}
              </Typography>
              <Typography variant="body1" className="mb-4">
                {project.description}
              </Typography>
              <Box className="mb-4">
                <Typography variant="subtitle2" className="text-[var(--blue)] mb-2">
                  Technologies:
                </Typography>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-[var(--blue)]/20 rounded-md text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </Box>
              <Box className="flex gap-4">
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[var(--blue)] hover:text-[var(--blue)]/80"
                >
                  GitHub
                </a>
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[var(--blue)] hover:text-[var(--blue)]/80"
                >
                  Live Demo
                </a>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid> */}
    </Box>
  );
};

export default ProjectsContent;