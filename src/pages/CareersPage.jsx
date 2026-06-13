import React from 'react';
import { Helmet } from 'react-helmet-async';
import HiringBanner from '../components/Careers/HiringBanner';
import JobList from '../components/Careers/JobList';
import Benefits from '../components/Careers/Benefits';
import Breadcrumbs from '../components/Layout/Breadcrumbs';
import PageSEO from '../components/SEO/PageSEO';

const CareersPage = () => {
  return (
    <>
    <Breadcrumbs />
      <Helmet>
        <PageSEO
  title="Careers – Join Our Team of AI & Tech Innovators"
  description="Explore exciting career opportunities at Vardaan Tech Hub. Work on cutting-edge AI projects with a talented team. Remote-friendly, great benefits."
  path="/careers"
  keywords="AI jobs India, software developer jobs Indore, tech careers, join AI company, remote tech jobs"
/>
        <title>Careers - Join Vardaantechhub</title>
        <meta name="description" content="Explore exciting career opportunities at Vardaantechhub. Work on cutting-edge AI and software projects with a talented team." />
      </Helmet>
      <HiringBanner />
      <JobList />
      <Benefits />
    </>
  );
};

export default CareersPage;