import React from 'react';
import styles from '../styles/AboutMe.module.css';
import Navbar from '../components/Navbar'; // Ajuste o caminho se necessário
import TimeAbout from './TimeAbout'; // Certifique-se de que o caminho está correto
import Footer from '../components/Footer';
const AboutMe = () => {
  return (
    <div>
    <Navbar />
    <section id="about" className={styles.aboutMe}>
      <h2>About Me</h2>
      <p>I am seeking a challenging position in Front-End development where I can apply and expand my knowledge in web development. I have a strong interest in working with PHP, JavaScript, and Ajax, contributing to innovative and dynamic projects, whether in CLT contracts or other modalities.</p>
      {/* Adicione a linha do tempo ou cartões de experiência aqui */}
      <TimeAbout />
    </section>
    <Footer />
    </div>
  );
};

export default AboutMe;
