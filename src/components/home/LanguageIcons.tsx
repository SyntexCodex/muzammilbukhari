'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface LanguageIcon {
  id: number;
  name: string;
  url: string;
  position: { x: number; y: number };
  velocity: { x: number; y: number };
  size: number;
}

const LanguageIcons = () => {
  const [icons, setIcons] = useState<LanguageIcon[]>([
    {
      id: 1,
      name: 'JavaScript',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      position: { x: 20, y: 20 },
      velocity: { x: 0.2, y: 0.1 },
      size: 40,
    },
    {
      id: 2,
      name: 'React',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      position: { x: 80, y: 60 },
      velocity: { x: -0.1, y: 0.2 },
      size: 50,
    },
    {
      id: 3,
      name: 'Node.js',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      position: { x: 150, y: 30 },
      velocity: { x: 0.15, y: -0.1 },
      size: 45,
    },
    {
      id: 4,
      name: 'TypeScript',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      position: { x: 200, y: 100 },
      velocity: { x: -0.2, y: -0.15 },
      size: 35,
    },
    {
      id: 5,
      name: 'MongoDB',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      position: { x: 250, y: 50 },
      velocity: { x: 0.1, y: 0.25 },
      size: 40,
    },
    {
      id: 6,
      name: 'HTML5',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      position: { x: 300, y: 80 },
      velocity: { x: -0.15, y: 0.1 },
      size: 38,
    },
    {
      id: 7,
      name: 'CSS3',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      position: { x: 350, y: 40 },
      velocity: { x: 0.12, y: -0.18 },
      size: 42,
    },
    {
      id: 8,
      name: 'Next.js',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
      position: { x: 400, y: 120 },
      velocity: { x: -0.1, y: -0.1 },
      size: 48,
    },
  ]);

  useEffect(() => {
    // Animation frame for zero gravity movement
    let animationFrameId: number;
    const containerWidth = typeof window !== 'undefined' ? window.innerWidth : 500;
    const containerHeight = typeof window !== 'undefined' ? window.innerHeight : 500;

    // Initialize icons with random positions across the screen
    setIcons(prevIcons => 
      prevIcons.map(icon => ({
        ...icon,
        position: {
          x: Math.random() * (containerWidth - icon.size),
          y: Math.random() * (containerHeight - icon.size),
        },
        // Add some randomness to velocities
        velocity: {
          x: icon.velocity.x * (0.8 + Math.random() * 0.4),
          y: icon.velocity.y * (0.8 + Math.random() * 0.4),
        },
      }))
    );

    const animate = () => {
      setIcons((prevIcons) =>
        prevIcons.map((icon) => {
          // Update position based on velocity
          let newX = icon.position.x + icon.velocity.x;
          let newY = icon.position.y + icon.velocity.y;

          // Bounce off the edges with a small random change in velocity
          if (newX <= 0 || newX >= containerWidth - icon.size) {
            const randomFactor = 0.05 * (Math.random() - 0.5);
            icon.velocity.x = -icon.velocity.x + randomFactor;
            newX = newX <= 0 ? 0 : containerWidth - icon.size;
          }

          if (newY <= 0 || newY >= containerHeight - icon.size) {
            const randomFactor = 0.05 * (Math.random() - 0.5);
            icon.velocity.y = -icon.velocity.y + randomFactor;
            newY = newY <= 0 ? 0 : containerHeight - icon.size;
          }

          return {
            ...icon,
            position: { x: newX, y: newY },
          };
        })
      );

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    // Handle window resize
    const handleResize = () => {
      // Reset positions if window size changes dramatically
      if (Math.abs(window.innerWidth - containerWidth) > 200) {
        setIcons((prevIcons) =>
          prevIcons.map((icon, index) => ({
            ...icon,
            position: {
              x: Math.random() * (window.innerWidth - icon.size),
              y: Math.random() * (window.innerHeight - icon.size),
            },
          }))
        );
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {icons.map((icon) => (
        <motion.div
          key={icon.id}
          className="absolute hover:scale-110 transition-transform duration-300 animate-float pulse-glow"
          style={{
            left: `${icon.position.x}px`,
            top: `${icon.position.y}px`,
            width: `${icon.size}px`,
            height: `${icon.size}px`,
            animationDelay: `${icon.id * 0.5}s`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1, delay: icon.id * 0.2 }}
          whileHover={{ opacity: 1 }}
        >
          <img
            src={icon.url}
            alt={`${icon.name} icon`}
            className="w-full h-full object-contain filter drop-shadow-md"
            title={icon.name}
            style={{ filter: 'drop-shadow(0 0 3px rgba(255, 255, 255, 0.3))' }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default LanguageIcons;