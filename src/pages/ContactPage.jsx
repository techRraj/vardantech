import React from 'react';
import { Helmet } from 'react-helmet-async';
import ContactForm from '../components/Contact/ContactForm';
import ContactInfo from '../components/Contact/ContactInfo';
import styles from './ContactPage.module.css';
import Breadcrumbs from '../components/Layout/Breadcrumbs';
const ContactPage = () => {
  return (
    <>
    <Breadcrumbs />
      <Helmet>
  <title>Contact Us – Get a Free Demo Consultation</title>
  <meta name="description" content="..." />
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Vardana Infotech Private Limited",
      "image": "https://vardaantechhub.com/assets/logo.svg",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Platinum Plaza PU-4, A.B. Road, Behind C-21 Mall",
        "addressLocality": "Indore",
        "addressCountry": "IN"
      },
      "telephone": "+918889710105",
      "url": "https://vardaantechhub.com",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    })}
  </script>
</Helmet>
      <section className="section">
        <div className={`container ${styles.container}`}>
          <div className={styles.formSection}>
            <h1>Let's Build Something Great</h1>
            <p>Fill out the form and our team will get back to you within 24 hours.</p>
            <ContactForm />
          </div>
          <ContactInfo />
        </div>
      </section>
    </>
  );
};

export default ContactPage;