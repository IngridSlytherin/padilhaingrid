import React from 'react';
import Slideshow from './Slideshow';
import Timeline from './Timeline'; // Importe o novo componente
import styles from '../styles/Projects.module.css';

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <h2>Buzzvel Projects</h2>
      <Slideshow />
      <Timeline /> {/* Adicione o componente Timeline abaixo do Slideshow */}
    </section>
  );
};

export default Projects;
