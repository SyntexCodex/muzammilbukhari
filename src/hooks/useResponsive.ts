'use client';

import { useState, useEffect } from 'react';

type ScreenSize = 'sm' | 'md' | 'lg' | 'xl';

interface ResponsiveState {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  screenSize: ScreenSize;
  maxIconsToShow: number;
}

export default function useResponsive(): ResponsiveState {
  const [state, setState] = useState<ResponsiveState>({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    screenSize: 'lg',
    maxIconsToShow: 6
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      
      if (width < 640) {
        setState({
          isMobile: true,
          isTablet: false,
          isDesktop: false,
          screenSize: 'sm',
          maxIconsToShow: 2
        });
      } else if (width < 768) {
        setState({
          isMobile: false,
          isTablet: true,
          isDesktop: false,
          screenSize: 'md',
          maxIconsToShow: 3
        });
      } else if (width < 1024) {
        setState({
          isMobile: false,
          isTablet: false,
          isDesktop: true,
          screenSize: 'lg',
          maxIconsToShow: 4
        });
      } else {
        setState({
          isMobile: false,
          isTablet: false,
          isDesktop: true,
          screenSize: 'xl',
          maxIconsToShow: 6
        });
      }
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return state;
}