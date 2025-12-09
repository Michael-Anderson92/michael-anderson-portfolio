import type { Meta, StoryObj } from '@storybook/react';
import ProjectCard from './ProjectCard';

const meta: Meta<typeof ProjectCard> = {
  title: 'Molecules/ProjectCard',
  component: ProjectCard,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#0a0a0a' }],
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProjectCard>;

// Project 1: Yellow Border
export const ProjectOne: Story = {
  args: {
    title: 'Elaview',
    description: 'B2B advertising marketplace connecting advertisers with physical advertising space owners.',
    logo: '📱',
    technologies: ['Next.js', 'TypeScript', 'tRPC', 'Prisma', 'Stripe'],
    link: 'https://elaview.com',
    gradientFrom: '#00bcd4', // Portfolio Blue
    gradientTo: '#0891b2',
    borderColor: '#eab308', // Yellow
  },
};

// Project 2: Blue Border
export const ProjectTwo: Story = {
  args: {
    title: 'Analytics Dashboard',
    description: 'Real-time analytics platform with interactive visualizations and data export.',
    logo: '📊',
    technologies: ['Next.js', 'D3.js', 'PostgreSQL', 'Redis'],
    link: 'https://github.com/yourusername/analytics',
    gradientFrom: '#10b981', // Green
    gradientTo: '#059669',
    borderColor: '#00bcd4', // Blue (portfolio-blue)
  },
};

// Project 3: Green Border
export const ProjectThree: Story = {
  args: {
    title: 'Task Manager Pro',
    description: 'Collaborative task management with real-time updates and team workspaces.',
    logo: '✅',
    technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind'],
    link: 'https://github.com/yourusername/taskmanager',
    gradientFrom: '#eab308', // Yellow
    gradientTo: '#ca8a04',
    borderColor: '#10b981', // Green (matches "data-driven" from hero)
  },
};