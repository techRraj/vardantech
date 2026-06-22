import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../../utils/seoConfig';

const PageSEO = ({ 
  title, 
  description, 
  path = '', 
  image = siteConfig.ogImage,
  type = 'website',
  schema = null,
  keywords = '',
  children,
}) => {
  const fullTitle = title.includes(siteConfig.name) ? title : `${title} | ${siteConfig.name}`;
  const url = `${siteConfig.url}${path}`;
  
  // Combine all brand keywords
  const allKeywords = [
    ...siteConfig.keywords,
    ...(keywords ? keywords.split(',').map(k => k.trim()) : []),
  ].join(', ');

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords} />
      <meta name="author" content={siteConfig.name} />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <link rel="canonical" href={url} />

      {/* Alternate domain canonical references */}
      {siteConfig.alternateDomains.map(domain => (
        <link key={domain} rel="alternate" href={`${domain}${path}`} />
      ))}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
      {children}
    </Helmet>
  );
};

export default PageSEO;