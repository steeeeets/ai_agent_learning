import React, { useState, useEffect } from 'react';
import BlockNavigation from './components/BlockNavigation';
import BlockContent from './components/BlockContent';
import { ContentBlock, getAllBlocks, getContent } from './lib/content';
import './App.css';

function App() {
  const [blocks, setBlocks] = useState<ContentBlock[]>([]);
  const [activeBlock, setActiveBlock] = useState<ContentBlock | null>(null);
  const [activeBlockId, setActiveBlockId] = useState<string>('');

  useEffect(() => {
    const loadBlocks = async () => {
      const loadedBlocks = await getAllBlocks();
      setBlocks(loadedBlocks);
    };
    loadBlocks();
  }, []);

  const handleSelectBlock = async (blockId: string) => {
    setActiveBlockId(blockId);
    const content = await getContent(blockId);
    setActiveBlock(content);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <BlockNavigation 
          blocks={blocks} 
          onSelectBlock={handleSelectBlock}
          activeBlockId={activeBlockId}
        />
        {activeBlock && <BlockContent block={activeBlock} />}
      </div>
    </div>
  );
}

export default App;
