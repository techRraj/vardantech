import React from 'react';
import { Helmet } from 'react-helmet-async';
import ContactForm from '../components/Contact/ContactForm';
import ContactInfo from '../components/Contact/ContactInfo';
import styles from './ContactPage.module.css';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Get a Free Demo Consultation</title>
        <meta name="description" content="Reach out to Vardaantechhub for AI solutions, custom development, or a free consultation. We're here to help." />
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