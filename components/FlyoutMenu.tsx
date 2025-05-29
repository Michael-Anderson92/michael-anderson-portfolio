'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FlyoutMenuProps {
  setCurrentView: (view: string) => void;
}

export default function FlyoutMenu({ setCurrentView }: FlyoutMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Give the page time to fully load
    const timer = setTimeout(() => setIsOpen(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const menuItems = [
    { title: 'Skills', view: 'skills' },
    { title: 'Projects', view: 'projects' },
    { title: 'About Me', view: 'about' }
  ];

  const menuVariants = {
    closed: {
      x: '-100%',
      opacity: 0,
      transition: { duration: 0.3, ease: 'easeOut' } // Simpler easing
    },
    open: {
      x: 0,
      opacity: 1,
      transition: { 
        duration: 1.8, 
        ease: 'easeOut',
        delayChildren: 0.2, // Reduced delay
        staggerChildren: 0.3 // Reduced stagger
      }
    }
  };

  const itemVariants = {
    closed: { 
      x: -20, 
      opacity: 0,
      transition: {
        duration: 0.4
      }
    },
    open: { 
      x: 0, 
      opacity: 1,
      transition: {
        duration: 0.4
      }
    }
  };

  const handleClick = (view: string) => {
    setCurrentView(view);
    // Optionally close the menu after selection
    // setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          className="fixed bottom-[8%] left-[3%] w-64 z-[1001] flex flex-col justify-center"
        >
          <div className="flex flex-col gap-16 mb-8 px-8">
            {menuItems.map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
              >
                <button
                  onClick={() => handleClick(item.view)}
                  className="text-6xl font-semibold text-white hover:text-[#00bcd4] transition-colors duration-300 whitespace-nowrap cursor-pointer"
                >
                  {item.title}
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}