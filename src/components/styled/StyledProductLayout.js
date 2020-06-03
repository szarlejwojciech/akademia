import styled from 'styled-components'

const StyledProductPreview = styled.article`
  position: relative;
  padding: 0 2.5rem 3rem;
  margin: 0 auto;

  h1,
  h3 {
    color: ${({ theme }) => theme.colors.accent};
  }
  h1 {
    padding-bottom: 0.5em;
    text-align: center;
  }
  h3 {
    margin-bottom: 0.8rem;
  }
  p {
    padding-left: 0.8em;
  }
  hr {
    background: ${({ theme }) => theme.colors.accent};
    border: none;
    height: 1px;
    margin-bottom: 2rem;
  }
  ul {
    font-size: 1.4rem;
    list-style: disc;
  }
  h3 + ul {
    padding-left: 2rem;
  }
  p + ul {
    padding-left: 3.2rem;
  }
  ul ul {
    list-style-type: circle;
  }
  strong {
    color: ${({ theme }) => theme.colors.accent};
  }
  section {
    display: flex;
    flex-direction: column;
    min-height: 280px;
    max-width: 120rem;

    .mdx-wrapper {
      position: relative;
      margin-bottom: 2rem;

      svg {
        position: absolute;
        width: 9.4rem;
        height: auto;
        top: -0.5rem;
        right: -1.2rem;
      }
    }
    .img-wrapper {
      figure {
        margin: 0 auto;
        max-width: 32rem;
        .gatsby-image {
          width: 100% !important;
        }
      }
    }
  }

  @media (min-width: 768px) {
    padding: 0 3rem 3rem;
    ul {
      font-size: 1.5rem;
    }
    h1 {
      margin-bottom: 0;
    }
    section {
      flex-direction: row;
      .mdx-wrapper {
        margin: 0;
        flex: 2;
        padding-right: 2rem;
        svg {
          top: -4.4rem;
          left: -2rem;
          right: unset;
        }
      }
      .img-wrapper {
        position: relative;
        flex: 1;
        z-index: -1;
        &::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          height: 100%;
          width: 50%;
          background-color: ${({ theme }) => theme.colors.secondaryDark};
          box-shadow: 40rem 0 0 40rem
            ${({ theme }) => theme.colors.secondaryDark};
        }
        figure {
          max-width: unset;
          position: sticky;
          top: 35%;
        }
      }
    }
  }
  @media (min-width: 1024px) {
    padding: 0 5rem 4.5rem;
    ul {
      font-size: 1.6rem;
      line-height: 160%;
    }
    section {
      .mdx-wrapper {
        padding-right: 4rem;
        svg {
          top: -5.5rem;
          left: -3.6rem;
          right: unset;
        }
      }
    }
  }
  @media (min-width: 1440px) {
    padding: 0 12rem 6rem;
    ul {
      font-size: 1.6rem;
      line-height: 160%;
    }
    h1 {
      padding: 0;
      margin-bottom: 0.2em;
    }
    section {
      margin: 0 auto;
      .mdx-wrapper {
        svg {
          width: 17.6rem;
          top: -10rem;
          left: -10.7rem;
        }
      }
      .img-wrapper {
        figure {
          max-width: 40rem;
        }
      }
    }
  }
`

export default StyledProductPreview
