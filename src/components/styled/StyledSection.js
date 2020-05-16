import styled, { css } from 'styled-components'

const StyledSection = styled.section`
  padding: 4rem 2rem;
  background: ${({ theme }) => theme.colors.secondaryDark}
    url(${({ background }) => background}) left no-repeat;
  background-size: 170vw;
  text-align: center;

  h1,
  h2 {
    svg {
      width: 4.2em;
    }
  }

  .wrapper {
    max-width: 117rem;
    margin: 0 auto;
  }

  .content {
    p {
      padding-bottom: 1.4em;
      max-width: 60ch;
      margin: 0 auto;
    }
  }

  .box {
    background-color: ${({ theme }) => theme.colors.primaryDarkTransparent};
    padding: 3rem 5rem;
    border-radius: 10px;

    p {
      padding: 0.5em 0 2em;
      max-width: 48ch;
      margin: 0 auto;
    }
  }

  .images {
    margin-top: 2rem;

    img {
      width: 25rem;
      border: 4px solid ${({ theme }) => theme.colors.secondaryLight};
      box-shadow: 0 0.7rem 1.5rem rgba(0, 0, 0, 0.15);

      &:first-child {
        transform: translate(2rem, 2rem) rotate(-7deg);
      }

      &:last-child {
        transform: translateX(-2rem) rotate(4deg);
      }
    }
  }

  @media (min-width: 500px) {
    .images {
      margin-top: 3rem;

      .images-wrapper {
        display: flex;
        justify-content: center;
        padding-bottom: 5rem;

        img {
          &:first-child {
            transform: translate(2rem, 2rem) rotate(-7deg);
          }

          &:last-child {
            transform: translate(-2rem, 5rem) rotate(4deg);
          }
        }
      }
    }
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 4rem;
    }

    h2 {
      font-size: 3.2rem;
    }

    .box {
      padding: 5rem;
      width: 65%;
    }

    .images img {
      width: 29rem;
    }
  }

  @media (min-width: 1024px) {
    padding: 6rem 4rem;
    h1 {
      font-size: 4.5rem;
    }
    h2 {
      font-size: 4.1rem;
    }

    .box {
      margin: 0 auto 0 3rem;

      p {
        padding: 1.5em 0 2.5em;
      }
    }

    .wrapper {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
    }

    .content {
      flex: 2;
    }
    .images {
      flex: 1;
      margin: 0;

      .images-wrapper {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0;

        img {
          /* width: 29rem; */
          &:first-child {
            transform: translate(0, 0.5rem) rotate(-7deg);
          }

          &:last-child {
            transform: translate(0, -0.5rem) rotate(4deg);
          }
        }
      }
    }
  }

  @media (min-width: 1440px) {
    h1 {
      font-size: 5.8rem;
    }

    h2 {
      font-size: 4.8rem;
    }

    .box {
      margin-left: 10rem;
    }

    .content {
      flex: 2.3;
    }

    .images {
      .images-wrapper {
        img {
          width: 32rem;

          &:first-child {
            align-self: flex-end;
            transform: translate(0, 1rem) rotate(-7deg);
          }

          &:last-child {
            align-self: flex-start;
            transform: translate(0, -1rem) rotate(4deg);
          }
        }
      }
    }
  }

  ${({ dark }) =>
    dark &&
    css`
      color: ${({ theme }) => theme.colors.secondaryLight};
    `}
`
export default StyledSection
