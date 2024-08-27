import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importando Link
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
        <li className={styles.navItem}>
          <Link to="/">Home</Link> {/* Substitua <a href="/">Home</a> por <Link to="/">Home</Link> */}
        </li>
        <li className={styles.navItem}>
          <Link to="/about">About</Link> {/* Substitua <a href="/about">About</a> por <Link to="/about">About</Link> */}
        </li>
        <li className={styles.navItem}>
          <Link to="/contact">Contact</Link> {/* Substitua <a href="/contact">Contact</a> por <Link to="/contact">Contact</Link> */}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
