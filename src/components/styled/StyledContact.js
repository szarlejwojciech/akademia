import styled from 'styled-components'

const StyledContact = styled.section`
  padding: 3rem 2rem;
  background: url('/contact-bg.jpg') center no-repeat;
  background-size: cover;
  .section-wrapper {
    max-width: 120rem;
    margin: 0 auto;
    & > div {
      box-shadow: 0 20px 20px -10px rgba(0, 0, 0, 0.2),
        0 5px 8px -2px rgba(0, 0, 0, 0.2);
    }
    .info-box {
      max-width: 36rem;
      padding: 3rem 4rem;
      margin: 0 auto;
      background-color: ${({ theme }) => theme.colors.secondaryDark};
      border-radius: 10px;
      .wrapper {
        li + li {
          border-top: 1px solid ${({ theme }) => theme.colors.accent};
          margin-top: 1.2rem;
          padding-top: 1.2rem;
        }
        li {
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          .icon {
            margin-right: 0.8rem;
            color: ${({ theme }) => theme.colors.accent};
            svg {
              height: 2.3rem;
            }
          }
          .content {
            h6 {
              font-size: 1.6rem;
              margin-bottom: 0.2em;
              color: ${({ theme }) => theme.colors.primaryDark};
            }
            .info-text {
              font-size: 1.4rem;
              margin-top: 0.2em;
              display: flex;
              align-items: flex-start;
              justify-content: flex-start;
              color: ${({ theme }) => theme.colors.primaryLight};
              span {
                &.label {
                  opacity: 1;
                  margin-right: 0.8em;
                  opacity: 0.7;
                }
                a {
                  font-size: 1em;
                  border-bottom: 2px solid
                    ${({ theme }) => theme.colors.primaryLight};
                  opacity: 0.7;

                  &:hover {
                    opacity: 0.9;
                  }
                  &:active {
                    opacity: 1;
                  }
                }
              }
            }
          }
        }
      }
    }
    .map {
      height: 32rem;
      margin-top: 2rem;
      border-radius: 10px;
      border: 3px solid ${({ theme }) => theme.colors.secondaryDark};
      overflow: hidden;
      iframe {
        height: 32rem;
        width: 100%;
      }
    }
  }

  @media (min-width: 768px) {
    padding: 3rem 3rem;
    .section-wrapper {
      display: flex;
      .info-box {
        flex: 1;
        .wrapper {
          li {
            .icon {
            }
            .content {
              .info-text {
                font-size: 1.5rem;
              }
            }
          }
        }
      }
      .map {
        flex: 2;
        margin: 0 0 0 2rem;
      }
    }
  }

  @media (min-width: 1024px) {
    padding: 6rem 6rem;
    .section-wrapper {
      .info-box {
        max-width: 45rem;
        padding: 3.5rem 5rem;
        .wrapper {
          li + li {
            margin-top: 1.4rem;
            padding-top: 1.4rem;
          }
          li {
            .icon {
              margin-right: 0.9rem;
              svg {
                width: 2.75rem;
                height: auto;
              }
            }
            .content {
              h6 {
                font-size: 2rem;
                margin-bottom: 0.3em;
              }
              .info-text {
                margin-top: 0.3em;
                font-size: 1.5rem;
              }
            }
          }
        }
      }
      .map {
        margin: 0 0 0 3rem;
        height: 35.6rem;
        iframe {
          height: 35.6rem;
        }
      }
    }
  }
  @media (min-width: 1440px) {
    padding: 6rem 12rem;
    .section-wrapper {
      .info-box {
        padding: 4rem 6rem;
        .wrapper {
          li {
            .icon {
              margin-right: 1rem;
              svg {
                width: 3rem;
              }
            }
            .content {
              h6 {
                font-size: 2.2rem;
                /* margin-bottom: 0.3em; */
              }
              .info-text {
                /* margin-top: 0.3em; */
                font-size: 1.6rem;
              }
            }
          }
        }
      }
      .map {
        height: 39rem;
        iframe {
          height: 39rem;
        }
      }
    }
  }
`
export default StyledContact
