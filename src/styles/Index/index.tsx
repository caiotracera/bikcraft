import styled from 'styled-components';
import BackgroundImg from '../../assets/images/bg.jpg';

export const Header = styled.header`
  position: fixed;
  top: 0;

  width: 100%;
  padding: 15px 0;
  z-index: 5;

  background-color: #fec63e;
`;

export const Menu = styled.nav`
  text-align: right;

  ul {
    li {
      margin-top: 20px;
      display: inline-block;

      & + li {
        margin-left: 25px;
      }

      a {
        color: #000;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        font-size: 14px;
        text-decoration: none;
        line-height: 20px;
        padding: 10px 0;

        &:hover {
          color: #fff;
        }
      }
    }
  }
`;

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
