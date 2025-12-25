import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Scan, Mountain, GraduationCap, ArrowRight, Check } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import AnimatedSection from '@/components/ui/AnimatedSection';

const services = [
  {
    icon: Scan,
    title: 'Documentation 3D',
    subtitle: '',
    description:
      'Création de modèles 3D haute résolution par lasergrammétrie et photogrammétrie pour la documentation, la conservation et la valorisation du patrimoine archéologique.',
    features: [
      'Relevés de terrain',
      'Modélisation de grottes, d\'abris ornés, d\'objets et de structures',
      'Orthomosaïques et plans géoréférencés',
      'Exports multi-formats (OBJ, PLY, PDF 3D)',
      'Intégration SIG et webviewer',
    ],
  },
  {
    icon: Mountain,
    title: 'Art Rupestre',
    subtitle: '',
    description:
      'Expertise spécialisée dans l\'étude des arts rupestres, combinant approche méthodologique rigoureuse et documentations approfondies.',
    features: [
      'Inventaire et documentation de sites',
      'Relevés numériques des panneaux',
      'Analyse stylistique et iconographique',
      'Études de conservation préventive',
      'Rapports scientifiques',
    ],
  },
  {
    icon: GraduationCap,
    title: 'Consulting Académique',
    subtitle: 'Recherche & Formation',
    description:
      'Accompagnement de projets de recherche académique et transfert de compétences en documentation numérique du patrimoine.',
    features: [
      'Conseil méthodologique',
      'Formation à la photogrammétrie',
      'Co-encadrement de travaux',
      'Relecture et expertise scientifique',
      'Rédaction d\'articles et rapports',
    ],
  },
];

const Services = () => {
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
              Services
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-primary mt-3 mb-6">
              Des expertises complémentaires
            </h1>
            <p className="text-lg text-muted-foreground">
              De la documentation de terrain au consulting académique, des solutions
              adaptées aux besoins de la recherche et du patrimoine.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <div className="space-y-24">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={0.1}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="w-16 h-16 bg-terracotta/10 rounded-xl flex items-center justify-center mb-6">
                      <service.icon className="w-8 h-8 text-terracotta" />
                    </div>
                    <span className="text-sm font-medium text-terracotta uppercase tracking-wider">
                      {service.subtitle}
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary mt-2 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-foreground"
                        >
                          <Check className="w-5 h-5 text-terracotta mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div
                    className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}
                  >
                    <div className="aspect-[4/3] bg-gradient-to-br from-slate/5 to-terracotta/10 rounded-2xl flex items-center justify-center border border-border/30">
                      <service.icon className="w-32 h-32 text-slate/10" />
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-terracotta/10 rounded-full blur-2xl" />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6">
              Discutons de votre projet
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-10">
              Chaque projet est unique. Contactez-nous pour définir ensemble la
              meilleure approche pour répondre à vos besoins.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-terracotta text-secondary-foreground font-medium rounded-md hover:bg-terracotta-dark transition-all duration-300 group"
            >
              Demander un devis
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
