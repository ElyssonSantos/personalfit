import React from 'react';
import { gymData } from '../data/content';
import AnimatedSectionTitle from './AnimatedSectionTitle';

const Profissionais = () => {
  return (
    <section id="profissionais" className="profissionais-section">
      <div className="container">
        <div className="section-header">
          <span className="hero-tag">Nossa Equipe</span>
          <AnimatedSectionTitle className="section-title">
            Profissionais <br/>
            <span className="text-primary">de verdade.</span>
          </AnimatedSectionTitle>
        </div>

        <div className="profissionais-grid">
          {gymData.professionals.map((prof) => (
            <div key={prof.id} className="profissional-card" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', textAlign: 'left', background: 'var(--bg-tertiary)', padding: '1.5rem', borderRadius: '8px' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
                <img src={prof.image} alt={prof.name} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)' }} />
              </div>
              <div style={{ flexGrow: 1 }}>
                <h3 className="profissional-name" style={{ fontSize: '1.125rem', marginBottom: '0' }}>{prof.name}</h3>
                <span className="profissional-role" style={{ fontSize: '0.875rem', display: 'block', color: 'var(--primary-color)' }}>{prof.role}</span>
                {prof.specialty && <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{prof.specialty}</span>}
              </div>
              <a href="#" style={{ color: 'var(--text-muted)' }} aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Profissionais;
