import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './Breadcrumbs.module.css';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);
  if (pathnames.length === 0) return null; // no breadcrumbs on home

  const breadcrumbList = pathnames.map((name, index) => {
    const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
    const isLast = index === pathnames.length - 1;
    const displayName = name.replace(/-/g, ' ');
    return { name: displayName, path: routeTo, isLast };
  });

  return (
    <motion.nav
      className={styles.breadcrumb}
      aria-label="Breadcrumb"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <ol>
        <li><Link to="/">Home</Link></li>
        {breadcrumbList.map((item, i) => (
          <li key={i}>
            {item.isLast ? (
              <span>{item.name}</span>
            ) : (
              <Link to={item.path}>{item.name}</Link>
            )}
          </li>
        ))}
      </ol>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": breadcrumbList.map((item, i) => ({
            "@type": "ListItem",
            "position": i + 2,
            "name": item.name,
            "item": `https://vardaantechhub.com${item.path}`
          })).concat({
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://vardaantechhub.com"
          })
        })}
      </script>
    </motion.nav>
  );
};

export default Breadcrumbs;