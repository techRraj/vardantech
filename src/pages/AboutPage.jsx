import React from 'react';
import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '../components/Layout/Breadcrumbs';
import CompanyStory from '../components/About/CompanyStory';
import MissionVision from '../components/About/MissionVision';
import TeamGrid from '../components/About/TeamGrid';
import Milestones from '../components/About/Milestones';
import Certifications from '../components/About/Certifications';
import StatsCounter from '../components/About/StatsCounter';
import styles from './AboutPage.module.css';
// import PageSEO from '../components/SEO/PageSEO';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        {/* <PageSEO
  title="About Us – Our Story, Mission & Leadership Team"
  description="Learn about Vardaan Tech Hub – our mission to democratize AI, our visionary leadership team, 200+ successful projects, and 15+ years of innovation in software development."
  path="/about"
  keywords="about Vardaan Tech Hub, AI company Indore, software development team, Mini Chauhan founder, tech leadership India"
/> */}
        <title>About Us – Vardaan Tech Hub | Our Story, Mission & Team</title>
        <meta name="description" content="Learn about Vardaan Tech Hub – our mission to democratize AI, our visionary leadership team, 200+ successful projects, and 15+ years of innovation in software development." />
        <link rel="canonical" href="https://vardaantechhub.com/about" />
        <meta property="og:title" content="About Us – Vardaan Tech Hub | Our Story, Mission & Team" />
        <meta property="og:description" content="Learn about Vardaan Tech Hub's journey, mission, values, and meet the expert team." />
        <meta property="og:url" content="https://vardaantechhub.com/about" />
        <meta property="og:image" content="https://vardaantechhub.com/assets/og-default.jpg" />
      </Helmet>

      {/* Hero Banner with Group Image */}
      <section className={styles.heroBanner}>
        <div className={styles.heroOverlay} />
        <img 
          src='/src/assets/groupImg.png' 
          alt="Vardaan Tech Hub Team" 
          className={styles.heroImage}
        />
        <div className={styles.heroContent}>
          <Breadcrumbs />
          <h1>About Vardaan Tech Hub</h1>
          <p>Building Tomorrow's Technology, Today</p>
        </div>
      </section>

      <StatsCounter />
      <CompanyStory />
      <MissionVision />
      <TeamGrid />
      <Milestones />
      <Certifications />
    </>
  );
};

export default AboutPage;