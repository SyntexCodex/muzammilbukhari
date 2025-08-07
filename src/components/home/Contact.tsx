'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    try {
      // In a real application, you would send the form data to your backend or a form service
      await new Promise(resolve => setTimeout(resolve, 1500));
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    } catch (error) {
      setFormStatus('error');
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }
  };

  return (
    <section id="contact" className="contact-section container mx-auto px-4 md:px-6 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-text-primary text-center">
          Get in <span className="text-theme-primary">Touch</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Contact information */}
          <div className="space-y-6">
            <p className="text-text-secondary">
              I'm interested in freelance opportunities – especially ambitious or 
              large projects. However, if you have other requests or questions, 
              don't hesitate to use the form.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-theme-primary bg-opacity-10 flex items-center justify-center text-theme-primary">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 5L12 14L21 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-text-primary">Email</h3>
                  <a href="mailto:michael.weaver@example.com" className="text-text-secondary hover:text-theme-primary transition-colors">
                    michael.weaver@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-theme-primary bg-opacity-10 flex items-center justify-center text-theme-primary">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 10C20 14.4183 16.4183 18 12 18C7.58172 18 4 14.4183 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 18V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 22H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-text-primary">Location</h3>
                  <p className="text-text-secondary">San Francisco, CA</p>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <h3 className="text-lg font-medium text-text-primary mb-4">Social Media</h3>
              <div className="flex gap-4">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-ui-secondary hover:bg-ui-hover transition-colors flex items-center justify-center text-text-primary"
                  aria-label="GitHub"
                >
                  <Image src="/icons/icon-git.svg" alt="GitHub" width={24} height={24} />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-ui-secondary hover:bg-ui-hover transition-colors flex items-center justify-center text-text-primary"
                  aria-label="Twitter"
                >
                  <Image src="/icons/icon-x.svg" alt="Twitter" width={24} height={24} />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-ui-secondary hover:bg-ui-hover transition-colors flex items-center justify-center text-text-primary"
                  aria-label="LinkedIn"
                >
                  <Image src="/icons/icon-linkedin.svg" alt="LinkedIn" width={24} height={24} />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-ui-secondary hover:bg-ui-hover transition-colors flex items-center justify-center text-text-primary"
                  aria-label="Facebook"
                >
                  <Image src="/icons/icon-facebook.svg" alt="Facebook" width={24} height={24} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact form */}
          <div className="bg-base-secondary p-6 rounded-lg shadow-md">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-text-secondary mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md border border-ui-border bg-base-primary text-text-primary focus:outline-none focus:ring-2 focus:ring-theme-primary"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-text-secondary mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md border border-ui-border bg-base-primary text-text-primary focus:outline-none focus:ring-2 focus:ring-theme-primary"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-text-secondary mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 rounded-md border border-ui-border bg-base-primary text-text-primary focus:outline-none focus:ring-2 focus:ring-theme-primary resize-none"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="btn-primary w-full px-6 py-3 rounded-md font-medium text-white bg-theme-primary hover:bg-theme-primary-dark transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
              
              {formStatus === 'success' && (
                <div className="p-3 bg-green-100 text-green-800 rounded-md">
                  Your message has been sent successfully!
                </div>
              )}
              
              {formStatus === 'error' && (
                <div className="p-3 bg-red-100 text-red-800 rounded-md">
                  There was an error sending your message. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;