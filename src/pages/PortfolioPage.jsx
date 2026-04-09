import React from 'react';
import { Helmet } from 'react-helmet-async';
import ProjectGrid from '../components/Portfolio/ProjectGrid';

const PortfolioPage = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio - Our Work & Case Studies</title>
        <meta name="description" content="Explore Vardana Infotech's portfolio of AI, web, and mobile projects. See how we've helped businesses transform." />
      </Helmet>
      <ProjectGrid />
    </>
  );
};

export default PortfolioPage;