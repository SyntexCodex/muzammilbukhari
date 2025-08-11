import React from "react";

interface LanguageIconProps {
  name: string;
  color: string;
  iconKey: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const LanguageIcon: React.FC<LanguageIconProps> = ({
  name,
  color,
  size = "md",
  className = "",
}) => {
  const sizeClasses = {
    sm: "w-5 h-5 md:w-6 md:h-6",
    md: "w-6 h-6 md:w-8 md:h-8",
    lg: "w-8 h-8 md:w-10 md:h-10",
  };

  return (
    <div
      className={`language-icon-wrapper relative group ${className}`}
      title={name}
    >
      <div
        className={`language-icon rounded-full p-1 md:p-1.5 ${sizeClasses[size]} flex items-center justify-center transition-all duration-300 hover:scale-110`}
        style={{ backgroundColor: `${color}20` }} // 20 is hex for 12% opacity
      >
        <div
          className={`${sizeClasses[size]} object-contain flex items-center justify-center`}
          style={{ color }}
        >
          {/* Fallback to a simple colored circle if icon fails to load */}
          <div
            className="w-full h-full rounded-full"
            style={{ backgroundColor: color, opacity: 0.8 }}
          ></div>
        </div>
      </div>
      <span
        className="language-icon-glow absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          boxShadow: `0 0 12px 2px ${color}80`, // 80 is hex for 50% opacity
          backgroundColor: `${color}10`, // 10 is hex for 6% opacity
        }}
      ></span>
      <span className="language-icon-tooltip absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-[#1E2D3D] text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap hidden md:block">
        {name}
      </span>
    </div>
  );
};

// Language icon data with colors and icon keys
export const languageIconsData = {
  html: {
    name: "HTML5",
    color: "#E44D26",
    iconKey: "html",
  },
  css: {
    name: "CSS3",
    color: "#1572B6",
    iconKey: "css",
  },
  javascript: {
    name: "JavaScript",
    color: "#F7DF1E",
    iconKey: "javascript",
  },
  typescript: {
    name: "TypeScript",
    color: "#3178C6",
    iconKey: "typescript",
  },
  react: {
    name: "React",
    color: "#61DAFB",
    iconKey: "react",
  },
  nodejs: {
    name: "Node.js",
    color: "#339933",
    iconKey: "nodejs",
  },
  express: {
    name: "Express",
    color: "#000000",
    iconKey: "express",
  },
  mongodb: {
    name: "MongoDB",
    color: "#47A248",
    iconKey: "mongodb",
  },
  tailwind: {
    name: "Tailwind CSS",
    color: "#38B2AC",
    iconKey: "tailwind",
  },
  bootstrap: {
    name: "Bootstrap",
    color: "#7952B3",
    iconKey: "bootstrap",
  },
  materialui: {
    name: "Material UI",
    color: "#0081CB",
    iconKey: "materialui",
  },
  redux: {
    name: "Redux",
    color: "#764ABC",
    iconKey: "redux",
  },
  graphql: {
    name: "GraphQL",
    color: "#E10098",
    iconKey: "graphql",
  },
  docker: {
    name: "Docker",
    color: "#2496ED",
    iconKey: "docker",
  },
  kubernetes: {
    name: "Kubernetes",
    color: "#326CE5",
    iconKey: "kubernetes",
  },
  redis: {
    name: "Redis",
    color: "#DC382D",
    iconKey: "redis",
  },
  socketio: {
    name: "Socket.IO",
    color: "#010101",
    iconKey: "socketio",
  },
  nextjs: {
    name: "Next.js",
    color: "#000000",
    iconKey: "nextjs",
  },
  sass: {
    name: "Sass",
    color: "#CC6699",
    iconKey: "sass",
  },
  git: {
    name: "Git",
    color: "#F05032",
    iconKey: "git",
  },
  jest: {
    name: "Jest",
    color: "#C21325",
    iconKey: "jest",
  },
};

export default LanguageIcon;
