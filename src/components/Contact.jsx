import React from 'react';
import Navbar from '../components/Navbar'; // Ajuste o caminho se necessário
import styles from '../styles/Contact.module.css';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <section className={styles.contactSection}>
        <h1>Contato</h1>
        <div className={styles.contactInfo}>
          <p>Email: <a href="mailto:ingrid_patricia.cp@hotmail.com">ingrid_patricia.cp@hotmail.com</a></p>
          <p>Telefone: <a href="tel:+5511953369820">+55 (11) 95336-9820</a></p>
          <div className={styles.icons}>
            <a href="https://www.linkedin.com/in/ingrid-padilha/" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" alt="LinkedIn" className={styles.icon} />
              LinkedIn
            </a>
            <a href="https://github.com/IngridSlytherin" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="GitHub" className={styles.icon} />
              GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;