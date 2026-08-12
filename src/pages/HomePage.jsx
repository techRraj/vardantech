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
import DeviceShowcase from '../components/Home/DeviceShowcase';
import TrustBadges from '../components/Home/TrustBadges';
const HomePage = () => {
  return (
    <>
    <PageSEO
  title="Enterprise AI Solutions – AI Strategy, Development & Automation | Vardaan Tech Hub"
  description="Transform your business with complete AI solutions. From AI strategy consulting to custom AI agents, predictive analytics, and intelligent automation. 200+ projects delivered. 40% average cost reduction for clients. Book a free consultation."
  path="/"
  keywords="enterprise AI solutions, AI development company, AI strategy consulting, custom AI agents, intelligent automation, predictive analytics, AI deployment, machine learning solutions, AI integration services, digital transformation"
/>
      <Hero />
      <TrustBadges />
      <TechStackSlider />
      <ServicesHighlight />
      <WhyChooseUs />
      {/* <Partners /> */}
       <DeviceShowcase /> 
      <FounderSpotlight />
      <ClientFeedback />
      <FreeDemoBanner />
    </>
  );
};

export default HomePage;