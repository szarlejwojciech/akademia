import styled from 'styled-components'
import { Link } from 'gatsby'

const StyledProductPreview = styled(Link)`
  --margin: 1rem;
  display: block;
  flex: 1 0 22.5rem;
  justify-content: center;
  margin: 0 auto calc(var(--margin) * 2);
  border-radius: 0.4rem;
  text-align: center;
  overflow: hidden;
  box-shadow: 0 8.5px 13px -5px rgba(0, 0, 0, 0.16),
    0 6.7px 3.5px -5px rgba(0, 0, 0, 0.07);
  h6 {
    height: 2em;
    line-height: 2em;
    padding: 0 0.5rem;
    font-family: 'Open Sans';
    font-weight: ${({ theme }) => theme.font.fw400};
    border-top-left-radius: 0.4rem;
    border-top-right-radius: 0.4rem;
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.secondaryLight};
    overflow: hidden;
  }
  figure {
    padding: 1.5rem 1rem;
    .gatsby-image {
      width: 12rem;
      height: 12rem;
      margin: 0 auto;
      img {
        /* object-fit: contain !important; */
      }
    }
    p {
      margin: 1rem 0;
      padding: 0;
    }
    .btn {
      padding: 0.5em 2.8em;

      svg {
        transform: rotate(-90deg);
        width: 2em;
        height: auto;
      }
    }
  }
  @media (min-width: 500px) {
    margin: 0 var(--margin) calc(var(--margin) * 2);
    max-width: calc(50% - 2 * var(--margin));
  }
  @media (min-width: 755px) {
    max-width: calc(100% / 3 - 2 * var(--margin));
    figure {
      .gatsby-image {
      }
    }
  }
  @media (min-width: 768px) {
    --margin: 1.5rem;
    max-width: calc(50% - 2 * var(--margin));
    figure {
      padding: 2rem 1.5rem;
      .gatsby-image {
        width: 13rem;
        height: 0;
        padding-top: 100%;
      }
      padding: 1.5rem 0;
    }
  }
  @media (min-width: 1024px) {
    --margin: 2rem;
  }
`

export default StyledProductPreview
