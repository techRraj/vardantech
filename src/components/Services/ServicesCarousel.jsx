import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';
import ServiceFilters from './ServiceFilters';
import styles from './ServicesCarousel.module.css';

const allServices = [
  { id: 1, category: 'ai', icon: '🤖', title: 'AI Agent Development', desc: 'Autonomous agents for workflow automation.', trending: true },
  { id: 2, category: 'ai', icon: '💬', title: 'Custom Chatbot', desc: 'RAG-powered conversational AI.', trending: true },
  { id: 3, category: 'web', icon: '🌐', title: 'Web Development', desc: 'Responsive, scalable web applications.' },
  { id: 4, category: 'mobile', icon: '📱', title: 'Mobile Apps', desc: 'Native iOS & Android development.' },
  { id: 5, category: 'ai', icon: '🧠', title: 'AI/ML Solutions', desc: 'Custom machine learning models.' },
  { id: 6, category: 'web', icon: '🎨', title: 'Web Design', desc: 'UI/UX with Figma-grade precision.' },
  { id: 7, category: 'marketing', icon: '📈', title: 'Digital Marketing', desc: 'SEO, SEM, social media.' },
  { id: 8, category: 'other', icon: '📦', title: 'Product Management', desc: 'End-to-end product lifecycle.' },
  { id: 9, category: 'other', icon: '✏️', title: 'Graphic Design', desc: 'Branding and visual identity.' },
  { id: 10, category: 'ai', icon: '🔍', title: 'Vector DB Integration', desc: 'Pinecone, Weaviate, Qdrant.' },
  { id: 11, category: 'ai', icon: '🧩', title: 'OpenAI/LLM Apps', desc: 'GPT-4, Claude, custom LLMs.' },
  { id: 12, category: 'other', icon: '☁️', title: 'Cloud & DevOps', desc: 'AWS, Docker, Kubernetes.' },
];

const categories = ['All', 'AI', 'Web', 'Mobile', 'Marketing'];

const ServicesCarousel = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const constraintsRef = useRef(null);

  const filtered = activeFilter === 'All' 
    ? allServices 
    : allServices.filter(s => s.category === activeFilter.toLowerCase());

  const itemsPerView = 3;
  const maxIndex = Math.max(0, filtered.length - itemsPerView);

  const nextSlide = () => setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  const prevSlide = () => setCurrentIndex(prev => Math.max(prev - 1, 0));

  return (
    <section className="section">
      <div className="container">
        <h1 className={styles.pageTitle}>Our Services</h1>
        <p className={styles.subtitle}>End-to-end solutions tailored to your business needs</p>
        
        <ServiceFilters categories={categories} active={activeFilter} onChange={(cat) => { setActiveFilter(cat); setCurrentIndex(0); }} />
        
        <div className={styles.carouselWrapper} ref={constraintsRef}>
          <button className={styles.navBtn} onClick={prevSlide} disabled={currentIndex === 0}>←</button>
          
          <div className={styles.carouselContainer}>
            <motion.div
              className={styles.carouselTrack}
              animate={{ x: `-${currentIndex * (100 / itemsPerView)}%` }}
              transition={{ type: 'tween', ease: [0.4, 0, 0.2, 1] }}
            >
              {filtered.map(service => (
                <div key={service.id} className={styles.slide}>
                  <ServiceCard service={service} />
                </div>
              ))}
            </motion.div>
          </div>
          
          <button className={styles.navBtn} onClick={nextSlide} disabled={currentIndex >= maxIndex}>→</button>
        </div>
        
        <div className={styles.dots}>
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <span
              key={idx}
              className={`${styles.dot} ${idx === currentIndex ? styles.activeDot : ''}`}
              onClick={() => setCurrentIndex(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;