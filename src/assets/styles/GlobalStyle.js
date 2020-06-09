import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html{
    font-size: 62.5%;
    box-sizing: border-box;
  }
  ::selection{
    color: ${({ theme }) => theme.colors.secondaryLight};
    background-color: ${({ theme }) => theme.colors.accent};
  }
  *,*::after,::before{
    box-sizing: inherit;

  }
  *:focus{
    outline: 2px solid Highlight !important;
  }

  body{
    padding: 0;
    margin: 0;
    font-family: 'Open Sans';
    font-size: 160%;
    color: ${({ theme }) => theme.colors.primaryDark};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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

  h1, h2, h3, h4, h5 {
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

  h3 {
    font-size: 2rem;
  }

  h5 {
    font-size: 1.5rem;
  }

  h6 {
    font-size: 1.8rem;
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
  figure{
    margin: 0;
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
    h3 {
      font-size: 2.2rem;
    }
    h5 {
      font-size: 2.1rem;
    }

    h6 {
      font-size: 2rem;
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
    h3 {
      font-size: 2.4rem;
    }
    h5 {
      font-size: 2.4rem;
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
    h3 {
      font-size: 2.6rem;
    }
    h5 {
      font-size: 2.7rem;
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
