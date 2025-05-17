'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
  
  const [activeProject, setActiveProject] = React.useState(0);
  const projectRefs = React.useRef<(HTMLDivElement | null)[]>([]);
  const [projectTops, setProjectTops] = React.useState<number[]>([]);
  
  React.useEffect(() => {
    const updateProjectTops = () => {
      const tops = projectRefs.current.map(ref => {
        if (!ref) return 0;
        const rect = ref.getBoundingClientRect();
        return rect.top + window.scrollY;
      });
      setProjectTops(tops);
    };
    updateProjectTops();
    window.addEventListener('resize', updateProjectTops);
    return () => window.removeEventListener('resize', updateProjectTops);
  }, [projects.length]);

  React.useEffect(() => {
    const onScroll = () => {
      if (!projectTops.length) return;
      const scrollY = window.scrollY + window.innerHeight / 1.5; 
      let newActive = 0;
      for (let i = 0; i < projectTops.length; i++) {
        if (scrollY >= projectTops[i]) {
          newActive = i;
        } else {
          break;
        }
      }
      setActiveProject(newActive);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [projectTops]);

  return (
    <ThemeProvider theme={theme}>
      <Typography
        variant="h4"
        sx={{
          color: 'var(--white, #f5f5f5)',
          fontWeight: 600,
          mb: 4,
          textAlign: 'center',
        }}
      >
        Projects
      </Typography>
      <Box
        sx={{
          maxWidth: { sm: 420, lg: 600 },
          margin: { sm: '0 auto', lg: '0 auto' },
          py: 4,
        }}
      >
        {projects.map((project, idx) => (
          <Box
            key={project.title}
            ref={(el: HTMLDivElement | null) => { projectRefs.current[idx] = el; }}
            sx={{
              mt: 2,
              p: 5,
              borderRadius: 2,
              background: 'var(--black, #1e1e1e)',
              border: activeProject === idx
                ? '2px solid var(--blue, #00bcd4)'
                : '1px solid var(--gray, #616161)',
              transition: 'background 0.3s, border 0.3s',
              boxShadow: activeProject === idx
                ? '0 2px 12px 0 rgba(0,188,212,0.15)'
                : 'none',
              textAlign: 'center',
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: activeProject === idx ? 'var(--blue, #00bcd4)' : 'var(--gray, #616161)',
                fontWeight: 600,
                mb: 3,
                transition: 'color 0.3s',
              }}
            >
              {project.title}
            </Typography>
            
            <Typography
              sx={{
                color: activeProject === idx ? 'var(--white, #f5f5f5)' : 'var(--gray, #616161)',
                mb: 3,
                transition: 'color 0.3s',
              }}
            >
              {project.description}
            </Typography>
            
            <Box sx={{ mb: 3 }}>
              <Typography
                sx={{
                  color: 'var(--blue, #00bcd4)',
                  mb: 1,
                  fontWeight: 600,
                  fontSize: '0.875rem',
                }}
              >
                Technologies:
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  gap: 1,
                }}
              >
                {project.technologies.map((tech) => (
                  <Box
                    key={tech}
                    sx={{
                      px: 1,
                      py: 0.5,
                      bgcolor: 'rgba(0, 188, 212, 0.2)',
                      borderRadius: 1,
                      fontSize: '0.875rem',
                    }}
                  >
                    {tech}
                  </Box>
                ))}
              </Box>
            </Box>
            
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 3,
              }}
            >
              <Box
                component="a"
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'var(--blue, #00bcd4)',
                  textDecoration: 'none',
                  '&:hover': {
                    color: 'rgba(0, 188, 212, 0.8)',
                  },
                }}
              >
                GitHub
              </Box>
              <Box
                component="a"
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'var(--blue, #00bcd4)',
                  textDecoration: 'none',
                  '&:hover': {
                    color: 'rgba(0, 188, 212, 0.8)',
                  },
                }}
              >
                Live Demo
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </ThemeProvider>
  );
};

export default ProjectsContent;