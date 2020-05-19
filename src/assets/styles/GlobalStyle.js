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
    --padding-top: 5rem;

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
    font-weight: ${({ theme }) => theme.font.fw400};
    letter-spacing: 1.5px;
  }

  h1 {
    font-size: 2.4rem;
    font-weight: ${({ theme }) => theme.font.fw400};
    letter-spacing: 1.5px;
  }

  h2 {
    font-size: 2.2rem;
  }

  h6 {
    font-size: 1.6rem;
    font-family: 'Open Sans';
    margin: 0;
    font-weight: ${({ theme }) => theme.font.fw600};
    letter-spacing: 0px;
  }

  p, a {
    font-size: 1.4rem;
  }

  p {
    line-height: 1.5;
    margin: 0;
    letter-spacing: 1px;
  }

  a {
    color: ${({ theme }) => theme.colors.primaryDark};
    text-decoration: none;
  }

  
  @media (min-width: 768px) {
    h1, h2 {
      letter-spacing: 2.5px;
    }

    h1 {
      font-size: 4rem;
    }

    h2 {
      font-size: 3.2rem;
    }

    h6 {
      font-size: 1.9rem;
    }

    p {
      font-size: 1.5rem;
      line-height: 1.5;
    }
  }

  @media (min-width: 1024px) {
    h1 {
      font-size: 4.5rem;
    }
    
    h2 {
      font-size: 4.1rem;
    }

    p {
      font-size: 1.6rem;
      line-height: 1.6;
    }
  }

  @media (min-width: 1440px) {
    h1, h2 {
      letter-spacing: 3px;
    }

    h1 {
      font-size: 5.8rem;
    }

    h2 {
      font-size: 4.8rem;
    }

    h6 {
      font-size: 2.2rem;
    }

    p {
      font-size: 1.6rem;
      line-height: 1.6;
    }
  }
`

export default GlobalStyle