import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    max-width: 100vw;
    min-width: 100vw;
    overflow-x: hidden;
  }

  *, *:before, *:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .container {
    width: 960px;
    margin: 0 auto;
    padding: 0px;
    position: relative;
  }

  .container:after, .container:before {
    content: "";
    display: table;
  }

  .container:after {
    clear: both;
  }

  .grid-1, .grid-2, .grid-3, .grid-4, .grid-5, .grid-6, .grid-7, .grid-8, .grid-9, .grid-10, .grid-11, .grid-12, .grid-13, .grid-14, .grid-15, .grid-16, .grid-1-3 {
    float: left;
    margin-left: 10px;
    margin-right: 10px;
  }

  .grid-1 	{width: 40px;}
  .grid-2 	{width: 100px;}
  .grid-3 	{width: 160px;}
  .grid-4 	{width: 220px;}
  .grid-5 	{width: 280px;}
  .grid-6 	{width: 340px;}
  .grid-7 	{width: 400px;}
  .grid-8 	{width: 460px;}
  .grid-9 	{width: 520px;}
  .grid-10 	{width: 580px;}
  .grid-11 	{width: 640px;}
  .grid-12 	{width: 700px;}
  .grid-13 	{width: 760px;}
  .grid-14 	{width: 820px;}
  .grid-15 	{width: 880px;}
  .grid-16 	{width: 940px;}
  .grid-1-3	{width: 300px;}

  p {
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 14px;
    line-height: 20px;
  }

  .button {
    border: 3px solid #fec63e;
    padding: 10px 30px;
    color: #fec63e;
    font-size: 14px;
    line-height: 20px;
    text-transform: uppercase;
    letter-spacing: .1em;
    font-weight: bold;
    text-decoration: none;
    transition: all .2s;

    &:hover {
      color: #fff;
      border-color: #fff;
    }
  }

  .button-black {
    &:hover {
      color: #000;
      border-color: #000;
    }
  }

  .subtitulo {
    font-weight: bold;
    font-size: 24px;
    line-height: 30px;
    letter-spacing: .1em;
    color: #000;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 40px;

    &:after {
      content: '';
      display: block;
      width: 60px;
      height: 3px;
      background: #000;
      margin: 8px auto ;
    }
  }

  img {
    display: block;
  }
`;
