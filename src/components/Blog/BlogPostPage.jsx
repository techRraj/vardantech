import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import blogPosts from '../../data/blogData';   // because you're in src/components/Blog/
import {
  FiArrowLeft,
  FiShare2,
  FiTwitter,
  FiLinkedin,
  FiFacebook,
  FiClock,
  FiUser
} from 'react-icons/fi';
import styles from './BlogPostPage.module.css';

const BlogPostPage = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === Number(id));

  if (!post) {
    return <div className="container section"><h2>Post not found</h2></div>;
  }

  const shareUrl = encodeURIComponent(window.location.href);
  const shareText = encodeURIComponent(post.title);

  // Simple Table of Contents from headings in content (h2)
  const headings = post.content.match(/^## (.*)/gm)?.map(h => h.replace('## ', '')) || [];

  return (
    <>
      <Helmet>
        <title>{post.title} | Vardaantechhub Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <section className={`section ${styles.section}`}>
        <div className="container">
          <Link to="/blog" className={styles.backLink}>
            <FiArrowLeft /> All articles
          </Link>
          <motion.article
            className={styles.article}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <header className={styles.header}>
              <h1>{post.title}</h1>
              <div className={styles.meta}>
                <span><FiUser /> {post.author.name}</span>
                <span><FiClock /> {post.readTime} read</span>
                <span>{post.date}</span>
              </div>
              <div className={styles.share}>
                <button onClick={() => navigator.share?.({ title: post.title, url: window.location.href })} aria-label="Share">
                  <FiShare2 />
                </button>
                <a href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`} target="_blank" rel="noopener noreferrer"><FiTwitter /></a>
                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`} target="_blank" rel="noopener noreferrer"><FiLinkedin /></a>
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer"><FiFacebook /></a>
              </div>
            </header>

            <div className={styles.layout}>
              <aside className={styles.toc}>
                <h4>Table of Contents</h4>
                <ul>
                  {headings.map((h, i) => (
                    <li key={i}>
                      <a href={`#heading-${i}`}>{h}</a>
                    </li>
                  ))}
                </ul>
              </aside>
              <div className={styles.body}
                dangerouslySetInnerHTML={{
                  __html: post.content.replace(/## (.*)/g, (match, heading, offset) => {
                    const index = headings.indexOf(heading);
                    return index !== -1 ? `<h2 id="heading-${index}">${heading}</h2>` : match;
                  })
                }}
              />
            </div>

            <div className={styles.authorCard}>
              <img src={post.author.avatar} alt={post.author.name} />
              <div>
                <strong>{post.author.name}</strong>
                <p>Senior Developer at Vardaantechhub</p>
              </div>
            </div>

            <div className={styles.related}>
              <h3>Related Posts</h3>
              <div className={styles.relatedGrid}>
                {blogPosts
                  .filter(p => p.id !== post.id && p.category === post.category)
                  .slice(0, 3)
                  .map(p => (
                    <Link to={`/blog/${p.id}`} key={p.id} className={styles.relatedCard}>
                      <img src={p.image} alt={p.title} />
                      <h4>{p.title}</h4>
                    </Link>
                  ))}
              </div>
            </div>
          </motion.article>
        </div>
      </section>
    </>
  );
};

export default BlogPostPage;