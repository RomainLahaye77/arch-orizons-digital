import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2, ExternalLink } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import AnimatedSection from '@/components/ui/AnimatedSection';

// Sample portfolio items - can be expanded
const portfolioItems = [
  {
    id: 1,
    title: 'Gravures rupestres de Brandberg',
    category: 'Art Rupestre',
    description:
      'Documentation 3D d\'un panneau de gravures rupestres du massif de Brandberg, Namibie.',
    type: 'sketchfab',
    embedId: '7c8b9c9f7e844e4ab4e8c6d7f8a9b0c1', // Placeholder ID
  },
  {
    id: 2,
    title: 'Dolmen de la Pierre Plate',
    category: 'Mégalithisme',
    description:
      'Modélisation photogrammétrique d\'un monument mégalithique breton.',
    type: 'sketchfab',
    embedId: 'a1b2c3d4e5f6g7h8i9j0', // Placeholder ID
  },
  {
    id: 3,
    title: 'Site de Twyfelfontein',
    category: 'Art Rupestre',
    description:
      'Relevé ortho-photographique d\'un ensemble de pétroglyphes, Namibie.',
    type: 'image',
    imageUrl:
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&h=800&fit=crop',
  },
  {
    id: 4,
    title: 'Céramique préhistorique',
    category: 'Mobilier',
    description:
      'Documentation 3D d\'un vase campaniforme pour étude typologique.',
    type: 'sketchfab',
    embedId: 'b2c3d4e5f6g7h8i9j0k1', // Placeholder ID
  },
  {
    id: 5,
    title: 'Abri sous roche de Tsodilo',
    category: 'Art Rupestre',
    description:
      'Panneau peint des collines de Tsodilo, Botswana - patrimoine UNESCO.',
    type: 'image',
    imageUrl:
      'https://images.unsplash.com/photo-1551524163-d00e85e9d9d5?w=1200&h=800&fit=crop',
  },
  {
    id: 6,
    title: 'Tumulus de Carnac',
    category: 'Mégalithisme',
    description:
      'Ortho-image aérienne d\'un ensemble funéraire néolithique.',
    type: 'image',
    imageUrl:
      'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?w=1200&h=800&fit=crop',
  },
];

const categories = ['Tous', 'Art Rupestre', 'Mégalithisme', 'Mobilier'];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [selectedItem, setSelectedItem] = useState<(typeof portfolioItems)[0] | null>(
    null
  );

  const filteredItems =
    selectedCategory === 'Tous'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <Layout>
      {/* Header */}
      <section className="pt-32 pb-16 bg-cream">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-sm font-medium text-terracotta uppercase tracking-wider">
              Portfolio
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-primary mt-3 mb-6">
              Projets & Réalisations
            </h1>
            <p className="text-lg text-muted-foreground">
              Une sélection de travaux de documentation 3D et d'études sur l'art
              rupestre à travers le monde.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-primary/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <AnimatedSection key={item.id} delay={index * 0.1}>
                  <motion.article
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="group cursor-pointer"
                    onClick={() => setSelectedItem(item)}
                  >
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-muted mb-4">
                      {item.type === 'image' ? (
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-slate/10 to-terracotta/10 flex items-center justify-center">
                          <span className="text-sm text-muted-foreground">
                            Modèle 3D
                          </span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300 flex items-center justify-center">
                        <Maximize2 className="w-8 h-8 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                    <span className="text-xs font-medium text-terracotta uppercase tracking-wider">
                      {item.category}
                    </span>
                    <h3 className="font-display text-xl font-semibold text-primary mt-1 group-hover:text-terracotta transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                      {item.description}
                    </p>
                  </motion.article>
                </AnimatedSection>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-primary/90 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-elegant-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 border-b border-border flex items-center justify-between">
                <div>
                  <span className="text-xs font-medium text-terracotta uppercase tracking-wider">
                    {selectedItem.category}
                  </span>
                  <h3 className="font-display text-2xl font-semibold text-primary mt-1">
                    {selectedItem.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="p-2 hover:bg-muted rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>

              <div className="aspect-video bg-muted">
                {selectedItem.type === 'sketchfab' ? (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-muted-foreground mb-4">
                        Intégration Sketchfab
                      </p>
                      <a
                        href={`https://sketchfab.com/models/${selectedItem.embedId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-terracotta hover:text-terracotta-dark transition-colors"
                      >
                        Voir sur Sketchfab
                        <ExternalLink size={16} />
                      </a>
                    </div>
                    {/* Uncomment below for actual Sketchfab embed */}
                    {/* <iframe
                      title={selectedItem.title}
                      src={`https://sketchfab.com/models/${selectedItem.embedId}/embed`}
                      className="w-full h-full"
                      allow="autoplay; fullscreen; xr-spatial-tracking"
                    /> */}
                  </div>
                ) : (
                  <img
                    src={selectedItem.imageUrl}
                    alt={selectedItem.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              <div className="p-6">
                <p className="text-muted-foreground">{selectedItem.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Portfolio;
