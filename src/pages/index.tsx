import React from 'react';
import Link from 'next/link';

import { Header, Introduction, Menu } from '@/styles/Index/index';

import BikcraftLogo from '../assets/images/bikcraft.svg';

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
    </>
  );
};

export default Home;
