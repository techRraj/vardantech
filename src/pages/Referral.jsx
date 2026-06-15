import React from 'react';
import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '../components/Layout/Breadcrumbs';

const Referral = () => (
  <>
  <Breadcrumbs />
    <Helmet>
      <title>Referral Program | Vardaan tech hub</title>
      <meta name="description" content="Earn 10% commission by referring clients to Vardaan tech hub. Join our partner program today." />
    </Helmet>
    <section className="section">
      <div className="container" style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto' }}>
        <h1>Referral Partner Program</h1>
        <p>Refer a business and earn 10% of the project value once they sign with us.</p>
        <a href="https://forms.gle/your-google-form" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: 'var(--accent)', color: '#fff', padding: '12px 24px', borderRadius: 8, marginTop: 20 }}>Join as a Partner</a>
      </div>
    </section>
  </>
);

export default Referral;