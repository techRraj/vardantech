import React from 'react';
import { Helmet } from 'react-helmet-async';
import ProjectGrid from '../components/Portfolio/ProjectGrid';
import Breadcrumbs from '../components/Layout/Breadcrumbs';
import PageSEO from '../components/SEO/PageSEO';
const PortfolioPage = () => {
  return (
    <>
    <Breadcrumbs />
      <Helmet>
        {/* <PageSEO
  title="Portfolio – Our Work, Case Studies & Client Success Stories"
  description="See Vardaan Tech Hub's portfolio of 200+ successful projects. AI chatbots, web apps, mobile apps with measurable outcomes. 4.9/5 client rating."
  path="/portfolio"
  keywords="portfolio AI projects, chatbot case studies, web development portfolio, mobile app projects India"
/> */}
        <title>Portfolio – Our Work, Case Studies & Client Success Stories</title>
        <meta name="description" content="See Vardaan Tech Hub's portfolio of 200+ successful projects. AI chatbots, web apps, mobile apps with measurable outcomes. 4.9/5 client rating." />
        <meta name="keywords" content="portfolio AI projects, chatbot case studies, web development portfolio, mobile app projects India" />
      </Helmet>
      <ProjectGrid />
    </>
  );
};

export default PortfolioPage;