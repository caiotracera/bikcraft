import React from 'react';
import Link from 'next/link';

import { Header } from '@/styles/Index/index';

import BikcraftLogo from '../assets/images/bikcraft.svg';

const Home: React.FC = () => {
  return (
    <Header>
      <div>
        <Link href="/aaa">
          <a>
            <BikcraftLogo />
          </a>
        </Link>
      </div>
    </Header>
  );
};

export default Home;
