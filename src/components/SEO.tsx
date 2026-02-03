import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  type?: string;
}

const BASE_URL = 'https://www.archeorizons.fr';
const DEFAULT_TITLE = 'Archéorizons - Photogrammétrie, Laser & Art pariétal';
const DEFAULT_DESCRIPTION = 'Archéorizons : expert en photogrammétrie, lasergrammétrie et documentation 3D archéologique. Spécialiste art rupestre, grottes ornées et patrimoine préhistorique.';

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
      
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Archéorizons" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:secure_url" content={imageUrl} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="fr_FR" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
};

export default SEO;
