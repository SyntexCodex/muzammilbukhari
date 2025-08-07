import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
}

const Projects = () => {
  // Sample project data - would be replaced with actual data from API or CMS
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-featured online store with product management, cart functionality, and payment processing.',
      tags: ['React', 'Node.js', 'MongoDB'],
      imageUrl: '/placeholder-project.svg',
      link: '/projects/e-commerce',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A productivity application for organizing tasks, setting deadlines, and tracking progress.',
      tags: ['TypeScript', 'React', 'Firebase'],
      imageUrl: '/placeholder-project.svg',
      link: '/projects/task-manager',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Real-time weather information with forecasts, maps, and location-based services.',
      tags: ['JavaScript', 'API Integration', 'CSS'],
      imageUrl: '/placeholder-project.svg',
      link: '/projects/weather-app',
    },
  ];

  return (
    <section id="projects" className="projects-section container mx-auto px-4 md:px-6 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 md:mb-0">
            My <span className="text-theme-primary">Projects</span>
          </h2>
          <Link 
            href="/projects" 
            className="text-theme-primary hover:text-theme-primary-dark transition-colors font-medium flex items-center gap-2"
          >
            View All Projects
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="project-card bg-base-secondary rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48 bg-ui-secondary overflow-hidden">
                {/* Project image */}
                <Image 
                  src={project.imageUrl}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-text-primary">{project.title}</h3>
                <p className="text-text-secondary mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-ui-tertiary text-text-tertiary text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link 
                  href={project.link} 
                  className="text-theme-primary hover:text-theme-primary-dark transition-colors font-medium flex items-center gap-2"
                >
                  View Project
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;