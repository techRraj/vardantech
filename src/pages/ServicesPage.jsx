import React from 'react';
import { Helmet } from 'react-helmet-async';
import ServicesCarousel from '../components/Services/ServicesCarousel';
import ServiceFAQ from '../components/Services/ServiceFAQ';
import Breadcrumbs from '../components/Layout/Breadcrumbs';
import PageSEO from '../components/SEO/PageSEO';
const ServicesPage = () => {
  return (
    <>
    <Breadcrumbs />
      
      <Helmet>
        {/* <PageSEO
  title="Our Services – AI Agents, Chatbots, Web & Mobile Development"
  description="Explore Vardaan Tech Hub's services: AI agent development, custom chatbot solutions, web development, mobile apps, digital marketing. Enterprise-grade solutions with free consultation."
  path="/services"
  keywords="AI agent development services, custom chatbot development, web development company, mobile app developers India, digital marketing services Indore"
/> */}
        <title>Our Services - AI Agents, Chatbots, Web & Mobile Development</title>
        <meta name="description" content="Explore Vardaan Tech Hub's services: AI agent development, custom chatbot solutions, web development, mobile apps, digital marketing. Enterprise-grade solutions with free consultation." />
        <meta name="keywords" content="AI agent development services, custom chatbot development, web development company, mobile app developers India, digital marketing services Indore" />
      </Helmet>
      <ServicesCarousel />
      <ServiceFAQ />
    </>
  );
};

export default ServicesPage;