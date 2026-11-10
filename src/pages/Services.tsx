import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Scan, Mountain, GraduationCap, BrainCircuit, ArrowRight, Check } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SEO from '@/components/SEO';
import documentation3dImage from '@/assets/documentation-3d.jpg';
import artRupestreImage from '@/assets/art-rupestre.jpg';
import consultingImage from '@/assets/consulting-academique.jpg';
import formationImage from '@/assets/formation-ia-atelier.jpg';

interface Service {
  icon: typeof Scan;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string | null;
  link?: string;
}

const services: Service[] = [
  {
    icon: Scan,
    title: 'Documentation 3D',
    subtitle: 'Terrain',
    description:
      'Création de modèles 3D haute résolution par lasergrammétrie et photogrammétrie pour la documentation, la conservation et la valorisation du patrimoine archéologique.',
    features: [
      'Modélisation de grottes, d\'abris ornés, d\'objets et de diverses structures',
      'Établissement de relevés de terrain',
      'Orthomosaïques et plans géoréférencés',
      'Exports multi-formats (OBJ, PLY, PDF 3D)',
      'Intégration SIG et webviewer',
    ],
    image: documentation3dImage,
  },
  {
    icon: Mountain,
    title: 'Étude et expertise des sites ornés',
    subtitle: 'Étude',
    description:
      'Étude scientifique de sites d\'art rupestre et d\'art pariétal, de l\'inventaire au rapport, avec une approche méthodologique rigoureuse issue de la recherche doctorale et postdoctorale.',
    features: [
      'Inventaire et documentation de sites',
      'Relevés numériques des panneaux',
      'Analyse stylistique et iconographique',
      'Études de conservation préventive',
      'Rapports scientifiques et dossiers de protection',
    ],
    image: artRupestreImage,
  },
  {
    icon: GraduationCap,
    title: 'Conseil et accompagnement scientifique',
    subtitle: 'Conseil',
    description:
      'Accompagnement de projets de recherche, de collectivités et d\'institutions patrimoniales : méthode, expertise et rédaction.',
    features: [
      'Conseil méthodologique',
      'Co-encadrement de travaux',
      'Relecture et expertise scientifique',
      'Rédaction d\'articles, de rapports et de dossiers',
      'Appui aux demandes de subvention et aux projets de valorisation',
    ],
    image: consultingImage,
  },
  {
    icon: BrainCircuit,
    title: 'Maîtriser l\'IA pour ses données',
    subtitle: 'Formation',
    description:
      'Formations courtes et accompagnements pour apprendre à utiliser l\'IA comme un outil de travail sur vos propres données : inventaires, bases, fonds documentaires, fichiers métier. Une méthode construite sur des milliers de relevés 3D, transposable à tout service qui produit et exploite de l\'information.',
    features: [
      'Atelier découverte de 30 minutes, gratuit, sur site',
      'Journée « Structurer et exploiter ses données avec l\'IA »',
      'Accompagnement sur un cas réel : conception d\'une base ou d\'un tableau de gestion',
      'Formation à la photogrammétrie et à la documentation 3D',
      'Sensibilisation des élus et des directions : ce que l\'IA change, ce qu\'elle ne fait pas',
    ],
    image: formationImage,
    link: '/formation',
  },
];

const Services = () => {
  return (
    <Layout>
      <SEO 
        title="Services - Archéorizons | Documentation 3D, étude des sites ornés, conseil, formation IA"
        description="Quatre services complémentaires : documentation 3D par photogrammétrie et lasergrammétrie, étude et expertise des sites ornés, conseil scientifique, formation à l'IA et aux données."
        path="/services"
      />
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
              Services
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-primary mt-3 mb-6">
              Des expertises complémentaires
            </h1>
            <p className="text-lg text-muted-foreground">
              Documenter, étudier, conseiller, former : quatre services complémentaires,
              du terrain à la transmission, pour la recherche, le patrimoine, les
              collectivités et les entreprises.
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
                    {service.link && (
                      <Link
                        to={service.link}
                        className="inline-flex items-center gap-2 mt-8 text-terracotta font-medium hover:gap-3 transition-all link-underline"
                      >
                        En savoir plus sur la formation
                        <ArrowRight size={18} />
                      </Link>
                    )}
                  </div>

                  <div
                    className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}
                  >
                    {service.image ? (
                      <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border/30">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="aspect-[4/3] bg-gradient-to-br from-slate/5 to-terracotta/10 rounded-2xl flex items-center justify-center border border-border/30">
                        <service.icon className="w-32 h-32 text-slate/10" />
                      </div>
                    )}
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
