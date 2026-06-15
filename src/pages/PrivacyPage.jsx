import React from 'react';
import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '../components/Layout/Breadcrumbs';
import styles from './PrivacyPage.module.css';

const PrivacyPage = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | vardaan tech hub</title>
        <meta
          name="description"
          content="vardaan tech hub's privacy policy explains how we collect, use, and protect your personal information. Learn about your data rights."
        />
        <link rel="canonical" href="https://vardaantechhub.com/privacy" />
        <meta property="og:title" content="Privacy Policy | vardaan tech hub" />
        <meta
          property="og:description"
          content="Learn how vardaan tech hub collects, uses, and protects your personal data."
        />
        <meta property="og:url" content="https://vardaantechhub.com/privacy" />
        <meta property="og:image" content="https://vardaantechhub.com/assets/og-default.jpg" />
      </Helmet>

      <section className="section">
        <div className="container">
          <Breadcrumbs />
          <div className={styles.content}>
            <h1>Privacy Statement</h1>

            <h2>Objective</h2>
            <p>
              This Privacy Statement articulates the privacy and data protection principles
              followed by <strong>vardaan tech hub Private Limited</strong> (hereinafter
              referred to as “vardaan tech hub”, “we”, “us”, or “our”) with regard to the
              personal information of its customers, partners, employees, applicants,
              contractors, prospects, vendors, and members of the Board of Directors (“Data
              Subjects”).
            </p>
            <p>
              This Privacy Statement explains the use and protection of personal information
              collected by vardaan tech hub. It applies to any personal information you
              provide to us and, subject to local law, any personal information we collect
              from other sources.
            </p>

            <h2>Scope</h2>
            <p>
              This Privacy Statement covers our information practices, including how we
              collect, use, share, and protect the personal information you provide to us
              through our websites that link to this Privacy Statement (collectively
              referred to as “vardaan tech hub Websites”).
            </p>
            <p>
              We may provide links to third‑party websites for your convenience. We are not
              responsible for their privacy practices, and we encourage you to review the
              privacy statement of each website before submitting your personal information.
            </p>

            <h2>Personal Information We Collect</h2>
            <p>
              We may collect personal information such as your First Name, Last Name, Email
              Address, Job Title, Organization Name, Country, City, and Phone Number. This
              information is collected when you:
            </p>
            <ul>
              <li>Fill out forms on our website</li>
              <li>Raise a query through our website or email</li>
              <li>Call or write to us</li>
            </ul>
            <p>
              When you visit our websites, we automatically collect certain information
              through cookies and similar technologies, including your IP address, browser
              type, device details, and browsing behaviour. For more information, see the
              “Cookies” section below.
            </p>

            <h2>How We Use Your Information</h2>
            <p>The personal information we collect may be used to:</p>
            <ul>
              <li>Provide information and services as requested by you.</li>
              <li>Assess queries, requirements, and process requests for products and services.</li>
              <li>Provide subscription‑related services and information.</li>
              <li>Enable you to download marketing materials.</li>
              <li>Communicate with you about our services, billing, and administration.</li>
              <li>Conduct data analysis to improve our website and services.</li>
              <li>Run marketing or promotional campaigns (with your consent where required).</li>
              <li>Comply with legal obligations or fulfil contractual requirements.</li>
            </ul>

            <h2>Sharing of Personal Information</h2>
            <p>
              We do not sell your personal information. We may share your information with
              trusted third parties only for the purposes described in this statement,
              including:
            </p>
            <ul>
              <li>Affiliated entities for legitimate business purposes.</li>
              <li>Service providers who work on our behalf under strict confidentiality agreements.</li>
              <li>Law enforcement or regulatory bodies when required by law.</li>
              <li>
                In connection with a merger, acquisition, or sale of assets, provided the
                receiving party offers equivalent data protection.
              </li>
            </ul>

            <h2>Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar technologies (like web beacons and pixels) to
              enhance your browsing experience, analyse traffic, and serve targeted
              advertisements. You can control cookie preferences through your browser
              settings or the cookie consent banner on our site.
            </p>
            <p>
              Our website uses Google Analytics, Facebook Pixel, and LinkedIn Insights Tag.
              These third parties may collect information about your visits to our website.
              You can opt out of Google Analytics by installing the Google Analytics
              Opt‑out Browser Add‑on.
            </p>

            <h2>Data Protection & Confidentiality</h2>
            <p>
              We have implemented reasonable and appropriate physical, technical, and
              administrative security measures to protect your personal information from
              loss, misuse, alteration, or destruction. We require our service providers to
              maintain the same level of data protection through formal contracts.
            </p>

            <h2>Your Rights</h2>
            <p>
              Depending on your jurisdiction, you may have the right to access, correct,
              delete, or restrict the processing of your personal information. You may also
              object to processing and request data portability. To exercise any of these
              rights, please contact us using the details below.
            </p>

            <h2>Retention</h2>
            <p>
              We retain your personal information only as long as necessary to fulfil the
              purposes for which it was collected, or as required by law.
            </p>

            <h2>International Transfers</h2>
            <p>
              Your personal information may be transferred to and processed in countries
              other than your own. In such cases, we ensure appropriate safeguards are in
              place to protect your data, in compliance with applicable laws.
            </p>

            <h2>Grievance Redressal</h2>
            <p>
              Any grievance or complaint relating to the processing of your personal
              information should be sent in writing to our Data Privacy Officer:
            </p>
            <p>
              <strong>Chandrashekar M</strong> (For the purpose of this example, replace with
              your appointed officer)<br />
              Email: <a href="mailto:privacy@vardaantechhub.com">privacy@vardaantechhub.com</a>
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              This Privacy Statement may be updated from time to time. The latest version
              will always be published on this page. We encourage you to review it
              periodically.
            </p>
            <p>
              <em>Effective Date: 09 January 2026</em>
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Statement or our data practices,
              please contact us:
            </p>
            <address className={styles.address}>
              vardaan tech hub Private Limited<br />
              Platinum Plaza PU-4, A.B. Road, Behind C-21 Mall<br />
              Indore, Madhya Pradesh – 452001, India<br />
              Phone: <a href="tel:+918889710105">+91 88897 10105</a><br />
              Email: <a href="mailto:Vardaantechhub.info@gmail.com.com">Vardaantechhub.info@gmail.com</a>
            </address>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPage;