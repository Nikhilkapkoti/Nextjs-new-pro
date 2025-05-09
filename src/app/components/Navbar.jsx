"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
 // Import CSS module for styling

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

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
  

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">PEPO.</Link>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link href="#header">Home</Link>
        </li>
        <li>
          <Link href="#aboutme">About Me</Link>
        </li>
        <li>
          <Link href="#services">Services</Link>
        </li>
        <li>
          <Link href="#projects">Projects</Link>
        </li>
        <li>
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
      
      <button 
        aria-label="Toggle Dark Mode"
        className={styles.darkModeToggle}
        onClick={toggleDarkMode}
      >
        &#9790;
      </button>
    </nav>
  );
};

export default Navbar;
