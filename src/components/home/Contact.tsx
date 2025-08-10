"use client";

import React from "react";
import Image from "next/image";

const Contact = () => {
  return (
    <section
      id="contact"
      className="contact-section container mx-auto px-4 md:px-6 py-16 md:py-24"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-text-primary text-center">
          Get in <span className="text-theme-primary">Touch</span>
        </h2>

        <div className="bg-[#011627] border border-[#1E2D3D] rounded-lg overflow-hidden">
          <div className="border-b border-[#1E2D3D] p-4 flex items-center">
            <div className="text-[#607B96] font-mono text-sm">contact-info</div>
          </div>

          <div className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left side - Contact information */}
              <div className="space-y-6">
                <p className="text-[#607B96]">
                  I&rsquo;m interested in freelance opportunities – especially
                  ambitious or large projects. However, if you have other
                  requests or questions, don&rsquo;t hesitate to reach out
                  through any of these channels.
                </p>

                <div className="space-y-5">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#1C2B3A] flex items-center justify-center text-[#43D9AD]">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M3 5L12 14L21 5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white">Email</h3>
                      <a
                        href="mailto:muzammil.bukhari@example.com"
                        className="text-[#607B96] hover:text-[#43D9AD] transition-colors"
                      >
                        muzammil.bukhari@example.com
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#1C2B3A] flex items-center justify-center text-[#43D9AD]">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 21L5 15C3.9 13.6 3 11.8 3 9.9C3 5.4 6.6 1.8 11.1 1.8C15.6 1.8 19.2 5.4 19.2 9.9C19.2 14.4 15.6 18 11.1 18C9.2 18 7.4 17.1 6 16L3 21Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9 10C9 10.5523 8.55228 11 8 11C7.44772 11 7 10.5523 7 10C7 9.44772 7.44772 9 8 9C8.55228 9 9 9.44772 9 10Z"
                          fill="currentColor"
                        />
                        <path
                          d="M13 10C13 10.5523 12.5523 11 12 11C11.4477 11 11 10.5523 11 10C11 9.44772 11.4477 9 12 9C12.5523 9 13 9.44772 13 10Z"
                          fill="currentColor"
                        />
                        <path
                          d="M17 10C17 10.5523 16.5523 11 16 11C15.4477 11 15 10.5523 15 10C15 9.44772 15.4477 9 16 9C16.5523 9 17 9.44772 17 10Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white">
                        WhatsApp
                      </h3>
                      <a
                        href="https://wa.me/+923982146359"
                        className="text-[#607B96] hover:text-[#43D9AD] transition-colors"
                      >
                        +92 398 214 6359
                      </a>
                    </div>
                  </div>

                  {/* Discord */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#1C2B3A] flex items-center justify-center text-[#43D9AD]">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 11.5C9 12.3284 8.32843 13 7.5 13C6.67157 13 6 12.3284 6 11.5C6 10.6716 6.67157 10 7.5 10C8.32843 10 9 10.6716 9 11.5Z"
                          fill="currentColor"
                        />
                        <path
                          d="M16.5 13C17.3284 13 18 12.3284 18 11.5C18 10.6716 17.3284 10 16.5 10C15.6716 10 15 10.6716 15 11.5C15 12.3284 15.6716 13 16.5 13Z"
                          fill="currentColor"
                        />
                        <path
                          d="M18.25 4H5.75C4.23122 4 3 5.23122 3 6.75V17.25C3 18.7688 4.23122 20 5.75 20H15.25L14.75 18L16 19.25L17.25 20.5L19.5 22.5V6.75C19.5 5.23122 18.2688 4 16.75 4H18.25ZM13.25 15.5C13.25 15.5 12.875 15.125 12.5 14.75C14 14.25 14.5 13.25 14.5 13.25C14 13.5 13.5 13.75 13 13.875C12.25 14.125 11.5 14.25 10.75 14.375C9.25 14.5 7.75 14.375 6.5 14C5.75 13.75 5.125 13.5 4.5 13.25C4.25 13.125 4 13 3.75 12.875C3.75 12.875 4.25 13.875 5.75 14.375C5.375 14.75 5 15.5 5 15.5C3.25 15.4375 2.5 13.875 2.5 13.875C2.5 10.375 4 7.5 4 7.5C5.5 6.375 6.875 6.375 6.875 6.375L7 6.5C5.5 7 4.75 7.75 4.75 7.75C4.75 7.75 5 7.625 5.375 7.5C6.375 7 6.875 6.875 7.25 6.875C7.375 6.875 7.5 6.875 7.625 6.875C8.25 6.75 9 6.75 9.75 6.875C10.75 7 11.75 7.375 12.75 8C12.125 7.625 11.375 7.25 10.5 7L10.75 6.875C10.75 6.875 12.125 6.875 13.625 8C13.625 8 15.125 10.875 15.125 14.375C15.125 14.375 14.375 15.4375 12.625 15.5H13.25Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white">
                        Discord
                      </h3>
                      <a
                        href="https://discord.gg/example"
                        className="text-[#607B96] hover:text-[#43D9AD] transition-colors"
                      >
                        muzammil.bukhari
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - Social links */}
              <div className="space-y-6">
                <div className="bg-[#1C2B3A] p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-white mb-4">
                    Professional Profiles
                  </h3>

                  <div className="space-y-4">
                    {/* GitHub */}
                    <a
                      href="https://github.com/muzammilbukhari"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-md hover:bg-[#263B50] transition-colors"
                    >
                      <div className="w-10 h-10 rounded-full bg-[#011627] flex items-center justify-center">
                        <Image
                          src="/icons/icon-git.svg"
                          alt="GitHub"
                          width={24}
                          height={24}
                        />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">GitHub</h4>
                        <p className="text-[#607B96] text-sm">
                          github.com/muzammilbukhari
                        </p>
                      </div>
                    </a>

                    {/* LinkedIn */}
                    <a
                      href="https://linkedin.com/in/muzammilbukhari"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-md hover:bg-[#263B50] transition-colors"
                    >
                      <div className="w-10 h-10 rounded-full bg-[#011627] flex items-center justify-center">
                        <Image
                          src="/icons/icon-linkedin.svg"
                          alt="LinkedIn"
                          width={24}
                          height={24}
                        />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">LinkedIn</h4>
                        <p className="text-[#607B96] text-sm">
                          linkedin.com/in/muzammilbukhari
                        </p>
                      </div>
                    </a>

                    {/* Upwork */}
                    <a
                      href="https://upwork.com/freelancers/muzammilbukhari"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-md hover:bg-[#263B50] transition-colors"
                    >
                      <div className="w-10 h-10 rounded-full bg-[#011627] flex items-center justify-center text-[#6FDA44]">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18.561 13.158C17.6 13.158 16.776 12.764 16.165 12.129L16.607 10.493L16.617 10.453C16.777 9.881 17.017 9.085 17.401 8.442C18.251 6.714 19.5 5.7 20.934 5.7C22.161 5.7 23.1 6.516 23.1 7.781C23.1 9.598 21.015 13.158 18.561 13.158ZM20.934 3C18.689 3 16.868 4.326 15.721 6.781C14.936 8.483 14.549 10.027 14.549 10.027L13.817 12.669C13.517 12.861 13.207 13.022 12.889 13.158C12.889 13.158 12.539 12.1 11.9 12.1C11.261 12.1 9.1 13.158 9.1 16.9C9.1 20.642 11.9 21 11.9 21C11.9 21 12.539 21 13.178 19.942C13.817 18.884 14.456 17.158 14.456 17.158C14.456 17.158 14.776 18.216 16.054 18.216C19.5 18.216 23.1 14.216 23.1 9.558C23.1 5.7 22.161 3 20.934 3ZM6.5 13.158C5.539 13.158 4.715 12.764 4.104 12.129L4.546 10.493L4.556 10.453C4.716 9.881 4.956 9.085 5.34 8.442C6.19 6.714 7.439 5.7 8.873 5.7C10.1 5.7 11.039 6.516 11.039 7.781C11.039 9.598 8.954 13.158 6.5 13.158ZM8.873 3C6.628 3 4.807 4.326 3.66 6.781C2.875 8.483 2.488 10.027 2.488 10.027L1.756 12.669C1.456 12.861 1.146 13.022 0.828 13.158C0.828 13.158 0.478 12.1 -0.161 12.1C-0.8 12.1 -2.961 13.158 -2.961 16.9C-2.961 20.642 -0.161 21 -0.161 21C-0.161 21 0.478 21 1.117 19.942C1.756 18.884 2.395 17.158 2.395 17.158C2.395 17.158 2.715 18.216 3.993 18.216C7.439 18.216 11.039 14.216 11.039 9.558C11.039 5.7 10.1 3 8.873 3Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-white font-medium">Upwork</h4>
                        <p className="text-[#607B96] text-sm">
                          upwork.com/freelancers/muzammilbukhari
                        </p>
                      </div>
                    </a>

                    {/* Twitter/X */}
                    <a
                      href="https://twitter.com/muzammilbukhari"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-md hover:bg-[#263B50] transition-colors"
                    >
                      <div className="w-10 h-10 rounded-full bg-[#011627] flex items-center justify-center">
                        <Image
                          src="/icons/icon-x.svg"
                          alt="Twitter"
                          width={24}
                          height={24}
                        />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">Twitter</h4>
                        <p className="text-[#607B96] text-sm">
                          twitter.com/muzammilbukhari
                        </p>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="text-[#607B96] text-sm">
                  <p>{/* Feel free to reach out through any of these channels */}</p>
                  <p>{/* I typically respond within 24 hours */}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
