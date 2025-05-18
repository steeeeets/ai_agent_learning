import React from 'react';
import ReactMarkdown from 'react-markdown';
import { ContentBlock } from '../lib/content';

interface BlockContentProps {
  block: ContentBlock;
}

const BlockContent: React.FC<BlockContentProps> = ({ block }) => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="prose prose-lg max-w-none">
        <ReactMarkdown>{block.content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default BlockContent; 