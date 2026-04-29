import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BlogCard from './BlogCard';
import blogPosts from '../../data/blogData';  // import shared data
import styles from './BlogGrid.module.css';

const BlogGrid = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const filtered = blogPosts.filter(p =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
        {filtered.map(post => (
          <BlogCard
            key={post.id}
            post={post}
            onClick={() => navigate(`/blog/${post.id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogGrid;