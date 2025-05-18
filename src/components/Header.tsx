import React from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <motion.header 
      className="py-8 px-6 text-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ 
          duration: 0.5,
          type: "spring",
          stiffness: 100
        }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
          {title}
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      </motion.div>
      
      <div className="mt-8 flex justify-center space-x-2">
        {['#D4B9B9', '#B9C4D4', '#D4D4B9', '#B9D4C4', '#D4B9C4'].map((color, index) => (
          <motion.div
            key={index}
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: color }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              delay: 0.5 + (index * 0.1),
              duration: 0.3
            }}
          />
        ))}
      </div>
    </motion.header>
  );
};

export default Header;
