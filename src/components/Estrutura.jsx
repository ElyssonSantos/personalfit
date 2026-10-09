import React, { useState } from 'react';
import { X, Image as ImageIcon } from 'lucide-react';
import { gymData } from '../data/content';
import AnimatedSectionTitle from './AnimatedSectionTitle';

const Estrutura = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="estrutura" className="estrutura-section">
        <div className="container">
          <div className="d-flex justify-between align-center" style={{ marginBottom: '3rem', flexWrap: 'wrap', gap: '2rem' }}>
            <div>
              <span className="hero-tag" style={{ marginBottom: '1rem' }}>Estrutura Premium</span>
              <AnimatedSectionTitle className="section-title" style={{ marginBottom: 0 }}>
                Conheça nossa <br/>
                <span className="text-primary">estrutura.</span>
              </AnimatedSectionTitle>
            </div>
            <button className="btn btn-secondary" onClick={() => setIsModalOpen(true)}>
              Ver todas as fotos <ImageIcon size={20} />
            </button>
          </div>

          <div className="estrutura-grid">
            {gymData.structure.slice(0, 4).map((item) => (
              <div key={item.id} className="estrutura-item" onClick={() => setIsModalOpen(true)} style={{ cursor: 'pointer' }}>
                <img src={item.image} alt={item.name} className="estrutura-img" />
                <div className="estrutura-overlay">
                  <h3 className="estrutura-title">
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--primary-color)', display: 'inline-block' }}></span>
                    {item.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Estrutura */}
      {isModalOpen && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.95)', zIndex: 1050, display: 'flex', flexDirection: 'column', overflowY: 'auto', padding: '2rem' }}>
          <button 
            style={{ position: 'fixed', top: '2rem', right: '2rem', background: 'none', color: '#fff', zIndex: 1060 }}
            onClick={() => setIsModalOpen(false)}
          >
            <X size={40} />
          </button>
          
          <div className="container" style={{ marginTop: '4rem', marginBottom: '4rem' }}>
            <AnimatedSectionTitle className="section-title text-center" style={{ marginBottom: '3rem', textAlign: 'center' }}>
              Nossa <span className="text-primary">Estrutura Completa</span>
            </AnimatedSectionTitle>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {gymData.structure.map((item) => (
                <div key={item.id} style={{ borderRadius: '8px', overflow: 'hidden', position: 'relative' }}>
                  <img src={item.image} alt={item.name} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '1.5rem', background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>{item.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Estrutura;
