import React from 'react';
import Navbar from '../components/Navbar'; // Ajuste o caminho se necessário
import styles from '../styles/Contact.module.css';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <section className={styles.contactSection}>
        <h1>Contato</h1>
        
      </section>
    </div>
  );
};

export default Contact;
