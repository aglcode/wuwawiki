import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-6">
      <div className="w-24 h-1.5 rounded bg-gradient-to-r from-teal to-teal-light mb-4"></div>
      <h2 className="text-3xl md:text-4xl font-bold mb-2">{title}</h2>
      <p className="text-gray-400">{subtitle}</p>
    </div>
  );
};

export default SectionHeader;