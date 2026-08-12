import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiX, FiInstagram, FiLinkedin, FiTwitter, FiFacebook } from 'react-icons/fi';
import ThemeToggle from '../UI/ThemeToggle';
import styles from './Sidebar.module.css';

const sidebarVariants = {
  hidden: { x: '100%', opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { type: 'tween', duration: 0.3 } },
  exit: { x: '100%', opacity: 0, transition: { duration: 0.2 } }
};

const Sidebar = ({ isOpen, onClose, navLinks }) => {
  return (
    <motion.aside
      className={styles.sidebar}
      variants={sidebarVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className={styles.sidebarHeader}>
        <img src="/assets/logo3.png"  alt="Vardana" className={styles.sidebarLogo} />
        <button onClick={onClose} className={styles.closeBtn} aria-label="Close menu">
          <FiX size={28} />
        </button>
      </div>

      <nav className={styles.sidebarNav}>
        {navLinks.map(link => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) => isActive ? styles.activeSidebarLink : styles.sidebarLink}
            onClick={onClose}
          >
            {link.name}
          </NavLink>
        ))}
      </nav>

      <div className={styles.sidebarFooter}>
        <ThemeToggle />
        {/* <div className={styles.socialIcons}>
          <a href="#" aria-label="Instagram"><FiInstagram size={22} /></a>
          <a href="#" aria-label="LinkedIn"><FiLinkedin size={22} /></a>
          <a href="#" aria-label="Twitter"><FiTwitter size={22} /></a>
          <a href="#" aria-label="Facebook"><FiFacebook size={22} /></a>
        </div> */}
        <p className={styles.copyright}>© 2026 Vardaan tech hub</p>
      </div>
    </motion.aside>
  );
};

export default Sidebar;