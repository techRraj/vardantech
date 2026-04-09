import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiStar } from 'react-icons/fi';
import styles from './ClientFeedback.module.css';

const reviews = [
  { id: 1, category: 'AI', client: 'TechCorp', role: 'CTO', comment: 'Their AI agent reduced our response time by 70%.', rating: 5, verified: true },
  { id: 2, category: 'Web', client: 'DesignStudio', role: 'Product Lead', comment: 'Exceptional web app development, delivered ahead of schedule.', rating: 5, verified: true },
  { id: 3, category: 'Mobile', client: 'FitLife', role: 'Founder', comment: 'The mobile app is smooth and users love it.', rating: 5, verified: true },
  { id: 4, category: 'Marketing', client: 'GrowthX', role: 'CMO', comment: 'Our SEO ranking improved dramatically.', rating: 5, verified: true },
  { id: 5, category: 'AI', client: 'FinSecure', role: 'Head of Innovation', comment: 'Custom chatbot handles 80% of support queries.', rating: 5, verified: true },
];

const categories = ['All', 'AI Projects', 'Web & Mobile', 'Marketing'];

const ClientFeedback = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);

  const filtered = activeTab === 'All' ? reviews : reviews.filter(r => {
    if (activeTab === 'AI Projects') return r.category === 'AI';
    if (activeTab === 'Web & Mobile') return ['Web', 'Mobile'].includes(r.category);
    return r.category === 'Marketing';
  });

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % filtered.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + filtered.length) % filtered.length);

  return (
    <section className="section">
      <div className="container">
        <h2 className={styles.heading}>Client Success Stories</h2>
        <div className={styles.tabs}>
          {categories.map(cat => (
            <button
              key={cat}
              className={`${styles.tab} ${activeTab === cat ? styles.activeTab : ''}`}
              onClick={() => { setActiveTab(cat); setCurrentIndex(0); }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className={styles.carouselContainer}>
          <button className={styles.navBtn} onClick={prevSlide}>←</button>
          <div className={styles.carousel}>
            <AnimatePresence mode="wait">
              <motion.div
                key={filtered[currentIndex]?.id}
                className={styles.reviewCard}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(e, { offset }) => {
                  if (offset.x < -50) nextSlide();
                  else if (offset.x > 50) prevSlide();
                }}
              >
                <div className={styles.stars}>
                  {[...Array(5)].map((_, i) => <FiStar key={i} fill="#FFB800" color="#FFB800" />)}
                </div>
                <p className={styles.comment}>"{filtered[currentIndex]?.comment}"</p>
                <div className={styles.clientInfo}>
                  <div className={styles.avatar} />
                  <div>
                    <strong>{filtered[currentIndex]?.client}</strong>
                    <span>{filtered[currentIndex]?.role}</span>
                  </div>
                  {filtered[currentIndex]?.verified && <span className={styles.verified}>✓ Verified</span>}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <button className={styles.navBtn} onClick={nextSlide}>→</button>
        </div>
        <div className={styles.dots}>
          {filtered.map((_, idx) => (
            <span key={idx} className={`${styles.dot} ${idx === currentIndex ? styles.activeDot : ''}`} onClick={() => setCurrentIndex(idx)} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientFeedback;