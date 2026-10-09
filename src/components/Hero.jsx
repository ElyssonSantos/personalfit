import React from 'react';
import { ArrowRight } from 'lucide-react';
import AnimatedSectionTitle from './AnimatedSectionTitle';

const Hero = () => {
  const videoBackground = "/src/conteudos/hero.mp4";

  return (
    <section id="inicio" className="hero">
      {videoBackground ? (
        <video
          src={videoBackground}
          autoPlay
          loop
          muted
          playsInline
          className="hero-bg"
          style={{ objectFit: 'cover' }}
        />
      ) : (
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
          alt="Academia Personal Fit"
          className="hero-bg"
        />
      )}
      <div className="hero-overlay"></div>

      <div className="container hero-container-inner">
        <div className="hero-content">
          <span className="hero-tag">Mais que uma academia</span>

          <AnimatedSectionTitle tag="h1" className="hero-title">
            Disciplina <span className="text-primary">hoje</span><br />
            Resultados <span className="text-primary">amanhã</span>
          </AnimatedSectionTitle>

          <p className="hero-subtitle animate-fade-in">
            Treine com estrutura, acompanhamento e motivação para alcançar seus objetivos.
          </p>

          <div className="hero-actions animate-fade-in">
            <a href="#planos" className="btn btn-hover-fill cta-btn">
              <span>Conheça a Personal Fit</span> <ArrowRight size={22} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
