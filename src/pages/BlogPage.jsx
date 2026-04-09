import React from 'react';
import { Helmet } from 'react-helmet-async';
import BlogGrid from '../components/Blog/BlogGrid';
import BlogSidebar from '../components/Blog/BlogSidebar';
import styles from './BlogPage.module.css';

const BlogPage = () => {
  return (
    <>
      <Helmet>
        <title>Blog - AI & Software Development Insights</title>
        <meta name="description" content="Read the latest articles on AI agents, chatbots, web development, and digital transformation from Vardana Infotech experts." />
      </Helmet>
      <section className="section">
        <div className={`container ${styles.container}`}>
          <BlogGrid />
          <BlogSidebar />
        </div>
      </section>
    </>
  );
};

export default BlogPage;