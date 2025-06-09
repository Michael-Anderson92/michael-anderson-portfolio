'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavigationProps {
  setCurrentView: (view: string) => void;
  currentView: string;
}

export default function HybridNavigation({ setCurrentView, currentView }: NavigationProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const menuItems = [
    { title: 'Home', view: 'home', icon: '🏠' },
    { title: 'Skills', view: 'skills', icon: '⚡' },
    { title: 'Projects', view: 'projects', icon: '💼' },
    { title: 'About Me', view: 'about', icon: '👨‍💻' }
  ];

  const handleClick = (view: string) => {
    setCurrentView(view);
    if (isMobile) setIsExpanded(false);
  };

  if (!isMobile) {
    // Desktop: Always visible vertical menu - Larger and positioned below header
    return (
      <div className="fixed left-8 z-50" style={{ top: '200px' }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col space-y-6 p-6 bg-black/90 backdrop-blur-md rounded-3xl border-2 border-[var(--gray)]/30 shadow-2xl"
          style={{
            background: 'rgba(30, 30, 30, 0.95)',
            backdropFilter: 'blur(15px)',
            WebkitBackdropFilter: 'blur(15px)',
          }}
        >
          {menuItems.map((item, index) => (
            <motion.button
              key={item.view}
              onClick={() => handleClick(item.view)}
              className={`flex items-center space-x-4 px-6 py-4 rounded-2xl transition-all duration-200 min-w-[180px] text-left ${
                currentView === item.view
                  ? 'bg-[var(--blue)] text-white shadow-lg scale-105'
                  : 'text-[var(--gray)] hover:text-[var(--white)] hover:bg-[var(--blue)]/10 hover:scale-105'
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ x: 6 }}
              whileTap={{ scale: 0.98 }}
              style={{
                fontSize: '1rem',
                fontWeight: currentView === item.view ? '600' : '500',
              }}
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="font-medium">{item.title}</span>
              
              {/* Active indicator */}
              {currentView === item.view && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="ml-auto w-2 h-2 bg-white rounded-full"
                />
              )}
            </motion.button>
          ))}
          
          {/* Optional: Add a subtle logo or branding */}
          <div className="pt-4 border-t border-[var(--gray)]/20">
            <div className="text-center">
              <div className="text-[var(--blue)] text-xs font-medium opacity-70">
                Portfolio 2025
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  // Mobile: Expandable menu - Also made larger
  return (
    <div className="fixed bottom-8 left-8 z-50">
      <motion.div
        className="relative"
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.button
          className="w-20 h-20 bg-[var(--blue)] rounded-full flex items-center justify-center text-white shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <motion.div
            animate={{ rotate: isExpanded ? 45 : 0 }}
            transition={{ duration: 0.2 }}
            className="text-3xl font-bold"
          >
            +
          </motion.div>
        </motion.button>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="absolute bottom-24 left-0 bg-black/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl min-w-[200px] border-2 border-[var(--blue)]/30"
              style={{
                background: 'rgba(30, 30, 30, 0.95)',
                backdropFilter: 'blur(15px)',
                WebkitBackdropFilter: 'blur(15px)',
              }}
            >
              <div className="flex flex-col space-y-3">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.view}
                    onClick={() => handleClick(item.view)}
                    className={`flex items-center space-x-4 px-5 py-4 rounded-xl transition-all duration-200 text-left ${
                      currentView === item.view
                        ? 'bg-[var(--blue)] text-white shadow-lg'
                        : 'hover:bg-[var(--blue)]/10 hover:text-[var(--blue)] text-[var(--white)]'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ x: 6 }}
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="font-medium">{item.title}</span>
                    
                    {/* Active indicator */}
                    {currentView === item.view && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="ml-auto w-2 h-2 bg-white rounded-full"
                      />
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}