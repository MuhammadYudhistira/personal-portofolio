import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons';

export const DATA = {
  navbar: [
    { href: '/#', icon: GitHubLogoIcon, label: 'Github' },
    { href: '/#', icon: InstagramLogoIcon, label: 'Instagram' },
    { href: '/#', icon: LinkedInLogoIcon, label: 'LinkedIn' },
  ],
} as const;
