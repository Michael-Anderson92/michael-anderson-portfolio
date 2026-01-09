'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
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

interface SkillItem {
  name: string;
  logo: string;
  proficiency: number;
}

interface SkillCategory {
  category: string;
  icon: string;
  items: SkillItem[];
}

const skills: SkillCategory[] = [
  {
    category: 'Languages',
    icon: '💻',
    items: [
      { name: 'JavaScript', logo: '🟨', proficiency: 95 },
      { name: 'TypeScript', logo: '🔷', proficiency: 90 },
      { name: 'Python', logo: '🐍', proficiency: 85 },
      { name: 'HTML5', logo: '🌐', proficiency: 95 },
      { name: 'CSS3', logo: '🎨', proficiency: 90 },
    ],
  },
  {
    category: 'Libraries & Frameworks',
    icon: '⚛️',
    items: [
      { name: 'React', logo: '⚛️', proficiency: 95 },
      { name: 'Next.js', logo: '▲', proficiency: 90 },
      { name: 'Django', logo: '🌿', proficiency: 80 },
      { name: 'Express.js', logo: '🚀', proficiency: 85 },
      { name: 'TailwindCSS', logo: '💨', proficiency: 90 },
    ],
  },
  {
    category: 'Databases & Cloud',
    icon: '☁️',
    items: [
      { name: 'PostgreSQL', logo: '🐘', proficiency: 85 },
      { name: 'MongoDB', logo: '🍃', proficiency: 80 },
      { name: 'Firebase', logo: '🔥', proficiency: 85 },
      { name: 'AWS', logo: '☁️', proficiency: 75 },
      { name: 'Supabase', logo: '⚡', proficiency: 90 },
    ],
  },
];

export default function SkillsContent() {
  const [activeCategory, setActiveCategory] = React.useState(0);
  const categoryRefs = React.useRef<(HTMLDivElement | null)[]>([]);
  const [categoryTops, setCategoryTops] = React.useState<number[]>([]);
  
  React.useEffect(() => {
    const updateCategoryTops = () => {
      const tops = categoryRefs.current.map(ref => {
        if (!ref) return 0;
        const rect = ref.getBoundingClientRect();
        return rect.top + window.scrollY;
      });
      setCategoryTops(tops);
    };
    updateCategoryTops();
    window.addEventListener('resize', updateCategoryTops);
    return () => window.removeEventListener('resize', updateCategoryTops);
  }, [skills.length]);

  React.useEffect(() => {
    const onScroll = () => {
      if (!categoryTops.length) return;
      const scrollY = window.scrollY + window.innerHeight / 2; 
      let newActive = 0;
      for (let i = 0; i < categoryTops.length; i++) {
        if (scrollY >= categoryTops[i]) {
          newActive = i;
        } else {
          break;
        }
      }
      setActiveCategory(newActive);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [categoryTops]);

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
        {skills.map((category, idx) => (
          <motion.div
            key={category.category}
            ref={(el: HTMLDivElement | null) => { categoryRefs.current[idx] = el; }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <Box
              sx={{
                mt: idx === 0 ? 0 : 2, // Remove top margin from first box
                p: 5,
                borderRadius: 2,
                background: activeCategory === idx 
                  ? 'rgba(30, 30, 30, 0.95)' 
                  : 'rgba(30, 30, 30, 0.85)',
                backdropFilter: 'blur(10px)',
                border: activeCategory === idx
                  ? '2px solid var(--blue, #00bcd4)'
                  : '1px solid var(--gray, #616161)',
                transition: 'all 0.3s ease',
                boxShadow: activeCategory === idx
                  ? '0 4px 20px 0 rgba(0,188,212,0.2)'
                  : 'none',
                textAlign: 'center',
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
                transition={{ duration: 0.3, delay: idx * 0.1 + 0.2 }}
                style={{
                  fontSize: '3rem',
                  marginBottom: '1rem',
                }}
              >
                {category.icon}
              </motion.div>

              <Typography
                variant="h6"
                sx={{
                  color: activeCategory === idx ? 'var(--blue, #00bcd4)' : 'var(--gray, #616161)',
                  fontWeight: 600,
                  mb: 3,
                  transition: 'color 0.3s',
                  fontSize: { xs: '1.25rem', md: '1.5rem' },
                }}
              >
                {category.category}
              </Typography>
              
              <Box 
                sx={{ 
                  display: 'grid',
                  gridTemplateColumns: { 
                    xs: 'repeat(2, 1fr)', 
                    sm: 'repeat(3, 1fr)', 
                    md: 'repeat(4, 1fr)',
                    lg: 'repeat(5, 1fr)'
                  },
                  gap: 3,
                  justifyItems: 'center',
                }}
              >
                {category.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: (idx * 0.1) + (skillIndex * 0.05), duration: 0.3 }}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      width: '100%',
                      maxWidth: '100px',
                    }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                      style={{
                        fontSize: '2.5rem',
                        marginBottom: '0.5rem',
                        cursor: 'pointer',
                      }}
                    >
                      {skill.logo}
                    </motion.div>
                    
                    <Typography
                      variant="body2"
                      sx={{
                        color: activeCategory === idx ? 'var(--white, #f5f5f5)' : 'var(--gray, #616161)',
                        transition: 'color 0.3s',
                        fontWeight: 500,
                        fontSize: { xs: '0.75rem', sm: '0.875rem' },
                        mb: 1,
                      }}
                    >
                      {skill.name}
                    </Typography>

                    {/* Proficiency Bar */}
                    <Box sx={{ width: '100%', mb: 1 }}>
                      <Box
                        sx={{
                          width: '100%',
                          height: '4px',
                          bgcolor: 'rgba(97, 97, 97, 0.3)',
                          borderRadius: '2px',
                          overflow: 'hidden',
                        }}
                      >
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.proficiency}%` }}
                          transition={{ 
                            delay: (idx * 0.2) + (skillIndex * 0.1), 
                            duration: 1, 
                            ease: "easeOut" 
                          }}
                          style={{
                            height: '100%',
                            background: activeCategory === idx 
                              ? 'linear-gradient(90deg, var(--blue), var(--purple))' 
                              : 'var(--gray)',
                            transition: 'background 0.3s ease',
                          }}
                        />
                      </Box>
                    </Box>

                    <Typography
                      sx={{
                        color: activeCategory === idx ? 'var(--blue, #00bcd4)' : 'var(--gray, #616161)',
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        transition: 'color 0.3s',
                      }}
                    >
                      {skill.proficiency}%
                    </Typography>
                  </motion.div>
                ))}
              </Box>
            </Box>
          </motion.div>
        ))}
      </Box>
    </ThemeProvider>
  );
}