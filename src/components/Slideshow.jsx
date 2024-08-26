import React, { useState } from 'react';
import styles from '../styles/Slideshow.module.css';
import arriba from '../img/arriba.png';
import viplant from '../img/viplant.png';
import misscan from '../img/misscan.png';

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { image: misscan, alt: 'MissCan', description: 'We created a new website for VIPLANT with the main aim of enhancing the user experience, extending the quality of the physical purchase to the digital environment.' },
    { image: viplant, alt: 'Viplant', description: 'A Portuguese and family project of the canning industry with 3 generations of history and tradition. Canned food produced in Portugal, with Portuguese fish and artisanal.' },
    { image: arriba, alt: 'Vigias da Arriba', description: 'Vigias da Arriba is a luxury, unique and exclusive condominium with several villas with a superb sea view. It is located in Torres Vedras.' },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className={styles.slideshow}>
      <button onClick={prevSlide}>Previous</button>
      <img src={slides[currentSlide].image} alt={slides[currentSlide].alt} />
      <p className={styles.description}>{slides[currentSlide].description}</p>
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Slideshow;
