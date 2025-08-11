import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Contact from '@/components/home/Contact';

export default function ContactPage() {
  return (
    <MainLayout>
      <div className="min-h-screen py-6 sm:py-8 md:py-12 lg:py-20 xl:py-24">
        <div className="container mx-auto px-3 sm:px-4 md:px-5 lg:px-6">
          <div className="max-w-4xl mx-auto mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-text-primary mb-2 sm:mb-3 md:mb-4 text-center">
              Contact <span className="text-theme-primary">Me</span>
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-text-secondary text-center max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl mx-auto px-2 sm:px-0">
              Have a question or want to work together? Feel free to reach out using the form below 
              or connect with me on social media.
            </p>
          </div>
        </div>
        
        {/* Reuse the Contact component from the home page */}
        <Contact />
      </div>
    </MainLayout>
  );
}