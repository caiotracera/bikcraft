import React from 'react';
import Link from 'next/link';

import { HeaderContainer, Menu } from '@/styles/components/Header';

import BikcraftLogo from '../../assets/images/bikcraft.svg';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
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
            <li>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>
          </ul>
        </Menu>
      </div>
    </HeaderContainer>
  );
};

export default Header;
