'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavigationProps {
  setCurrentView: (view: string) => void;
  currentView: string;
}

export default function HybridNavigation({ setCurrentView, currentView }: NavigationProps) {
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
  };

  if (!isMobile) {
    // Desktop: Always visible vertical menu - Enlarged for better presence
    return (
      <div className="fixed left-8 z-50" style={{ top: '140px' }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col space-y-8 p-8 bg-black/90 backdrop-blur-md rounded-3xl border-2 border-[var(--gray)]/30 shadow-2xl"
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
              className={`flex items-center space-x-5 px-8 py-5 rounded-2xl transition-all duration-200 min-w-[220px] text-left ${
                currentView === item.view
                  ? 'bg-[var(--blue)] text-white shadow-lg scale-105'
                  : 'text-[var(--gray)] hover:text-[var(--white)] hover:bg-[var(--blue)]/10 hover:scale-105'
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ x: 8 }}
              whileTap={{ scale: 0.98 }}
              style={{
                fontSize: '1.125rem',
                fontWeight: currentView === item.view ? '600' : '500',
              }}
            >
              <span className="text-3xl">{item.icon}</span>
              <span className="font-medium text-lg">{item.title}</span>
              
              {/* Active indicator */}
              {currentView === item.view && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="ml-auto w-3 h-3 bg-white rounded-full"
                />
              )}
            </motion.button>
          ))}
          
          {/* Optional: Add a subtle logo or branding */}
          <div className="pt-6 border-t border-[var(--gray)]/20">
            <div className="text-center">
              <div className="text-[var(--blue)] text-sm font-medium opacity-70">
                Portfolio 2025
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  // Mobile: Bottom app bar
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-black/95 backdrop-blur-md border-t-2 border-[var(--gray)]/30 shadow-2xl"
        style={{
          background: 'rgba(30, 30, 30, 0.95)',
          backdropFilter: 'blur(15px)',
          WebkitBackdropFilter: 'blur(15px)',
        }}
      >
        <div className="flex items-center justify-around px-4 py-3 safe-area-inset-bottom">
          {menuItems.map((item, index) => (
            <motion.button
              key={item.view}
              onClick={() => handleClick(item.view)}
              className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-xl transition-all duration-200 min-w-[60px] ${
                currentView === item.view
                  ? 'text-[var(--blue)]'
                  : 'text-[var(--gray)] hover:text-[var(--white)]'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className={`text-2xl transition-all duration-200 ${
                  currentView === item.view ? 'scale-110' : 'scale-100'
                }`}
                whileHover={{ scale: 1.1 }}
              >
                {item.icon}
              </motion.div>
              
              <span 
                className={`text-xs font-medium transition-all duration-200 ${
                  currentView === item.view ? 'font-semibold' : 'font-normal'
                }`}
                style={{
                  fontSize: '0.75rem',
                }}
              >
                {item.title}
              </span>
              
              {/* Active indicator */}
              {currentView === item.view && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="w-1 h-1 bg-[var(--blue)] rounded-full"
                />
              )}
            </motion.button>
          ))}
        </div>
        
        {/* Safe area padding for devices with home indicators */}
        <div className="h-safe-area-inset-bottom" />
      </motion.div>
    </div>
  );
}