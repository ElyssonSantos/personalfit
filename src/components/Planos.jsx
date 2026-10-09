import React from 'react';
import { gymData } from '../data/content';
import { Check, X } from 'lucide-react';
import AnimatedSectionTitle from './AnimatedSectionTitle';

const Planos = () => {
  return (
    <section id="planos" className="planos-section">
      <div className="container">
        <div className="section-header">
          <span className="hero-tag">Investimento</span>
          <AnimatedSectionTitle className="section-title">
            Seu objetivo <br/>
            <span className="text-primary">Seu plano</span>
          </AnimatedSectionTitle>
          <p className="section-subtitle">
            Escolha o plano perfeito para você e comece a treinar hoje mesmo.
          </p>
        </div>

        <div className="planos-grid">
          {gymData.plans.map((plano) => (
            <div key={plano.id} className={`plano-card ${plano.recommended ? 'recommended' : ''} ${plano.name === 'Plano Básico' || plano.name === 'Plano Flex' && plano.id === 2 ? 'light-theme' : ''}`}>
              {plano.badge && (
                <div className="plano-badge">{plano.badge}</div>
              )}
              
              <h3 className="plano-name">{plano.name}</h3>
              <p className="plano-desc">{plano.description}</p>
              <p className="plano-fidelity">{plano.fidelity}</p>
              
              <div className="plano-prices">
                <span className="plano-old-price">A partir de<br/>R$ {plano.oldPrice}</span>
                <div className="plano-current-price-box">
                  <span className="plano-currency">R$</span>
                  <span className="plano-price">{plano.promoPrice.split(',')[0]}</span>
                  <span className="plano-cents">,{plano.promoPrice.split(',')[1]}</span>
                  {plano.promoDiscount && (
                    <span className="plano-discount-tag">{plano.promoDiscount}</span>
                  )}
                </div>
                <span className="plano-after-promo">{plano.afterPromo}</span>
              </div>
              
              <a href={`https://wa.me/5579999999999?text=Olá, quero treinar na Personal Fit! Gostaria do ${plano.name}`} target="_blank" rel="noopener noreferrer" className="btn btn-hover-fill plano-btn">
                <span>{plano.buttonText}</span>
              </a>

              <div className="plano-benefits-wrapper">
                <p className="plano-benefits-title">Inclui</p>
                <ul className="plano-benefits">
                  {plano.benefits.map((benefit, idx) => (
                    <li key={idx} className={benefit.included ? 'included' : 'not-included'}>
                      {benefit.included ? <Check size={18} className="benefit-icon" /> : <X size={18} className="benefit-icon" />}
                      <span>{benefit.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Planos;
