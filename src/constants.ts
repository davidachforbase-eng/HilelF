import { Project, Service, Client } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "NEON NIGHTS",
    category: "Music Video",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "URBAN PULSE",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "THE CRAFT",
    category: "Documentary",
    image: "https://images.unsplash.com/photo-1585863262628-98e9871fa288?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "VELOCITY",
    category: "Automotive",
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "ETHEREAL",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "DEEP DIVE",
    category: "Underwater",
    image: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "CYBER PUNK",
    category: "VFX Short",
    image: "https://images.unsplash.com/photo-1515630278258-407f66498911?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 8,
    title: "GOLDEN HOUR",
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 9,
    title: "APEX",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1600&auto=format&fit=crop",
  }
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Creative Direction",
    description: "Visualizing the narrative before the camera rolls.",
    icon: "Layout",
    videoBg: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Offline Editing",
    description: "Crafting the story beat by beat.",
    icon: "Scissors",
    videoBg: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Color Grading",
    description: "Setting the mood with cinematic palettes.",
    icon: "Palette",
    videoBg: "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Sound Design",
    description: "Immersive audio landscapes.",
    icon: "Headphones",
    videoBg: "https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=800&auto=format&fit=crop"
  }
];

export const CLIENTS: Client[] = [
  { id: 1, name: "Vogue", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Vogue_logo.svg" },
  { id: 2, name: "Nike", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" },
  { id: 3, name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
  { id: 4, name: "Sony", logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg" },
];