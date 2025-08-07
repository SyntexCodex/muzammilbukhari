'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectsFilter from './ProjectsFilter';
import ProjectsList from './ProjectsList';

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
  featured?: boolean;
}

const ProjectsLayout: React.FC = () => {
  // Sample project data - would be replaced with actual data from API or CMS
  const allProjects: Project[] = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Duis aute irure dolor in velit esse cillum dolore.',
      tags: ['React'],
      imageUrl: '/placeholder-project.jpg',
      link: '/projects/project-1',
      featured: true,
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Duis aute irure dolor in velit esse cillum dolore.',
      tags: ['HTML'],
      imageUrl: '/placeholder-project.jpg',
      link: '/projects/project-2',
      featured: true,
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'Duis aute irure dolor in velit esse cillum dolore.',
      tags: ['CSS'],
      imageUrl: '/placeholder-project.jpg',
      link: '/projects/project-3',
    },
    {
      id: 4,
      title: 'Project 4',
      description: 'Duis aute irure dolor in velit esse cillum dolore.',
      tags: ['Vue'],
      imageUrl: '/placeholder-project.jpg',
      link: '/projects/project-4',
    },
    {
      id: 5,
      title: 'Project 5',
      description: 'Duis aute irure dolor in velit esse cillum dolore.',
      tags: ['Angular'],
      imageUrl: '/placeholder-project.jpg',
      link: '/projects/project-5',
    },
    {
      id: 6,
      title: 'Project 6',
      description: 'Duis aute irure dolor in velit esse cillum dolore.',
      tags: ['Flutter'],
      imageUrl: '/placeholder-project.jpg',
      link: '/projects/project-6',
    },
    {
      id: 7,
      title: 'Project 7',
      description: 'Duis aute irure dolor in velit esse cillum dolore.',
      tags: ['Gatsby'],
      imageUrl: '/placeholder-project.jpg',
      link: '/projects/project-7',
    },
  ];

  const categories = [
    { id: 'react', name: 'React', checked: false },
    { id: 'html', name: 'HTML', checked: false },
    { id: 'css', name: 'CSS', checked: false },
    { id: 'vue', name: 'Vue', checked: false },
    { id: 'angular', name: 'Angular', checked: false },
    { id: 'gatsby', name: 'Gatsby', checked: false },
    { id: 'flutter', name: 'Flutter', checked: false },
  ];

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter projects based on selected categories and search query
  const filteredProjects = allProjects.filter((project) => {
    const matchesCategories =
      selectedCategories.length === 0 ||
      project.tags.some((tag) =>
        selectedCategories.includes(tag.toLowerCase())
      );

    const matchesSearch =
      searchQuery === '' ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategories && matchesSearch;
  });

  const handleCategoryChange = (categoryId: string, isChecked: boolean) => {
    if (isChecked) {
      setSelectedCategories([...selectedCategories, categoryId.toLowerCase()]);
    } else {
      setSelectedCategories(
        selectedCategories.filter((id) => id !== categoryId.toLowerCase())
      );
    }
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col md:flex-row h-full"
    >
      {/* Projects Filter Sidebar */}
      <ProjectsFilter
        categories={categories}
        onCategoryChange={handleCategoryChange}
        onSearchChange={handleSearchChange}
        searchQuery={searchQuery}
      />

      {/* Projects List */}
      <ProjectsList projects={filteredProjects} />
    </motion.div>
  );
};

export default ProjectsLayout;