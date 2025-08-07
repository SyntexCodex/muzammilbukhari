'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Project } from './ProjectsLayout';

interface ProjectsListProps {
  projects: Project[];
}

const ProjectsList: React.FC<ProjectsListProps> = ({ projects }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex-1 overflow-y-auto p-6 bg-[#011627]"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="bg-[#011627] border border-[#1E2D3D] rounded-lg overflow-hidden hover:border-[#43D9AD] transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-[#011627] p-1 rounded">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                      stroke="#607B96"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-white mb-2">{project.title}</h3>
                <p className="text-[#607B96] text-sm mb-4">{project.description}</p>
                <Link href={project.link}>
                  <div className="inline-block bg-[#1C2B3A] hover:bg-[#263B50] text-white py-2 px-4 rounded transition-colors">
                    view-project
                  </div>
                </Link>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="col-span-2 flex flex-col items-center justify-center py-16">
            <svg
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#607B96"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mb-4"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M8 15s1.5 2 4 2 4-2 4-2" />
              <line x1="9" y1="9" x2="9.01" y2="9" />
              <line x1="15" y1="9" x2="15.01" y2="9" />
            </svg>
            <p className="text-[#607B96] text-center">
              No projects match your current filters.
              <br />
              Try adjusting your search or category selection.
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectsList;