import React from 'react';
import { MessageCircle, MapPin, Clock } from 'lucide-react';
import { gymData } from '../data/content';
import logoImg from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <a href="/" className="logo-container" style={{ marginBottom: '1.5rem', textDecoration: 'none', color: 'var(--text-main)', display: 'inline-flex', alignItems: 'center' }}>
              <div className="logo-icon" style={{ width: 36, height: 36 }}>
                <img src={logoImg} alt="Personal Fit Logo" className="logo-img" />
              </div>
              <span style={{ fontSize: '1.25rem' }}>Personal Fit</span>
            </a>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1.5rem', maxWidth: '300px' }}>
              Mais que uma academia, um estilo de vida. Venha alcançar seus resultados conosco.
            </p>
            <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="btn-icon" style={{ color: 'var(--text-main)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }} aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://wa.me/5579999999999" target="_blank" rel="noopener noreferrer" className="btn-icon" style={{ color: 'var(--text-main)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }} aria-label="WhatsApp">
                <MessageCircle size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="footer-col-title" style={{ color: 'var(--primary-color)' }}>Links Rápidos</h4>
            <ul className="footer-links">
              <li><a href="#inicio" className="footer-link">Início</a></li>
              <li><a href="#sobre" className="footer-link">Sobre</a></li>
              <li><a href="#modalidades" className="footer-link">Modalidades</a></li>
              <li><a href="#planos" className="footer-link">Planos</a></li>
              <li><a href="#unidades" className="footer-link">Unidades</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-col-title" style={{ color: 'var(--primary-color)' }}>Unidades</h4>
            <ul className="footer-links">
              {gymData.units.map(unit => (
                <li key={unit.id} style={{ marginBottom: '1rem' }}>
                  <span style={{ color: 'var(--text-main)', fontWeight: 600, display: 'block', marginBottom: '0.25rem' }}>{unit.name}</span>
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                    <MapPin size={18} style={{ flexShrink: 0, marginTop: '3px', color: 'var(--primary-color)' }} />
                    <span>{unit.address}<br />{unit.neighborhood}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer-col-title" style={{ color: 'var(--primary-color)' }}>Horários</h4>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
              <Clock size={18} style={{ flexShrink: 0, marginTop: '3px', color: 'var(--primary-color)' }} />
              <span>Segunda a Sexta:<br />05h às 23h<br /><br />Sábados e Domingos:<br />08h às 13h</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Academia Personal Fit. Todos os direitos reservados. <br /> CNPJ: 48.462.620/0001-79</p>
          <p>
            Desenvolvido por{' '}
            <a
              href="https://wa.me/5579998068464"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--primary-color)', fontWeight: 700, textDecoration: 'none', transition: 'opacity 0.2s' }}
              onMouseOver={(e) => e.currentTarget.style.opacity = '0.8'}
              onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
            >
              Elysson Santos
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
