import React from 'react';
import { motion } from 'framer-motion';
import styles from './BlogCard.module.css';

const BlogCard = ({ post }) => {
  return (
    <motion.article
      className={styles.card}
      whileHover={{ y: -4 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <img src={post.image} alt={post.title} className={styles.image} />
      <div className={styles.content}>
        <span className={styles.category}>{post.category}</span>
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
        <div className={styles.meta}>
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime} read</span>
        </div>
      </div>
    </motion.article>
  );
};

export default BlogCard;