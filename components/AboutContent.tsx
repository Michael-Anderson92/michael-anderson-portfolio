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

const AboutContent = () => {
  const sections = ['bio', 'details'];
  const [activeSection, setActiveSection] = React.useState(0);
  const sectionRefs = React.useRef<(HTMLDivElement | null)[]>([]);
  const [sectionTops, setSectionTops] = React.useState<number[]>([]);
  
  React.useEffect(() => {
    const updateSectionTops = () => {
      const tops = sectionRefs.current.map(ref => {
        if (!ref) return 0;
        const rect = ref.getBoundingClientRect();
        return rect.top + window.scrollY;
      });
      setSectionTops(tops);
    };
    updateSectionTops();
    window.addEventListener('resize', updateSectionTops);
    return () => window.removeEventListener('resize', updateSectionTops);
  }, [sections.length]);

  React.useEffect(() => {
    const onScroll = () => {
      if (!sectionTops.length) return;
      const scrollY = window.scrollY + window.innerHeight / 1.5; 
      let newActive = 0;
      for (let i = 0; i < sectionTops.length; i++) {
        if (scrollY >= sectionTops[i]) {
          newActive = i;
        } else {
          break;
        }
      }
      setActiveSection(newActive);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [sectionTops]);

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
        About Me
      </Typography>
      <Box
        sx={{
          maxWidth: { sm: 420, lg: 600 },
          margin: { sm: '0 auto', lg: '0 auto' },
          py: 4,
        }}
      >
        {/* Bio Section */}
        <Box
          ref={(el: HTMLDivElement | null) => { sectionRefs.current[0] = el; }}
          sx={{
            mt: 2,
            p: 5,
            borderRadius: 2,
            background: 'var(--black, #1e1e1e)',
            border: activeSection === 0
              ? '2px solid var(--blue, #00bcd4)'
              : '1px solid var(--gray, #616161)',
            transition: 'background 0.3s, border 0.3s',
            boxShadow: activeSection === 0
              ? '0 2px 12px 0 rgba(0,188,212,0.15)'
              : 'none',
          }}
        >
          <Typography
            sx={{
              color: activeSection === 0 ? 'var(--white, #f5f5f5)' : 'var(--gray, #616161)',
              mb: 3,
              transition: 'color 0.3s',
              fontSize: '1.1rem',
            }}
          >
            I'm a full-stack software engineer passionate about building innovative web applications and solving complex problems. With expertise in modern web technologies and a strong foundation in computer science, I create efficient, scalable, and user-friendly solutions.
          </Typography>

          <Typography
            sx={{
              color: activeSection === 0 ? 'var(--white, #f5f5f5)' : 'var(--gray, #616161)',
              mb: 3,
              transition: 'color 0.3s',
              fontSize: '1.1rem',
            }}
          >
            My journey in software development began with a curiosity for how things work, leading me to explore various programming languages and frameworks. I specialize in JavaScript/TypeScript ecosystem, particularly React and Node.js, while maintaining proficiency in Python and other technologies.
          </Typography>

          <Typography
            sx={{
              color: activeSection === 0 ? 'var(--white, #f5f5f5)' : 'var(--gray, #616161)',
              transition: 'color 0.3s',
              fontSize: '1.1rem',
            }}
          >
            When I'm not coding, I enjoy staying up-to-date with the latest tech trends, contributing to open-source projects, and mentoring aspiring developers. I believe in writing clean, maintainable code and following best practices to deliver high-quality software solutions.
          </Typography>
        </Box>

        {/* Education and Interests Section - Side by Side */}
        <Box
          ref={(el: HTMLDivElement | null) => { sectionRefs.current[1] = el; }}
          sx={{
            mt: 3,
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 3,
          }}
        >
          {/* Education */}
          <Box
            sx={{
              flex: 1,
              p: 5,
              borderRadius: 2,
              background: 'var(--black, #1e1e1e)',
              border: activeSection === 1
                ? '2px solid var(--blue, #00bcd4)'
                : '1px solid var(--gray, #616161)',
              transition: 'background 0.3s, border 0.3s',
              boxShadow: activeSection === 1
                ? '0 2px 12px 0 rgba(0,188,212,0.15)'
                : 'none',
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: activeSection === 1 ? 'var(--blue, #00bcd4)' : 'var(--gray, #616161)',
                fontWeight: 600,
                mb: 3,
                transition: 'color 0.3s',
                textAlign: 'center',
              }}
            >
              Education
            </Typography>
            <Typography
              sx={{
                color: activeSection === 1 ? 'var(--white, #f5f5f5)' : 'var(--gray, #616161)',
                mb: 1.5,
                transition: 'color 0.3s',
              }}
            >
              • Autodidact Software Engineer
            </Typography>
            <Typography
              sx={{
                color: activeSection === 1 ? 'var(--white, #f5f5f5)' : 'var(--gray, #616161)',
                mb: 1.5,
                transition: 'color 0.3s',
              }}
            >
              • Full-Stack Bootcamp Graduate
            </Typography>
            <Typography
              sx={{
                color: activeSection === 1 ? 'var(--white, #f5f5f5)' : 'var(--gray, #616161)',
                transition: 'color 0.3s',
              }}
            >
              • Various Technical Certifications
            </Typography>
          </Box>

          {/* Interests */}
          <Box
            sx={{
              flex: 1,
              p: 5,
              borderRadius: 2,
              background: 'var(--black, #1e1e1e)',
              border: activeSection === 1
                ? '2px solid var(--blue, #00bcd4)'
                : '1px solid var(--gray, #616161)',
              transition: 'background 0.3s, border 0.3s',
              boxShadow: activeSection === 1
                ? '0 2px 12px 0 rgba(0,188,212,0.15)'
                : 'none',
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: activeSection === 1 ? 'var(--blue, #00bcd4)' : 'var(--gray, #616161)',
                fontWeight: 600,
                mb: 3,
                transition: 'color 0.3s',
                textAlign: 'center',
              }}
            >
              Interests
            </Typography>
            <Typography
              sx={{
                color: activeSection === 1 ? 'var(--white, #f5f5f5)' : 'var(--gray, #616161)',
                mb: 1.5,
                transition: 'color 0.3s',
              }}
            >
              • Web Development & Design
            </Typography>
            <Typography
              sx={{
                color: activeSection === 1 ? 'var(--white, #f5f5f5)' : 'var(--gray, #616161)',
                mb: 1.5,
                transition: 'color 0.3s',
              }}
            >
              • Cloud Computing & DevOps
            </Typography>
            <Typography
              sx={{
                color: activeSection === 1 ? 'var(--white, #f5f5f5)' : 'var(--gray, #616161)',
                transition: 'color 0.3s',
              }}
            >
              • AI & Machine Learning
            </Typography>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default AboutContent;