import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';
import PortfolioFilters from './PortfolioFilters';
import styles from './ProjectGrid.module.css';

const projects = [
  { id: 1, category: 'ai', title: 'FinSecure AI Chatbot', client: 'FinBank', outcome: '80% query reduction', tech: ['OpenAI', 'Vector DB'], img: 'https://images.pexels.com/photos/7567521/pexels-photo-7567521.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 2, category: 'web', title: 'E-Commerce Platform', client: 'StyleHub', outcome: '200% conversion increase', tech: ['React', 'Node.js'], img: 'https://images.pexels.com/photos/38544/imac-apple-mockup-app-38544.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 3, category: 'mobile', title: 'Fitness Tracker App', client: 'FitLife', outcome: '500k+ downloads', tech: ['Flutter', 'Firebase'], img: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 4, category: 'marketing', title: 'SEO Campaign', client: 'GrowthX', outcome: 'Top 3 rankings', tech: ['SEO', 'Content'], img: 'https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 5, category: 'ai', title: 'Predictive Analytics', client: 'LogiTech', outcome: '30% cost saving', tech: ['Python', 'TensorFlow'], img: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 6, category: 'web', title: 'SaaS Dashboard', client: 'DataViz', outcome: 'Real-time insights', tech: ['Vue', 'D3.js'], img: 'https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=400' },
];

const categories = ['All', 'AI', 'Web', 'Mobile', 'Marketing'];

const ProjectGrid = () => {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter.toLowerCase());

  return (
    <section className="section">
      <div className="container">
        <h1 className={styles.title}>Our Portfolio</h1>
        <p className={styles.subtitle}>Success stories from our clients</p>
        <PortfolioFilters categories={categories} active={filter} onChange={setFilter} />
        <motion.div layout className={styles.grid}>
          <AnimatePresence mode="popLayout">
            {filtered.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectGrid;