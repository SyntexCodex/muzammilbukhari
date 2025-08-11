import React from 'react';
import LanguageIcon, { languageIconsData } from './LocalLanguageIcons';

interface LanguageIconGroupProps {
  icons: Array<keyof typeof languageIconsData>;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  maxIcons?: number;
}

const LanguageIconGroup: React.FC<LanguageIconGroupProps> = ({ 
  icons, 
  size = 'md',
  className = '',
  maxIcons
}) => {
  // Limit the number of icons shown based on screen size or maxIcons prop
  const displayIcons = maxIcons ? icons.slice(0, maxIcons) : icons;
  const hasMoreIcons = maxIcons && icons.length > maxIcons;
  
  return (
    <div className={`flex flex-wrap gap-1 md:gap-2 ${className}`}>
      {displayIcons.map((iconKey, index) => {
        const iconData = languageIconsData[iconKey];
        return (
          <LanguageIcon
            key={`${iconKey}-${index}`}
            name={iconData.name}
            color={iconData.color}
            iconKey={iconData.iconKey}
            size={size}
            className="animate-pulse-slow"
          />
        );
      })}
      {hasMoreIcons && (
        <div 
          className={`flex items-center justify-center rounded-full bg-[#1E2D3D] text-xs text-[#607B96] ${size === 'sm' ? 'w-5 h-5' : size === 'lg' ? 'w-8 h-8' : 'w-6 h-6'}`}
          title={`${icons.length - maxIcons} more technologies`}
        >
          +{icons.length - maxIcons}
        </div>
      )}
    </div>
  );
};

export default LanguageIconGroup;