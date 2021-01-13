import React from 'react';
import Link from 'next/link';

import {
  Header,
  Menu,
  Introduction,
  Products,
  Product,
} from '@/styles/Index/index';

import BikcraftLogo from '../assets/images/bikcraft.svg';
import ProdutoPasseio from '../assets/images/produtos/passeio.svg';
import ProdutoEsporte from '../assets/images/produtos/esporte.svg';
import ProdutoRetro from '../assets/images/produtos/retro.svg';

const Home: React.FC = () => {
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
    </>
  );
};

export default Home;
