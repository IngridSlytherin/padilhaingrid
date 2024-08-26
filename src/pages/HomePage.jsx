import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
// import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import WhyBuzzvel from '../components/WhyBuzzvel';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      {/* <AboutMe /> */}
      <Projects />
      <WhyBuzzvel />
      <Footer />
    </div>
  );
};

export default HomePage;
