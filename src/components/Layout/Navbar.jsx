import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import ThemeToggle from '../UI/ThemeToggle';
import Button from '../UI/Button';
import styles from './Navbar.module.css';
import Sidebar from './Sidebar';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Blog', path: '/blog' },
  { name: 'Careers', path: '/careers' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      <header className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={`container ${styles.navContainer}`}>
          <Link to="/" className={styles.logo}>
            <img src="/assets/logo3.png" alt="Vardaantech Hub" width="160" height="40" />
          </Link>

          <nav className={styles.desktopNav}>
            {navLinks.map(link => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => isActive ? styles.activeLink : styles.navLink}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className={styles.actions}>
            <ThemeToggle />
         
<Button 
  variant="primary" 
  size="sm" 
  className={styles.ctaBtn}
  onClick={() => {
    const phone = '918889710105';
    const message = encodeURIComponent("Hi Vardaan tech hub, I'm interested in a free demo consultation.");
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  }}
>
  Free Demo
</Button>
            <button
              className={styles.hamburger}
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <FiMenu size={24} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <Sidebar isOpen={mobileOpen} onClose={() => setMobileOpen(false)} navLinks={navLinks} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;