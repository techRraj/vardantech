import React from 'react';
import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '../components/Layout/Breadcrumbs';
const FreeAudit = () => (
  <>
  <Breadcrumbs />
    <Helmet>
      <title>Free AI Readiness Audit | Vardaan tech hub</title>
      <meta name="description" content="Get a free, personalized audit of your business to discover how AI can save costs and increase revenue." />
    </Helmet>
    <section className="section">
      <div className="container" style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto' }}>
        <h1>Free AI Readiness Audit</h1>
        <p>Answer 5 quick questions and our team will send you a personalized video analysis within 24 hours.</p>
        {/* Replace with your actual Typeform or a simple form */}
        <iframe
          src="https://your-username.typeform.com/to/XXXX"
          width="100%"
          height="500"
          frameBorder="0"
        ></iframe>
      </div>
    </section>
  </>
);

export default FreeAudit;