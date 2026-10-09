import React from 'react';

import AnimatedSectionTitle from './AnimatedSectionTitle';

const Sobre = () => {
  const differentials = [
    {
      title: "ESTRUTURA",
      desc: "Diferentes ambientes para diferentes objetivos."
    },
    {
      title: "DIVERSIDADE",
      desc: "Treinos, aulas e modalidades para diferentes perfis."
    },
    {
      title: "ACOMPANHAMENTO",
      desc: "Profissionais preparados para orientar sua evolução."
    },
    {
      title: "NUTRIÇÃO",
      desc: "Conteúdo e orientação para cuidar também da alimentação."
    }
  ];

  return (
    <section id="sobre" className="sobre-section">
      <div className="container sobre-container">
        <div className="sobre-image-wrapper animate-fade-in">
          <img
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop"
            alt="Interior da Academia Personal Fit"
            className="sobre-image"
          />
        </div>
        <div className="sobre-content">
          <AnimatedSectionTitle className="section-title">
            Uma academia <br />
            <span className="text-primary">feita para você.</span>
          </AnimatedSectionTitle>

          <p className="section-subtitle" style={{ marginBottom: '2.5rem' }}>
            A Personal Fit reúne estrutura, profissionais qualificados e diferentes formas de cuidar do corpo, da saúde e da performance.
          </p>

          <div className="sobre-differentiators">
            {differentials.map((diff, idx) => (
              <div key={idx} className="diff-item">
                <h4 className="diff-title">{diff.title}</h4>
                <p className="diff-desc">{diff.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
