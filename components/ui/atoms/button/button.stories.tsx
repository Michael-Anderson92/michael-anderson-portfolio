import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Button } from './button';

/**
 * Button component extracted from global.css and converted to a reusable React component.
 *
 * Features:
 * - Two variants: Primary and Outline
 * - Three sizes: Small, Medium, Large
 * - Full width option
 * - Disabled state
 * - Hover animations with smooth transitions
 * - Uses CSS variables from the portfolio theme
 */
const meta = {
  title: 'UI/Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile button component with multiple variants and sizes. Built with Tailwind CSS and custom CSS variables for consistent theming.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'outline'],
      description: 'Visual style variant of the button',
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the button',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    fullWidth: {
      control: 'boolean',
      description: 'Makes the button take full width of its container',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    children: {
      control: 'text',
      description: 'Button content',
    },
    onClick: {
      action: 'clicked',
      description: 'Click handler',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Primary button - the main call-to-action style with solid background
 */
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

/**
 * Outline button - secondary action style with transparent background
 */
export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Button',
  },
};

/**
 * Small size button
 */
export const Small: Story = {
  args: {
    variant: 'primary',
    size: 'sm',
    children: 'Small Button',
  },
};

/**
 * Medium size button (default)
 */
export const Medium: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Medium Button',
  },
};

/**
 * Large size button
 */
export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'lg',
    children: 'Large Button',
  },
};

/**
 * Disabled state - button cannot be interacted with
 */
export const Disabled: Story = {
  args: {
    variant: 'primary',
    children: 'Disabled Button',
    disabled: true,
  },
};

/**
 * Disabled outline button
 */
export const DisabledOutline: Story = {
  args: {
    variant: 'outline',
    children: 'Disabled Outline',
    disabled: true,
  },
};

/**
 * Full width button - spans the entire container width
 */
export const FullWidth: Story = {
  args: {
    variant: 'primary',
    children: 'Full Width Button',
    fullWidth: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

/**
 * All button variants side by side for comparison
 */
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="primary" size="sm">
        Small
      </Button>
      <Button variant="primary" size="lg">
        Large
      </Button>
      <Button variant="primary" disabled>
        Disabled
      </Button>
    </div>
  ),
};

/**
 * Button sizes comparison
 */
export const SizeComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Button variant="primary" size="sm">
        Small
      </Button>
      <Button variant="primary" size="md">
        Medium
      </Button>
      <Button variant="primary" size="lg">
        Large
      </Button>
    </div>
  ),
};

/**
 * Interactive example with click handler
 */
export const WithClickHandler: Story = {
  args: {
    variant: 'primary',
    children: 'Click Me!',
    onClick: () => alert('Button clicked!'),
  },
};
