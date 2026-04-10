import React from 'react';
import { Helmet } from 'react-helmet-async';
import HiringBanner from '../components/Careers/HiringBanner';
import JobList from '../components/Careers/JobList';
import Benefits from '../components/Careers/Benefits';

const CareersPage = () => {
  return (
    <>
      <Helmet>
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