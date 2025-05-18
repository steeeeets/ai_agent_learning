import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ContentBlock } from '../lib/content';
import { LucideIcon } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

interface BlockNavigationProps {
  blocks: ContentBlock[];
  onSelectBlock: (blockId: string) => void;
  activeBlockId: string;
}

const BlockNavigation: React.FC<BlockNavigationProps> = ({ 
  blocks, 
  onSelectBlock,
  activeBlockId
}) => {
  const [hoveredBlock, setHoveredBlock] = useState<string | null>(null);

  // 动态获取图标组件
  const getIconComponent = (iconName?: string): LucideIcon | null => {
    if (!iconName) return null;
    return (LucideIcons as any)[iconName] || null;
  };

  return (
    <div className="blocks-container">
      <div className="blocks-grid">
        {blocks.map((block) => {
          const IconComponent = getIconComponent(block.icon);
          const isActive = activeBlockId === block.id;
          const isHovered = hoveredBlock === block.id;
          
          return (
            <motion.div
              key={block.id}
              className="relative cursor-pointer rounded-lg overflow-hidden transition-all duration-300"
              style={{ 
                backgroundColor: block.color,
                transform: `rotate(${Math.random() * 2 - 1}deg)`,
                height: '200px',
                boxShadow: isActive 
                  ? '0 10px 30px rgba(0, 0, 0, 0.5), 0 0 0 2px rgba(255, 255, 255, 0.3)'
                  : '0 4px 6px rgba(0, 0, 0, 0.1)',
                transition: 'box-shadow 0.3s ease'
              }}
              onClick={() => onSelectBlock(block.id)}
              onMouseEnter={() => setHoveredBlock(block.id)}
              onMouseLeave={() => setHoveredBlock(null)}
            >
              <div className="p-6 h-full flex flex-col">
                <div className="flex items-center mb-3">
                  {IconComponent && (
                    <IconComponent 
                      className="mr-2 text-gray-700" 
                      size={24} 
                    />
                  )}
                  <h3 className="text-xl font-semibold text-gray-800">
                    {block.title}
                  </h3>
                </div>
                
                <p className="text-gray-700 mb-4">
                  {block.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default BlockNavigation;
