import React, { useMemo } from 'react';
import Link from 'next/link';

import {
  Header,
  Menu,
  Introduction,
  Products,
  Product,
  Portfolio,
  PortfolioItem,
  Quality,
  QualityItem,
  Break,
  Footer,
  FooterContainer,
  CopyContainer,
} from '@/styles/Index/index';

import BikcraftLogo from '../assets/images/bikcraft.svg';
import ProdutoPasseio from '../assets/images/produtos/passeio.svg';
import ProdutoEsporte from '../assets/images/produtos/esporte.svg';
import ProdutoRetro from '../assets/images/produtos/retro.svg';
import BikcraftQualidade from '../assets/images/bikcraft-qualidade.svg';
import FacebookIcon from '../assets/images/redes-sociais/facebook.svg';
import InstragramIcon from '../assets/images/redes-sociais/instagram.svg';
import TwitterIcon from '../assets/images/redes-sociais/twitter.svg';
import portfolioRetro from '../assets/images/portfolio/retro.jpg';
import portfolioPasseio from '../assets/images/portfolio/passeio.jpg';
import portfolioEsporte from '../assets/images/portfolio/esporte.jpg';

const Home: React.FC = () => {
  const currentYear = useMemo(() => {
    return new Date().getFullYear();
  }, []);
  return (
    <>
      <Header>
        <div className="container">
          <Link href="/">
            <a className="grid-2">
              <BikcraftLogo />
            </a>
          </Link>

          <Menu className="grid-14">
            <ul>
              <li>
                <Link href="/about">
                  <a>Sobre</a>
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <a>Produtos</a>
                </Link>
              </li>
              <li>
                <Link href="/portfolio">
                  <a>Portfólio</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a>Contato</a>
                </Link>
              </li>
            </ul>
          </Menu>
        </div>
      </Header>

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

      <Break>
        <blockquote>
          <p>
            “O verdadeiro segredo da felicidade está em ter um genuíno interesse
            por todos os detalhes da vida cotidiana.”
          </p>
          <cite>WILLIAM MORRIS</cite>
        </blockquote>
      </Break>

      <Footer>
        <FooterContainer>
          <div className="container">
            <div className="grid-8 historia">
              <h3>Nossa história</h3>
              <p>
                Quando iniciamos a Bikcraft queriamos apenas um produto que
                adoraríamos utilizar. Eramos apaixonados por pedalar e também
                por fazer as coisas com as nossas próprias mãos. Assim surgiu um
                sonho na garagem da nossa casa.
              </p>
            </div>

            <div className="grid-4 contato">
              <h3>Contato</h3>
              <p>
                <ul>
                  <li>- +55 21 9999-9999</li>
                  <li>- contato@bikcraft.com</li>
                  <li>- Rua Ali Perto - Botafogo</li>
                </ul>
              </p>
            </div>

            <div className="grid-4 sociais">
              <h3>Redes sociais</h3>
              <ul>
                <li>
                  <a>
                    <FacebookIcon />
                  </a>
                </li>
                <li>
                  <a>
                    <InstragramIcon />
                  </a>
                </li>
                <li>
                  <a>
                    <TwitterIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </FooterContainer>

        <CopyContainer>
          <div className="container">
            <p className="grid-16">
              Bikcraft {currentYear} - Alguns direitos reservados.
            </p>
          </div>
        </CopyContainer>
      </Footer>
    </>
  );
};

export default Home;
