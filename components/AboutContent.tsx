'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
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
      const scrollY = window.scrollY + window.innerHeight / 2; 
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
      <Box
        sx={{
          maxWidth: { sm: 420, lg: 700 },
          margin: { sm: '0 auto', lg: '0 auto' },
          paddingBottom: 4,
          position: 'relative',
          zIndex: 20,
        }}
      >
        {/* Bio Section */}
        <motion.div
          ref={(el: HTMLDivElement | null) => { sectionRefs.current[0] = el; }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Box
            sx={{
              mt: 0, // Remove top margin from first box
              p: 5,
              borderRadius: 2,
              background: activeSection === 0 
                ? 'rgba(30, 30, 30, 0.95)' 
                : 'rgba(30, 30, 30, 0.85)',
              backdropFilter: 'blur(10px)',
              border: activeSection === 0
                ? '2px solid var(--blue, #00bcd4)'
                : '1px solid var(--gray, #616161)',
              transition: 'all 0.3s ease',
              boxShadow: activeSection === 0
                ? '0 4px 20px 0 rgba(0,188,212,0.2)'
                : 'none',
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
              transition={{ duration: 0.3, delay: 0.2 }}
              style={{
                textAlign: 'center',
                marginBottom: '2rem',
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>👨‍💻</div>
              <Typography
                variant="h6"
                sx={{
                  color: activeSection === 0 ? 'var(--blue, #00bcd4)' : 'var(--gray, #616161)',
                  fontWeight: 600,
                  transition: 'color 0.3s',
                  fontSize: { xs: '1.25rem', md: '1.5rem' },
                }}
              >
                My Story
              </Typography>
            </motion.div>

            <Box sx={{ textAlign: 'left', space: 4 }}>
              <Typography
                sx={{
                  color: activeSection === 0 ? 'var(--white, #f5f5f5)' : 'var(--gray, #616161)',
                  mb: 3,
                  transition: 'color 0.3s',
                  fontSize: { xs: '0.95rem', md: '1.1rem' },
                  lineHeight: 1.7,
                }}
              >
                I'm a full-stack software engineer passionate about building innovative web applications and solving complex problems. With expertise in modern web technologies and a strong foundation in computer science, I create efficient, scalable, and user-friendly solutions.
              </Typography>

              <Typography
                sx={{
                  color: activeSection === 0 ? 'var(--white, #f5f5f5)' : 'var(--gray, #616161)',
                  mb: 3,
                  transition: 'color 0.3s',
                  fontSize: { xs: '0.95rem', md: '1.1rem' },
                  lineHeight: 1.7,
                }}
              >
                My journey in software development began with a curiosity for how things work, leading me to explore various programming languages and frameworks. I specialize in JavaScript/TypeScript ecosystem, particularly React and Node.js, while maintaining proficiency in Python and other technologies.
              </Typography>

              <Typography
                sx={{
                  color: activeSection === 0 ? 'var(--white, #f5f5f5)' : 'var(--gray, #616161)',
                  transition: 'color 0.3s',
                  fontSize: { xs: '0.95rem', md: '1.1rem' },
                  lineHeight: 1.7,
                }}
              >
                When I'm not coding, I enjoy staying up-to-date with the latest tech trends, contributing to open-source projects, and mentoring aspiring developers. I believe in writing clean, maintainable code and following best practices to deliver high-quality software solutions.
              </Typography>
            </Box>
          </Box>
        </motion.div>

        {/* Education and Interests Section - Side by Side */}
        <motion.div
          ref={(el: HTMLDivElement | null) => { sectionRefs.current[1] = el; }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Box
            sx={{
              mt: 2, // Standard margin for subsequent boxes
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: 3,
            }}
          >
            {/* Education */}
            <Box
              sx={{
                flex: 1,
                p: 5,
                borderRadius: 2,
                background: activeSection === 1 
                  ? 'rgba(30, 30, 30, 0.95)' 
                  : 'rgba(30, 30, 30, 0.85)',
                backdropFilter: 'blur(10px)',
                border: activeSection === 1
                  ? '2px solid var(--blue, #00bcd4)'
                  : '1px solid var(--gray, #616161)',
                transition: 'all 0.3s ease',
                boxShadow: activeSection === 1
                  ? '0 4px 20px 0 rgba(0,188,212,0.2)'
                  : 'none',
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
              <Box sx={{ textAlign: 'center', mb: 4 }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🎓</div>
                <Typography
                  variant="h6"
                  sx={{
                    color: activeSection === 1 ? 'var(--blue, #00bcd4)' : 'var(--gray, #616161)',
                    fontWeight: 600,
                    transition: 'color 0.3s',
                    fontSize: { xs: '1.1rem', md: '1.25rem' },
                  }}
                >
                  Education
                </Typography>
              </Box>

              <Box sx={{ textAlign: 'left' }}>
                <Typography
                  sx={{
                    color: activeSection === 1 ? 'var(--white, #f5f5f5)' : 'var(--gray, #616161)',
                    mb: 1.5,
                    transition: 'color 0.3s',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 1,
                  }}
                >
                  <span style={{ color: 'var(--blue)', marginTop: '0.2rem' }}>•</span>
                  <span>Autodidact Software Engineer</span>
                </Typography>
                <Typography
                  sx={{
                    color: activeSection === 1 ? 'var(--white, #f5f5f5)' : 'var(--gray, #616161)',
                    mb: 1.5,
                    transition: 'color 0.3s',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 1,
                  }}
                >
                  <span style={{ color: 'var(--blue)', marginTop: '0.2rem' }}>•</span>
                  <span>Full-Stack Bootcamp Graduate</span>
                </Typography>
                <Typography
                  sx={{
                    color: activeSection === 1 ? 'var(--white, #f5f5f5)' : 'var(--gray, #616161)',
                    transition: 'color 0.3s',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 1,
                  }}
                >
                  <span style={{ color: 'var(--blue)', marginTop: '0.2rem' }}>•</span>
                  <span>Various Technical Certifications</span>
                </Typography>
              </Box>
            </Box>

            {/* Interests */}
            <Box
              sx={{
                flex: 1,
                p: 5,
                borderRadius: 2,
                background: activeSection === 1 
                  ? 'rgba(30, 30, 30, 0.95)' 
                  : 'rgba(30, 30, 30, 0.85)',
                backdropFilter: 'blur(10px)',
                border: activeSection === 1
                  ? '2px solid var(--blue, #00bcd4)'
                  : '1px solid var(--gray, #616161)',
                transition: 'all 0.3s ease',
                boxShadow: activeSection === 1
                  ? '0 4px 20px 0 rgba(0,188,212,0.2)'
                  : 'none',
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
              <Box sx={{ textAlign: 'center', mb: 4 }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🚀</div>
                <Typography
                  variant="h6"
                  sx={{
                    color: activeSection === 1 ? 'var(--blue, #00bcd4)' : 'var(--gray, #616161)',
                    fontWeight: 600,
                    transition: 'color 0.3s',
                    fontSize: { xs: '1.1rem', md: '1.25rem' },
                  }}
                >
                  Interests
                </Typography>
              </Box>

              <Box sx={{ textAlign: 'left' }}>
                <Typography
                  sx={{
                    color: activeSection === 1 ? 'var(--white, #f5f5f5)' : 'var(--gray, #616161)',
                    mb: 1.5,
                    transition: 'color 0.3s',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 1,
                  }}
                >
                  <span style={{ color: 'var(--blue)', marginTop: '0.2rem' }}>•</span>
                  <span>Web Development & Design</span>
                </Typography>
                <Typography
                  sx={{
                    color: activeSection === 1 ? 'var(--white, #f5f5f5)' : 'var(--gray, #616161)',
                    mb: 1.5,
                    transition: 'color 0.3s',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 1,
                  }}
                >
                  <span style={{ color: 'var(--blue)', marginTop: '0.2rem' }}>•</span>
                  <span>Cloud Computing & DevOps</span>
                </Typography>
                <Typography
                  sx={{
                    color: activeSection === 1 ? 'var(--white, #f5f5f5)' : 'var(--gray, #616161)',
                    transition: 'color 0.3s',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 1,
                  }}
                >
                  <span style={{ color: 'var(--blue)', marginTop: '0.2rem' }}>•</span>
                  <span>AI & Machine Learning</span>
                </Typography>
              </Box>
            </Box>
          </Box>
        </motion.div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Box
            sx={{
              mt: 2, // Standard margin for subsequent boxes
              p: 5,
              borderRadius: 2,
              background: 'rgba(30, 30, 30, 0.9)',
              backdropFilter: 'blur(10px)',
              border: '1px solid var(--blue, #00bcd4)',
              textAlign: 'center',
              position: 'relative',
              zIndex: 21,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: 'var(--blue, #00bcd4)',
                fontWeight: 600,
                mb: 3,
                fontSize: { xs: '1.25rem', md: '1.5rem' },
              }}
            >
              Let's Work Together
            </Typography>
            
            <Typography
              sx={{
                color: 'var(--white, #f5f5f5)',
                mb: 4,
                fontSize: { xs: '0.95rem', md: '1rem' },
                lineHeight: 1.6,
                maxWidth: '500px',
                margin: '0 auto 2rem auto',
              }}
            >
              I'm always excited to take on new challenges and collaborate on innovative projects. 
              Let's discuss how we can bring your ideas to life.
            </Typography>
            
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: 2,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: 'var(--blue, #00bcd4)',
                    color: 'white',
                    px: 4,
                    py: 1.5,
                    borderRadius: 2,
                    fontWeight: 600,
                    '&:hover': {
                      bgcolor: 'rgba(0, 188, 212, 0.8)',
                    },
                  }}
                >
                  📧 Get In Touch
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: 'var(--blue, #00bcd4)',
                    color: 'var(--blue, #00bcd4)',
                    px: 4,
                    py: 1.5,
                    borderRadius: 2,
                    fontWeight: 600,
                    '&:hover': {
                      borderColor: 'var(--blue, #00bcd4)',
                      bgcolor: 'rgba(0, 188, 212, 0.1)',
                    },
                  }}
                >
                  📄 Download Resume
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: 'var(--blue, #00bcd4)',
                    color: 'var(--blue, #00bcd4)',
                    px: 4,
                    py: 1.5,
                    borderRadius: 2,
                    fontWeight: 600,
                    '&:hover': {
                      borderColor: 'var(--blue, #00bcd4)',
                      bgcolor: 'rgba(0, 188, 212, 0.1)',
                    },
                  }}
                >
                  📅 Schedule Call
                </Button>
              </motion.div>
            </Box>
          </Box>
        </motion.div>
      </Box>
    </ThemeProvider>
  );
};

export default AboutContent;