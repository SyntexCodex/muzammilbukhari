'use client';

import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import './about-me.css'; // Add custom CSS for the page

interface Education {
  name: string;
  degree?: string;
  year?: string;
  description: string;
}

interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string;
}

export default function AboutPage() {
  const [activeSection, setActiveSection] = useState('bio');
  const [activeEducation, setActiveEducation] = useState('');
  const [activeExperience, setActiveExperience] = useState('');

  const bio = {
    content: 'I have 5 years of experience in web development lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  };

  const interests = {
    content: 'Passionate about web development, artificial intelligence, and creating innovative solutions. I enjoy learning new technologies, contributing to open-source projects, and solving complex problems.'
  };

  const education: Education[] = [
    {
      name: 'high-school',
      degree: 'High School Diploma',
      year: '2015-2017',
      description: 'Completed high school with focus on computer science and mathematics.'
    },
    {
      name: 'university',
      degree: 'Bachelor in Computer Science',
      year: '2017-2021',
      description: 'Specialized in software engineering with focus on web technologies and artificial intelligence.'
    }
  ];

  const experiences: Experience[] = [
    {
      company: 'Tech Solutions Inc',
      position: 'Senior Web Developer',
      duration: '2021-Present',
      description: 'Leading frontend development team, implementing modern web technologies and best practices.'
    },
    {
      company: 'Digital Innovations',
      position: 'Full Stack Developer',
      duration: '2019-2021',
      description: 'Developed and maintained multiple web applications using React and Node.js.'
    }
  ];

  // Function to handle mobile tab selection
  const handleMobileTabClick = (section: string) => {
    setActiveSection(section);
    // Reset sub-selections when changing main section
    if (section === 'education') {
      setActiveEducation('');
    } else if (section === 'experience') {
      setActiveExperience('');
    }
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-[#011627] text-[#607B96] flex flex-col">
        <div className="flex-1 flex flex-col md:flex-row">
          {/* Left Sidebar - Mobile Tabs on top, Desktop sidebar */}
          <div className="md:w-64 md:border-r border-[#1E2D3D] flex flex-col">
            <div className="border-b border-[#1E2D3D] py-2.5 px-4">
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/></svg>
                <span className="text-sm">personal-info</span>
              </div>
            </div>
              
              {/* Mobile Navigation - Horizontal scrolling tabs */}
               <div className="md:hidden flex overflow-x-auto py-2 px-2 border-b border-[#1E2D3D] no-scrollbar">
                 <button
                   onClick={() => handleMobileTabClick('bio')}
                   className={`flex items-center gap-1 py-1 px-3 text-xs rounded-md mr-2 whitespace-nowrap transition-colors ${activeSection === 'bio' ? 'bg-[#1E2D3D] text-white' : 'hover:bg-[#1E2D3D]/50'}`}
                 >
                   <span className="w-2 h-2 rounded-full bg-[#E99287]"></span>
                   bio
                 </button>
                 <button
                   onClick={() => handleMobileTabClick('interests')}
                   className={`flex items-center gap-1 py-1 px-3 text-xs rounded-md mr-2 whitespace-nowrap transition-colors ${activeSection === 'interests' ? 'bg-[#1E2D3D] text-white' : 'hover:bg-[#1E2D3D]/50'}`}
                 >
                   <span className="w-2 h-2 rounded-full bg-[#43D9AD]"></span>
                   interests
                 </button>
                 <button
                   onClick={() => handleMobileTabClick('education')}
                   className={`flex items-center gap-1 py-1 px-3 text-xs rounded-md mr-2 whitespace-nowrap transition-colors ${activeSection === 'education' ? 'bg-[#1E2D3D] text-white' : 'hover:bg-[#1E2D3D]/50'}`}
                 >
                   <span className="w-2 h-2 rounded-full bg-[#3A49A4]"></span>
                   education
                 </button>
                 <button
                   onClick={() => handleMobileTabClick('experience')}
                   className={`flex items-center gap-1 py-1 px-3 text-xs rounded-md mr-2 whitespace-nowrap transition-colors ${activeSection === 'experience' ? 'bg-[#1E2D3D] text-white' : 'hover:bg-[#1E2D3D]/50'}`}
                 >
                   <span className="w-2 h-2 rounded-full bg-[#FEA55F]"></span>
                   experience
                 </button>
               </div>
              
              {/* Desktop Navigation - Vertical sidebar */}
              <div className="hidden md:flex flex-col py-4">
                <button
                  onClick={() => setActiveSection('bio')}
                  className="flex items-center gap-2 py-2 px-4 text-sm hover:bg-[#1E2D3D] transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#E99287]"><path d="M10 6L15.2929 11.2929C15.6834 11.6834 15.6834 12.3166 15.2929 12.7071L10 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                  bio
                </button>
                <button
                  onClick={() => setActiveSection('interests')}
                  className="flex items-center gap-2 py-2 px-4 text-sm hover:bg-[#1E2D3D] transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#43D9AD]"><path d="M12 3L14.5 8.5L20.5 9L16 13L17.5 19L12 16L6.5 19L8 13L3.5 9L9.5 8.5L12 3Z" stroke="currentColor" strokeWidth="2"/></svg>
                  interests
                </button>
                <button
                  onClick={() => setActiveSection('education')}
                  className="flex items-center gap-2 py-2 px-4 text-sm hover:bg-[#1E2D3D] transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#3A49A4]"><path d="M10 6L15.2929 11.2929C15.6834 11.6834 15.6834 12.3166 15.2929 12.7071L10 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                  education
                </button>
                {activeSection === 'education' && (
                  <div className="pl-8 space-y-2">
                    {education.map((edu) => (
                      <button
                        key={edu.name}
                        onClick={() => setActiveEducation(edu.name)}
                        className={`flex items-center gap-2 py-2 px-4 text-sm hover:bg-[#1E2D3D] transition-colors ${activeEducation === edu.name ? 'bg-[#1E2D3D]/70' : ''}`}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#607B96]"><path d="M10 6L15.2929 11.2929C15.6834 11.6834 15.6834 12.3166 15.2929 12.7071L10 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                        {edu.name}
                      </button>
                    ))}
                  </div>
                )}
                <button
                  onClick={() => setActiveSection('experience')}
                  className="flex items-center gap-2 py-2 px-4 text-sm hover:bg-[#1E2D3D] transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#FEA55F]"><path d="M10 6L15.2929 11.2929C15.6834 11.6834 15.6834 12.3166 15.2929 12.7071L10 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                  experience
                </button>
                {activeSection === 'experience' && (
                  <div className="pl-8 space-y-2">
                    {experiences.map((exp) => (
                      <button
                        key={exp.company}
                        onClick={() => setActiveExperience(exp.company)}
                        className={`flex items-center gap-2 py-2 px-4 text-sm hover:bg-[#1E2D3D] transition-colors ${activeExperience === exp.company ? 'bg-[#1E2D3D]/70' : ''}`}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#607B96]"><path d="M10 6L15.2929 11.2929C15.6834 11.6834 15.6834 12.3166 15.2929 12.7071L10 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                        {exp.company}
                      </button>
                    ))}
                  </div>
                )}
              </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col md:border-x border-[#1E2D3D]">
            <div className="border-b border-[#1E2D3D] py-2.5 px-4">
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 6L15.2929 11.2929C15.6834 11.6834 15.6834 12.3166 15.2929 12.7071L10 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                <span className="text-sm">{activeSection}</span>
                <button className="ml-auto text-sm">✕</button>
              </div>
            </div>
            <div className="flex-1 flex flex-col md:flex-row">
              <div className="flex-1 p-4 md:p-6 font-mono md:border-r border-[#1E2D3D]">
              {activeSection === 'bio' && (
                <div className="space-y-4">
                  <div className="text-sm">
                    <span className="text-[#C98BDF]">/**</span>
                  </div>
                  <div className="text-sm pl-4">
                    <span className="text-[#C98BDF]">*</span> About me
                  </div>
                  <div className="text-sm pl-4">
                    <span className="text-[#C98BDF]">*</span> {bio.content}
                  </div>
                  <div className="text-sm">
                    <span className="text-[#C98BDF]">*/</span>
                  </div>
                </div>
              )}

              {activeSection === 'interests' && (
                <div className="space-y-4">
                  <div className="text-sm">
                    <span className="text-[#C98BDF]">/**</span>
                  </div>
                  <div className="text-sm pl-4">
                    <span className="text-[#C98BDF]">*</span> Interests
                  </div>
                  <div className="text-sm pl-4">
                    <span className="text-[#C98BDF]">*</span> {interests.content}
                  </div>
                  <div className="text-sm">
                    <span className="text-[#C98BDF]">*/</span>
                  </div>
                </div>
              )}

              {activeSection === 'education' && (
                <div className="space-y-4">
                  {activeEducation ? (
                    <div className="space-y-4">
                      <div className="text-sm">
                        <span className="text-[#C98BDF]">/**</span>
                      </div>
                      <div className="text-sm pl-4">
                        <span className="text-[#C98BDF]">*</span> {education.find(e => e.name === activeEducation)?.degree}
                      </div>
                      <div className="text-sm pl-4">
                        <span className="text-[#C98BDF]">*</span> {education.find(e => e.name === activeEducation)?.description}
                      </div>
                      <div className="text-sm">
                        <span className="text-[#C98BDF]">*/</span>
                      </div>
                    </div>
                  ) : (
                    <div className="text-sm text-[#607B96]">
                      {/* Mobile education selection */}
                      <div className="md:hidden space-y-3 pt-2">
                        {education.map((edu) => (
                          <button
                            key={edu.name}
                            onClick={() => setActiveEducation(edu.name)}
                            className="block w-full text-left p-2 border border-[#1E2D3D] rounded hover:bg-[#1E2D3D]/50 transition-colors"
                          >
                            <div className="font-medium">{edu.degree}</div>
                            <div className="text-xs opacity-70">{edu.year}</div>
                          </button>
                        ))}
                      </div>
                      <div className="hidden md:block">Select an education item</div>
                    </div>
                  )}
                </div>
              )}

              {activeSection === 'experience' && (
                <div className="space-y-4">
                  {activeExperience ? (
                    <div className="space-y-4">
                      <div className="text-sm">
                        <span className="text-[#C98BDF]">/**</span>
                      </div>
                      <div className="text-sm pl-4">
                        <span className="text-[#C98BDF]">*</span> {experiences.find(e => e.company === activeExperience)?.position}
                      </div>
                      <div className="text-sm pl-4">
                        <span className="text-[#C98BDF]">*</span> {experiences.find(e => e.company === activeExperience)?.description}
                      </div>
                      <div className="text-sm">
                        <span className="text-[#C98BDF]">*/</span>
                      </div>
                    </div>
                  ) : (
                    <div className="text-sm text-[#607B96]">
                      {/* Mobile experience selection */}
                      <div className="md:hidden space-y-3 pt-2">
                        {experiences.map((exp) => (
                          <button
                            key={exp.company}
                            onClick={() => setActiveExperience(exp.company)}
                            className="block w-full text-left p-2 border border-[#1E2D3D] rounded hover:bg-[#1E2D3D]/50 transition-colors"
                          >
                            <div className="font-medium">{exp.position}</div>
                            <div className="text-xs opacity-70">{exp.duration}</div>
                          </button>
                        ))}
                      </div>
                      <div className="hidden md:block">Select an experience item</div>
                    </div>
                  )}
                </div>
              )}
            </div>
              <div className="w-full md:w-[400px] flex flex-col">
                  <div className="border-b border-[#1E2D3D] py-2.5 px-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm">{/* Code snippet showcase: */}</span>
                    </div>
                  </div>
                  <div className="flex-1 p-4 md:p-6 space-y-4 md:space-y-6">
                    <div className="border border-[#1E2D3D] rounded-lg overflow-hidden bg-[#011627]">
                      <div className="border-b border-[#1E2D3D] p-3 md:p-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#E99287]"><path d="M10 6L15.2929 11.2929C15.6834 11.6834 15.6834 12.3166 15.2929 12.7071L10 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                          <span className="text-sm">@username</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <button className="text-sm">details</button>
                          <span>★ 3 stars</span>
                        </div>
                      </div>
                      <div className="p-3 md:p-4">
                        <pre className="text-xs md:text-sm font-mono whitespace-pre-wrap text-[#607B96] overflow-x-auto">
                          <code>
                            {`function initializeModelChunk<T>(chunk: ResolvedModelChunk): T {
  const value: T = parseModel(chunk._response, chunk._value);
  const initializedChunk: InitializedChunk<T> = (chunk: any);
  initializedChunk._status = INITIALIZED;
  initializedChunk._value = value;
  return value;
}`}
                          </code>
                        </pre>
                      </div>
                    </div>
                    <div className="border border-[#1E2D3D] rounded-lg overflow-hidden bg-[#011627]">
                      <div className="border-b border-[#1E2D3D] p-3 md:p-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#E99287]"><path d="M10 6L15.2929 11.2929C15.6834 11.6834 15.6834 12.3166 15.2929 12.7071L10 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                          <span className="text-sm">@username</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <button className="text-sm">details</button>
                          <span>★ 0 stars</span>
                        </div>
                      </div>
                      <div className="p-3 md:p-4">
                        <pre className="text-xs md:text-sm font-mono whitespace-pre-wrap text-[#607B96] overflow-x-auto">
                          <code>
                            {`export function parseModelTuple(
  response: Response,
  value: {+[key: string]: JSONValue} | $ReadOnlyArray<JSONValue>,
): any {
  const tuple: [mixed, mixed, mixed, mixed] = (value: any);
  return value;
}`}
                          </code>
                        </pre>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}