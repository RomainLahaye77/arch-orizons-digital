import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Send, CheckCircle, Loader2 } from 'lucide-react';
import { Turnstile, type TurnstileInstance } from '@marsidev/react-turnstile';
import Layout from '@/components/layout/Layout';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SEO from '@/components/SEO';
import { useToast } from '@/hooks/use-toast';

// Remplace cette clé par ta Site Key Cloudflare Turnstile
const TURNSTILE_SITE_KEY = '0x4AAAAAACN7OeVdNjIQOSjK';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileRef = useRef<TurnstileInstance>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xjgvbkyv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast({
          title: 'Message envoyé !',
          description: 'Je vous répondrai dans les plus brefs délais.',
        });

        setTimeout(() => {
          setFormData({ name: '', email: '', subject: '', message: '' });
          setIsSubmitted(false);
          setTurnstileToken(null);
          turnstileRef.current?.reset();
        }, 3000);
      } else {
        throw new Error('Erreur lors de l\'envoi');
      }
    } catch (error) {
      toast({
        title: 'Erreur',
        description: 'Une erreur est survenue. Veuillez réessayer.',
        variant: 'destructive',
      });
      // Reset Turnstile en cas d'erreur
      setTurnstileToken(null);
      turnstileRef.current?.reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleTurnstileSuccess = (token: string) => {
    setTurnstileToken(token);
  };

  const handleTurnstileError = () => {
    setTurnstileToken(null);
    toast({
      title: 'Erreur de vérification',
      description: 'Impossible de vérifier que vous êtes humain. Veuillez réessayer.',
      variant: 'destructive',
    });
  };

  const handleTurnstileExpire = () => {
    setTurnstileToken(null);
  };

  return (
    <Layout>
      <SEO 
        title="Contact - Archéorizons | Demande de devis documentation archéologique"
        description="Contactez Archéorizons pour vos projets de documentation 3D, études d'art rupestre ou consulting académique. Devis gratuit sous 48h."
        path="/contact"
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
              Contact
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-primary mt-3 mb-6">
              Parlons de votre projet
            </h1>
            <p className="text-lg text-muted-foreground">
              Vous avez un projet de documentation archéologique ou souhaitez
              simplement échanger ? N'hésitez pas à me contacter.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Info */}
            <AnimatedSection className="lg:col-span-1">
              <div className="space-y-8">
                <div>
                  <h3 className="font-display text-xl font-semibold text-primary mb-6">
                    Coordonnées
                  </h3>
                  <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-terracotta/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-terracotta" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Localisation</p>
                        <p className="text-muted-foreground text-sm mt-1">
                          Basé à Guérande, Loire-Atlantique.
                        </p>
                        <p className="text-muted-foreground text-sm">
                          Interventions : Grand Ouest et France entière
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-terracotta/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-terracotta" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Email</p>
                        <a
                          href="mailto:romain.lahaye@archeorizons.fr"
                          className="text-terracotta text-sm mt-1 hover:text-terracotta-dark transition-colors"
                        >
                          romain.lahaye@archeorizons.fr
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="pt-8 border-t border-border">
                  <h3 className="font-display text-xl font-semibold text-primary mb-4">
                    Réponse rapide
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Je m'efforce de répondre à toutes les demandes sous 48 heures
                    ouvrées. Pour les projets urgents, merci de le préciser dans
                    votre message.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection delay={0.2} className="lg:col-span-2">
              <div className="bg-card rounded-2xl p-8 md:p-10 shadow-elegant border border-border/50">
                <h3 className="font-display text-2xl font-semibold text-primary mb-8">
                  Envoyez-moi un message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Nom complet
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta/20 focus:border-terracotta transition-colors"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta/20 focus:border-terracotta transition-colors"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Sujet
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta/20 focus:border-terracotta transition-colors appearance-none"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="documentation-3d">Documentation 3D</option>
                      <option value="art-rupestre">Art rupestre</option>
                      <option value="consulting">Consulting académique</option>
                      <option value="devis">Demande de devis</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta/20 focus:border-terracotta transition-colors resize-none"
                      placeholder="Décrivez votre projet ou votre demande..."
                    />
                  </div>

                  {/* Cloudflare Turnstile CAPTCHA */}
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <Turnstile
                      ref={turnstileRef}
                      siteKey={TURNSTILE_SITE_KEY}
                      onSuccess={handleTurnstileSuccess}
                      onError={handleTurnstileError}
                      onExpire={handleTurnstileExpire}
                      options={{
                        theme: 'light',
                        size: 'normal',
                      }}
                    />
                    
                    <button
                      type="submit"
                      disabled={isSubmitting || isSubmitted || !turnstileToken}
                      className="w-full md:w-auto px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-slate-dark transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Envoi en cours...
                        </>
                      ) : isSubmitted ? (
                        <>
                          <CheckCircle className="w-5 h-5" />
                          Message envoyé !
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Envoyer le message
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="h-96 bg-muted relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-terracotta/30 mx-auto mb-4" />
            <p className="text-muted-foreground font-medium">
              Guérande, Loire-Atlantique.
            </p>
            <p className="text-muted-foreground/70 text-sm mt-1">
              Interventions dans le Grand Ouest et sur toute la France
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
