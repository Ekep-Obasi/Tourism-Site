import React from 'react';
import './TourPackage.css';
import LandingImage from '../../Components/LandingImage/LandingImage';
import NavBar from '../../Components/NavBar/NavBar';
import StickyBar from '../../Components/StickyBar/StickyBar';
import CardTourPackage from './CardTourpakage/CardTourPackage';
import SliderButton from './SliderButtons/SliderButton';
import Footer from '../../Components/Footer/Footer';

function TourPackage() {
  return (
    <div>
      <StickyBar />
      <NavBar />
      <LandingImage title="Tour Package" />
      <CardTourPackage />
      <SliderButton />
      <Footer />
    </div>
  );
}

export default TourPackage;
