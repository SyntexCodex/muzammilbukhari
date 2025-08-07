import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="hero-section container mx-auto px-4 md:px-6 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
      {/* Left content */}
      <div className="flex-1 space-y-6 max-w-xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary">
          <span className="text-theme-primary">Hello,</span> I'm Michael Weaver
        </h1>
        <p className="text-lg md:text-xl text-text-secondary">
          I'm a full-stack developer with a passion for building beautiful, functional, 
          and user-centered digital experiences.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link 
            href="/projects" 
            className="btn-primary px-6 py-3 rounded-md font-medium text-white bg-theme-primary hover:bg-theme-primary-dark transition-colors"
          >
            View Projects
          </Link>
          <Link 
            href="/contact" 
            className="btn-secondary px-6 py-3 rounded-md font-medium border border-ui-border hover:bg-ui-hover transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </div>
      
      {/* Right content - Profile image */}
      <div className="flex-1 flex justify-center md:justify-end">
        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-theme-primary">
          {/* This would be replaced with the actual profile image from the design */}
          <div className="absolute inset-0 bg-ui-secondary flex items-center justify-center text-text-secondary">
            <span className="text-lg">Profile Image</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;