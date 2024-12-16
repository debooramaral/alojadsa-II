import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&family=Playwrite+AR:wght@100..400&display=swap');

  * {
    margin: 0;
    padding: 0;
    font-family: Newsreader, Arial;
  }

  html{
    width: auto;
  }
  body{
    max-width: 100vw;
    height: 100vh;
    background-color: #f5f5f5;
  }

`;