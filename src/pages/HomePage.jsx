import React from 'react';
import Hero from '../components/Home/Hero';
import TechStackSlider from '../components/Home/TechStackSlider';
import ServicesHighlight from '../components/Home/ServicesHighlight';
import WhyChooseUs from '../components/Home/WhyChooseUs';
import FounderSpotlight from '../components/Home/FounderSpotlight';
import ClientFeedback from '../components/Home/ClientFeedback';
import FreeDemoBanner from '../components/Home/FreeDemoBanner';

const HomePage = () => {
  return (
    <>
      <Hero />
      <TechStackSlider />
      <ServicesHighlight />
      <WhyChooseUs />
      <FounderSpotlight />
      <ClientFeedback />
      <FreeDemoBanner />
    </>
  );
};

export default HomePage;