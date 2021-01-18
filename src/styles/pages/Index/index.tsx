import styled from 'styled-components';
import BackgroundImg from '../../../assets/images/bg.jpg';
import linhasImg from '../../../assets/images/linhas.png';
import footerImg from '../../../assets/images/bg-footer.jpg';

export const Introduction = styled.section`
  margin-top: 95px;

  width: 100%;
  height: 380px;
  background: url(${BackgroundImg}) no-repeat center;
  background-size: cover;
  text-align: center;
  padding-top: 80px;

  h1 {
    font-size: 48px;
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
  }

  blockquote {
    max-width: 320px;
    margin: 0 auto;
    color: white;
    margin-bottom: 40px;

    p {
      font-style: italic;

      &:before,
      &:after {
        content: '';
        display: block;
        width: 60px;
        height: 3px;
        background: #fff;
        margin: 14px auto 10px auto;
      }
    }

    cite {
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      letter-spacing: 0.1em;
    }
  }
`;

export const Products = styled.section`
  padding: 60px 0px;

  div {
    clear: both;
    text-align: center;
    padding-top: 40px;

    p {
      margin-bottom: 20px;
    }
  }
`;

export const Product = styled.li`
  background: #fec63e;
  text-align: center;

  div {
    padding: 20px;
    background: #000;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    line-height: 25px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-top: 20px;

    &:after {
      content: '';
      display: block;
      width: 60px;
      height: 3px;
      background: #000;
      margin: 2px auto 10px auto;
    }
  }

  p {
    padding: 10px 20px 20px;
  }
`;

export const Portfolio = styled.section`
  width: 100%;
  background: #000;
  padding: 40px 0;

  .subtitulo {
    color: #fec63e;

    &:after {
      background: #fec63e;
    }
  }

  .container {
    div {
      clear: both;
      text-align: center;
      padding-top: 40px;

      p {
        margin-bottom: 20px;
        color: #fff;
      }
    }
  }
`;

export const PortfolioItem = styled.li`
  &:last-child {
    margin-top: 20px;
  }
`;

export const Quality = styled.section`
  padding: 60px 0;

  svg {
    display: block;
    margin: 0 auto;
  }

  div {
    clear: both;
    text-align: center;
    padding-top: 40px;

    p {
      margin-bottom: 20px;
    }
  }

  ul {
    margin-top: 20px;
  }

  &:after {
    content: '';
    width: 634px;
    height: 83px;
    display: block;
    background: url(${linhasImg}) no-repeat center;
    position: absolute;
    top: 209px;
    right: 162px;
    z-index: -5;
  }
`;

export const QualityItem = styled.li`
  text-align: center;
  padding: 0 40px;

  h3 {
    font-size: 18px;
    font-weight: bold;
    line-height: 25px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-top: 20px;

    &:after {
      content: '';
      display: block;
      width: 60px;
      height: 3px;
      background: #000;
      margin: 6px auto 10px auto;
    }
  }
`;

export const Break = styled.section`
  padding: 60px 0;
  width: 100%;
  height: 220px;
  text-align: center;
  background: url(${footerImg}) no-repeat center;
  background-size: cover;

  blockquote {
    max-width: 320px;
    margin: 0 auto;
    color: #fff;
    margin-bottom: 40px;

    p {
      font-style: italic;

      &:before,
      &:after {
        content: '';
        display: block;
        width: 60px;
        height: 3px;
        background: #fff;
        margin: 14px auto 10px auto;
      }
    }

    cite {
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      letter-spacing: 0.1em;
    }
  }
`;

export const Footer = styled.footer``;

export const FooterContainer = styled.div`
  background: #000;
  color: #fff;
  width: 100%;
  padding: 20px 0;

  h3 {
    font-size: 18px;
    font-weight: bold;
    line-height: 25px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-top: 20px;
    color: #fec63e;

    &:after {
      content: '';
      display: block;
      width: 60px;
      height: 3px;
      background: #fec63e;
      margin: 6px 0 12px 0;
    }
  }

  .historia {
    padding-right: 40px;
  }

  .contato {
    ul {
      li {
        font-size: 14px;
        line-height: 20px;
        font-family: Georgia, 'Times New Roman', Times, serif;
      }
    }
  }

  .sociais {
    ul {
      li {
        display: inline-block;

        a {
          border: 3px solid #fec63e;
          display: block;
          padding: 10px;
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            border-color: #fff;
          }
        }

        & + li {
          margin-left: 20px;
        }
      }
    }
  }
`;

export const CopyContainer = styled.div`
  width: 100%;
  background: #fec63e;
  padding: 20px 0;
`;
