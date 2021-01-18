import styled from 'styled-components';

import BackgroundImg from '../../../assets/images/bg-sobre.jpg';

export const Introduction = styled.section`
  margin-top: 95px;

  width: 100%;
  height: 160px;
  background: url(${BackgroundImg}) no-repeat center;
  background-size: cover;
  text-align: center;
  padding-top: 30px;

  h1 {
    font-size: 48px;
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;

    &:after {
      content: '';
      display: block;
      width: 60px;
      height: 3px;
      background: #fff;
      margin: 14px auto 10px auto;
    }
  }

  p {
    font-size: 14px;
    line-height: 20px;
    color: #fff;
  }
`;
