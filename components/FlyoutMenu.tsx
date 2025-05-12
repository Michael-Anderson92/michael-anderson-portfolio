'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FlyoutMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const menuItems = [
    { title: 'Skills', href: '#skills' },
    { title: 'Projects', href: '#projects' }, 
    { title: 'About Me', href: '#about' }
  ];

  const menuVariants = {
    closed: {
      x: '-100%',
      opacity: 0,
      transition: {
        type: 'spring',
        stiffness: 40,
        damping: 25,
        duration: 1,
        ease: 'easeInOut'
      }
    },
    open: {
      x: 0,
      opacity: 1, 
      transition: {
        type: 'spring',
        stiffness: 40,
        damping: 25,
        duration: 1,
        ease: 'easeInOut',
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    closed: { 
      x: -30,
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: 'easeInOut'
      }
    },
    open: { 
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeInOut'
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          className="sticky left-0 top-0 h-screen w-64 /90 z-50 flex flex-col justify-center"
        >
          <div className="flex flex-col gap-8 px-8">
            {menuItems.map((item) => (
              <motion.a
                key={item.title}
                href={item.href}
                variants={itemVariants}
                className="text-6xl font-semibold text-white hover:text-blue-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
