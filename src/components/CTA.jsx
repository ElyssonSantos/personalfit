import React from 'react';
import { ArrowRight } from 'lucide-react';
import AnimatedSectionTitle from './AnimatedSectionTitle';

const CTA = () => {
  return (
    <section className="cta-section solid-yellow">
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <AnimatedSectionTitle className="cta-title text-black">
          Seu próximo nível <br/>
          começa aqui.
        </AnimatedSectionTitle>
        <p className="cta-subtitle text-black" style={{ opacity: 0.8 }}>
          Venha conhecer a Personal Fit e descubra uma nova forma de treinar.
        </p>
        <a href="#planos" className="btn btn-hover-fill cta-btn">
          <span>Quero Treinar</span> <ArrowRight size={22} />
        </a>
      </div>
    </section>
  );
};

export default CTA;
