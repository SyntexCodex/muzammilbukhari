'use client';

import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import WhatsAppChat from './WhatsAppChat';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#011627] text-white">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <WhatsAppChat />
    </div>
  );
};

export default MainLayout;