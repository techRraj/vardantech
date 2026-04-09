import React, { useState } from 'react';
import BlogCard from './BlogCard';
import styles from './BlogGrid.module.css';

const posts = [
  { id: 1, title: 'The Rise of AI Agents in 2026', excerpt: 'Explore how autonomous agents are reshaping industries.', date: 'Mar 15, 2026', readTime: '5 min', category: 'AI', image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 2, title: 'Building Scalable Chatbots with RAG', excerpt: 'A technical deep dive into retrieval-augmented generation.', date: 'Mar 10, 2026', readTime: '8 min', category: 'AI', image: 'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 3, title: 'Why React is Still King in 2026', excerpt: 'Performance, ecosystem, and developer experience.', date: 'Mar 5, 2026', readTime: '6 min', category: 'Web', image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 4, title: 'SEO Strategies for SaaS Companies', excerpt: 'Drive organic growth with these proven tactics.', date: 'Feb 28, 2026', readTime: '7 min', category: 'Marketing', image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 5, title: 'Mobile App Development Trends', excerpt: 'What to expect in iOS and Android in 2026.', date: 'Feb 20, 2026', readTime: '4 min', category: 'Mobile', image: 'https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 6, title: 'Vector Databases Explained', excerpt: 'Pinecone, Weaviate, and the future of search.', date: 'Feb 15, 2026', readTime: '9 min', category: 'AI', image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=400' },
];

const BlogGrid = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const filtered = posts.filter(p => p.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
      <h1 className={styles.pageTitle}>Insights & Articles</h1>
      <input
        type="text"
        placeholder="Search articles..."
        className={styles.searchInput}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className={styles.grid}>
        {filtered.map(post => <BlogCard key={post.id} post={post} />)}
      </div>
    </div>
  );
};

export default BlogGrid;