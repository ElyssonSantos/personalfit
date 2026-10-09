import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import logoImg from '../assets/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHeaderHidden(true);
      } else {
        setIsHeaderHidden(false);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: 'Início', href: '/' },
    {
      name: 'Sobre', href: '/#sobre', sublinks: [
        { name: 'Nossa Estrutura', href: '/#sobre' },
        { name: 'Acompanhamento', href: '/#sobre' },
        { name: 'Nutrição', href: '/#sobre' }
      ]
    },
    { name: 'Modalidades', href: '/#modalidades' },
    { name: 'Planos', href: '/#planos' },
    { name: 'Conteúdos', href: '/conteudos' },
    {
      name: 'Unidades', href: '/#unidades', sublinks: [
        { name: 'Unidade Centro', href: '/#unidades' },
        { name: 'Unidade Zona Sul', href: '/#unidades' }
      ]
    },
  ];

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''} ${isHeaderHidden ? 'hidden' : ''}`}>
        <div className="container header-container">
          <a href="/" className="logo-container">
            <div className="logo-icon">
              <img src={logoImg} alt="Personal Fit Logo" className="logo-img" />
            </div>
            <span>Personal Fit</span>
          </a>
          <nav className="nav-links">
            {navLinks.map((link) => (
              <div key={link.name} className="nav-item-dropdown">
                <a href={link.href} className="nav-link">
                  {link.name}
                </a>
                {link.sublinks && (
                  <div className="dropdown-menu">
                    {link.sublinks.map(sub => (
                      <a key={sub.name} href={sub.href} className="dropdown-item">{sub.name}</a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="header-actions">
            <a href="#planos" className="btn btn-primary btn-sm">
              Quero Treinar
            </a>
            <button
              className="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <button
          className="mobile-close-btn"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <X size={32} />
        </button>

        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="nav-link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}
        <a href="#planos" className="btn btn-primary" style={{ marginTop: '2rem' }} onClick={() => setIsMobileMenuOpen(false)}>
          Quero Treinar
        </a>
      </div>
    </>
  );
};

export default Header;
