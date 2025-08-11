"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  const menuItems = [
    { name: "_hello", path: "/" },
    { name: "_about-me", path: "/about-me" },
    { name: "_projects", path: "/projects" },
    { name: "_my-academy", path: "/my-academy" },
  ];

  return (
    <header className="border-b border-[#1E2D3D] bg-[#011627]">
      {/* Desktop Header */}
      <div className="container mx-auto hidden md:flex items-center h-[72px]">
        <div className="flex items-center mr-8">
          <Link
            href="/"
            className="text-[#607B96] flex items-center gap-2 hover:text-white transition-colors"
          >
            <div>
              {" "}
              <Image
                src="/icons/profile.png"
                alt="profile"
                width={40}
                height={40}
                className="rounded-full mr-2"
              />
            </div>
            <div>muzammil-bukhari</div>
          </Link>
        </div>
        <nav className="flex h-full mr-auto">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center px-6 border-l border-[#1E2D3D] ${
                isActive(item.path)
                  ? "text-white border-b-2 border-b-[#FEA55F]"
                  : "text-[#607B96] hover:text-white"
              } transition-colors`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className={`flex items-center px-6 border-l border-[#1E2D3D] ${
            isActive("/contact")
              ? "text-white border-b-2 border-b-[#FEA55F]"
              : "text-[#607B96] hover:text-white"
          } transition-colors`}
        >
          _contact-me
        </Link>
      </div>

      {/* Mobile Header */}
      <div className="container mx-auto flex md:hidden justify-between items-center h-[60px] px-4 sticky top-0 z-40 bg-[#011627]">
        <Link href="/" className="text-[#ffffff] text-sm flex items-center">
          <Image
            src="/icons/profile.png"
            alt="profile"
            width={30}
            height={30}
            className="rounded-full mr-2"
          />
          <span>muzammil-bukhari</span>
        </Link>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2"
          aria-label="Toggle menu"
        >
          <Image
            src="/icons/icon-menu.svg"
            alt="Menu"
            width={24}
            height={24}
            className="text-[#f8f8f8]"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-[#011627] z-50 md:hidden flex flex-col">
          <div className="flex justify-between items-center h-[60px] px-4 border-b border-[#1E2D3D]">
            <Link href="/" className="text-white text-sm flex items-center">
              <Image
                src="/icons/profile.png"
                alt="profile"
                width={30}
                height={30}
                className="rounded-full mr-2"
              />
              <span>muzammil-bukhari</span>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-full bg-[#1E2D3D] hover:bg-[#2b3f56] transition-colors"
              aria-label="Close menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <nav className="flex flex-col p-4 overflow-y-auto">
            {[...menuItems, { name: "_contact-me", path: "/contact" }].map(
              (item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`py-4 px-2 my-1 border-b border-[#1E2D3D] flex items-center ${
                    isActive(item.path) 
                      ? "text-[#FEA55F] bg-[#1E2D3D] rounded-md" 
                      : "text-[#607B96] hover:bg-[#1E2D3D] hover:text-white rounded-md transition-colors"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="text-[#FEA55F] mr-2">{'>'}</span>
                  {item.name}
                </Link>
              )
            )}
          </nav>
          <div className="mt-auto p-4 border-t border-[#1E2D3D] text-center text-[#607B96] text-sm">
            © 2023 Muzammil Bukhari
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
