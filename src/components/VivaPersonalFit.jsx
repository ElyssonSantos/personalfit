import React from 'react';
import { gymData } from '../data/content';
import AnimatedSectionTitle from './AnimatedSectionTitle';

const VivaPersonalFit = () => {
  return (
    <section id="viva" className="viva-section" style={{ background: 'var(--bg-secondary)', padding: '6rem 0' }}>
      <div className="container">
        <div className="section-header">
          <span className="hero-tag">Comunidade</span>
          <AnimatedSectionTitle className="section-title">
            Viva a <br/>
            <span className="text-primary">Personal Fit.</span>
          </AnimatedSectionTitle>
          <p className="section-subtitle">
            Treinos, aulas, pessoas e momentos que fazem parte da nossa rotina.
          </p>
        </div>

        <div className="viva-gallery">
          {gymData.vivaImages.map((img, idx) => (
            <div key={idx} className={`viva-img-wrapper viva-img-${idx}`}>
              <img src={img} alt={`Rotina Personal Fit ${idx + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VivaPersonalFit;
