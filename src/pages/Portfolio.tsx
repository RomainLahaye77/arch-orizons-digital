import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2, ExternalLink } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import AnimatedSection from '@/components/ui/AnimatedSection';

// Type pour les items du portfolio
type PortfolioItem = {
  id: number;
  title: string;
  category: string;
  description: string;
  type: 'image' | 'sketchfab';
  imageUrl?: string;
  embedId?: string;
  thumbnailUrl?: string;
};

// Portfolio items - à compléter avec vos propres modèles Sketchfab et images
const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Exemple Art Rupestre',
    category: 'Art rupestre',
    description:
      'Description de votre projet d\'art rupestre.',
    type: 'image',
    imageUrl:
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&h=800&fit=crop',
  },
  {
    id: 2,
    title: 'Exemple Art Pariétal',
    category: 'Art pariétal',
    description:
      'Description de votre projet d\'art pariétal.',
    type: 'image',
    imageUrl:
      'https://images.unsplash.com/photo-1551524163-d00e85e9d9d5?w=1200&h=800&fit=crop',
  },
];

const categories = ['Tous', 'Art rupestre', 'Art pariétal'];

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
      <section className="pt-48 pb-16 bg-cream">
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
                        <div className="w-full h-full relative">
                          <img
                            src={item.thumbnailUrl}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute bottom-2 right-2 bg-primary/80 text-primary-foreground text-xs px-2 py-1 rounded">
                            Modèle 3D
                          </div>
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

              <div className="aspect-video bg-muted relative">
                {selectedItem.type === 'sketchfab' ? (
                  <iframe
                    title={selectedItem.title}
                    src={`https://sketchfab.com/models/${selectedItem.embedId}/embed?autostart=1&ui_theme=dark`}
                    className="w-full h-full"
                    allow="autoplay; fullscreen; xr-spatial-tracking"
                    allowFullScreen
                  />
                ) : (
                  <img
                    src={selectedItem.imageUrl}
                    alt={selectedItem.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              
              {selectedItem.type === 'sketchfab' && (
                <div className="px-6 pt-4 border-t border-border">
                  <a
                    href={`https://sketchfab.com/models/${selectedItem.embedId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-terracotta hover:text-terracotta-dark transition-colors text-sm"
                  >
                    Voir en plein écran sur Sketchfab
                    <ExternalLink size={14} />
                  </a>
                </div>
              )}

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
