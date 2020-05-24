import styled from 'styled-components'

const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.secondaryLight};
  font-size: 1.3rem;
  font-weight: ${({ theme }) => theme.font.fw400};
  position: relative;
  z-index: 10;
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem 0;
    margin: 0 auto;

    .logo {
      text-align: center;
      margin-bottom: 3rem;
      img {
        width: 73%;
      }
    }
    .personal-info {
      ul {
        li {
          padding: 0.5em 0.7em 0.5em 0;
          border-bottom: 1px solid ${({ theme }) => theme.secondaryLight};

          a {
            color: ${({ theme }) => theme.colors.secondaryLight};
            font-size: 1em;
            will-change: opacity;
            transition: 0.15s opacity ease-in-out;

            &:hover {
              opacity: 0.8;
            }
            &:active {
              opacity: 0.7;
            }
            span {
              /* text-decoration: underline; */
              border-bottom: 1px solid
                ${({ theme }) => theme.colors.secondaryDark};
            }
          }
          svg {
            height: 1em;
          }

          span {
            margin-left: 1.4em;
          }
        }
      }
    }
  }
  .copyright {
    border-top: 1px solid ${({ theme }) => theme.secondaryLight};
    p {
      text-align: center;
      font-size: 1em;
      line-height: 3;
    }
  }

  @media (min-width: 768px) {
    font-size: 1.4rem;
    .wrapper {
      flex-direction: row-reverse;
      align-items: center;
      max-width: 63rem;
      .logo {
        flex: 1;
        margin: 0 0 0 1.8rem;
        img {
          width: auto;
          height: 9rem;
        }
      }
      .personal-info {
        flex: 1;
      }
    }
  }

  @media (min-width: 1024px) {
    font-size: 1.45rem;
    .wrapper {
      max-width: 74rem;
      .logo {
        margin: 0 0 0 4rem;
        img {
          height: 11rem;
        }
      }
    }
  }

  @media (min-width: 1440px) {
    font-size: 1.6rem;
    .wrapper .logo img {
      height: 13rem;
    }
  }
`
export default StyledFooter
