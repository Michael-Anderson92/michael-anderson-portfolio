import React from 'react';
import { cn } from '@/app/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button variant - controls the visual style
   */
  variant?: 'primary' | 'outline';
  /**
   * Button size
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Full width button
   */
  fullWidth?: boolean;
  /**
   * Button content
   */
  children: React.ReactNode;
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Button component with primary and outline variants
 *
 * Based on the global.css button styles (.btn-primary, .btn-outline)
 * Converted to Tailwind-first approach with CSS variable support
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      className,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles = cn(
      'font-semibold rounded-lg transition-all duration-300 ease-in-out cursor-pointer',
      'focus:outline-none focus:ring-2 focus:ring-[var(--blue)] focus:ring-offset-2',
      'disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none',
      fullWidth && 'w-full'
    );

    const sizeStyles = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    const variantStyles = {
      primary: cn(
        'bg-[var(--blue)] text-white border-none',
        !disabled && 'hover:bg-[#4dd0e1] hover:-translate-y-0.5 hover:shadow-[0_4px_15px_rgba(0,188,212,0.3)]'
      ),
      outline: cn(
        'bg-transparent text-[var(--blue)] border-2 border-[var(--blue)]',
        !disabled && 'hover:bg-[rgba(0,188,212,0.1)] hover:-translate-y-0.5'
      ),
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          sizeStyles[size],
          variantStyles[variant],
          className
        )}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
