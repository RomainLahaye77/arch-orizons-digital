import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Database, Landmark, Building2, Briefcase, Clock, CalendarDays, Wrench } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SEO from '@/components/SEO';

const publics = [
  {
    icon: Landmark,
    title: 'Musées et services patrimoine',
    description:
      'Inventaires, récolement, fonds numérisés, cartels et dossiers d\'œuvre. L\'IA comme assistant de traitement, sous le contrôle d\'un professionnel qui vérifie.',
  },
  {
    icon: Building2,
    title: 'Collectivités',
    description:
      'Élus, directions et agents. Savoir ce qu\'on confie à un outil, ce qu\'on vérifie et ce qu\'on garde chez soi ; gagner du temps sur le répétitif sans perdre la maîtrise du message ni des données des administrés.',
  },
  {
    icon: Briefcase,
    title: 'Entreprises, bureaux d\'études et associations',
    description:
      'Toute structure dont le travail passe par un fichier client, un catalogue, un inventaire ou un corpus documentaire. Faire plus avec la même équipe, sans confier ses données n\'importe où.',
  },
];

const formats = [
  {
    icon: Clock,
    title: 'Atelier découverte',
    duration: '30 minutes, gratuit, sur site',
    description:
      'Une démonstration sur un cas réel, de préférence le vôtre, pour juger sur pièces avant d\'engager quoi que ce soit.',
  },
  {
    icon: CalendarDays,
    title: 'Journée « Structurer et exploiter ses données avec l\'IA »',
    duration: 'Une journée, pour une équipe ou un service',
    description:
      'Sur vos propres données, avec un chapitre entier sur la confidentialité et la vérification.',
  },
  {
    icon: Wrench,
    title: 'Accompagnement sur un cas réel',
    duration: 'Sur mesure',
    description:
      'Concevoir une base ou un tableau de gestion à partir d\'un inventaire ou d\'un fichier existant, et rendre l\'équipe autonome.',
  },
];

const principles = [
  'Pas un cours sur la technologie : on parle de vos tâches et de vos données.',
  'Pas une offre d\'outil : aucun logiciel ni fournisseur n\'est poussé, la démarche est transposable d\'un outil à l\'autre.',
  'Pas un discours de peur ni de promesse : on montre ce que l\'outil fait, ce qu\'il rate, et comment on s\'en aperçoit.',
  'Un chapitre entier sur la confidentialité : ce que l\'on confie à un service en ligne, ce que l\'on garde en interne.',
];

const Formation = () => {
  return (
    <Layout>
      <SEO
        title="Formation IA et données - Archéorizons | Musées, collectivités, entreprises"
        description="Formations courtes pour maîtriser l'IA comme un outil de travail sur ses propres données : inventaires, bases, fonds documentaires. Musées, collectivités et entreprises, presqu'île guérandaise et Grand Ouest."
        path="/formation"
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
              Formation
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-primary mt-3 mb-6">
              Maîtriser l'IA pour garder la main sur ses données
            </h1>
            <p className="text-lg text-muted-foreground">
              L'IA est un outil, pas une menace ni un miracle. Ceux qui la maîtrisent
              gardent la main sur leur travail et sur leurs données ; ceux qui attendent
              finissent par la subir. Archéorizons propose des formations courtes,
              concrètes et adaptées à votre métier, pour faire grandir votre activité
              avec l'outil plutôt que de la subir.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Origine */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="w-16 h-16 bg-terracotta/10 rounded-xl flex items-center justify-center mb-6">
                <Database className="w-8 h-8 text-terracotta" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary mb-6">
                D'où vient cette offre
              </h2>
              <div className="prose prose-lg text-muted-foreground space-y-4">
                <p>
                  Archéorizons est né de la documentation 3D de sites archéologiques.
                  Ce travail a une conséquence pratique : des volumes de données que
                  personne ne peut traiter à la main.
                </p>
                <p>
                  Pendant ma thèse, j'ai numérisé des sites d'art rupestre à grande
                  échelle. Pour traiter seul des milliers de modèles, d'images et de
                  fiches, j'ai appris à utiliser l'IA comme un collaborateur technique,
                  notamment pour concevoir et construire des bases de données qui
                  fonctionnent.
                </p>
                <p>
                  Ce que j'ai constaté, c'est que la démarche est la même quel que soit
                  le projet : comprendre ce que l'outil sait faire, poser le bon cadre,
                  vérifier ce qu'il produit. C'est cette méthode que je transmets.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-card p-8 md:p-10 rounded-2xl shadow-elegant border border-border/50">
                <h3 className="font-display text-xl font-semibold text-primary mb-6">
                  Ce que la formation n'est pas
                </h3>
                <ul className="space-y-4">
                  {principles.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-foreground">
                      <Check className="w-5 h-5 text-terracotta mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Publics */}
      <section className="section-padding bg-cream">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="text-sm font-medium text-terracotta uppercase tracking-wider">
              Publics
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary mt-3">
              À qui s'adresse la formation
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {publics.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.15}>
                <div className="bg-card p-8 rounded-lg shadow-elegant card-hover border border-border/50 h-full">
                  <div className="w-14 h-14 bg-terracotta/10 rounded-lg flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-terracotta" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Formats */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="text-sm font-medium text-terracotta uppercase tracking-wider">
              Formats
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary mt-3">
              Trois façons de commencer
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {formats.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.15}>
                <div className="text-center p-8 h-full">
                  <div className="w-16 h-16 bg-terracotta/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-terracotta" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-terracotta mb-4">{item.duration}</p>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4} className="max-w-3xl mx-auto mt-16 text-center">
            <h3 className="font-display text-xl font-semibold text-primary mb-3">Modalités</h3>
            <p className="text-muted-foreground">
              Sur site, dans la presqu'île guérandaise, l'agglomération de Saint-Nazaire et
              le Grand Ouest ; à distance sur demande. Collectivités : commande directe sur
              devis. Entreprises et associations : sur fonds propres.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6">
              Commencer par un atelier découverte
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-10">
              Trente minutes, gratuites, dans vos locaux, sur un cas réel. Vous jugez sur
              pièces avant d'engager quoi que ce soit.
            </p>
            <Link
              to="/contact?sujet=atelier"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-terracotta text-secondary-foreground font-medium rounded-md hover:bg-terracotta-dark transition-all duration-300 group"
            >
              Demander un atelier découverte gratuit
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

export default Formation;