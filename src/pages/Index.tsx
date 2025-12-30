import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Scan, Mountain, GraduationCap } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import AnimatedSection from '@/components/ui/AnimatedSection';
import heroImage from '@/assets/hero-art-rupestre.png';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <motion.img
            src={heroImage}
            alt="Art rupestre préhistorique"
            className="w-full h-full object-cover object-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 pt-32 md:pt-40">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary leading-tight mb-6 drop-shadow-[0_2px_4px_rgba(255,255,255,0.8)]"
            >
              L'expertise archéologique au service de la{' '}
              <span className="text-terracotta drop-shadow-[0_2px_4px_rgba(255,255,255,0.8)]">documentation numérique</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 drop-shadow-[0_1px_3px_rgba(255,255,255,0.9)]"
            >
              Documentation 3D (photogrammétrie, lasergrammétrie, télémétrie), expertise en art rupestre et consulting académique pour la recherche et le patrimoine culturel.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-md hover:bg-slate-dark transition-all duration-300 group"
              >
                Découvrir nos services
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-primary text-primary font-medium rounded-md hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Nous contacter
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-terracotta rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-cream">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="text-sm font-medium text-terracotta uppercase tracking-wider">
              Nos expertises
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary mt-3">
              Des services adaptés à vos projets
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Scan,
                title: 'Documentation 3D',
                description:
                  'Scans de haute précision réalisés par lasergrammétrie et photogrammétrie pour la conservation et l\'analyse du patrimoine.',
              },
              {
                icon: Mountain,
                title: 'Art Rupestre',
                description:
                  'Spécialisation en art rupestre, avec une approche méthodologique rigoureuse.',
              },
              {
                icon: GraduationCap,
                title: 'Consulting Académique',
                description:
                  'Accompagnement de projets de recherche, formations et expertise scientifique.',
              },
            ].map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.15}>
                <div className="bg-card p-8 rounded-lg shadow-elegant card-hover border border-border/50 h-full">
                  <div className="w-14 h-14 bg-terracotta/10 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-terracotta" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.5} className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-terracotta font-medium hover:gap-3 transition-all link-underline"
            >
              Voir tous nos services
              <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6">
                Un projet de documentation archéologique ?
              </h2>
              <p className="text-primary-foreground/70 text-lg mb-10 max-w-xl mx-auto">
                Discutons ensemble de vos besoins et trouvons la meilleure approche
                pour valoriser votre patrimoine.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-terracotta text-secondary-foreground font-medium rounded-md hover:bg-terracotta-dark transition-all duration-300 group"
              >
                Prendre contact
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
