'use client';

import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import ProjectsLayout from '@/components/projects/ProjectsLayout';

export default function ProjectsPage() {
  return (
    <MainLayout>
      <div className="flex flex-col h-[calc(100vh-72px)]">
        <ProjectsLayout />
      </div>
    </MainLayout>
  );
}