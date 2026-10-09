import React from 'react';
import Hero from '../components/Hero';
import Sobre from '../components/Sobre';
import Modalidades from '../components/Modalidades';
import Objetivos from '../components/Objetivos';
import Planos from '../components/Planos';
import Unidades from '../components/Unidades';
import ConteudosResumo from '../components/ConteudosResumo';
import CTA from '../components/CTA';
import OrganicTransition from '../components/OrganicTransition';

const Home = () => {
  return (
    <>
      <Hero />
      <Sobre />
      <Modalidades />
      <OrganicTransition bgColor="var(--bg-secondary)" fillColor="var(--bg-tertiary)" type="descendente" />
      <Planos />
      <Unidades />
      <ConteudosResumo />
      <OrganicTransition bgColor="var(--bg-main)" fillColor="var(--primary-color)" type="ascendente" />
      <CTA />
    </>
  );
};

export default Home;
