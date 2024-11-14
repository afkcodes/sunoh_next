import { Home, Library, Search } from 'lucide-react';

export const IMAGE_MODE = Object.freeze({ SINGLE: 'single', MULTI: 'multi' });

export interface NavItems {
  id: number;
  path: string;
  title: string;
  name: string;
  icon: any;
}

export const navItems: NavItems[] = [
  {
    id: 0,
    path: '/',
    title: 'Home',
    name: 'home',
    icon: Home,
  },
  {
    id: 1,
    path: '/search',
    title: 'Search',
    name: 'search',
    icon: Search,
  },
  {
    id: 4,
    path: '/library',
    title: 'Library',
    name: 'library',
    icon: Library,
  },
];
