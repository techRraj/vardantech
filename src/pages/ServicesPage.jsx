import React from 'react';
import { Helmet } from 'react-helmet-async';
import ServicesCarousel from '../components/Services/ServicesCarousel';
import ServiceFAQ from '../components/Services/ServiceFAQ';
import Breadcrumbs from '../components/Layout/Breadcrumbs';
const ServicesPage = () => {
  return (
    <>
    <Breadcrumbs />
      <Helmet>
        <title>Our Services - AI Agents, Chatbots, Web & Mobile Development</title>
        <meta name="description" content="Vardaantechhub offers AI agent development, custom chatbots, web & mobile apps, digital marketing, and more. Explore our services." />
      </Helmet>
      <ServicesCarousel />
      <ServiceFAQ />
    </>
  );
};

export default ServicesPage;