import React from 'react';
import './About.css';
import StickyBar from '../../Components/StickyBar/StickyBar';
import Menu from './BorderBottom/Menu';
import MainAboutPage from './MainAboutPage/MainAboutPage';
import AboutContent from './AboutContent/AboutContent';
import Footer from '../../Components/Footer/Footer';
import NavBar from '../../Components/NavBar/NavBar';

function About() {
  return (
    <div className="tourism__aboutContainer">
      <StickyBar />
      <NavBar />
      <MainAboutPage />
      <Menu />
      <h1>
        Welcome to Africa Wizzy Safari <hr />
      </h1>
      <AboutContent />
      <Footer />
    </div>
  );
}

export default About;
