import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import WhatsAppButton from './components/UI/WhatsAppButton';
import ScrollProgress from './components/Layout/ScrollProgress';
import './App.module.css';
import Referral from './pages/Referral';

// Lazy load pages for performance
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const CareersPage = lazy(() => import('./pages/CareersPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const BlogPostPage = lazy(() => import('./components/Blog/BlogPostPage'));
const FreeAudit = lazy(() => import('./pages/FreeAudit'));

// Page transition variants
const pageVariants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } },
  exit: { opacity: 0, x: 20, transition: { duration: 0.3 } }
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<div className="loader">Loading...</div>}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><HomePage /></motion.div>} />
<Route path="/free-ai-audit" element={<motion.div ><FreeAudit /></motion.div>} />


          <Route path="/about" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><AboutPage /></motion.div>} />
          <Route path="/services" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><ServicesPage /></motion.div>} />
          <Route path="/portfolio" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><PortfolioPage /></motion.div>} />
          <Route path="/blog" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><BlogPage /></motion.div>} />
          <Route path="/blog/:id" element={
            <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <BlogPostPage />
            </motion.div>
          } />
          <Route path="/careers" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><CareersPage /></motion.div>} />
          <Route path="/contact" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><ContactPage /></motion.div>} />
 <Route path="/referral" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><Referral /></motion.div>} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

function App() {
  return (
    <BrowserRouter>
      <ScrollProgress />
      <Navbar />
      <main style={{ minHeight: '80vh' }}>
        <AnimatedRoutes />
      </main>
      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  );
}

export default App;