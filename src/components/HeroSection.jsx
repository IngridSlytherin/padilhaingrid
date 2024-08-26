import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { gsap } from 'gsap';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate
import styles from '../styles/HeroSection.module.css';

const HeroSection = () => {
  const navigate = useNavigate(); // Inicializar useNavigate

  useEffect(() => {
    // Animação para o título
    gsap.from(`.${styles.hero} h1`, { duration: 2, y: -50, opacity: 0, ease: "power3.out" });

    // Animação para o parágrafo
    gsap.from(`.${styles.hero} p`, { duration: 1.5, y: 50, opacity: 0, ease: "power3.out", delay: 0.5 });

    // Animação para o botão
    gsap.from(`.${styles.ctaButton}`, { duration: 1, scale: 0.8, opacity: 0, ease: "power3.out", delay: 1 });
  }, []);

  // Função para navegação
  const handleClick = () => {
    navigate('/about'); // Redireciona para a página AboutMe
  };

  return (
    <>
      <Helmet>
        <title>Ingrid Padilha | Buzzvel</title>
        <meta name="description" content="Descubra mais sobre mim e meus projetos na Buzzvel." />
      </Helmet>
      <section className={styles.hero}>
        <h1>Hello,</h1>
        <p>Learn about me</p>
        <button className={styles.ctaButton} onClick={handleClick}>About Me</button> {/* Adicionar onClick */}
      </section>
    </>
  );
};

export default HeroSection;
