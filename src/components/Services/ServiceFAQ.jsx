import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiHelpCircle, FiMessageCircle, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import styles from './ServiceFAQ.module.css';

const faqs = [
  { 
    q: 'What makes your AI agents different from traditional automation?', 
    a: 'Unlike rigid automation tools, our AI agents use advanced machine learning and LLMs to understand context, adapt to new scenarios, and make intelligent decisions. They continuously learn from your data, integrate with existing APIs, and can handle complex workflows that traditional RPA cannot. Our agents have helped clients achieve 40% average cost reduction and 70% faster processing times.',
    category: 'AI Agents'
  },
  { 
    q: 'How long does it take to develop a custom AI solution?', 
    a: 'Timelines vary based on complexity. A proof-of-concept or MVP typically takes 2-4 weeks. Full-featured enterprise AI solutions with custom models, integration, and deployment usually take 8-16 weeks. We follow agile methodology with weekly demos, so you see progress from day one.',
    category: 'Process'
  },
  { 
    q: 'Do you provide post‑launch support and maintenance?', 
    a: 'Absolutely. Every project includes 30 days of complimentary post-launch support. We also offer ongoing maintenance plans starting at ₹15,000/month that include performance monitoring, regular updates, bug fixes, and priority support. Our team is available 24/7 for critical issues.',
    category: 'Support'
  },
  { 
    q: 'What industries do you serve?', 
    a: 'We work across multiple industries including fintech, healthcare, e-commerce, logistics, real estate, and education. Our AI solutions are industry-agnostic and can be customized to meet specific regulatory requirements like HIPAA, GDPR, and SOC 2.',
    category: 'Industry'
  },
  { 
    q: 'How do you handle data security and privacy?', 
    a: 'Security is built into every project from day one. We follow enterprise-grade security practices including end-to-end encryption, secure API gateways, role-based access control, and regular security audits. We are GDPR compliant and can work within your VPC or on-premise infrastructure.',
    category: 'Security'
  },
  { 
    q: 'What is your pricing model?', 
    a: 'We offer flexible pricing based on project scope: fixed-price for defined projects, time & material for ongoing development, and retainer models for long-term partnerships. Every project starts with a free consultation to understand your needs. Typical enterprise AI projects range from ₹2 lakhs to ₹20 lakhs depending on complexity.',
    category: 'Pricing'
  },
  { 
    q: 'Can you work with our existing tech stack?', 
    a: 'Yes! Our team has expertise across all major technologies: React, Angular, Vue, Node.js, Python, Java, .NET, PHP, AWS, Azure, GCP, and more. We integrate with your existing infrastructure rather than forcing you to change tools.',
    category: 'Technical'
  },
  { 
    q: 'Do you offer AI strategy consulting?', 
    a: 'Yes, we provide comprehensive AI readiness assessments and strategy consulting. Our experts analyze your business processes, identify automation opportunities, and create a phased roadmap for AI adoption. This service is available as a standalone engagement or as part of a larger project.',
    category: 'Consulting'
  },
];

const categories = ['All', 'AI Agents', 'Process', 'Support', 'Security', 'Pricing', 'Technical', 'Consulting'];

const ServiceFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch = faq.q.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         faq.a.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.section}>
      <div className="container">
        {/* Header */}
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className={styles.badge}>
            <FiHelpCircle style={{ marginRight: 6 }} />
            Got Questions?
          </span>
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know about our AI solutions and services</p>
        </motion.div>

        {/* Search Bar */}
        <motion.div 
          className={styles.searchWrapper}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <FiHelpCircle className={styles.searchIcon} />
          <input 
            type="text" 
            placeholder="Search your question..." 
            className={styles.searchInput}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </motion.div>

        {/* Category Filters */}
        <motion.div 
          className={styles.categories}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {categories.map(cat => (
            <button
              key={cat}
              className={`${styles.categoryBtn} ${activeCategory === cat ? styles.active : ''}`}
              onClick={() => {
                setActiveCategory(cat);
                setOpenIndex(null);
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* FAQ List */}
        <div className={styles.faqList}>
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, i) => (
              <motion.div
                key={i}
                className={`${styles.faqItem} ${openIndex === i ? styles.open : ''}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <button
                  className={styles.question}
                  onClick={() => toggleFaq(i)}
                  aria-expanded={openIndex === i}
                >
                  <div className={styles.questionContent}>
                    <span className={styles.questionIcon}>
                      <FiMessageCircle />
                    </span>
                    <span>{faq.q}</span>
                  </div>
                  <motion.span
                    className={styles.arrow}
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FiChevronDown />
                  </motion.span>
                </button>
                
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      className={styles.answer}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    >
                      <div className={styles.answerContent}>
                        <p>{faq.a}</p>
                        <span className={styles.categoryTag}>{faq.category}</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))
          ) : (
            <motion.div 
              className={styles.noResults}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <FiHelpCircle className={styles.noResultsIcon} />
              <p>No questions found matching your search.</p>
              <Link to="/contact" className={styles.contactLink}>
                Contact us directly <FiArrowRight />
              </Link>
            </motion.div>
          )}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className={styles.bottomCta}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className={styles.ctaCard}>
            <FiMessageCircle className={styles.ctaIcon} />
            <div>
              <h3>Still have questions?</h3>
              <p>Our AI experts are ready to help you find the perfect solution</p>
            </div>
            <Link to="/contact" className={styles.ctaButton}>
              Get in Touch →
            </Link>
          </div>
        </motion.div>

        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
              }
            }))
          })}
        </script>
      </div>
    </section>
  );
};

export default ServiceFAQ;