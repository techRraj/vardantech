import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiShield, FiInfo } from 'react-icons/fi';
import styles from './CookieConsent.module.css';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Small delay to let page load first
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    localStorage.setItem('cookie-preferences', JSON.stringify({
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    }));
    setIsVisible(false);
    
    // Trigger analytics if accepted
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted',
        'ad_storage': 'granted',
      });
    }
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    localStorage.setItem('cookie-preferences', JSON.stringify({
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    }));
    setIsVisible(false);

    // Disable tracking
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'denied',
        'ad_storage': 'denied',
      });
    }
  };

  const handleCustomize = () => {
    // You can expand this to show detailed preferences
    handleAccept();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={styles.overlay}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <div className={styles.banner}>
            <div className={styles.iconWrapper}>
              <FiShield className={styles.icon} />
            </div>
            
            <div className={styles.content}>
              <h4>We Value Your Privacy 🍪</h4>
              <p>
                We use cookies to enhance your browsing experience, serve personalized content, 
                and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. 
                Read our <a href="/privacy" className={styles.link}>Privacy Policy</a>.
              </p>
            </div>

            <div className={styles.actions}>
              <button 
                className={styles.acceptBtn}
                onClick={handleAccept}
              >
                Accept All Cookies
              </button>
              <button 
                className={styles.declineBtn}
                onClick={handleDecline}
              >
                Decline All
              </button>
              <button 
                className={styles.customizeBtn}
                onClick={handleCustomize}
              >
                <FiInfo size={14} />
                Customize
              </button>
            </div>

            <button 
              className={styles.closeBtn}
              onClick={handleDecline}
              aria-label="Close cookie banner"
            >
              <FiX size={18} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;