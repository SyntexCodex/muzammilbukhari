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
      <div className="container mx-auto flex md:hidden justify-between items-center h-[60px] px-4">
        <Link href="/" className="text-[#ffffff] text-sm">
          muzammil-bukhari
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
        <div className="fixed inset-0 bg-[#011627] z-50 md:hidden">
          <div className="flex justify-between items-center h-[60px] px-4 border-b border-[#1E2D3D]">
            <Link href="/" className="text-white text-sm">
              muzammil-bukhari
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2"
              aria-label="Close menu"
            >
              <Image
                src="/icons/profile.png"
                alt="Close"
                width={24}
                height={24}
                className="text-[#607B96]"
              />
            </button>
          </div>
          <nav className="flex flex-col p-4">
            {[...menuItems, { name: "_contact-me", path: "/contact" }].map(
              (item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`py-4 border-b border-[#1E2D3D] ${
                    isActive(item.path) ? "text-[#FEA55F]" : "text-[#607B96]"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
