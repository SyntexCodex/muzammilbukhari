'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Category {
  id: string;
  name: string;
  checked: boolean;
}

interface ProjectsFilterProps {
  categories: Category[];
  onCategoryChange: (categoryId: string, isChecked: boolean) => void;
  onSearchChange: (query: string) => void;
  searchQuery: string;
}

const ProjectsFilter: React.FC<ProjectsFilterProps> = ({
  categories,
  onCategoryChange,
  onSearchChange,
  searchQuery,
}) => {
  const [localCategories, setLocalCategories] = useState<Category[]>(categories);

  const handleCheckboxChange = (categoryId: string) => {
    const updatedCategories = localCategories.map((category) => {
      if (category.id === categoryId) {
        const newCheckedState = !category.checked;
        onCategoryChange(categoryId, newCheckedState);
        return { ...category, checked: newCheckedState };
      }
      return category;
    });

    setLocalCategories(updatedCategories);
  };

  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="w-full md:w-[240px] border-r border-[#1E2D3D] bg-[#011627] overflow-y-auto"
    >
      <div className="p-4 border-b border-[#1E2D3D]">
        <div className="flex items-center">
          <span className="text-[#607B96] mr-2">• projects</span>
        </div>
      </div>

      <div className="p-4 border-b border-[#1E2D3D]">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full bg-[#1E2D3D] text-white border-none rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#43D9AD]"
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#607B96"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2"
            >
              <path d="M1 1L5 5L9 1" stroke="#607B96" strokeWidth="1.5" />
            </svg>
            <span className="text-[#607B96]">categories</span>
          </div>

          <div className="ml-4">
            {localCategories.map((category) => (
              <div key={category.id} className="flex items-center mb-2">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={category.checked}
                    onChange={() => handleCheckboxChange(category.id)}
                    className="hidden"
                  />
                  <div
                    className={`w-4 h-4 mr-2 border ${category.checked ? 'bg-[#607B96] border-[#607B96]' : 'border-[#607B96]'} flex items-center justify-center`}
                  >
                    {category.checked && (
                      <svg
                        width="10"
                        height="8"
                        viewBox="0 0 10 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 4L3.5 6.5L9 1"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>
                  <span className="text-[#607B96]">{category.name}</span>
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsFilter;