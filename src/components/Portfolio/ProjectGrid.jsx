import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';
import PortfolioFilters from './PortfolioFilters';
import ProjectDetailModal from './ProjectDetailModal';
import styles from './ProjectGrid.module.css';

const projects = [
  {
    id: 1,
    category: 'ai',
    title: 'FinSecure AI Chatbot',
    client: 'FinBank',
    outcome: '80% query reduction',
    tech: ['OpenAI', 'Vector DB', 'Next.js'],
    img: 'https://images.pexels.com/photos/7567521/pexels-photo-7567521.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'A cutting‑edge conversational AI chatbot designed for FinBank’s customer support. It handles account inquiries, transaction disputes, and loan FAQs.',
    challenge: 'Reduce manual ticket volume while maintaining 95% accuracy on sensitive financial data.',
    solution: 'Built a RAG pipeline with Pinecone and fine‑tuned GPT-4, integrated into a Next.js dashboard.',
    features: ['Intent recognition', 'Multi‑turn dialogue', 'Real‑time sentiment analysis', 'Seamless human handoff'],
    liveUrl: 'https://finbank.example.com',
    gallery: [
      'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=300',
      'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=300'
    ]
  },
  {
    id: 2,
    category: 'web',
    title: 'E‑Commerce Platform',
    client: 'StyleHub',
    outcome: '200% conversion increase',
    tech: ['React', 'Node.js', 'MongoDB'],
    img: 'https://images.pexels.com/photos/38544/imac-apple-mockup-app-38544.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'A modern e‑commerce platform with tailored recommendation engine and lightning‑fast storefront.',
    challenge: 'Migrate legacy infrastructure to a performant, scalable headless architecture.',
    solution: 'Developed a decoupled frontend with Next.js and a Node.js backend, plus a real‑time recommendation service using collaborative filtering.',
    features: ['PWA support', 'Stripe integration', 'AI product recommendations', 'Admin dashboard'],
    liveUrl: 'https://stylehub.example.com',
    gallery: [
      'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=300',
      'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=300'
    ]
  },
  {
    id: 3,
    category: 'mobile',
    title: 'Fitness Tracker App',
    client: 'FitLife',
    outcome: '500k+ downloads',
    tech: ['Flutter', 'Firebase', 'Google Fit'],
    img: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'A cross‑platform health & fitness app that gamifies workouts and syncs with wearables.',
    challenge: 'Ensure seamless real‑time data sync across iOS/Android with minimal battery drain.',
    solution: 'Used Flutter for native performance and Firebase Cloud Functions to process sensor data smartly.',
    features: ['Step tracking', 'Meal plans', 'Social challenges', 'Wear OS & Apple Watch connectivity'],
    liveUrl: 'https://fitlife.example.com',
    gallery: [
      'https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=300',
      'https://images.pexels.com/photos/416717/pexels-photo-416717.jpeg?auto=compress&cs=tinysrgb&w=300'
    ]
  },
  {
    id: 4,
    category: 'marketing',
    title: 'SEO Campaign',
    client: 'GrowthX',
    outcome: 'Top 3 Google rankings',
    tech: ['Ahrefs', 'Semrush', 'Content AI'],
    img: 'https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'A comprehensive SEO overhaul that boosted organic traffic by 340% in six months.',
    challenge: 'Outrank competitors in a saturated SaaS niche.',
    solution: 'Technical audit, content silos, and AI‑powered keyword clustering to target long‑tail queries.',
    features: ['Competitor gap analysis', 'Schema markup', 'Link‑building dashboards', 'Automated reporting'],
    liveUrl: 'https://growthx.example.com',
    gallery: [
      'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=300',
      'https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=300'
    ]
  },
  {
    id: 5,
    category: 'ai',
    title: 'Predictive Analytics',
    client: 'LogiTech',
    outcome: '30% logistics cost saving',
    tech: ['Python', 'TensorFlow', 'BigQuery'],
    img: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'An ML pipeline that forecasts shipment delays and optimizes delivery routes in real time.',
    challenge: 'Incorporate weather, traffic, and historical data into a single prediction model.',
    solution: 'Built a TensorFlow model integrated with Google Cloud Functions and a custom dashboard.',
    features: ['Live map overlay', 'What‑if simulations', 'Automated rerouting', 'Weekly accuracy reports'],
    liveUrl: 'https://logitech.example.com',
    gallery: [
      'https://images.pexels.com/photos/2422294/pexels-photo-2422294.jpeg?auto=compress&cs=tinysrgb&w=300',
      'https://images.pexels.com/photos/1068523/pexels-photo-1068523.jpeg?auto=compress&cs=tinysrgb&w=300'
    ]
  },
  {
    id: 6,
    category: 'web',
    title: 'SaaS Dashboard',
    client: 'DataViz',
    outcome: 'Real‑time insights',
    tech: ['Vue', 'D3.js', 'WebSockets'],
    img: 'https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'An interactive analytics dashboard that visualizes billions of data points with sub‑second latency.',
    challenge: 'Render complex charts without blocking the UI thread.',
    solution: 'Used canvas‑based rendering with D3.js and virtual scrolling, plus a WebSocket layer for live updates.',
    features: ['Custom widgets', 'Drill‑down reports', 'Export to PDF/CSV', 'Role‑based access'],
    liveUrl: 'https://dataviz.example.com',
    gallery: [
      'https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=300',
      'https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg?auto=compress&cs=tinysrgb&w=300'
    ]
  },
];

const categories = ['All', 'AI', 'Web', 'Mobile', 'Marketing'];

const ProjectGrid = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const filtered =
    filter === 'All' ? projects : projects.filter(p => p.category === filter.toLowerCase());

  const openProject = (project) => setSelectedProject(project);
  const closeProject = () => setSelectedProject(null);

  return (
    <section className="section">
      <div className="container">
        <h1 className={styles.title}>Our Portfolio</h1>
        <p className={styles.subtitle}>Success stories from our clients</p>
        <PortfolioFilters categories={categories} active={filter} onChange={setFilter} />
        <motion.div layout className={styles.grid}>
          <AnimatePresence>
            {filtered.map(project => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => openProject(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
        <AnimatePresence>
          {selectedProject && (
            <ProjectDetailModal
              project={selectedProject}
              onClose={closeProject}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectGrid;