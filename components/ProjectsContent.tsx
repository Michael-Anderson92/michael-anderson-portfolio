'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';

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

interface ProjectImage {
  url: string;
  caption: string;
  title: string;
  type: 'logo' | 'architecture' | 'ui' | 'mockup' | 'dashboard';
}

interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  role: string;
  impact?: string;
  technologies: string[];
  keyFeatures: string[];
  images?: ProjectImage[];
  githubLink?: string;
  liveLink?: string;
  isVentureBacked?: boolean;
  technical: {
    architecture: string;
    challenges: string[];
    achievements: string[];
  };
}

interface ProjectsContentProps {
  onImageModalChange?: (isOpen: boolean) => void;
}

const projects: Project[] = [
  {
    id: 'elaview',
    title: 'Elaview (formerly Pinpoint)',
    shortDescription: 'B2B marketplace connecting landlords with advertisers for physical ad space rental.',
    fullDescription: 'Venture-backed B2B marketplace platform designed to transform the $40B+ out-of-home advertising industry by connecting property owners with businesses seeking physical advertising spaces. Currently in development with a comprehensive technical foundation.',
    role: 'Backend Lead Developer',
    impact: '40% increase in team productivity through technical leadership and process improvements during development phase',
    technologies: ['React', 'TypeScript', 'Next.js', 'Supabase', 'PostgreSQL', 'GitHub Actions', 'Slack API'],
    keyFeatures: [
      'Comprehensive backend architecture from ground up',
      'User authentication & role-based dashboards', 
      'Real-time messaging system',
      'Advanced search & filtering capabilities',
      'Geospatial tracking integration',
      'Video analysis for foot traffic assessment',
      'GitHub-Slack integration for team coordination'
    ],
    isVentureBacked: true,
    images: [
      {
        url: '/projects/elaview/logo.png',
        caption: 'Elaview brand identity and visual design',
        title:'Elaview Banner',
        type: 'logo'
      },
      {
        url: '/projects/elaview/architecture-1.png',
        caption: 'Database architecture showing messaging, conversations, and user management systems',
        title:'Supabase Sample ERD',
        type: 'architecture'
      },
      {
        url: '/projects/elaview/architecture-2.png',
        title:'Sample Ad Space',
        caption: 'Niche advertisement space featured on the application',
        type: 'architecture'
      },
      {
        url: '/projects/elaview/ui-1.png',
        title:'Dashboard UI',
        caption: 'Dynamic dashboard display for a landlord',
        type: 'ui'
      },
      {
        url: '/projects/elaview/ui-2.png',
        title:'Foot Traffic Analysis',
        caption: 'AI-powered visibility scoring system analyzing foot traffic, vehicle traffic, and location quality',
        type: 'ui'
      },
      {
        url: '/projects/elaview/mockup-2.png',
        title:'Featured Spaces',
        caption: 'Listings page within the application',
        type: 'mockup'
      }
    ],
    technical: {
      architecture: 'Modern full-stack architecture built with Supabase as backend-as-a-service, featuring custom data models, real-time subscriptions, and advanced PostgreSQL capabilities for geospatial and marketplace functionality. Designed for scalability and production deployment.',
      challenges: [
        'Designing scalable marketplace data models for future growth',
        'Implementing real-time features for live messaging',
        'Complex search and filtering across multiple criteria',
        'Geospatial data handling for location-based services',
        'Team coordination and development process optimization'
      ],
      achievements: [
        'Developed comprehensive backend infrastructure from concept to MVP',
        'Implemented real-time messaging and notifications system',
        'Created advanced filtering system with location-based search',
        'Designed role-based authentication for landlords and advertisers',
        'Increased team productivity by 40% through process improvements',
        'Mentored interns and coordinated technical development tasks'
      ]
    },
    liveLink: 'https://www.evu.com/ventures/elaview'
  },
  {
    id: 'ungrateful-developer',
    title: 'Ungrateful Developer',
    shortDescription: 'Satirical take on developer experience showcasing Next.js and modern web development (in development).',
    fullDescription: 'An edgy, satirical commentary on the modern developer experience currently in development. This project demonstrates advanced Next.js skills, UI/UX design, and performance optimization while delivering humor and relatability to the developer community.',
    role: 'Solo Full-Stack Developer (In Development)',
    technologies: ['Next.js', 'TypeScript', 'Material UI', 'TailwindCSS', 'Vercel'],
    keyFeatures: [
      'Server-side rendering implementation with Next.js',
      'Responsive design development with Material UI',
      'Performance optimization strategies',
      'SEO optimization implementation',
      'Modern TypeScript patterns and best practices',
      'Component-based architecture design'
    ],
    technical: {
      architecture: 'Static site generation with Next.js currently in development, utilizing TypeScript for type safety, Material UI for consistent design system, and TailwindCSS for custom styling needs.',
      challenges: [
        'Balancing humor with professional presentation while in development',
        'Optimizing performance for fast loading across all content',
        'Ensuring responsive design works across all devices and screen sizes',
        'Implementing SEO best practices for content discovery'
      ],
      achievements: [
        'Building engaging, performant web application with modern React patterns',
        'Implementing responsive, accessible user interface design',
        'Developing SEO optimization and social sharing features',
        'Creating component-based architecture with TypeScript integration',
        'Setting up continuous integration and deployment pipeline'
      ]
    },
    githubLink: 'https://github.com/Michael-Anderson92/ungrateful-dev',
    liveLink: 'https://www.ungratefuldev.com/'
  },
  // {
  //   id: 'portfolio-api',
  //   title: 'Portfolio API',
  //   shortDescription: 'RESTful API service with authentication, rate limiting, and comprehensive documentation.',
  //   fullDescription: 'A robust RESTful API built to demonstrate backend architecture best practices, featuring comprehensive authentication, rate limiting, caching, and extensive API documentation.',
  //   role: 'Backend Developer',
  //   technologies: ['Node.js', 'Express.js', 'PostgreSQL', 'Redis', 'JWT', 'Swagger', 'Docker'],
  //   keyFeatures: [
  //     'JWT-based authentication system',
  //     'Rate limiting and request throttling',
  //     'Redis caching for performance',
  //     'Comprehensive API documentation',
  //     'Input validation and sanitization',
  //     'Error handling and logging',
  //     'Docker containerization'
  //   ],
  //   technical: {
  //     architecture: 'Microservice architecture with Express.js, PostgreSQL for data persistence, Redis for caching and session management, and Docker for containerization and deployment.',
  //     challenges: [
  //       'Implementing secure authentication patterns',
  //       'Designing efficient caching strategies',
  //       'Rate limiting for API protection',
  //       'Comprehensive error handling',
  //       'API documentation and testing'
  //     ],
  //     achievements: [
  //       'Built secure, scalable REST API',
  //       'Implemented JWT authentication with refresh tokens',
  //       'Added Redis caching reducing response times by 60%',
  //       'Created comprehensive Swagger documentation',
  //       'Containerized application with Docker',
  //       'Implemented automated testing suite'
  //     ]
  //   },
  //   githubLink: 'https://github.com/Michael-Anderson92/portfolio-api'
  // }
];

const ProjectsContent = ({ onImageModalChange }: ProjectsContentProps) => {
  const [expandedProject, setExpandedProject] = React.useState<string | null>(null);
  const [modalImage, setModalImage] = React.useState<{project: string, imageIndex: number} | null>(null);

  const toggleProject = (projectId: string) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  const openImageModal = (projectId: string, imageIndex: number) => {
    setModalImage({project: projectId, imageIndex});
    // Hide the flyout menu when opening image modal
    onImageModalChange?.(true);
  };

  const closeImageModal = () => {
    setModalImage(null);
    // Show the flyout menu when closing image modal
    onImageModalChange?.(false);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!modalImage) return;
    
    const project = projects.find(p => p.id === modalImage.project);
    if (!project?.images) return;
    
    const currentIndex = modalImage.imageIndex;
    const maxIndex = project.images.length - 1;
    
    let newIndex;
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : maxIndex;
    } else {
      newIndex = currentIndex < maxIndex ? currentIndex + 1 : 0;
    }
    
    setModalImage({...modalImage, imageIndex: newIndex});
  };

  // Image Gallery Component
  const ImageGallery = ({ images, projectId }: { images: ProjectImage[], projectId: string }) => (
    <Box sx={{ mb: 4 }}>
      <Typography
        sx={{
          color: 'var(--blue, #00bcd4)',
          fontWeight: 600,
          mb: 2,
        }}
      >
        Project Gallery
      </Typography>
      
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 2,
          mb: 2,
        }}
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            onClick={() => openImageModal(projectId, index)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              position: 'relative',
              borderRadius: '8px',
              overflow: 'hidden',
              cursor: 'pointer',
              background: 'rgba(0, 188, 212, 0.1)',
              border: '1px solid var(--blue)',
              height: '150px',
            }}
          >
            {/* Actual Image */}
            <img
              src={image.url}
              alt={image.caption}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
              onError={(e) => {
                // Fallback to placeholder if image fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            
            {/* Fallback placeholder (hidden by default) */}
            <div 
              style={{ 
                display: 'none',
                width: '100%',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '16px',
                position: 'absolute',
                top: 0,
                left: 0,
              }}
            >
              <div>
                <div style={{ fontSize: '2rem', marginBottom: '8px' }}>
                  {image.type === 'logo' && '🎨'}
                  {image.type === 'architecture' && '🏗️'}
                  {image.type === 'ui' && '📱'}
                  {image.type === 'mockup' && '🖼️'}
                  {image.type === 'dashboard' && '📊'}
                </div>
                <Typography
                  sx={{
                    color: 'var(--blue, #00bcd4)',
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                  }}
                >
                  {image.type.toUpperCase()}
                </Typography>
                <Typography
                  sx={{
                    color: 'var(--gray, #616161)',
                    fontSize: '0.6rem',
                    marginTop: '4px',
                  }}
                >
                  Image not found
                </Typography>
              </div>
            </div>
            
            {/* Type badge */}
            <Chip
              label={image.type}
              size="small"
              sx={{
                position: 'absolute',
                top: 8,
                right: 8,
                bgcolor: 'rgba(0, 188, 212, 0.8)',
                color: 'white',
                fontSize: '0.7rem',
              }}
            />
            
            {/* Caption overlay */}
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                padding: '8px',
              }}
            >
              <Typography
                sx={{
                  color: 'white',
                  fontSize: '0.7rem',
                  lineHeight: 1.2,
                }}
              >
                {image.caption}
              </Typography>
            </Box>
          </motion.div>
        ))}
      </Box>
    </Box>
  );

  // Image Modal Component
  const ImageModal = () => {
    if (!modalImage) return null;
    
    const project = projects.find(p => p.id === modalImage.project);
    const image = project?.images?.[modalImage.imageIndex];
    
    if (!image) return null;

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={closeImageModal}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          padding: '16px',
        }}
      >
        {/* Close button */}
        <IconButton
          onClick={closeImageModal}
          sx={{
            position: 'absolute',
            top: 20,
            right: 20,
            color: 'white',
            bgcolor: 'rgba(0, 0, 0, 0.5)',
            '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.7)' },
            zIndex: 10000,
          }}
        >
          <CloseIcon />
        </IconButton>

        {/* Previous button */}
        {(project?.images?.length || 0) > 1 && (
          <IconButton
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('prev');
            }}
            sx={{
              position: 'absolute',
              left: 20,
              color: 'white',
              bgcolor: 'rgba(0, 0, 0, 0.5)',
              '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.7)' },
              zIndex: 10000,
            }}
          >
            <ArrowBackIosIcon />
          </IconButton>
        )}

        {/* Next button */}
        {(project?.images?.length || 0) > 1 && (
          <IconButton
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('next');
            }}
            sx={{
              position: 'absolute',
              right: 20,
              color: 'white',
              bgcolor: 'rgba(0, 0, 0, 0.5)',
              '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.7)' },
              zIndex: 10000,
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        )}

        {/* Image content */}
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          onClick={(e) => e.stopPropagation()}
          style={{
            maxWidth: '90vw',
            maxHeight: '90vh',
            backgroundColor: 'white',
            borderRadius: '8px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Actual Image */}
          <div style={{ position: 'relative', flex: 1 }}>
            <img
              src={image.url}
              alt={image.caption}
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '70vh',
                objectFit: 'contain',
                display: 'block',
              }}
              onError={(e) => {
                // Show fallback placeholder
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            
            {/* Fallback placeholder */}
            <div
              style={{
                display: 'none',
                width: '100%',
                minWidth: '400px',
                height: '300px',
                background: 'rgba(0, 188, 212, 0.1)',
                border: '2px solid var(--blue)',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '4rem', marginBottom: '16px' }}>
                  {image.type === 'logo' && '🎨'}
                  {image.type === 'architecture' && '🏗️'}
                  {image.type === 'ui' && '📱'}
                  {image.type === 'mockup' && '🖼️'}
                  {image.type === 'dashboard' && '📊'}
                </div>
                <Typography
                  sx={{
                    color: 'var(--blue, #00bcd4)',
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                  }}
                >
                  {image.type.toUpperCase()}
                </Typography>
                <Typography
                  sx={{
                    color: 'var(--gray, #616161)',
                    fontSize: '1rem',
                    marginTop: '8px',
                  }}
                >
                  Image not found
                </Typography>
              </div>
            </div>
          </div>
          
          <Box sx={{ p: 3, bgcolor: 'white' }}>
            <Typography
              sx={{
                color: 'black',
                fontWeight: 600,
                mb: 1,
              }}
            >
              {image.title}
            </Typography>
            <Typography
              sx={{
                color: 'gray',
                fontSize: '0.9rem',
              }}
            >
              {image.caption} 
            </Typography>
            
            {(project?.images?.length || 0) > 1 && (
              <Typography
                sx={{
                  color: 'gray',
                  fontSize: '0.8rem',
                  mt: 1,
                }}
              >
                {modalImage.imageIndex + 1} of {project?.images?.length}
              </Typography>
            )}
          </Box>
        </motion.div>
      </motion.div>
    );
  };

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
        {projects.map((project, index) => {
          const isExpanded = expandedProject === project.id;
          
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Box
                sx={{
                  mt: index === 0 ? 0 : 2, // Remove top margin from first box
                  borderRadius: 2,
                  background: 'rgba(30, 30, 30, 0.85)',
                  backdropFilter: 'blur(10px)',
                  border: isExpanded 
                    ? '2px solid var(--blue, #00bcd4)'
                    : '1px solid var(--gray, #616161)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  position: 'relative',
                  zIndex: 21,
                  '&:hover': {
                    border: '1px solid var(--blue, #00bcd4)',
                    boxShadow: '0 2px 12px 0 rgba(0,188,212,0.15)',
                    background: 'rgba(30, 30, 30, 0.95)',
                    transform: 'translateY(-2px)',
                  },
                  ...(isExpanded && {
                    border: '2px solid var(--blue, #00bcd4)',
                    boxShadow: '0 4px 20px 0 rgba(0,188,212,0.2)',
                    background: 'rgba(30, 30, 30, 0.95)',
                  })
                }}
              >
                {/* Collapsed Header - Always Visible */}
                <Box
                  onClick={() => toggleProject(project.id)}
                  sx={{
                    p: 4,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Box sx={{ flex: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          color: 'var(--blue, #00bcd4)',
                          fontWeight: 600,
                        }}
                      >
                        {project.title}
                      </Typography>
                      {project.isVentureBacked && (
                        <Chip
                          label="Venture-Backed"
                          size="small"
                          sx={{
                            bgcolor: 'rgba(0, 188, 212, 0.2)',
                            color: 'var(--blue, #00bcd4)',
                            fontSize: '0.75rem',
                          }}
                        />
                      )}
                    </Box>
                    
                    <Typography
                      sx={{
                        color: 'var(--white, #f5f5f5)',
                        mb: 2,
                        fontSize: '0.95rem',
                      }}
                    >
                      {project.shortDescription}
                    </Typography>
                    
                    <Typography
                      sx={{
                        color: 'var(--blue, #00bcd4)',
                        fontSize: '0.875rem',
                        fontWeight: 500,
                      }}
                    >
                      {project.role}
                    </Typography>
                  </Box>
                  
                  <Box sx={{ ml: 2 }}>
                    <motion.div
                      animate={{ rotate: isExpanded ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {isExpanded ? (
                        <ExpandLessIcon sx={{ color: 'var(--blue, #00bcd4)' }} />
                      ) : (
                        <ExpandMoreIcon sx={{ color: 'var(--gray, #616161)' }} />
                      )}
                    </motion.div>
                  </Box>
                </Box>

                {/* Expanded Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <Box
                        sx={{
                          borderTop: '1px solid var(--gray, #616161)',
                          p: 4,
                        }}
                      >
                        {/* Full Description */}
                        <Typography
                          sx={{
                            color: 'var(--white, #f5f5f5)',
                            mb: 3,
                            fontSize: '1rem',
                            lineHeight: 1.6,
                          }}
                        >
                          {project.fullDescription}
                        </Typography>

                        {/* Impact Metrics */}
                        {project.impact && (
                          <Box sx={{ mb: 3 }}>
                            <Typography
                              sx={{
                                color: 'var(--blue, #00bcd4)',
                                fontWeight: 600,
                                mb: 1,
                              }}
                            >
                              Impact
                            </Typography>
                            <Typography
                              sx={{
                                color: 'var(--white, #f5f5f5)',
                                fontSize: '0.95rem',
                              }}
                            >
                              {project.impact}
                            </Typography>
                          </Box>
                        )}

                        {/* Image Gallery */}
                        {project.images && project.images.length > 0 && (
                          <ImageGallery images={project.images} projectId={project.id} />
                        )}

                        {/* Technical Architecture */}
                        <Box sx={{ mb: 3 }}>
                          <Typography
                            sx={{
                              color: 'var(--blue, #00bcd4)',
                              fontWeight: 600,
                              mb: 1,
                            }}
                          >
                            Technical Architecture
                          </Typography>
                          <Typography
                            sx={{
                              color: 'var(--white, #f5f5f5)',
                              fontSize: '0.95rem',
                              lineHeight: 1.6,
                            }}
                          >
                            {project.technical.architecture}
                          </Typography>
                        </Box>

                        {/* Key Features & Achievements */}
                        <Box sx={{ mb: 3 }}>
                          <Typography
                            sx={{
                              color: 'var(--blue, #00bcd4)',
                              fontWeight: 600,
                              mb: 2,
                            }}
                          >
                            Key Features & Achievements
                          </Typography>
                          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            {project.technical.achievements.map((achievement, index) => (
                              <Typography
                                key={index}
                                sx={{
                                  color: 'var(--white, #f5f5f5)',
                                  fontSize: '0.9rem',
                                  '&::before': {
                                    content: '"•"',
                                    color: 'var(--blue, #00bcd4)',
                                    fontWeight: 'bold',
                                    marginRight: '8px',
                                  },
                                }}
                              >
                                {achievement}
                              </Typography>
                            ))}
                          </Box>
                        </Box>

                        {/* Technologies */}
                        <Box sx={{ mb: 4 }}>
                          <Typography
                            sx={{
                              color: 'var(--blue, #00bcd4)',
                              fontWeight: 600,
                              mb: 2,
                            }}
                          >
                            Technologies Used
                          </Typography>
                          <Box
                            sx={{
                              display: 'flex',
                              flexWrap: 'wrap',
                              gap: 1,
                            }}
                          >
                            {project.technologies.map((tech) => (
                              <Chip
                                key={tech}
                                label={tech}
                                sx={{
                                  bgcolor: 'rgba(0, 188, 212, 0.2)',
                                  color: 'var(--white, #f5f5f5)',
                                  fontSize: '0.875rem',
                                }}
                              />
                            ))}
                          </Box>
                        </Box>

                        {/* Links */}
                        <Box
                          sx={{
                            display: 'flex',
                            gap: 2,
                            flexWrap: 'wrap',
                          }}
                        >
                          {project.githubLink && (
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                              <Button
                                component="a"
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                startIcon={<GitHubIcon />}
                                sx={{
                                  color: 'var(--blue, #00bcd4)',
                                  borderColor: 'var(--blue, #00bcd4)',
                                  '&:hover': {
                                    bgcolor: 'rgba(0, 188, 212, 0.1)',
                                    borderColor: 'var(--blue, #00bcd4)',
                                  },
                                }}
                                variant="outlined"
                              >
                                GitHub
                              </Button>
                            </motion.div>
                          )}
                          
                          {project.liveLink && (
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                              <Button
                                component="a"
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                startIcon={<LaunchIcon />}
                                sx={{
                                  bgcolor: 'var(--blue, #00bcd4)',
                                  color: 'var(--black, #1e1e1e)',
                                  '&:hover': {
                                    bgcolor: 'rgba(0, 188, 212, 0.8)',
                                  },
                                }}
                                variant="contained"
                              >
                                {project.id === 'ungrateful-developer' ? 'Preview (WIP)' : 'Learn More'}
                              </Button>
                            </motion.div>
                          )}
                        </Box>
                      </Box>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Box>
            </motion.div>
          );
        }        )}
      </Box>
      
      {/* Image Modal */}
      <AnimatePresence>
        {modalImage && <ImageModal />}
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default ProjectsContent;