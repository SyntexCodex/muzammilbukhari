'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Project } from './ProjectsLayout';

interface ProjectDetailProps {
  project: Project;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  // State for collapsible sections on mobile
  const [sectionsOpen, setSectionsOpen] = useState({
    description: true,
    details: false,
    technologies: false
  });
  
  // Toggle section visibility
  const toggleSection = (section: 'description' | 'details' | 'technologies') => {
    setSectionsOpen(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col w-full h-full bg-[#011627] overflow-y-auto"
    >
      <div className="p-4 md:p-6">
        <div className="mb-6">
          <Link href="/projects" className="text-[#607B96] hover:text-white transition-colors">
            <span className="flex items-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2"
              >
                <path
                  d="M10 12L6 8L10 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              back to projects
            </span>
          </Link>
        </div>

        <div className="bg-[#011627] border border-[#1E2D3D] rounded-lg overflow-hidden">
          <div className="relative h-64 md:h-96 overflow-hidden">
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={1200}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-4 md:p-6">
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">{project.title}</h1>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-[#1C2B3A] text-[#607B96] px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Description Section - Collapsible on Mobile */}
            <div className="mb-6 border-b border-[#1E2D3D] pb-4">
              <div 
                className="flex items-center justify-between cursor-pointer md:cursor-default mb-2"
                onClick={() => toggleSection('description')}
              >
                <h2 className="text-xl text-white font-medium">Description</h2>
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`md:hidden transition-transform duration-300 ${sectionsOpen.description ? 'transform rotate-180' : ''}`}
                >
                  <path d="M1 1L5 5L9 1" stroke="#607B96" strokeWidth="1.5" />
                </svg>
              </div>
              
              <motion.div 
                initial={{ height: 'auto' }}
                animate={{ 
                  height: sectionsOpen.description || window.innerWidth >= 768 ? 'auto' : 0,
                  opacity: sectionsOpen.description || window.innerWidth >= 768 ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                style={{ overflow: 'hidden' }}
                className="prose prose-invert max-w-none"
              >
                <p className="text-[#E5E9F0] mb-4">{project.description}</p>
                
                {/* This would be expanded with more detailed content in a real project */}
                <p className="text-[#E5E9F0] mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. 
                  Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus 
                  rhoncus ut eleifend nibh porttitor. Ut in nulla enim.
                </p>
                
                <p className="text-[#E5E9F0]">
                  Phasellus molestie magna non est bibendum non venenatis nisl tempor. 
                  Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. 
                  Praesent id metus massa, ut blandit odio.
                </p>
              </motion.div>
            </div>
            
            {/* Technologies Section - Collapsible on Mobile */}
            <div className="mb-6 border-b border-[#1E2D3D] pb-4">
              <div 
                className="flex items-center justify-between cursor-pointer md:cursor-default mb-2"
                onClick={() => toggleSection('technologies')}
              >
                <h2 className="text-xl text-white font-medium">Technologies</h2>
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`md:hidden transition-transform duration-300 ${sectionsOpen.technologies ? 'transform rotate-180' : ''}`}
                >
                  <path d="M1 1L5 5L9 1" stroke="#607B96" strokeWidth="1.5" />
                </svg>
              </div>
              
              <motion.div 
                initial={{ height: 'auto' }}
                animate={{ 
                  height: sectionsOpen.technologies || window.innerWidth >= 768 ? 'auto' : 0,
                  opacity: sectionsOpen.technologies || window.innerWidth >= 768 ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                style={{ overflow: 'hidden' }}
              >
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-[#43D9AD] mr-2"></div>
                      <span className="text-[#607B96]">{tag}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
            
            {/* Project Details Section - Collapsible on Mobile */}
            <div className="mb-6">
              <div 
                className="flex items-center justify-between cursor-pointer md:cursor-default mb-2"
                onClick={() => toggleSection('details')}
              >
                <h2 className="text-xl text-white font-medium">Project Details</h2>
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`md:hidden transition-transform duration-300 ${sectionsOpen.details ? 'transform rotate-180' : ''}`}
                >
                  <path d="M1 1L5 5L9 1" stroke="#607B96" strokeWidth="1.5" />
                </svg>
              </div>
              
              <motion.div 
                initial={{ height: 'auto' }}
                animate={{ 
                  height: sectionsOpen.details || window.innerWidth >= 768 ? 'auto' : 0,
                  opacity: sectionsOpen.details || window.innerWidth >= 768 ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                style={{ overflow: 'hidden' }}
                className="prose prose-invert max-w-none"
              >

              </motion.div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#1C2B3A] hover:bg-[#263B50] text-white py-2 px-4 rounded transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                View Live Demo
              </a>
              
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#1C2B3A] hover:bg-[#263B50] text-white py-2 px-4 rounded transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
                View Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;