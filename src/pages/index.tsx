import React from 'react';
import Link from 'next/link';

import Header from '@/components/Header';
import Break from '@/components/Break';
import Footer from '@/components/Footer';

import {
  Introduction,
  Products,
  Product,
  Portfolio,
  PortfolioItem,
  Quality,
  QualityItem,
} from '@/styles/pages/Index/index';

import ProdutoPasseio from '../assets/images/produtos/passeio.svg';
import ProdutoEsporte from '../assets/images/produtos/esporte.svg';
import ProdutoRetro from '../assets/images/produtos/retro.svg';
import BikcraftQualidade from '../assets/images/bikcraft-qualidade.svg';
import portfolioRetro from '../assets/images/portfolio/retro.jpg';
import portfolioPasseio from '../assets/images/portfolio/passeio.jpg';
import portfolioEsporte from '../assets/images/portfolio/esporte.jpg';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Introduction>
        <div className="container">
          <h1>Bicicletas feitas a mão</h1>
          <blockquote>
            <p>
              "Não tenha nada em sua casa que você não considere útil ou
              acredita ser bonito"
            </p>
            <cite>WILLIAM MORRIS</cite>
          </blockquote>
          <Link href="/products">
            <a className="button">Orçamento</a>
          </Link>
        </div>
      </Introduction>

      <Products className="container">
        <h2 className="subtitulo">Produtos</h2>
        <ul>
          <Product className="grid-1-3">
            <div>
              <ProdutoPasseio />
            </div>
            <h3>Passeio</h3>
            <p>
              Ainda assim, existem dúdidas a respeito de como a necessidade de
              renovação.
            </p>
          </Product>

          <Product className="grid-1-3">
            <div>
              <ProdutoEsporte />
            </div>
            <h3>Esporte</h3>
            <p>
              Ainda assim, existem dúdidas a respeito de como a necessidade de
              renovação.
            </p>
          </Product>

          <Product className="grid-1-3">
            <div>
              <ProdutoRetro />
            </div>
            <h3>Retro</h3>
            <p>
              Ainda assim, existem dúdidas a respeito de como a necessidade de
              renovação.
            </p>
          </Product>
        </ul>

        <div>
          <p>Clique aqui e veja os detalhes dos produtos</p>
          <Link href="/products">
            <a className="button button-black">Produtos</a>
          </Link>
        </div>
      </Products>

      <Portfolio>
        <div className="container">
          <h2 className="subtitulo">Portfólio</h2>

          <ul>
            <PortfolioItem className="grid-8">
              <img src={portfolioRetro} alt="bike retro" />
            </PortfolioItem>

            <PortfolioItem className="grid-8">
              <img src={portfolioPasseio} alt="bike retro" />
            </PortfolioItem>

            <PortfolioItem className="grid-16">
              <img src={portfolioEsporte} alt="bike retro" />
            </PortfolioItem>
          </ul>

          <div>
            <p>Conheça mais o nosso portfólio</p>
            <Link href="/products">
              <a className="button">Portfólio</a>
            </Link>
          </div>
        </div>
      </Portfolio>

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

        <div>
          <p>Conheça mais a nossa história</p>
          <Link href="/about">
            <a className="button button-black">Sobre</a>
          </Link>
        </div>
      </Quality>

      <Break />

      <Footer />
    </>
  );
};

export default Home;
