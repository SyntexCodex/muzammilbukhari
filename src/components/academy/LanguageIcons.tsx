import React from 'react';

interface LanguageIconProps {
  name: string;
  color: string;
  iconUrl: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const LanguageIcon: React.FC<LanguageIconProps> = ({ 
  name, 
  color, 
  iconUrl, 
  size = 'md',
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10'
  };

  return (
    <div 
      className={`language-icon-wrapper relative group ${className}`}
      title={name}
    >
      <div 
        className={`language-icon rounded-full p-1.5 ${sizeClasses[size]} flex items-center justify-center transition-all duration-300 hover:scale-110`}
        style={{ backgroundColor: `${color}20` }} // 20 is hex for 12% opacity
      >
        <img 
          src={iconUrl} 
          alt={name} 
          className={`${sizeClasses[size]} object-contain`}
        />
      </div>
      <span 
        className="language-icon-glow absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ 
          boxShadow: `0 0 12px 2px ${color}80`, // 80 is hex for 50% opacity
          backgroundColor: `${color}10` // 10 is hex for 6% opacity
        }}
      ></span>
      <span className="language-icon-tooltip absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-[#1E2D3D] text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
        {name}
      </span>
    </div>
  );
};

// Language icon data with colors and CDN URLs
export const languageIconsData = {
  html: {
    name: 'HTML5',
    color: '#E44D26',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
  },
  css: {
    name: 'CSS3',
    color: '#1572B6',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
  },
  javascript: {
    name: 'JavaScript',
    color: '#F7DF1E',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
  },
  typescript: {
    name: 'TypeScript',
    color: '#3178C6',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
  },
  react: {
    name: 'React',
    color: '#61DAFB',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
  },
  nodejs: {
    name: 'Node.js',
    color: '#339933',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
  },
  express: {
    name: 'Express',
    color: '#000000',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
  },
  mongodb: {
    name: 'MongoDB',
    color: '#47A248',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
  },
  tailwind: {
    name: 'Tailwind CSS',
    color: '#38B2AC',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg'
  },
  bootstrap: {
    name: 'Bootstrap',
    color: '#7952B3',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg'
  },
  materialui: {
    name: 'Material UI',
    color: '#0081CB',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg'
  },
  redux: {
    name: 'Redux',
    color: '#764ABC',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg'
  },
  graphql: {
    name: 'GraphQL',
    color: '#E10098',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg'
  },
  docker: {
    name: 'Docker',
    color: '#2496ED',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
  },
  kubernetes: {
    name: 'Kubernetes',
    color: '#326CE5',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg'
  },
  redis: {
    name: 'Redis',
    color: '#DC382D',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg'
  },
  socketio: {
    name: 'Socket.IO',
    color: '#010101',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg'
  },
  nextjs: {
    name: 'Next.js',
    color: '#000000',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
  },
  sass: {
    name: 'Sass',
    color: '#CC6699',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg'
  },
  git: {
    name: 'Git',
    color: '#F05032',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
  },
  jest: {
    name: 'Jest',
    color: '#C21325',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg'
  }
};

export default LanguageIcon;