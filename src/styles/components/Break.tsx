import styled from 'styled-components';

import footerImg from '../../assets/images/bg-footer.jpg';

export const BreakContainer = styled.section`
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
