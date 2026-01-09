'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Mock data - replace with real API calls later
const mockStats = [
  {
    icon: '👥',
    label: 'Portfolio Visitors',
    value: '1,247 this month',
    trend: '↑ 23%'
  },
  {
    icon: '⚾',
    label: 'Angels',
    value: '63-99',
    trend: 'Last: W 4-2'
  },
  {
    icon: '💻',
    label: 'GitHub',
    value: '127 commits',
    trend: 'This month'
  },
  {
    icon: '📈',
    label: 'S&P 500',
    value: '$6,852.34',
    trend: '↑ 2.3%'
  },
  {
    icon: '😄',
    label: 'Dev Joke',
    value: 'Why do programmers prefer dark mode?',
    trend: 'Because light attracts bugs! 🐛'
  }
];

export default function LiveDataStrip() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mockStats.length);
    }, 5000); // Rotate every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const currentStat = mockStats[currentIndex];

  return (
    <div 
      className="h-12 flex items-center justify-center overflow-hidden relative"
      style={{ 
        background: 'linear-gradient(to right, #f97316, #ec4899)'
      }}
    >
      {/* Pulsing LIVE indicator */}
      <div className="absolute left-4 flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
        </span>
        <span className="text-white text-xs font-semibold tracking-wide">
          LIVE
        </span>
      </div>

      {/* Rotating Stats */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="flex items-center gap-2 md:gap-3 text-white px-4"
        >
          <span className="text-lg md:text-xl">{currentStat.icon}</span>
          <span className="text-xs md:text-sm font-medium hidden sm:inline">
            {currentStat.label}:
          </span>
          <span className="text-xs md:text-sm font-bold">{currentStat.value}</span>
          <span className="text-xs opacity-90 hidden md:inline">{currentStat.trend}</span>
        </motion.div>
      </AnimatePresence>

      {/* Progress indicator dots */}
      <div className="absolute right-4 flex items-center gap-1">
        {mockStats.map((_, idx) => (
          <div
            key={idx}
            className={`h-1.5 w-1.5 rounded-full transition-all ${
              idx === currentIndex 
                ? 'bg-white w-4' 
                : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
}