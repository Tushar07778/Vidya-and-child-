
import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  isDark?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  centered = true,
  className = '',
  isDark = false
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'} ${className}`}>
      <h2 className={`text-3xl md:text-5xl font-black mb-6 tracking-tight ${isDark ? 'text-white' : 'text-teal-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-xl font-medium max-w-3xl mx-auto leading-relaxed ${isDark ? 'text-teal-100' : 'text-slate-600'}`}>
          {subtitle}
        </p>
      )}
      <div className={`w-24 h-2 bg-red-600 rounded-full mt-8 ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
};

export default SectionHeading;
