import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SEO from '@/components/SEO';
import photoProfil from '@/assets/photo-profil.jpg';
const timeline = [
  {
    year: 'Décembre 2024',
    title: 'Création d\'Archéorizons',
    description:
      'Lancement de la micro-entreprise spécialisée en documentation 3D et expertise archéologique.',
  },
  {
    year: '2024',
    title: 'Postdoctorat international à l\'Université de Sherbrooke (Canada)',
    description:
      'Recherche sur les arts rupestres du Bouclier canadien (analyses physico-chimiques des matières colorantes, numérisation patrimoniale avancée et développement d\'infrastructures de gestion de données pour une approche intégrée).',
  },
  {
    year: '2016-2023',
    title: 'Doctorat en Archéologie',
    description:
      'Thèse sur les arts rupestres d\'Afrique du Sud - méthodologie 3D, analyse spatiale et interprétation.',
  },
  {
    year: '2012-2015',
    title: 'Master Archéologie et Histoire',
    description:
      'Spécialisation en art pariétal et en préhistoire.',
  },
  {
    year: '2009-2012',
    title: 'Licence Sociologie Anthropologie',
    description: '',
  },
];

const expertise = [
  {
    icon: BookOpen,
    title: 'Arts Rupestres',
    description: 'Expertise approfondie des traditions picturales appliquée à des terrains variés.',
  },
  {
    icon: Award,
    title: 'Modélisation 3D',
    description: 'Maîtrise des techniques de documentation 3D appliquées à l\'archéologie (Lasergrammétrie, photogrammétrie).',
  },
  {
    icon: GraduationCap,
    title: 'Recherche',
    description: 'Publications scientifiques et participation à des projets internationaux.',
  },
];

const About = () => {
  return (
    <Layout>
      <SEO 
        title="À propos - Archéorizons | Archéologue spécialiste documentation 3D"
        description="Découvrez le parcours d'Archéorizons : docteur en archéologie, spécialiste des arts rupestres et expert en documentation numérique 3D du patrimoine."
        path="/a-propos"
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
              À propos
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-primary mt-3 mb-6">
              Une expertise née de la recherche
            </h1>
            <p className="text-lg text-muted-foreground">
              Archéorizons naît d'une passion pour le patrimoine archéologique et
              d'une volonté de mettre l'expertise académique au service de la
              documentation du patrimoine.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Profile */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="relative">
                <div className="aspect-[4/5] bg-gradient-to-br from-slate/5 to-terracotta/10 rounded-2xl overflow-hidden">
                  <img 
                    src={photoProfil} 
                    alt="Photo de profil - Archéologue sur le terrain" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-terracotta/10 rounded-full blur-3xl" />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary mb-6">
                Chercheur & Entrepreneur
              </h2>
              <div className="prose prose-lg text-muted-foreground space-y-4">
                <p>
                  Je suis titulaire d'un doctorat d'Histoire de l'Université Paris 1 
                  Panthéon-Sorbonne. J'ai consacré mes recherches à l'étude des arts 
                  rupestres d'Afrique australe, du bouclier canadien et de l'art 
                  pariétal ouest européen.
                </p>
                <p>
                  Mes recherches combinent approches méthodologiques innovantes et 
                  travail de terrain.
                </p>
                <p>
                  Ces diverses expériences m'ont permis de développer une expertise 
                  solide en documentation numérique du patrimoine, notamment par les 
                  techniques de photogrammétrie et de modélisation 3D.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="section-padding bg-cream">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="text-sm font-medium text-terracotta uppercase tracking-wider">
              Compétences
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary mt-3">
              Domaines d'expertise
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expertise.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.15}>
                <div className="text-center p-8">
                  <div className="w-16 h-16 bg-terracotta/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-terracotta" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="text-sm font-medium text-terracotta uppercase tracking-wider">
              Parcours
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary mt-3">
              Un chemin vers l'expertise
            </h2>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

              {timeline.map((item, index) => (
                <AnimatedSection
                  key={item.year}
                  delay={index * 0.15}
                  direction={index % 2 === 0 ? 'right' : 'left'}
                >
                  <div
                    className={`relative flex items-start gap-8 mb-12 ${
                      index % 2 === 0
                        ? 'md:flex-row'
                        : 'md:flex-row-reverse md:text-right'
                    }`}
                  >
                    <div className="hidden md:block md:w-1/2" />
                    <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-terracotta rounded-full -translate-x-1 md:-translate-x-1/2 mt-2" />
                    <div className="pl-8 md:pl-0 md:w-1/2">
                      <span className="text-sm font-medium text-terracotta">
                        {item.year}
                      </span>
                      <h3 className="font-display text-xl font-semibold text-primary mt-1 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6">
              Travaillons ensemble
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-10">
              Vous avez un projet de recherche ou de documentation archéologique ?
              Je serais ravi d'en discuter avec vous.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-terracotta text-secondary-foreground font-medium rounded-md hover:bg-terracotta-dark transition-all duration-300 group"
            >
              Me contacter
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

export default About;
