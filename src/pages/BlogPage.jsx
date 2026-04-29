import React from 'react';
import { Helmet } from 'react-helmet-async';
import BlogGrid from '../components/Blog/BlogGrid';
import BlogSidebar from '../components/Blog/BlogSidebar';
import styles from './BlogPage.module.css';
import Breadcrumbs from '../components/Layout/Breadcrumbs';
const BlogPage = () => {
  return (
    <>
    <Breadcrumbs />
      <Helmet>
        <title>Blog - AI & Software Development Insights</title>
        <meta name="description" content="Read the latest articles on AI agents, chatbots, web development, and digital transformation from Vardaantechhub experts." />
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