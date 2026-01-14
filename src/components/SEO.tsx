import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  type?: string;
}

const BASE_URL = 'https://www.archeorizons.fr';
const DEFAULT_TITLE = 'Archéorizons | Archeorizons - Documentation archéologique et numérique 3D';
const DEFAULT_DESCRIPTION = 'Archéorizons (Archeorizons) - Expert en documentation archéologique et numérique 3D. Spécialiste art rupestre, photogrammétrie, modélisation 3D et consulting académique.';

const SEO = ({ 
  title = DEFAULT_TITLE, 
  description = DEFAULT_DESCRIPTION, 
  path = '/',
  type = 'website'
}: SEOProps) => {
  const canonicalUrl = `${BASE_URL}${path}`;
  const imageUrl = `${BASE_URL}/og-image.jpg`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="Archéorizons" />
      <meta property="og:locale" content="fr_FR" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
};

export default SEO;
