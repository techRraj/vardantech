import React from 'react';
import { Helmet } from 'react-helmet-async';
import CompanyStory from '../components/About/CompanyStory';
import MissionVision from '../components/About/MissionVision';
import TeamGrid from '../components/About/TeamGrid';
import Milestones from '../components/About/Milestones';
import Certifications from '../components/About/Certifications';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Vardaantechhub - Our Story, Mission & Team</title>
        <meta name="description" content="Learn about Vardana Infotech's journey, mission, values, and meet the expert team behind our AI and software solutions." />
      </Helmet>
      <CompanyStory />
      <MissionVision />
      <TeamGrid />
      <Milestones />
      <Certifications />
    </>
  );
};

export default AboutPage;