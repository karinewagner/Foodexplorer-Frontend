import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-size: 62.5%;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS_DARK.BACKGROUND_MAIN};
    color: ${({ theme }) => theme.COLORS_DARK.FONT_WHITE};
    overflow-x: hidden;

    -webkit-font-smoothing: antialiased;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.4s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }
`