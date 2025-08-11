"use client";

import React, { useState, useEffect } from "react";
import MainLayout from "@/components/layout/MainLayout";
import ResponsiveLanguageIconGroup from "@/components/academy/ResponsiveLanguageIconGroup";
import {
  weekIconsMapping,
  moduleIconsMapping,
} from "@/components/academy/weekIconsMapping";
import AcademyClientWrapper from "./AcademyClientWrapper";
import "./academy.css";

interface Module {
  id: string;
  title: string;
  weeks: Week[];
}

interface Week {
  id: string;
  title: string;
  topics: string[];
  project?: string;
}

export default function AcademyPage() {
  const [activeModule, setActiveModule] = useState("frontend");
  const [activeWeek, setActiveWeek] = useState("");
  const [progress, setProgress] = useState<Record<string, number>>({});
  const [showCursor, setShowCursor] = useState(true);

  // Initialize progress data
  useEffect(() => {
    // Simulate saved progress data
    setProgress({
      frontend: 75, // 75% complete
      backend: 40,
      advanced: 15,
      microservices: 5,
    });

    // Cursor blink effect
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  const modules: Module[] = [
    {
      id: "frontend",
      title: "Frontend Mastery (Months 1-3)",
      weeks: [
        {
          id: "week1",
          title: "Week 1: HTML & Web Basics",
          topics: [
            "How the Internet Works (DNS, HTTP/HTTPS, Client-Server)",
            "Semantic HTML5 tags",
            "Forms, inputs, validation",
            "Accessibility, ARIA",
          ],
          project: "Personal Resume (HTML only)",
        },
        {
          id: "week2",
          title: "Week 2: CSS Core",
          topics: [
            "Selectors, Box Model, Specificity",
            "Positioning, Floats, Display",
            "Flexbox & Grid",
            "Media Queries",
            "Animations, Transitions",
          ],
          project: "Responsive Landing Page",
        },
        {
          id: "week3",
          title: "Week 3: UI Frameworks",
          topics: [
            "Bootstrap 5: Utilities, Components, Grid",
            "Tailwind CSS: Utility-first approach",
            "Material UI: Component library",
          ],
          project: "Responsive Portfolio with Tailwind + Bootstrap",
        },
        {
          id: "week4",
          title: "Week 4: Advanced Styling",
          topics: [
            "Dark Mode",
            "Theme Switching",
            "SCSS (Basics)",
            "BEM methodology (Block Element Modifier)",
          ],
        },
        {
          id: "week5",
          title: "Week 5: JavaScript Basics",
          topics: [
            "Data Types, Loops, Conditionals",
            "DOM Manipulation",
            "Events & Form Handling",
            "Local Storage, JSON",
          ],
          project: "Dynamic To-do List",
        },
        {
          id: "week6",
          title: "Week 6: TypeScript Introduction",
          topics: [
            "Why TypeScript",
            "Types, Interfaces, Enums",
            "Functions, Classes",
            "Type inference",
          ],
          project: "Type-safe Quiz App",
        },
        {
          id: "week7",
          title: "Week 7: DOM + TypeScript",
          topics: [
            "DOM Interaction using TS",
            "Type assertions",
            "Handling events safely",
          ],
          project: "Weather App with OpenWeatherMap API",
        },
        {
          id: "week8",
          title: "Week 8: API & Async",
          topics: [
            "Fetch, Axios",
            "Promises, Async/Await",
            "Working with fake APIs (JSONPlaceholder)",
          ],
          project: "Blog Feed App",
        },
        {
          id: "week9",
          title: "Week 9: React Basics with TS",
          topics: ["JSX, TSX", "Functional Components", "useState, useEffect"],
          project: "Counter & Todo App",
        },
        {
          id: "week10",
          title: "Week 10: Forms + Refs",
          topics: [
            "Controlled Components",
            "useRef",
            "Form Validation with React Hook Form + TS",
          ],
          project: "Contact Form App",
        },
        {
          id: "week11",
          title: "Week 11: Routing + Context",
          topics: [
            "React Router v6",
            "Params, Navigation",
            "Context API + Custom Hooks",
          ],
          project: "Blog with Protected Routes",
        },
        {
          id: "week12",
          title: "Week 12: UI & Freelance Practice",
          topics: [
            "Toasts, Modals, Lazy Load",
            "Building Real UI Screens from Figma",
            "Freelance Simulation: Pixel-perfect clone from client brief",
          ],
          project: "Mini eCommerce Frontend UI",
        },
      ],
    },
    {
      id: "backend",
      title: "Backend + E-Commerce Project (Months 4-6)",
      weeks: [
        {
          id: "week13",
          title: "Week 13: Node.js + TypeScript",
          topics: [
            "Setup Node with TS",
            "tsconfig.json, nodemon, module aliases",
            "Core modules: fs, path",
            "Error handling",
          ],
          project: "Local Uploader API",
        },
        {
          id: "week14",
          title: "Week 14: Express + REST",
          topics: [
            "Express Routing & Middleware",
            "CRUD APIs",
            "Custom Error Handling",
            "Postman testing",
          ],
          project: "Product CRUD API",
        },
        {
          id: "week15",
          title: "Week 15: MongoDB + Mongoose",
          topics: [
            "Schema Design",
            "Mongoose Models + Types",
            "Filtering, Pagination",
          ],
          project: "Product Catalog with Filters",
        },
        {
          id: "week16",
          title: "Week 16: Auth + Security",
          topics: [
            "JWT Auth + Refresh Tokens",
            "bcrypt, roles",
            "Secure routes, CORS, Helmet",
          ],
          project: "Auth API (Login/Register/Logout)",
        },
        {
          id: "week17",
          title: "Week 17: Fullstack Auth",
          topics: [
            "Axios + Type interfaces",
            "Auth Context + JWT in frontend",
            "Protected routes",
          ],
          project: "Fullstack Login/Register System",
        },
        {
          id: "week18",
          title: "Week 18: File Uploads",
          topics: [
            "Multer + Cloudinary",
            "Upload images from React",
            "Store URLs in MongoDB",
          ],
          project: "Profile Picture Upload System",
        },
        {
          id: "week19",
          title: "Week 19: Admin Dashboard",
          topics: [
            "Admin Panel UI with Chart.js/Recharts",
            "Table filters, pagination",
            "Role-based access",
          ],
          project: "Admin Dashboard",
        },
        {
          id: "week20",
          title: "Week 20: Advanced Forms",
          topics: [
            "React Hook Form",
            "Yup Validation",
            "Multi-step form wizard",
          ],
          project: "Booking Form Wizard",
        },
        {
          id: "week21-24",
          title: "Week 21-24: Capstone Project",
          topics: [
            "Full Project: eCommerce Store",
            "Products, categories, auth, cart, checkout",
            "Admin & customer dashboards",
            "Fake payments",
            "Responsive frontend",
          ],
        },
      ],
    },
    {
      id: "advanced",
      title: "Advanced Full-Stack Projects (Months 7-9)",
      weeks: [
        {
          id: "week25",
          title: "Week 25: Advanced MongoDB",
          topics: ["Aggregation", "Geo queries", "Indexing"],
          project: "Advanced Product Search",
        },
        {
          id: "week26",
          title: "Week 26: Redis & Sessions",
          topics: ["Redis setup", "Session Storage", "Caching, Pub/Sub"],
          project: "Real-Time Notification App",
        },
        {
          id: "week27",
          title: "Week 27: GraphQL",
          topics: [
            "Apollo Server + Client",
            "GraphQL vs REST",
            "Queries, Mutations, Schemas",
          ],
          project: "Product API with GraphQL",
        },
        {
          id: "week28",
          title: "Week 28: Stripe & WebSockets",
          topics: [
            "Stripe Integration (One-time + Subscription)",
            "Webhooks",
            "Live Chat with Socket.io",
          ],
          project: "SaaS Chat + Payments System",
        },
        {
          id: "week29",
          title: "Week 29: Testing APIs & Frontend",
          topics: [
            "Jest + Supertest",
            "React Testing Library",
            "Manual + automated tests",
          ],
          project: "Fully Tested Auth App",
        },
        {
          id: "week30",
          title: "Week 30: Git + CI/CD",
          topics: [
            "Git branching",
            "GitHub Actions",
            "Deployment pipelines (Netlify, Vercel, Render)",
          ],
          project: "Deployed App with Auto Build",
        },
        {
          id: "week31-32",
          title: "Week 31-32: Freelance Training",
          topics: [
            "React + TS Portfolio",
            "Upwork/Fiverr proposals",
            "Mock freelancing tests",
          ],
        },
      ],
    },
    {
      id: "microservices",
      title: "Microservices + System Design (Months 10-12)",
      weeks: [
        {
          id: "week33-34",
          title: "Week 33-34: Microservices 101",
          topics: [
            "Monolith vs Microservice",
            "API Gateway",
            "Service Communication: REST, Message Brokers",
          ],
          project: "Microservices Blueprint",
        },
        {
          id: "week35",
          title: "Week 35: Docker",
          topics: [
            "Dockerfile for Node & React",
            "Docker Compose",
            "Volumes, Bind Mounts",
          ],
          project: "Dockerized MERN App",
        },
        {
          id: "week36",
          title: "Week 36: Kubernetes Basics",
          topics: [
            "What is Kubernetes",
            "Pods, Services, Deployments",
            "Local Minikube setup",
          ],
        },
        {
          id: "week37",
          title: "Week 37: CI/CD + Logs",
          topics: [
            "PM2 + Logging",
            "Nginx + Reverse Proxy",
            "Auto deployments",
          ],
        },
        {
          id: "week38",
          title: "Week 38: Monitoring",
          topics: [
            "API Logs (Winston, Morgan)",
            "Uptime Monitoring",
            "Analytics",
          ],
          project: "API Monitoring System",
        },
        {
          id: "week39-44",
          title: "Week 39-44: Scalable Capstone App",
          topics: [
            "Scalable Booking App with Microservices",
            "Scalable eCommerce Platform",
            "Multi-tenant SaaS CRM",
            "Auth, Billing, Team Management, Logs, API Gateway, Deployment",
          ],
        },
      ],
    },
  ];

  return (
    <MainLayout>
      <AcademyClientWrapper>
        <div
          className={`min-h-screen bg-[#011627] text-[#607B96] flex flex-col module-${activeModule}`}
        >
          <div className="flex-1 flex flex-col md:flex-row">
            {/* Left Sidebar - Hidden on mobile by default */}
            <div className="md:w-64 border-r border-[#1E2D3D] flex flex-col">
              <div className="border-b border-[#1E2D3D] py-2.5 px-4">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                    <span className="text-sm">academy-modules</span>
                  </div>
                  <button
                    className="md:hidden text-[#607B96]"
                    onClick={() => setActiveWeek("")}
                  >
                    ✕
                  </button>
                </div>
              </div>

              <div className="flex flex-col py-4">
                {modules.map((module) => (
                  <div key={module.id}>
                    <button
                      onClick={() => {
                        setActiveModule(module.id);
                        setActiveWeek("");
                      }}
                      className="flex items-center gap-2 py-2 px-4 text-sm hover:bg-[#1E2D3D] transition-colors academy-module-button"
                      style={{
                        borderLeft:
                          module.id === activeModule
                            ? `3px solid ${
                                {
                                  frontend: "#61DAFB",
                                  backend: "#339933",
                                  advanced: "#764ABC",
                                  microservices: "#2496ED",
                                }[module.id] || "#E99287"
                              }`
                            : "none",
                      }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-[#E99287]"
                      >
                        <path
                          d="M10 6L15.2929 11.2929C15.6834 11.6834 15.6834 12.3166 15.2929 12.7071L10 18"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <span>{module.id}</span>
                          <div className="flex items-center">
                            <ResponsiveLanguageIconGroup
                              icons={moduleIconsMapping[module.id] || []}
                              size="sm"
                              className="mr-1 sm:mr-2"
                            />
                            <span className="text-xs text-[#43D9AD]">
                              {progress[module.id] || 0}%
                            </span>
                          </div>
                        </div>
                        <div className="progress-bar w-full max-w-[100px] sm:max-w-full">
                          <div
                            className="progress-fill"
                            style={{
                              width: `${progress[module.id] || 0}%`,
                              backgroundColor:
                                {
                                  frontend: "#61DAFB",
                                  backend: "#339933",
                                  advanced: "#764ABC",
                                  microservices: "#2496ED",
                                }[module.id] || "#43D9AD",
                            }}
                          ></div>
                        </div>
                      </div>
                    </button>

                    {activeModule === module.id && (
                      <div className="pl-4 md:pl-8 space-y-1 md:space-y-2">
                        {module.weeks.map((week) => {
                          const weekIcons = weekIconsMapping[week.id] || [];
                          const moduleColor =
                            {
                              frontend: "#61DAFB" /* React blue */,
                              backend: "#339933" /* Node.js green */,
                              advanced: "#764ABC" /* Redux purple */,
                              microservices: "#2496ED" /* Docker blue */,
                            }[module.id] || "#607B96";

                          return (
                            <button
                              key={week.id}
                              onClick={() => setActiveWeek(week.id)}
                              className="flex items-center gap-1 sm:gap-2 py-1 sm:py-1.5 md:py-2 px-1 sm:px-2 md:px-4 text-xs md:text-sm hover:bg-[#1E2D3D] transition-colors w-full"
                              data-tooltip={week.title}
                              style={{
                                borderLeft:
                                  activeWeek === week.id
                                    ? `2px solid ${moduleColor}`
                                    : "none",
                                backgroundColor:
                                  activeWeek === week.id
                                    ? "#1E2D3D"
                                    : "transparent",
                              }}
                            >
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-[#607B96] flex-shrink-0"
                              >
                                <path
                                  d="M10 6L15.2929 11.2929C15.6834 11.6834 15.6834 12.3166 15.2929 12.7071L10 18"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                />
                              </svg>
                              <span className="tooltip truncate">
                                {week.id}
                              </span>
                              {weekIcons.length > 0 && (
                                <div className="flex ml-auto gap-1 flex-shrink-0">
                                  <ResponsiveLanguageIconGroup
                                    icons={weekIcons}
                                    size="sm"
                                  />
                                </div>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col border-x border-[#1E2D3D]">
              <div className="border-b border-[#1E2D3D] py-2.5 px-4">
                <div className="flex items-center gap-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 6L15.2929 11.2929C15.6834 11.6834 15.6834 12.3166 15.2929 12.7071L10 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="text-sm truncate">
                    {activeWeek
                      ? modules
                          .find((m) => m.id === activeModule)
                          ?.weeks.find((w) => w.id === activeWeek)?.title
                      : modules.find((m) => m.id === activeModule)?.title}
                  </span>
                  <button
                    className="ml-auto text-sm md:hidden"
                    onClick={() => setActiveWeek("")}
                  >
                    ✕
                  </button>
                </div>
              </div>

              <div className="flex-1 flex flex-col md:flex-row">
                <div className="flex-1 p-2 sm:p-4 md:p-6 font-mono md:border-r border-[#1E2D3D] overflow-y-auto">
                  {activeWeek ? (
                    <div className="space-y-4">
                      <div className="text-sm">
                        <span className="text-[#C98BDF]">/**</span>
                      </div>
                      <div className="text-sm pl-4 flex items-center">
                        <span className="text-[#C98BDF]">*</span>
                        <span className="ml-1">
                          {
                            modules
                              .find((m) => m.id === activeModule)
                              ?.weeks.find((w) => w.id === activeWeek)?.title
                          }
                        </span>
                        <div className="ml-auto">
                          <ResponsiveLanguageIconGroup
                            icons={weekIconsMapping[activeWeek] || []}
                            size="sm"
                          />
                        </div>
                      </div>

                      <div className="text-sm pl-4">
                        <span className="text-[#C98BDF]">*</span> Topics:
                      </div>

                      {modules
                        .find((m) => m.id === activeModule)
                        ?.weeks.find((w) => w.id === activeWeek)
                        ?.topics.map((topic, index) => {
                          {
                            /* Extract potential technology names from the topic for icons */
                          }
                          const techMatches = Object.keys(
                            weekIconsMapping
                          ).filter((tech) =>
                            topic.toLowerCase().includes(tech.toLowerCase())
                          );

                          return (
                            <div
                              key={index}
                              className="text-sm pl-8 topic-item flex items-center justify-between hover:bg-[#1E2D3D] rounded p-1 transition-colors"
                            >
                              <div>
                                <span className="text-[#C98BDF]">*</span>{" "}
                                <span className="text-[#43D9AD]">-</span>{" "}
                                {topic}
                              </div>
                              {techMatches.length > 0 && (
                                <ResponsiveLanguageIconGroup
                                  icons={weekIconsMapping[techMatches[0]] || []}
                                  size="sm"
                                />
                              )}
                            </div>
                          );
                        })}

                      {modules
                        .find((m) => m.id === activeModule)
                        ?.weeks.find((w) => w.id === activeWeek)?.project && (
                        <>
                          <div className="text-sm pl-4">
                            <span className="text-[#C98BDF]">*</span> Project:
                          </div>
                          <div className="text-sm pl-8 topic-item flex items-center justify-between hover:bg-[#1E2D3D] rounded p-1 transition-colors">
                            <div>
                              <span className="text-[#C98BDF]">*</span>{" "}
                              <span className="text-[#FEA55F]">-</span>{" "}
                              {
                                modules
                                  .find((m) => m.id === activeModule)
                                  ?.weeks.find((w) => w.id === activeWeek)
                                  ?.project
                              }
                            </div>
                            <ResponsiveLanguageIconGroup
                              icons={weekIconsMapping[activeWeek] || []}
                              size="sm"
                            />
                          </div>
                        </>
                      )}

                      <div className="text-sm">
                        <span className="text-[#C98BDF]">*/</span>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="text-sm">
                        <span className="text-[#C98BDF]">/**</span>
                      </div>
                      <div className="text-sm pl-4 flex items-center justify-between">
                        <div>
                          <span className="text-[#C98BDF]">*</span>{" "}
                          {modules.find((m) => m.id === activeModule)?.title}
                        </div>
                        <ResponsiveLanguageIconGroup
                          icons={moduleIconsMapping[activeModule] || []}
                          size="sm"
                        />
                      </div>
                      <div className="text-sm pl-4">
                        <span className="text-[#C98BDF]">*</span> This module
                        contains{" "}
                        {
                          modules.find((m) => m.id === activeModule)?.weeks
                            .length
                        }{" "}
                        weeks of content.
                      </div>
                      <div className="text-sm pl-4">
                        <span className="text-[#C98BDF]">*</span> Progress:
                        <span className="text-[#43D9AD]">
                          {progress[activeModule] || 0}%
                        </span>{" "}
                        complete
                        <div className="w-24 sm:w-32 h-2 bg-[#1E2D3D] rounded-full mt-1 overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-500"
                            style={{
                              width: `${progress[activeModule] || 0}%`,
                              backgroundColor:
                                {
                                  frontend: "#61DAFB",
                                  backend: "#339933",
                                  advanced: "#764ABC",
                                  microservices: "#2496ED",
                                }[activeModule] || "#43D9AD",
                            }}
                          ></div>
                        </div>
                      </div>
                      <div className="text-sm pl-4">
                        <span className="text-[#C98BDF]">*</span> Select a week
                        from the sidebar to view details
                        {showCursor && <span className="cursor-blink"></span>}
                      </div>
                      <div className="text-sm">
                        <span className="text-[#C98BDF]">*/</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Panel - Code Examples */}
                <div className="w-full md:w-[400px] flex flex-col">
                  <div className="border-b border-[#1E2D3D] py-2.5 px-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm">
                        {/* Code snippet examples: */}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 p-4 md:p-6 space-y-4 md:space-y-6 overflow-y-auto">
                    {activeModule === "frontend" && (
                      <>
                        <div
                          className={`border border-[#1E2D3D] rounded-lg overflow-hidden bg-[#011627] code-block module-${activeModule}`}
                        >
                          <div className="border-b border-[#1E2D3D] p-3 md:p-4 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-[#E99287]"
                              >
                                <path
                                  d="M10 6L15.2929 11.2929C15.6834 11.6834 15.6834 12.3166 15.2929 12.7071L10 18"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                />
                              </svg>
                              <span className="text-sm truncate">
                                html-example.html
                              </span>
                            </div>
                          </div>
                          <div className="p-2 sm:p-3 md:p-4">
                            <pre className="text-xs sm:text-sm font-mono whitespace-pre-wrap text-[#607B96] overflow-x-auto">
                              <code>
                                {`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Portfolio</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <h1>John Doe</h1>
    <p>Frontend Developer</p>
  </header>
  <main>
    <section id="about">
      <h2>About Me</h2>
      <p>I'm a passionate web developer...</p>
    </section>
  </main>
</body>
</html>`}
                              </code>
                            </pre>
                          </div>
                        </div>

                        <div className="border border-[#1E2D3D] rounded-lg overflow-hidden bg-[#011627] code-block">
                          <div className="border-b border-[#1E2D3D] p-4 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-[#43D9AD]"
                              >
                                <path
                                  d="M10 6L15.2929 11.2929C15.6834 11.6834 15.6834 12.3166 15.2929 12.7071L10 18"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                />
                              </svg>
                              <span className="text-sm">
                                react-component.tsx
                              </span>
                            </div>
                          </div>
                          <div className="p-2 sm:p-3 md:p-4">
                            <pre className="text-xs sm:text-sm font-mono whitespace-pre-wrap text-[#607B96] overflow-x-auto">
                              <code>
                                {`import React, { useState } from 'react';

interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [input, setInput] = useState('');
  
  const addTodo = () => {
    if (input) {
      setTodos([...todos, {
        id: Date.now(),
        text: input,
        completed: false
      }]);
      setInput('');
    }
  };
  
  return (
    <div>
      <h1>Todo List</h1>
      <input 
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;`}
                              </code>
                            </pre>
                          </div>
                        </div>
                      </>
                    )}

                    {activeModule === "backend" && (
                      <>
                        <div
                          className={`border border-[#1E2D3D] rounded-lg overflow-hidden bg-[#011627] code-block module-${activeModule}`}
                        >
                          <div className="border-b border-[#1E2D3D] p-4 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-[#FEA55F]"
                              >
                                <path
                                  d="M10 6L15.2929 11.2929C15.6834 11.6834 15.6834 12.3166 15.2929 12.7071L10 18"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                />
                              </svg>
                              <span className="text-sm">express-server.ts</span>
                            </div>
                          </div>
                          <div className="p-4">
                            <pre className="text-sm font-mono whitespace-pre-wrap text-[#607B96]">
                              <code>
                                {`import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import productRoutes from './routes/products';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);

// Error handling middleware
app.use((err: Error, req: Request, res: Response) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/ecommerce')
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(\`Server running on port \${PORT}\`);
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });`}
                              </code>
                            </pre>
                          </div>
                        </div>

                        <div
                          className={`border border-[#1E2D3D] rounded-lg overflow-hidden bg-[#011627] code-block module-${activeModule}`}
                        >
                          <div className="border-b border-[#1E2D3D] p-4 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-[#43D9AD]"
                              >
                                <path
                                  d="M10 6L15.2929 11.2929C15.6834 11.6834 15.6834 12.3166 15.2929 12.7071L10 18"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                />
                              </svg>
                              <span className="text-sm">product.model.ts</span>
                            </div>
                          </div>
                          <div className="p-4">
                            <pre className="text-sm font-mono whitespace-pre-wrap text-[#607B96]">
                              <code>
                                {`import mongoose, { Document, Schema } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  category: string;
  inStock: boolean;
  imageUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  inStock: { type: Boolean, default: true },
  imageUrl: { type: String },
}, { timestamps: true });

export default mongoose.model<IProduct>('Product', ProductSchema);`}
                              </code>
                            </pre>
                          </div>
                        </div>
                      </>
                    )}

                    {activeModule === "advanced" && (
                      <>
                        <div
                          className={`border border-[#1E2D3D] rounded-lg overflow-hidden bg-[#011627] code-block module-${activeModule}`}
                        >
                          <div className="border-b border-[#1E2D3D] p-4 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-[#C98BDF]"
                              >
                                <path
                                  d="M10 6L15.2929 11.2929C15.6834 11.6834 15.6834 12.3166 15.2929 12.7071L10 18"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                />
                              </svg>
                              <span className="text-sm">graphql-schema.ts</span>
                            </div>
                          </div>
                          <div className="p-4">
                            <pre className="text-sm font-mono whitespace-pre-wrap text-[#607B96]">
                              <code>
                                {`import { gql } from 'apollo-server-express';

const typeDefs = gql\`
  type Product {
    id: ID!
    name: String!
    description: String!
    price: Float!
    category: String!
    inStock: Boolean!
    imageUrl: String
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    products: [Product!]!
    product(id: ID!): Product
  }

  type Mutation {
    createProduct(input: ProductInput!): Product!
    updateProduct(id: ID!, input: ProductInput!): Product!
    deleteProduct(id: ID!): Boolean!
  }

  input ProductInput {
    name: String!
    description: String!
    price: Float!
    category: String!
    inStock: Boolean
    imageUrl: String
  }
\`;

export default typeDefs;`}
                              </code>
                            </pre>
                          </div>
                        </div>

                        <div
                          className={`border border-[#1E2D3D] rounded-lg overflow-hidden bg-[#011627] code-block module-${activeModule}`}
                        >
                          <div className="border-b border-[#1E2D3D] p-4 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-[#FEA55F]"
                              >
                                <path
                                  d="M10 6L15.2929 11.2929C15.6834 11.6834 15.6834 12.3166 15.2929 12.7071L10 18"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                />
                              </svg>
                              <span className="text-sm">socket-chat.ts</span>
                            </div>
                          </div>
                          <div className="p-4">
                            <pre className="text-sm font-mono whitespace-pre-wrap text-[#607B96]">
                              <code>
                                {`import { Server } from 'socket.io';
import http from 'http';

export default function setupSocketIO(server: http.Server) {
  const io = new Server(server, {
    cors: {
      origin: process.env.CLIENT_URL,
      methods: ['GET', 'POST']
    }
  });

  io.on('connection', (socket) => {
    console.log('User connected:', socket.id);

    socket.on('join_room', (roomId) => {
      socket.join(roomId);
      console.log(\`User \${socket.id} joined room: \${roomId}\`);
    });

    socket.on('send_message', (data) => {
      socket.to(data.room).emit('receive_message', data);
    });

    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id);
    });
  });

  return io;
}`}
                              </code>
                            </pre>
                          </div>
                        </div>
                      </>
                    )}

                    {activeModule === "microservices" && (
                      <>
                        <div
                          className={`border border-[#1E2D3D] rounded-lg overflow-hidden bg-[#011627] code-block module-${activeModule}`}
                        >
                          <div className="border-b border-[#1E2D3D] p-4 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-[#43D9AD]"
                              >
                                <path
                                  d="M10 6L15.2929 11.2929C15.6834 11.6834 15.6834 12.3166 15.2929 12.7071L10 18"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                />
                              </svg>
                              <span className="text-sm">Dockerfile</span>
                            </div>
                          </div>
                          <div className="p-4">
                            <pre className="text-sm font-mono whitespace-pre-wrap text-[#607B96]">
                              <code>
                                {`FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000

CMD ["npm", "start"]`}
                              </code>
                            </pre>
                          </div>
                        </div>

                        <div
                          className={`border border-[#1E2D3D] rounded-lg overflow-hidden bg-[#011627] code-block module-${activeModule}`}
                        >
                          <div className="border-b border-[#1E2D3D] p-4 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-[#4D5BCE]"
                              >
                                <path
                                  d="M10 6L15.2929 11.2929C15.6834 11.6834 15.6834 12.3166 15.2929 12.7071L10 18"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                />
                              </svg>
                              <span className="text-sm">
                                docker-compose.yml
                              </span>
                            </div>
                          </div>
                          <div className="p-4">
                            <pre className="text-sm font-mono whitespace-pre-wrap text-[#607B96]">
                              <code>
                                {`version: '3.8'

services:
  api-gateway:
    build: ./api-gateway
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    depends_on:
      - auth-service
      - product-service

  auth-service:
    build: ./auth-service
    environment:
      - MONGODB_URI=mongodb://mongo:27017/auth
      - JWT_SECRET=your_jwt_secret
    depends_on:
      - mongo

  product-service:
    build: ./product-service
    environment:
      - MONGODB_URI=mongodb://mongo:27017/products
    depends_on:
      - mongo

  mongo:
    image: mongo:latest
    volumes:
      - mongo-data:/data/db
    ports:
      - "27017:27017"

volumes:
  mongo-data:`}
                              </code>
                            </pre>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AcademyClientWrapper>
    </MainLayout>
  );
}
