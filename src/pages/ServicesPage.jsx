import React from 'react';
import { Helmet } from 'react-helmet-async';
import ServicesCarousel from '../components/Services/ServicesCarousel';

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Our Services - AI Agents, Chatbots, Web & Mobile Development</title>
        <meta name="description" content="Vardana Infotech offers AI agent development, custom chatbots, web & mobile apps, digital marketing, and more. Explore our services." />
      </Helmet>
      <ServicesCarousel />
    </>
  );
};

export default ServicesPage;