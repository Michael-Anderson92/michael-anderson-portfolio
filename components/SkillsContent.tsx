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

interface SkillItem {
  name: string;
  logo: string;
}

interface SkillCategory {
  category: string;
  items: SkillItem[];
}

const skills: SkillCategory[] = [
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
    category: 'Libraries & Frameworks',
    items: [
      { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'Django', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
      { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { name: 'TailwindCSS', logo: 'https://nanostack.io/_next/image?url=https%3A%2F%2Fnanostack.s3.ap-south-1.amazonaws.com%2F1708452954835Group%20451.png&w=828&q=75' },
    ],
  },
  {
    category: 'Databases & Cloud',
    items: [
      { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
      { name: 'AWS', logo: 'https://www.pngall.com/wp-content/uploads/13/AWS-Logo-PNG-Pic.png' },
      { name: 'Supabase', logo: 'https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png' },
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
      const scrollY = window.scrollY + window.innerHeight / 1.5; 
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
      <Typography
        variant="h4"
        sx={{
          color: 'var(--white, #f5f5f5)',
          fontWeight: 600,
          mb: 4,
          textAlign: 'center',
        }}
      >
        Skills & Technologies
      </Typography>
      <Box
        sx={{
          maxWidth: { sm: 420, lg: 600 },
          margin: { sm: '0 auto', lg: '0 auto' },
          py: 4,
        }}
      >
        {skills.map((category, idx) => (
          <Box
            key={category.category}
            ref={(el: HTMLDivElement | null) => { categoryRefs.current[idx] = el; }}
            sx={{
              mt: 2,
              p: 5,
              borderRadius: 2,
              background: 'var(--black, #1e1e1e)',
              border: activeCategory === idx
                ? '2px solid var(--blue, #00bcd4)'
                : '1px solid var(--gray, #616161)',
              transition: 'background 0.3s, border 0.3s',
              boxShadow: activeCategory === idx
                ? '0 2px 12px 0 rgba(0,188,212,0.15)'
                : 'none',
              textAlign: 'center',
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: activeCategory === idx ? 'var(--blue, #00bcd4)' : 'var(--gray, #616161)',
                fontWeight: 600,
                mb: 3,
                transition: 'color 0.3s',
              }}
            >
              {category.category}
            </Typography>
            
            <Box 
              sx={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                justifyContent: 'center',
                gap: 2,
              }}
            >
              {category.items.map((skill) => (
                <Box 
                  key={skill.name} 
                  sx={{ 
                    textAlign: 'center',
                    width: '80px',
                    m: 1,
                  }}
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    style={{
                      width: 48,
                      height: 48,
                      marginBottom: 8,
                      transition: 'transform 0.3s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      color: activeCategory === idx ? 'var(--white, #f5f5f5)' : 'var(--gray, #616161)',
                      transition: 'color 0.3s',
                    }}
                  >
                    {skill.name}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </ThemeProvider>
  );
}