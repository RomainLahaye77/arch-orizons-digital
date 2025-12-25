import { Link } from 'react-router-dom';
import { MapPin, Mail, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-semibold">Archéorizons</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-xs">
              Expertise archéologique et documentation 3D pour la recherche et le patrimoine.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-medium text-sm uppercase tracking-wider text-primary-foreground/50">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Accueil', path: '/' },
                { name: 'Services', path: '/services' },
                { name: 'Portfolio', path: '/portfolio' },
                { name: 'À propos', path: '/a-propos' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-primary-foreground/70 hover:text-terracotta-light transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-medium text-sm uppercase tracking-wider text-primary-foreground/50">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <MapPin size={16} className="text-terracotta-light" />
                <span>Grand Ouest, France</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Mail size={16} className="text-terracotta-light" />
                <a href="mailto:contact@archeorizons.fr" className="hover:text-terracotta-light transition-colors">
                  contact@archeorizons.fr
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-primary-foreground/50">
              © {currentYear} Archéorizons. Tous droits réservés.
            </p>
            <p className="text-xs text-primary-foreground/50">
              Micro-entreprise · SIRET en cours
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
