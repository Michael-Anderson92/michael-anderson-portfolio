import type { Config } from 'tailwindcss';

/**
 * Tailwind CSS Configuration for Michael Anderson Portfolio
 *
 * This config defines the design system tokens that power both the main portfolio
 * and the Storybook component library. CSS variables are converted to theme values
 * for better tree-shaking and type safety.
 */
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './stories/**/*.{js,ts,jsx,tsx,mdx}', // Include Storybook stories
  ],
  theme: {
    extend: {
      // ===== COLORS =====
      // Brand colors converted from CSS variables for better optimization
      colors: {
        // Primary brand colors (from CSS variables)
        portfolio: {
          black: '#1e1e1e',      // Main background
          blue: '#00bcd4',       // Primary accent
          'blue-light': '#4dd0e1', // Hover state
          white: '#f5f5f5',      // Text color
          purple: '#624CAB',     // Accent
          gray: '#616161',       // Secondary text
          navy: '#0a0a0a',       // Deep background
        },

        // Legacy color palette (keep for backward compatibility)
        blue: {
          400: '#2589FE',
          500: '#0070F3',
          600: '#2F6FEB',
        },
        yellow: '#FAC302',
        darkGreen: '#003844',
        orange: '#ff6b35',
        jade: '#57A773',
      },

      // ===== TYPOGRAPHY =====
      fontFamily: {
        sans: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'var(--font-montserrat)', 'sans-serif'],
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
        roboto: ['var(--font-roboto)', 'sans-serif'], // Keep if you're using it
      },

      // ===== SPACING & LAYOUT =====
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },

      // ===== BACKDROP BLUR =====
      // For glassmorphism effects
      backdropBlur: {
        xs: '2px',
        '4xl': '100px',
      },

      // ===== Z-INDEX SCALE =====
      // Consistent layering system
      zIndex: {
        'background': '0',
        'content': '10',
        'header': '20',
        'navigation': '50',
        'modal': '9999',
      },

      // ===== ANIMATIONS =====
      keyframes: {
        // Floating animation for elements
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        // Glowing effect for interactive elements
        glow: {
          'from': { boxShadow: '0 0 20px rgba(0, 188, 212, 0.2)' },
          'to': { boxShadow: '0 0 30px rgba(0, 188, 212, 0.4)' },
        },
        // Spinner loading animation
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        // Shimmer effect (from existing config)
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'spin': 'spin 1s linear infinite',
        'shimmer': 'shimmer 2s infinite',
      },

      // ===== BOX SHADOWS =====
      // Predefined shadow styles for consistency
      boxShadow: {
        'glow-sm': '0 0 20px rgba(0, 188, 212, 0.2)',
        'glow-md': '0 0 30px rgba(0, 188, 212, 0.4)',
        'glow-lg': '0 4px 20px rgba(0, 188, 212, 0.2)',
        'glow-xl': '0 8px 25px rgba(0, 188, 212, 0.15)',
        'card': '0 4px 15px rgba(0, 188, 212, 0.3)',
      },

      // ===== BORDER RADIUS =====
      borderRadius: {
        'card': '1rem',
      },

      // ===== TRANSITIONS =====
      transitionDuration: {
        'smooth': '300ms',
      },
    },
  },

  // ===== PLUGINS =====
  plugins: [
    require('@tailwindcss/forms'),
  ],
};

export default config;