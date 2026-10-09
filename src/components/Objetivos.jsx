import React, { useState } from 'react';
import { gymData } from '../data/content';
import { ArrowRight, Check } from 'lucide-react';
import AnimatedSectionTitle from './AnimatedSectionTitle';

const Objetivos = () => {
  const [selectedObjective, setSelectedObjective] = useState(gymData.objectives[0]);

  return (
    <section id="objetivos" className="objetivos-section">
      <div className="container">
        <div className="section-header">
          <AnimatedSectionTitle className="section-title">
            Qual é o seu <br/>
            <span className="text-primary">objetivo?</span>
          </AnimatedSectionTitle>
          <p className="section-subtitle">
            Escolha o que você busca. A Personal Fit ajuda você a encontrar o caminho.
          </p>
        </div>

        <div className="objetivos-wrapper">
          <div className="objetivos-cards">
            {gymData.objectives.map((obj) => (
              <button
                key={obj.id}
                className={`objetivo-modern-card ${selectedObjective.id === obj.id ? 'active' : ''}`}
                onClick={() => setSelectedObjective(obj)}
              >
                {obj.title}
              </button>
            ))}
          </div>

          <div className="objetivos-modern-result animate-fade-in" key={selectedObjective.id}>
            <p className="result-intro">Para esse objetivo, algumas opções que podem combinar com você:</p>
            <div className="result-recommendations">
              {selectedObjective.recommendations.map((rec, idx) => (
                <div key={idx} className="result-tag">
                  <Check size={18} className="text-primary" />
                  {rec}
                </div>
              ))}
            </div>
            
            <a href="#modalidades" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '2.5rem' }}>
              Conhecer as modalidades <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Objetivos;
