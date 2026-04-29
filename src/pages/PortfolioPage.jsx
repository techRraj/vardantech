import React from 'react';
import { Helmet } from 'react-helmet-async';
import ProjectGrid from '../components/Portfolio/ProjectGrid';
import Breadcrumbs from '../components/Layout/Breadcrumbs';
const PortfolioPage = () => {
  return (
    <>
    <Breadcrumbs />
      <Helmet>
        <title>Portfolio - Our Work & Case Studies</title>
        <meta name="description" content="Explore Vardaantechhub portfolio of AI, web, and mobile projects. See how we've helped businesses transform." />
      </Helmet>
      <ProjectGrid />
    </>
  );
};

export default PortfolioPage;