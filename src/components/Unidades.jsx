import React from 'react';
import { MapPin, Clock, Navigation } from 'lucide-react';
import { gymData } from '../data/content';
import AnimatedSectionTitle from './AnimatedSectionTitle';

const Unidades = () => {
  return (
    <section id="unidades" className="unidades-section">
      <div className="container">
        <div className="section-header">
          <span className="hero-tag">Localização Premium</span>
          <AnimatedSectionTitle className="section-title">
            Padrão de <br />
            <span className="text-primary">Excelência</span>
          </AnimatedSectionTitle>
          <p className="section-subtitle">
            Ambientes climatizados, equipamentos de última geração e profissionais qualificados esperando por você em dois pontos estratégicos.
          </p>
        </div>

        <div className="unidades-grid">
          {gymData.units.map((unit) => (
            <div key={unit.id} className="unidade-card">
              <div className="unidade-img-wrapper" style={{ height: '250px', overflow: 'hidden' }}>
                <img src={unit.image} alt={unit.name} className="unidade-img" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              
              <div className="unidade-content" style={{ padding: '2rem', background: 'var(--bg-tertiary)', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 className="unidade-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.25rem', fontWeight: 800, marginBottom: '1rem' }}>
                  <MapPin className="text-primary" size={24} />
                  {unit.name}
                </h3>

                <div className="unidade-info" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1.5rem', flexGrow: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <MapPin size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{unit.address} - {unit.neighborhood}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <Clock size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ whiteSpace: 'pre-line' }}>{unit.hours}</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <a href={unit.mapLink} className="btn btn-primary" style={{ flex: 1, justifyContent: 'center', padding: '0.75rem', fontSize: '0.875rem' }}>
                    Como Chegar <Navigation size={16} />
                  </a>
                  <a href={`https://wa.me/${unit.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ flex: 1, justifyContent: 'center', padding: '0.75rem', fontSize: '0.875rem' }}>
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Unidades;
