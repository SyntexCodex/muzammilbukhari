import { languageIconsData } from './LanguageIcons';

type IconKey = keyof typeof languageIconsData;

// Map each week to its relevant technology icons
const weekIconsMapping: Record<string, IconKey[]> = {
  // Frontend Module
  'week1': ['html'],
  'week2': ['css', 'sass'],
  'week3': ['bootstrap', 'tailwind', 'materialui'],
  'week4': ['css', 'sass'],
  'week5': ['javascript'],
  'week6': ['typescript'],
  'week7': ['typescript', 'javascript'],
  'week8': ['javascript', 'typescript'],
  'week9': ['react', 'typescript'],
  'week10': ['react', 'typescript'],
  'week11': ['react', 'typescript'],
  'week12': ['react', 'typescript', 'css'],
  
  // Backend Module
  'week13': ['nodejs', 'typescript'],
  'week14': ['express', 'nodejs'],
  'week15': ['mongodb', 'nodejs'],
  'week16': ['nodejs', 'express'],
  'week17': ['react', 'nodejs', 'typescript'],
  'week18': ['nodejs', 'express', 'mongodb'],
  'week19': ['react', 'nodejs', 'mongodb'],
  'week20': ['react', 'typescript'],
  'week21-24': ['react', 'nodejs', 'express', 'mongodb'],
  
  // Advanced Module
  'week25': ['mongodb'],
  'week26': ['redis', 'nodejs'],
  'week27': ['graphql', 'nodejs'],
  'week28': ['nodejs', 'socketio'],
  'week29': ['jest', 'react', 'nodejs'],
  'week30': ['git', 'nodejs'],
  'week31-32': ['react', 'typescript'],
  
  // Microservices Module
  'week33-34': ['nodejs', 'express'],
  'week35': ['docker'],
  'week36': ['kubernetes'],
  'week37': ['nodejs', 'git'],
  'week38': ['nodejs', 'express'],
  'week39-44': ['docker', 'kubernetes', 'nodejs', 'mongodb', 'react']
};

// Map each module to its primary technology icons
const moduleIconsMapping: Record<string, IconKey[]> = {
  'frontend': ['html', 'css', 'javascript', 'typescript', 'react'],
  'backend': ['nodejs', 'express', 'mongodb'],
  'advanced': ['graphql', 'redis', 'socketio', 'jest'],
  'microservices': ['docker', 'kubernetes']
};

export { weekIconsMapping, moduleIconsMapping };