import React from 'react';
import './Gallery.css';
import LandingImage from '../../Components/LandingImage/LandingImage';
import StickyBar from '../../Components/StickyBar/StickyBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Buttons from '../../Components/Buttons/Buttons';
import Footer from '../../Components/Footer/Footer';
import AboutNav from '../../Components/NavBar/NavBar';

function Gallery() {
  return (
    <div className="GalleryStyles">
      <StickyBar />
      <AboutNav />
      <LandingImage title="Gallery" />
      <div className="buttonSpaced">
        <Buttons title="Open Instagram" color="#C7923E" />
      </div>
      <ImageGallery />
      <Footer />
    </div>
  );
}

export default Gallery;
