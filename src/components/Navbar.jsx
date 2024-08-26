import React, { useState } from 'react';
import styles from '../styles/Navbar.module.css';

const Navbar = ({ additionalClass = '' }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`${styles.navbar} ${additionalClass}`}>
      <div className={styles.hamburger} onClick={toggleMenu}>
        ☰
      </div>
      <ul className={`${styles.navMenu} ${isOpen ? styles.navMenuOpen : ''}`}>
        <li className={styles.navItem}><a href="/">Home</a></li>
        <li className={styles.navItem}><a href="/about">About</a></li>
        <li className={styles.navItem}><a href="/Contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
