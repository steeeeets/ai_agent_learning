export interface ContentBlock {
  id: string;
  title: string;
  description: string;
  content: string;
  color: string;
  icon?: string;
}

// 导入所有 Markdown 文件
const contentFiles = import.meta.glob('../content/blocks/*.md', { 
  query: '?raw',
  import: 'default'
}) as Record<string, () => Promise<string>>;

// 解析 frontmatter
function parseFrontmatter(content: string): { data: any; content: string } {
  const lines = content.split('\n');
  const frontmatter: Record<string, any> = {};
  let contentStart = 0;
  
  if (lines[0] === '---') {
    contentStart = 1;
    while (contentStart < lines.length && lines[contentStart] !== '---') {
      const line = lines[contentStart];
      const [key, ...valueParts] = line.split(':');
      if (key && valueParts.length > 0) {
        const value = valueParts.join(':').trim();
        frontmatter[key.trim()] = value.replace(/^["']|["']$/g, '');
      }
      contentStart++;
    }
    contentStart++;
  }
  
  return {
    data: frontmatter,
    content: lines.slice(contentStart).join('\n')
  };
}

export async function getContent(blockId: string): Promise<ContentBlock> {
  const filePath = `../content/blocks/${blockId}.md`;
  const content = await contentFiles[filePath]();
  const { data, content: markdownContent } = parseFrontmatter(content);
  return { ...data, content: markdownContent } as ContentBlock;
}

export async function getAllBlocks(): Promise<ContentBlock[]> {
  const blocks: ContentBlock[] = [];
  
  for (const [path, loadContent] of Object.entries(contentFiles)) {
    const content = await loadContent();
    const { data } = parseFrontmatter(content);
    blocks.push(data as ContentBlock);
  }
  
  return blocks;
} 