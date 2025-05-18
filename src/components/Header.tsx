import React from 'react';

interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="w-full py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-600">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default Header;
