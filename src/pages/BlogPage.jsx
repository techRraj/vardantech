import React from 'react';
import { Helmet } from 'react-helmet-async';
import BlogGrid from '../components/Blog/BlogGrid';
import BlogSidebar from '../components/Blog/BlogSidebar';
import styles from './BlogPage.module.css';
import Breadcrumbs from '../components/Layout/Breadcrumbs';
import PageSEO from '../components/SEO/PageSEO';

const BlogPage = () => {
  return (
    <>
    <Breadcrumbs />
      <Helmet>
        {/* <PageSEO
  title="Blog – AI, Software Development & Technology Insights"
  description="Read expert articles on AI agents, chatbots, web development, SEO, and digital transformation. Stay updated with Vardaan Tech Hub's tech blog."
  // path="/blog"
  type="website"
  keywords="AI blog, chatbot tutorial, web development tips, SEO guide, technology insights India"
/> */}
        <title>Blog - AI & Software Development Insights</title>
        <meta name="description" content="Read expert articles on AI agents, chatbots, web development, SEO, and digital transformation. Stay updated with Vardaan Tech Hub's tech blog." />
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