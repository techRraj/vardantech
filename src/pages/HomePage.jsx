import React from 'react';
import Hero from '../components/Home/Hero';
import TechStackSlider from '../components/Home/TechStackSlider';
import ServicesHighlight from '../components/Home/ServicesHighlight';
import WhyChooseUs from '../components/Home/WhyChooseUs';
import FounderSpotlight from '../components/Home/FounderSpotlight';
import ClientFeedback from '../components/Home/ClientFeedback';
import FreeDemoBanner from '../components/Home/FreeDemoBanner';
import PageSEO from '../components/SEO/PageSEO';
import{websiteSchema,organizationSchema} from '../utils/schema';
import Partners from '../components/Home/Partners';
const HomePage = () => {
  return (
    <>
    <PageSEO
  title="Vardaan Tech Hub – AI Agents, Custom Chatbots & Software Development"
  description="Vardaan Tech Hub is India's leading AI solutions company. We build intelligent AI agents, custom chatbots, web & mobile apps. Get a free demo consultation today. Trusted by 200+ clients worldwide."
  path="/"
  keywords="AI agent development, custom chatbot, web development, mobile app development, AI solutions India, software company Indore, Vardaan Tech Hub"
  schema={{ ...organizationSchema, ...websiteSchema }}
/>
      <Hero />
      <TechStackSlider />
      <ServicesHighlight />
      <WhyChooseUs />
      <Partners />
      <FounderSpotlight />
      <ClientFeedback />
      <FreeDemoBanner />
    </>
  );
};

export default HomePage;