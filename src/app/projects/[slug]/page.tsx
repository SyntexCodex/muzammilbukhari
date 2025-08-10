"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import MainLayout from "@/components/layout/MainLayout";
import ProjectDetail from "@/components/projects/ProjectDetail";
import { Project } from "@/components/projects/ProjectsLayout";
import Link from "next/link";

// Extended project interface with additional details
interface ExtendedProject extends Project {
  longDescription?: string;
  technologies?: string[];
  challenges?: string[];
  solutions?: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export default function ProjectDetailPage() {
  const params = useParams();
  const { slug } = params;

  const [project, setProject] = useState<ExtendedProject | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real application, you would fetch the project data from an API
    // For this example, we'll use mock data
    const mockProjects: Record<string, ExtendedProject> = {
      "e-commerce": {
        id: 1,
        title: "E-commerce Platform",
        description:
          "A full-featured online store with product management, cart functionality, and payment processing.",
        longDescription:
          "This e-commerce platform provides businesses with a complete solution for selling products online. It includes features such as product catalog management, shopping cart functionality, secure checkout process, order management, and customer accounts. The platform is built with scalability in mind, allowing businesses to grow their online presence without technical limitations.",
        tags: ["React", "Node.js", "MongoDB"],
        imageUrl: "/placeholder-project.svg",
        link: "/projects/e-commerce",
        featured: true,
        technologies: [
          "React",
          "Node.js",
          "Express",
          "MongoDB",
          "Redux",
          "Stripe API",
          "AWS S3",
        ],
        challenges: [
          "Implementing a secure and efficient payment processing system",
          "Designing a scalable database structure for product variations",
          "Optimizing image loading for product galleries",
          "Creating a responsive design that works across all devices",
        ],
        solutions: [
          "Integrated Stripe API with custom webhook handling for payment processing",
          "Designed a flexible MongoDB schema with nested attributes for product variations",
          "Implemented lazy loading and image optimization techniques",
          "Used CSS Grid and Flexbox with media queries for responsive layouts",
        ],
        demoUrl: "https://example-ecommerce.com",
        githubUrl: "https://github.com/example/ecommerce",
      },
      "task-manager": {
        id: 2,
        title: "Task Management App",
        description:
          "A productivity application for organizing tasks, setting deadlines, and tracking progress.",
        longDescription:
          "This task management application helps users organize their work and personal tasks in one place. It features task creation with priorities and deadlines, project organization, progress tracking, and collaboration tools. The app uses real-time updates to ensure all users have the most current information when collaborating on shared tasks or projects.",
        tags: ["TypeScript", "React", "Firebase"],
        imageUrl: "/placeholder-project.svg",
        link: "/projects/task-manager",
        featured: true,
        technologies: [
          "TypeScript",
          "React",
          "Firebase",
          "Firestore",
          "React DnD",
          "Material UI",
        ],
        challenges: [
          "Creating a drag-and-drop interface for task management",
          "Implementing real-time updates across multiple devices",
          "Designing an intuitive user interface for complex task relationships",
          "Managing state across multiple components",
        ],
        solutions: [
          "Used React DnD library for drag-and-drop functionality",
          "Leveraged Firebase Firestore for real-time database capabilities",
          "Implemented a user-centered design process with multiple iterations",
          "Used Context API and custom hooks for state management",
        ],
        demoUrl: "https://example-taskmanager.com",
        githubUrl: "https://github.com/example/taskmanager",
      },
      "weather-app": {
        id: 3,
        title: "Weather Dashboard",
        description:
          "Real-time weather information with forecasts, maps, and location-based services.",
        longDescription:
          "This weather dashboard provides users with current weather conditions and forecasts for any location worldwide. It features interactive maps, hourly and daily forecasts, severe weather alerts, and location-based services. The application uses multiple weather data sources to ensure accuracy and reliability of the information presented.",
        tags: ["JavaScript", "API Integration", "CSS"],
        imageUrl: "/placeholder-project.svg",
        link: "/projects/weather-app",
        featured: true,
        technologies: [
          "JavaScript",
          "OpenWeather API",
          "Mapbox API",
          "Chart.js",
          "Geolocation API",
          "LocalStorage",
        ],
        challenges: [
          "Integrating multiple third-party APIs for comprehensive weather data",
          "Visualizing complex weather data in an understandable format",
          "Optimizing API calls to minimize usage and costs",
          "Handling different time zones and location formats",
        ],
        solutions: [
          "Created a unified data model to normalize responses from different APIs",
          "Used Chart.js for data visualization and custom CSS for weather icons",
          "Implemented caching strategies and request batching",
          "Built a location service that handles various input formats and coordinates",
        ],
        demoUrl: "https://example-weather.com",
        githubUrl: "https://github.com/example/weather",
      },
    };

    // Simulate API call
    setTimeout(() => {
      if (typeof slug === "string" && mockProjects[slug]) {
        setProject(mockProjects[slug]);
      }
      setLoading(false);
    }, 500);
  }, [slug]);

  if (loading) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-ui-secondary rounded w-3/4 mx-auto mb-4"></div>
              <div className="h-4 bg-ui-secondary rounded w-1/2 mx-auto mb-12"></div>
              <div className="h-64 bg-ui-secondary rounded mb-8"></div>
              <div className="h-4 bg-ui-secondary rounded mb-2"></div>
              <div className="h-4 bg-ui-secondary rounded mb-2"></div>
              <div className="h-4 bg-ui-secondary rounded mb-2"></div>
              <div className="h-4 bg-ui-secondary rounded w-3/4 mb-8"></div>
            </div>
          </div>
        </div>
      </MainLayout>
    );
  }

  if (!project) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Project Not Found
            </h1>
            <p className="text-text-secondary mb-8">
              The project you&rsquo;re looking for doesn&rsquo;t exist or has
              been removed.
            </p>
            <Link
              href="/projects"
              className="btn-primary px-6 py-3 rounded-md font-medium text-white bg-theme-primary hover:bg-theme-primary-dark transition-colors inline-block"
            >
              Back to Projects
            </Link>
          </div>
        </div>
      </MainLayout>
    );
  }

  // Convert the extended project to the base Project type for our component
  const baseProject = project
    ? {
        id: project.id,
        title: project.title,
        description: project.description,
        tags: project.tags,
        imageUrl: project.imageUrl,
        link: project.link,
        featured: project.featured,
      }
    : null;

  return (
    <MainLayout>
      <div className="flex flex-col h-[calc(100vh-72px)]">
        {baseProject && <ProjectDetail project={baseProject} />}
      </div>
    </MainLayout>
  );
}
