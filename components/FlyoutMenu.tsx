'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FlyoutMenuProps {
  setCurrentView: (view: string) => void;
}

export default function FlyoutMenu({ setCurrentView }: FlyoutMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const menuItems = [
    { title: 'Skills', view: 'skills' },
    { title: 'Projects', view: 'projects' },
    { title: 'About Me', view: 'about' }
  ];

  const menuVariants = {
    closed: {
      x: '-100%',
      transition: {
        type: 'spring',
        stiffness: 50,
        damping: 20,
        duration: 0.8
      }
    },
    open: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 50,
        damping: 20,
        duration: 0.8,
        delayChildren: 0.5,
        staggerChildren: 0.2
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
          className="fixed bottom-[8%] left-[3%] w-64 z-50 flex flex-col justify-center"
        >
          <div className="flex flex-col gap-16 mb-8 px-8">
            {menuItems.map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
              >
                <button
                  onClick={() => handleClick(item.view)}
                  className="text-6xl font-semibold text-white hover:text-blue-400 transition-colors whitespace-nowrap"
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