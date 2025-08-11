'use client';

import React, { useEffect, useState } from 'react';
import useResponsive from '@/hooks/useResponsive';

interface AcademyClientWrapperProps {
  children: React.ReactNode;
}

const AcademyClientWrapper: React.FC<AcademyClientWrapperProps> = ({ children }) => {
  const { isMobile, isTablet } = useResponsive();
  const [mounted, setMounted] = useState(false);

  // This effect ensures we only render after hydration to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Add responsive classes based on screen size
  const getResponsiveClasses = () => {
    if (!mounted) return '';
    
    if (isMobile) {
      return 'academy-mobile';
    } else if (isTablet) {
      return 'academy-tablet';
    } else {
      return 'academy-desktop';
    }
  };

  return (
    <div className={`academy-wrapper ${getResponsiveClasses()}`}>
      {children}
    </div>
  );
};

export default AcademyClientWrapper;