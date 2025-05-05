import React from 'react';
import { Helmet } from 'react-helmet-async';
import { getSEO } from '../utils/settings';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  ogImage = '/og-image.jpg', // Default OG image path
  ogUrl = 'https://your-domain.com', // Replace with your actual domain
}) => {
  // Get default values from settings
  const seoSettings = getSEO();
  const defaultTitle = seoSettings.title;
  const defaultDescription = seoSettings.description;
  const defaultKeywords = seoSettings.keywords;

  // Use provided props or fall back to settings
  const finalTitle = title || defaultTitle;
  const finalDescription = description || defaultDescription;
  const finalKeywords = keywords || defaultKeywords;
  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={ogUrl} />
      <meta property="twitter:title" content={finalTitle} />
      <meta property="twitter:description" content={finalDescription} />
      <meta property="twitter:image" content={ogImage} />

      {/* Canonical link */}
      <link rel="canonical" href={ogUrl} />
    </Helmet>
  );
};

export default SEO;
