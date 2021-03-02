import styled from 'styled-components';

import BackgroundImg from '../../../assets/images/bg-sobre.jpg';
import linhasImg from '../../../assets/images/linhas.png';

export const Introduction = styled.section`
  margin-top: 95px;

  width: 100%;
  height: 160px;
  background: url(${BackgroundImg}) no-repeat center;
  background-size: cover;
  text-align: center;
  padding-top: 30px;

  h1 {
    font-size: 36px;
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;

    &:after {
      content: '';
      display: block;
      width: 60px;
      height: 3px;
      background: #fff;
      margin: 6px auto 10px auto;
    }
  }

  p {
    font-size: 14px;
    line-height: 20px;
    color: #fff;
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
    padding-top: 20px;
    overflow: auto;
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

export const AboutContainer = styled.section`
  padding-top: 60px;

  h2.subtitulo-interno {
    font-weight: bold;
    font-size: 24px;
    line-height: 30px;
    letter-spacing: 0.1em;
    color: #000;
    text-transform: uppercase;
    margin-bottom: 20px;

    &:after {
      content: '';
      display: block;
      width: 60px;
      height: 3px;
      background: #000;
      margin: 8px 0;
    }
  }

  p {
    font-size: 18px;
    line-height: 25px;
    margin-bottom: 1em;
    padding-right: 60px;
  }
`;

export const ValuesList = styled.ul`
  li {
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 18px;
    line-height: 30px;
    padding-right: 60px;
  }
`;

export const Team = styled.div`
  padding-top: 20px;
`;
