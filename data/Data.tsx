import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons';
import { File } from 'lucide-react';

export const DATA = {
  navbar: [
    {
      href: 'https://github.com/MuhammadYudhistira',
      icon: GitHubLogoIcon,
      label: 'Github',
    },
    { href: '/Muhammad-Yudhistira-resume.pdf', icon: File, label: 'Resume' },
    {
      href: 'https://www.linkedin.com/in/myudhistira',
      icon: LinkedInLogoIcon,
      label: 'LinkedIn',
    },
    {
      href: 'https://www.instagram.com/myudhistira07/',
      icon: InstagramLogoIcon,
      label: 'Instagram',
    },
  ],
  techStack: [
    {
      name: 'TypeScript',
      icon: '/logo/tslogo.svg',
      description: 'Typed JavaScript',
      bg: '#283646', // Slate dark
    },
    {
      name: 'React',
      icon: '/logo/reactlogo.svg',
      description: 'JavaScript Library',
      bg: '#314A50', // Teal dark
    },
    {
      name: 'NextJs',
      icon: '/logo/nextjslogo.svg',
      description: 'React Framework',
      bg: '#3C3C3C', // Black with 10% opacity equivalent
    },
    {
      name: 'Tailwind',
      icon: '/logo/tailwindlogo.svg',
      description: 'CSS Utility',
      bg: '#183644', // Dark teal
    },
    {
      name: 'Git',
      icon: '/logo/gitlogo.svg',
      description: 'Version Control',
      bg: '#F14E3220', // Git orange-red
    },
    {
      name: 'Prisma',
      icon: '/logo/prismalogo.svg',
      description: 'ORM Tool',
      bg: '#3C2C78', // Dark violet
    },
    {
      name: 'Supabase',
      icon: '/logo/supabaselogo.svg',
      description: 'Backend Service',
      bg: '#2A473A', // Green dark
    },
    {
      name: 'Laravel',
      icon: '/logo/laravellogo.svg',
      description: 'PHP Framework',
      bg: '#F9322C20', // Laravel red
    },
  ],
} as const;
