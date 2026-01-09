# Styling Guide for Michael Anderson Portfolio

This guide explains the new optimized styling system for the portfolio and component library.

## Quick Migration Guide

### Colors

#### Old Way (CSS Variables)
```tsx
<div style={{ color: 'var(--blue)' }}>Text</div>
<div className="bg-[var(--black)]">Content</div>
```

#### New Way (Tailwind Classes)
```tsx
<div className="text-portfolio-blue">Text</div>
<div className="bg-portfolio-black">Content</div>
```

### Available Color Classes

| Old CSS Variable | New Tailwind Class | Use Case |
|-----------------|-------------------|----------|
| `var(--black)` | `bg-portfolio-black` / `text-portfolio-black` | Main background |
| `var(--blue)` | `bg-portfolio-blue` / `text-portfolio-blue` | Primary accent |
| `var(--blue)` hover | `bg-portfolio-blue-light` / `text-portfolio-blue-light` | Hover states |
| `var(--white)` | `bg-portfolio-white` / `text-portfolio-white` | Text color |
| `var(--purple)` | `bg-portfolio-purple` / `text-portfolio-purple` | Accent color |
| `var(--gray)` | `bg-portfolio-gray` / `text-portfolio-gray` | Secondary text |
| `var(--navy)` | `bg-portfolio-navy` / `text-portfolio-navy` | Deep background |

## Animations

### Float Animation
```tsx
<div className="animate-float">
  Floating element
</div>
```

### Glow Animation
```tsx
<button className="animate-glow">
  Glowing button
</button>
```

### Spin Animation (for loaders)
```tsx
<div className="animate-spin">
  Loading...
</div>
```

## Shadows

### Glow Effects
```tsx
<div className="shadow-glow-sm">Small glow</div>
<div className="shadow-glow-md">Medium glow</div>
<div className="shadow-glow-lg">Large glow</div>
<div className="shadow-glow-xl">Extra large glow</div>
<button className="shadow-card">Card shadow</button>
```

## Z-Index Scale

Use semantic z-index classes:
```tsx
<div className="z-background">Background layer (0)</div>
<div className="z-content">Content layer (10)</div>
<div className="z-header">Header layer (20)</div>
<div className="z-navigation">Navigation layer (50)</div>
<div className="z-modal">Modal layer (9999)</div>
```

## Component Classes (Legacy Support)

These classes are kept for backward compatibility. **New components should use the React component library instead.**

### Glass Effects
```tsx
<div className="glass">Glassmorphism</div>
<div className="glass-hover">Glassmorphism with hover</div>
```

### Cards
```tsx
<div className="card-base">Basic card</div>
<div className="card-base card-active">Active card</div>
<div className="card-base card-hover">Hoverable card</div>
```

### Buttons (Legacy)
**⚠️ Use `<Button>` component from `components/ui/atoms/button` instead**
```tsx
// Old way (still works)
<button className="btn-primary">Primary</button>
<button className="btn-outline">Outline</button>

// New way (preferred)
import { Button } from '@/components/ui';

<Button variant="primary">Primary</Button>
<Button variant="outline">Outline</Button>
```

## Component Library Usage

### Importing Components
```tsx
// Single import
import { Button } from '@/components/ui/atoms/button';

// Multiple imports
import { Button } from '@/components/ui';
```

### Button Component Examples
```tsx
import { Button } from '@/components/ui';

// Basic usage
<Button variant="primary">Click Me</Button>
<Button variant="outline">Secondary</Button>

// With sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// Full width
<Button fullWidth>Full Width Button</Button>

// Disabled
<Button disabled>Disabled</Button>

// With onClick
<Button onClick={() => alert('Clicked!')}>
  Interactive Button
</Button>

// Custom styling
<Button className="mt-4">Custom Margin</Button>
```

## Responsive Utilities

### Typography
```tsx
<h1 className="responsive-text-xl">Responsive XL</h1>
<h2 className="responsive-text-2xl">Responsive 2XL</h2>
<h3 className="responsive-text-3xl">Responsive 3XL</h3>
```

Or use Tailwind's responsive prefixes:
```tsx
<h1 className="text-xl md:text-2xl lg:text-3xl">Responsive Text</h1>
```

### Spacing
```tsx
<section className="section-padding">
  Responsive padding for sections
</section>
```

Or use Tailwind's responsive spacing:
```tsx
<section className="px-4 py-8 md:px-8 md:py-12 lg:px-12 lg:py-16">
  Custom responsive padding
</section>
```

## Custom Utilities

### Loading Spinner
```tsx
<div className="spinner"></div>
```

### Print Utilities
```tsx
<div className="no-print">
  This won't show when printing
</div>
```

## Best Practices

### 1. Prefer Tailwind Classes Over CSS Variables
```tsx
// ❌ Avoid
<div style={{ color: 'var(--blue)' }}>Text</div>

// ✅ Prefer
<div className="text-portfolio-blue">Text</div>
```

### 2. Use Component Library for Common Elements
```tsx
// ❌ Avoid
<button className="btn-primary">Click</button>

// ✅ Prefer
import { Button } from '@/components/ui';
<Button variant="primary">Click</Button>
```

### 3. Use Semantic Classes
```tsx
// ❌ Avoid
<div className="z-[9999]">Modal</div>

// ✅ Prefer
<div className="z-modal">Modal</div>
```

### 4. Leverage Tailwind's Responsive Prefixes
```tsx
// ✅ Good
<div className="text-sm md:text-base lg:text-lg">
  Responsive text
</div>
```

## File Organization

```
app/ui/
└── global.css          # Global styles, properly layered

components/ui/
├── atoms/              # Basic building blocks (Button, Card, Badge)
├── molecules/          # Composite components (Form fields, Nav items)
├── organisms/          # Complex components (Header, Footer, Modal)
├── effects/            # Visual effects (BackgroundBeams, Particles)
└── index.ts            # Barrel exports

tailwind.config.ts      # Design tokens and theme configuration
```

## Storybook Integration

All components in `components/ui/` automatically get picked up by Storybook.

To view components:
```bash
npm run storybook
```

Then navigate to: http://localhost:6006/

## Migration Checklist

When updating existing components:

- [ ] Replace CSS variables with Tailwind classes (`var(--blue)` → `text-portfolio-blue`)
- [ ] Replace legacy button classes with `<Button>` component
- [ ] Replace legacy card classes with future `<Card>` component
- [ ] Use semantic z-index classes instead of arbitrary values
- [ ] Test in both main portfolio and Storybook

## Questions?

Check the following files for reference:
- `tailwind.config.ts` - All available design tokens
- `app/ui/global.css` - Custom CSS classes and legacy support
- `components/ui/atoms/button/button.tsx` - Example component implementation
- `components/ui/atoms/button/button.stories.tsx` - Example stories
