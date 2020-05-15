import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html{
    font-size: 62.5%;
    box-sizing: border-box;
  }

  *,*::after,::before{
    box-sizing: inherit;
  }
  

  body{
    --padding-top: 4rem;

    padding: var(--padding-top) 0rem 0;
    margin: 0;
    font-family: 'Open Sans';
    font-size: 160%;
    color: ${({ theme }) => theme.colors.primaryDark};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    @media (min-width: 768px) {
      --padding-top: 6.2rem;
    }

    @media (min-width: 1024px) {
      --padding-top: 8rem;
    }

    @media (min-width: 1440px) {
      --padding-top: 10rem;
    }
  }

  button {
    font-family: 'Open Sans';
    text-transform: uppercase;
    font-weight: ${({ theme }) => theme.font.fw600};
    margin: 0;
    cursor: pointer;
  }

  ul{
    padding: 0;
    margin: 0;
    list-style: none;
  }

  h1, h2, h3 {
    font-family: 'Lora';
    margin: 0;
  }

  h1 {
    font-size: 2.4rem;
    font-weight: ${({ theme }) => theme.font.fw400};
    letter-spacing: 1.5px;
  }

  h2 {
    font-size: 2.1rem;
  }

  p, a {
    font-size: 1.4rem;
  }

  p {
    line-height: 1.5;
    margin: 0;
  }

  a {
    color: ${({ theme }) => theme.colors.primaryDark};
    text-decoration: none;
  }

  
  @media (min-width: 768px) {
    p {
      font-size: 1.5rem;
      line-height: 1.5;
    }
  }

  @media (min-width: 1024px) {
    p {
      font-size: 1.6rem;
      line-height: 1.6;
    }
  }

  @media (min-width: 1440px) {
    p {
      font-size: 1.6rem;
      line-height: 1.6;
    }
  }
`

export default GlobalStyle
