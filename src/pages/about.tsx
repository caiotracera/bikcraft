import React from 'react';
import Link from 'next/link';

import Header from '@/components/Header';
import Break from '@/components/Break';
import Footer from '@/components/Footer';

import {
  Introduction,
  Quality,
  QualityItem,
  AboutContainer,
  ValuesList,
  Team,
} from '@/styles/pages/About';

import BikcraftQualidade from '../assets/images/bikcraft-qualidade.svg';
import equipeBikcraft from '../assets/images/equipe-bikcraft.jpg';

const About: React.FC = () => {
  return (
    <>
      <Header />
      <Introduction>
        <div className="container">
          <h1>Sobre</h1>
          <p>conheça mais sobre a bikcraft</p>
        </div>
      </Introduction>

      <AboutContainer className="container">
        <div className="grid-10">
          <h2 className="subtitulo-interno">História, Missão e Visão</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            porro magnam culpa atque a soluta voluptate accusamus.Mollitia
            veritatis debitis asperiores nesciunt sint, perspiciatis voluptate
            doloremque optio vel blanditiis doloribus.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Praesentium nam laudantium possimus, aperiam temporibus dolorem,
            earum quia quidem officiis sunt ducimus magni in ea beatae? Quod
            excepturi consectetur ex non.
          </p>
        </div>
        <div className="grid-6">
          <h2 className="subtitulo-interno">Valores</h2>
          <ValuesList>
            <li>- Qualidade no processo com</li>
            <li>- Foco no cliente sem perder a</li>
            <li>- Diversão, preservando a</li>
            <li>- Natureza com sustentabilidade</li>
          </ValuesList>
        </div>

        <Team className="grid-16">
          <img src={equipeBikcraft} alt="Equipe Bikcraft" />
        </Team>
      </AboutContainer>

      <Quality className="container">
        <h2 className="subtitulo">Qualidade</h2>
        <BikcraftQualidade />

        <ul>
          <QualityItem className="grid-1-3">
            <h3>Durabilidade</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </QualityItem>

          <QualityItem className="grid-1-3">
            <h3>Design</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </QualityItem>

          <QualityItem className="grid-1-3">
            <h3>Sustentabilidade</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </QualityItem>
        </ul>
      </Quality>

      <Break />

      <Footer />
    </>
  );
};

export default About;
