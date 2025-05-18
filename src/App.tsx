import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import BlockNavigation from './components/BlockNavigation';
import ContentView from './components/ContentView';
import { ContentBlock, getAllBlocks, getContent } from './lib/content';
import './App.css';

function App() {
  const [blocks, setBlocks] = useState<ContentBlock[]>([]);
  const [selectedBlock, setSelectedBlock] = useState<ContentBlock | null>(null);

  useEffect(() => {
    const loadBlocks = async () => {
      const allBlocks = await getAllBlocks();
      setBlocks(allBlocks);
      if (allBlocks.length > 0) {
        const firstBlock = await getContent(allBlocks[0].id);
        setSelectedBlock(firstBlock);
      }
    };
    loadBlocks();
  }, []);

  const handleSelectBlock = async (blockId: string) => {
    const block = await getContent(blockId);
    if (block) {
      setSelectedBlock(block);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        title="AI Agent Learning"
        subtitle="Building Intelligent Agents with Large Language Models"
      />
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <BlockNavigation 
            blocks={blocks}
            onSelectBlock={handleSelectBlock}
            activeBlockId={selectedBlock?.id || ''}
          />
          <ContentView 
            activeBlock={selectedBlock}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
