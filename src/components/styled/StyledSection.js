import styled, { css } from 'styled-components'

const StyledSection = styled.section`
  padding: 4rem 2rem;
  background: ${({ theme }) => theme.colors.secondaryDark};
  background-size: 170vw;
  text-align: center;

  h1,
  h2 {
    svg {
      width: 4.2em;
    }
  }
  .section-gatsby-img-bg {
    margin: -4rem -2rem;
    padding: inherit;

    &::before,
    &::after {
      background-attachment: ${({ fixed }) => (fixed ? 'fixed' : 'initial')};
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
    .images-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .gatsby-image-wrapper {
        width: 25rem;
        border: 4px solid ${({ theme }) => theme.colors.secondaryLight};
        box-shadow: 0 0.7rem 1.5rem rgba(0, 0, 0, 0.15);

        &.top-photo {
          transform: translate(2rem, 2rem) rotate(-7deg);
        }

        &.bottom-photo {
          transform: translateX(-2rem) rotate(4deg);
        }
      }
    }
  }

  @media (min-width: 500px) {
    .images {
      margin-top: 3rem;

      .images-wrapper {
        display: flex;
        flex-direction: row;
        padding-bottom: 5rem;

        .gatsby-image-wrapper {
          &.top-photo {
            transform: translate(2rem, 2rem) rotate(-7deg);
          }

          &.bottom-photo {
            transform: translate(-2rem, 5rem) rotate(4deg);
          }
        }
      }
    }
  }

  @media (min-width: 768px) {
    .box {
      padding: 5rem;
      width: 65%;
    }

    .images .gatsby-image-wrapper {
      width: 29rem;
    }
  }

  @media (min-width: 1024px) {
    padding: 6rem 4rem;
    .section-gatsby-img-bg {
      margin: -6rem -4rem;
      padding: inherit;
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

        .gatsby-image-wrapper {
          /* width: 29rem; */
          &.top-photo {
            transform: translate(0, 0.5rem) rotate(-7deg);
          }

          &.bottom-photo {
            transform: translate(0, -0.5rem) rotate(4deg);
          }
        }
      }
    }
  }

  @media (min-width: 1440px) {
    .box {
      margin-left: 10rem;
    }

    .content {
      flex: 2.3;
    }

    .images {
      .images-wrapper {
        .gatsby-image-wrapper {
          width: 32rem;

          &.top-photo {
            align-self: flex-end;
            transform: translate(0, 1rem) rotate(-7deg);
          }

          &.bottom-photo {
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
