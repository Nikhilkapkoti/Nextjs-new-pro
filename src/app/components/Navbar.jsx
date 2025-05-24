'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add(styles['dark-mode']);
    } else {
      document.body.classList.remove(styles['dark-mode']);
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">PEPO.</Link>
      </div>

      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.navLinksOpen : ''}`}>
        <li>
          <Link href="#header" onClick={() => setIsMenuOpen(false)}>Home</Link>
        </li>
        <li>
          <Link href="#aboutme" onClick={() => setIsMenuOpen(false)}>About Me</Link>
        </li>
        <li>
          <Link href="#services" onClick={() => setIsMenuOpen(false)}>Services</Link>
        </li>
        <li>
          <Link href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</Link>
        </li>
        <li>
          <Link href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </li>
      </ul>

      <div className={styles.desktopDarkModeContainer}>
        <button
          aria-label="Toggle Dark Mode"
          className={`${styles.darkModeToggle} ${styles.darkModeToggleDesktop}`}
          onClick={toggleDarkMode}
        >
          {darkMode ? '☀' : '☾'}
        </button>
      </div>

      <div className={styles.buttonContainer}>
        <button
          aria-label="Toggle Dark Mode"
          className={`${styles.darkModeToggle} ${styles.darkModeToggleMobile}`}
          onClick={toggleDarkMode}
        >
          {darkMode ? '☀' : '☾'}
        </button>
        <button
          aria-label="Toggle Menu"
          className={styles.hamburger}
          onClick={toggleMenu}
        >
          <span className={styles.hamburgerIcon}></span>
          <span className={styles.hamburgerIcon}></span>
          <span className={styles.hamburgerIcon}></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;