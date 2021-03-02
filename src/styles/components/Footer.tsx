import styled from 'styled-components';

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
