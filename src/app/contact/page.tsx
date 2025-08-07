import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Contact from '@/components/home/Contact';

export default function ContactPage() {
  return (
    <MainLayout>
      <div className="min-h-screen py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4 text-center">
              Contact <span className="text-theme-primary">Me</span>
            </h1>
            <p className="text-text-secondary text-center max-w-2xl mx-auto">
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