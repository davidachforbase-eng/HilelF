import { Project, Service, Client } from './types';

// Vertical Images for TikTok/Reels style
export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "VIRAL DANCE",
    category: "2.4M Views",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop", 
  },
  {
    id: 2,
    title: "GYM SHARK",
    category: "Conversion Ad",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "STREET EATS",
    category: "Retention King",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "TECH REVIEW",
    category: "Tech Tok",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "FASHION HAUL",
    category: "Trends",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "CRYPTO NEWS",
    category: "Talking Head",
    image: "https://images.unsplash.com/photo-1621504450168-b8c437536180?q=80&w=1000&auto=format&fit=crop",
  }
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "THE HOOK",
    description: "First 3 seconds that stop the scroll dead in its tracks.",
    icon: "Layout",
    videoBg: ""
  },
  {
    id: 2,
    title: "RETENTION",
    description: "Pacing edits that keep eyes glued to the screen.",
    icon: "Scissors",
    videoBg: ""
  },
  {
    id: 3,
    title: "TREND JACKING",
    description: "Using viral sounds and formats before they expire.",
    icon: "Headphones",
    videoBg: ""
  },
  {
    id: 4,
    title: "CONVERSION",
    description: "CTAs that actually make people click and buy.",
    icon: "Palette",
    videoBg: ""
  }
];

export const CLIENTS: Client[] = [
  { id: 1, name: "TikTok", logo: "https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg" },
  { id: 2, name: "Instagram", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" },
  { id: 3, name: "YouTube", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" },
  { id: 4, name: "Snapchat", logo: "https://upload.wikimedia.org/wikipedia/en/c/c4/Snapchat_logo.svg" },
];