import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  top: 0;

  width: 100%;
  padding: 15px 0;

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
