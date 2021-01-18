import React from 'react';
import Link from 'next/link';

import Header from '@/components/Header';

import { Introduction } from '@/styles/pages/About';

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
    </>
  );
};

export default About;
