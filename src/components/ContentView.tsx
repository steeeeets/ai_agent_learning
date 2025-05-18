import React from 'react';
import { motion } from 'framer-motion';
import { ContentBlock } from '../lib/content';
import ReactMarkdown from 'react-markdown';

interface ContentViewProps {
  activeBlock: ContentBlock | null;
}

const ContentView: React.FC<ContentViewProps> = ({ activeBlock }) => {
  if (!activeBlock) {
    return (
      <div className="flex items-center justify-center h-full p-8">
        <p className="text-gray-500 text-center">请从上方选择一个内容区块查看详细信息</p>
      </div>
    );
  }

  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg p-6 md:p-8 my-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ 
        borderLeft: `6px solid ${activeBlock.color}`,
      }}
    >
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{activeBlock.title}</h2>
        <p className="text-gray-600 text-lg">{activeBlock.description}</p>
      </div>

      <div className="prose prose-lg max-w-none">
        <ReactMarkdown>{activeBlock.content}</ReactMarkdown>
      </div>
    </motion.div>
  );
};

export default ContentView;
