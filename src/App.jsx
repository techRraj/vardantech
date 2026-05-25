import React, { lazy, Suspense } from 'react';
import { useState, useEffect } from 'react';
import SpecialOfferPopup from './components/UI/SpecialOfferPopup';
import OfferTab from './components/UI/OfferTab';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import WhatsAppButton from './components/UI/WhatsAppButton';
import ScrollProgress from './components/Layout/ScrollProgress';
import './App.module.css';
import Referral from './pages/Referral';
import Loader from './components/UI/Loader';
import MovingBackground from './components/UI/MovingBackground';
import { Analytics } from "@vercel/analytics/react";


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
const PrivacyPage =lazy(()=> import('./pages/PrivacyPage'));

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
      <Suspense fallback={<Loader />}>
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
 <Route path="/privacy" element={
  <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
    <PrivacyPage />
  </motion.div>
} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

function App() {

   const [showOffer, setShowOffer] = useState(false);
  const [popupDismissed, setPopupDismissed] = useState(false);

  // Check session storage for whether popup was already shown/closed
  useEffect(() => {
    const dismissed = sessionStorage.getItem('offerPopupDismissed');
    if (!dismissed) {
      // Show popup after a short delay to ensure everything is loaded
      const timeout = setTimeout(() => setShowOffer(true), 2000);
      return () => clearTimeout(timeout);
    } else {
      setPopupDismissed(true);
    }
  }, []);

  const handleCloseOffer = () => {
    setShowOffer(false);
    sessionStorage.setItem('offerPopupDismissed', 'true');
    setPopupDismissed(true);
  };

  const handleReopenOffer = () => {
    setShowOffer(true);
    // Optionally clear the dismissed flag so it can appear again on next visit if needed
    // sessionStorage.removeItem('offerPopupDismissed');
  };
  return (
    <BrowserRouter>
    <MovingBackground />
      <ScrollProgress />
      <Navbar />
      <main style={{ minHeight: '80vh' }}>
        <AnimatedRoutes />
      </main>
      <Footer />
      <WhatsAppButton />
      <OfferTab onClick={handleReopenOffer} />
      <SpecialOfferPopup isOpen={showOffer} onClose={handleCloseOffer} />
       <Analytics />
    </BrowserRouter>
  );
}

export default App;