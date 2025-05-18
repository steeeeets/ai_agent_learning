import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ContentBlock } from '../data/content';

interface ContentViewerProps {
  block: ContentBlock | null;
}

const ContentViewer: React.FC<ContentViewerProps> = ({ block }) => {
  if (!block) {
    return (
      <div className="flex items-center justify-center h-64 text-gray-500">
        请从上方选择一个内容区块查看详情
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={block.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-lg p-8 my-6"
        style={{ 
          borderLeft: `6px solid ${block.color}`,
          backgroundColor: `${block.color}10` // 使用非常淡的背景色
        }}
      >
        <h2 className="text-3xl font-bold mb-6 text-gray-800">{block.title}</h2>
        
        <div className="space-y-6">
          {block.content.map((paragraph, index) => (
            <motion.p 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="text-gray-700 leading-relaxed"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ContentViewer;
