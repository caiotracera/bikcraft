import React, { useMemo } from 'react';

import { FooterContainer, CopyContainer } from '@/styles/components/Footer';

import FacebookIcon from '../../assets/images/redes-sociais/facebook.svg';
import InstragramIcon from '../../assets/images/redes-sociais/instagram.svg';
import TwitterIcon from '../../assets/images/redes-sociais/twitter.svg';

const Footer: React.FC = () => {
  const currentYear = useMemo(() => {
    return new Date().getFullYear();
  }, []);

  return (
    <>
      <FooterContainer>
        <div className="container">
          <div className="grid-8 historia">
            <h3>Nossa história</h3>
            <p>
              Quando iniciamos a Bikcraft queriamos apenas um produto que
              adoraríamos utilizar. Eramos apaixonados por pedalar e também por
              fazer as coisas com as nossas próprias mãos. Assim surgiu um sonho
              na garagem da nossa casa.
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
    </>
  );
};

export default Footer;
