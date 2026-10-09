import React from 'react';
import { ArrowRight, Dumbbell } from 'lucide-react';
import { gymData } from '../data/content';
import AnimatedSectionTitle from './AnimatedSectionTitle';

const isVideo = (url) => {
  if (!url) return false;
  return url.endsWith('.mp4') || url.endsWith('.webm') || url.endsWith('.ogg') || url.endsWith('.mov');
};

const Modalidades = () => {
  return (
    <section id="modalidades" className="modalidades-section">
      <div className="container">
        <div className="d-flex justify-between align-center" style={{ marginBottom: '4rem', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <span className="hero-tag" style={{ marginBottom: '1rem' }}>Modalidades</span>
            <AnimatedSectionTitle className="section-title" style={{ marginBottom: 0 }}>
              Encontre seu jeito <br/>
              <span className="text-primary">de se movimentar.</span>
            </AnimatedSectionTitle>
          </div>
          <p className="section-subtitle" style={{ marginBottom: 0, maxWidth: '500px' }}>
            Na Personal Fit, você encontra a atividade ideal para o seu objetivo. 
            Escolha como quer treinar e conte com nosso suporte.
          </p>
        </div>

        <div className="modalidades-grid">
          {gymData.modalities.map((mod, index) => {
            const videoSrc = mod.video || (isVideo(mod.image) ? mod.image : null);

            return (
              <div key={mod.id} className={`modalidade-card ${index === 0 || index === 3 ? 'featured' : ''}`}>
                {videoSrc ? (
                  <video
                    src={videoSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="modalidade-img"
                  />
                ) : (
                  <img src={mod.image} alt={mod.name} className="modalidade-img" />
                )}
                <div className="modalidade-overlay">
                  <h3 className="modalidade-title">{mod.name}</h3>
                  <p className="modalidade-desc">{mod.desc}</p>
                  <a href="#objetivos" className="btn-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-color)', fontWeight: 'bold', marginTop: '1rem', textDecoration: 'none' }}>
                    Conhecer modalidade <ArrowRight size={20} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Modalidades;
