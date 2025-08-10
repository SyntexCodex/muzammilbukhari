import React from 'react';
import LanguageIcon, { languageIconsData } from './LocalLanguageIcons';

interface LanguageIconGroupProps {
  icons: Array<keyof typeof languageIconsData>;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const LanguageIconGroup: React.FC<LanguageIconGroupProps> = ({ 
  icons, 
  size = 'md',
  className = ''
}) => {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {icons.map((iconKey, index) => {
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
    </div>
  );
};

export default LanguageIconGroup;