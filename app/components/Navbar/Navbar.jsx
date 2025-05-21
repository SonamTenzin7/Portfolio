'use client';

import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Determine which section is currently in view
      const sections = ['about', 'education', 'projects', 'experience', 'skills', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the section is in the viewport (with some buffer for better UX)
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <div className={styles.logo}>
          <span className={styles.logoText}>Sonam Tenzin</span>
          <span className={styles.logoAccent}></span>
        </div>
        
        <div className={styles.hamburger} onClick={toggleMobileMenu}>
          <span className={`${styles.bar} ${mobileMenuOpen ? styles.active : ''}`}></span>
          <span className={`${styles.bar} ${mobileMenuOpen ? styles.active : ''}`}></span>
          <span className={`${styles.bar} ${mobileMenuOpen ? styles.active : ''}`}></span>
        </div>
        
        <ul className={`${styles.navLinks} ${mobileMenuOpen ? styles.active : ''}`}>
          <li className={activeSection === 'about' ? styles.activeLink : ''}>
            <Link href="#about" onClick={() => setMobileMenuOpen(false)}>About</Link>
          </li>
          <li className={activeSection === 'education' ? styles.activeLink : ''}>
            <Link href="#education" onClick={() => setMobileMenuOpen(false)}>Education</Link>
          </li>
          <li className={activeSection === 'projects' ? styles.activeLink : ''}>
            <Link href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</Link>
          </li>
          <li className={activeSection === 'experience' ? styles.activeLink : ''}>
            <Link href="#experience" onClick={() => setMobileMenuOpen(false)}>Experience</Link>
          </li>
          <li className={activeSection === 'skills' ? styles.activeLink : ''}>
            <Link href="#skills" onClick={() => setMobileMenuOpen(false)}>Skills</Link>
          </li>
          <li className={`${activeSection === 'contact' ? styles.activeLink : ''}`}>
            <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}