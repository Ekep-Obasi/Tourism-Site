import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import NavBar from '../../Components/NavBar/NavBar';
import StickyBar from '../../Components/StickyBar/StickyBar';
import BorderBottom from './BorderBottom/BorderBottom';
import Card from './Cards/Card';
import Logos from './Logos/Logos';
import Hero from './Hero/Hero';
import Profiles from './Profiles/Profiles';
import Slider from './Slider/Slider';

function Home() {
  return (
    <div>
      <StickyBar />
      <NavBar />
      <Hero />
      <BorderBottom />
      <Header
        title="Choose your Package"
        subtitle="Select your Best Package for your Travel"
      />
      <Card />
      <Header
        title="Popular Destinations"
        subtitle="Select Our Best Popular Destinations"
      />
      <Slider />
      <Header title="Why us?" subtitle="Why Travel with Africa wizzy Safari" />
      <Logos />
      <Header
        title="Our Traveller Say"
        subtitle="What our clients say about us"
      />
      <Profiles />
      <Footer />
    </div>
  );
}

export default Home;
