'use client';

import React from 'react';
import LanguageIconGroup from './LanguageIconGroup';
import { languageIconsData } from './LocalLanguageIcons';
import useResponsive from '@/hooks/useResponsive';

interface ResponsiveLanguageIconGroupProps {
  icons: Array<keyof typeof languageIconsData>;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const ResponsiveLanguageIconGroup: React.FC<ResponsiveLanguageIconGroupProps> = ({
  icons,
  size = 'md',
  className = ''
}) => {
  const { maxIconsToShow } = useResponsive();
  
  return (
    <LanguageIconGroup
      icons={icons}
      size={size}
      className={className}
      maxIcons={maxIconsToShow}
    />
  );
};

export default ResponsiveLanguageIconGroup;