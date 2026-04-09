import React from 'react';
import styles from './BlogSidebar.module.css';

const categories = ['AI (12)', 'Web Development (8)', 'Mobile (5)', 'Marketing (6)', 'DevOps (3)'];
const popularPosts = [
  'The Rise of AI Agents',
  'Building Scalable Chatbots',
  'Why React is Still King',
  'Vector Databases Explained',
];

const BlogSidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.widget}>
        <h3>Categories</h3>
        <ul>
          {categories.map(cat => <li key={cat}><a href="#">{cat}</a></li>)}
        </ul>
      </div>
      <div className={styles.widget}>
        <h3>Popular Posts</h3>
        <ul>
          {popularPosts.map(post => <li key={post}><a href="#">{post}</a></li>)}
        </ul>
      </div>
      <div className={styles.widget}>
        <h3>Newsletter</h3>
        <p>Get the latest insights in your inbox.</p>
        <input type="email" placeholder="Your email" className={styles.emailInput} />
        <button className={styles.subscribeBtn}>Subscribe</button>
      </div>
    </aside>
  );
};

export default BlogSidebar;