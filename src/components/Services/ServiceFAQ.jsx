import { motion } from 'framer-motion';
import styles from './ServiceFAQ.module.css';

const faqs = [
  { q: 'What makes your AI agents different?', a: 'We build autonomous agents that learn from your data and integrate seamlessly with existing APIs.' },
  { q: 'How long does it take to develop a custom chatbot?', a: 'A simple MVP takes 2‑3 weeks. Full‑featured deployment can take 4‑8 weeks.' },
  { q: 'Do you provide post‑launch support?', a: 'Yes, all projects include 30 days of free support, with ongoing maintenance plans available.' },
];

const ServiceFAQ = () => (
  <div className={styles.faq}>
    <h2>Frequently Asked Questions</h2>
    {faqs.map((faq, i) => (
      <motion.details key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <summary>{faq.q}</summary>
        <p>{faq.a}</p>
      </motion.details>
    ))}
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
);

export default ServiceFAQ;