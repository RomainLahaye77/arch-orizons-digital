import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logoMammouth from '@/assets/logo-mammouth.jpg';
import logoTexte from '@/assets/logo-texte.jpg';

const navLinks = [
  { name: 'Accueil', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'À propos', path: '/a-propos' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-background backdrop-blur-md ${
        isScrolled ? 'shadow-elegant py-2' : 'py-3'
      } transition-[padding,box-shadow] duration-300`}
    >
      <nav className="container mx-auto px-6 h-20">
        {/* Desktop Navigation (equal gaps between mammoth, brand text, and links) */}
        <div className="hidden md:grid grid-cols-[auto_1fr_auto_1fr_auto] items-center h-full">
          <Link to="/" className="group justify-self-start">
            <img
              src={logoMammouth}
              alt="Archéorizons Logo"
              className="h-28 lg:h-36 w-auto transition-transform group-hover:scale-105"
            />
          </Link>

          <div aria-hidden="true" />

          <Link to="/" className="group justify-self-center">
            <img
              src={logoTexte}
              alt="Archéorizons"
              className="h-20 lg:h-28 w-auto transition-transform group-hover:scale-105"
            />
          </Link>

          <div aria-hidden="true" />

          <ul className="justify-self-end flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`text-sm font-medium transition-colors link-underline ${
                    location.pathname === link.path
                      ? 'text-terracotta'
                      : 'text-foreground hover:text-terracotta'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile / Tablet */}
        <div className="flex md:hidden items-center justify-between">
          <Link to="/" className="flex items-center gap-4 group min-w-0">
            <img
              src={logoMammouth}
              alt="Archéorizons Logo"
              className="h-16 w-auto shrink-0 transition-transform group-hover:scale-105"
            />
            <img
              src={logoTexte}
              alt="Archéorizons"
              className="h-10 sm:h-12 w-auto max-w-[200px] object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-foreground hover:text-terracotta transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/98 backdrop-blur-md border-t border-border"
          >
            <ul className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className={`block text-lg font-medium py-2 transition-colors ${
                      location.pathname === link.path
                        ? 'text-terracotta'
                        : 'text-foreground hover:text-terracotta'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
