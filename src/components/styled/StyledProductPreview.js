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
  }
  @media (min-width: 768px) {
    --margin: 1.5rem;
    max-width: calc(50% - 2 * var(--margin));
    h6 {
      transform: translateY(0);
    }
    figure {
      padding: 2rem 1.5rem;
      position: relative;
      .gatsby-image {
        width: 70%;
        height: 0;
        padding-top: 70%;
        transform: scale(1);
        transform-origin: bottom;
        will-change: transform;
        transition: 0.5s transform ease-in;
      }
      figcaption {
        position: relative;
      }
      p {
        transform: translateX(0%);
      }
      .btn {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(150%);
      }
    }
    h6,
    p,
    .btn {
      will-change: transform;
      transition: 0.3s transform ease-in;
    }
    &:hover,
    &:focus {
      h6 {
        transform: translateY(-120%);
      }
      .gatsby-image {
        transform: scale(1.2);
      }
      p {
        transform: translateX(-150%);
      }
      .btn {
        transform: translateX(-50%);
      }
    }
  }
  @media (min-width: 1024px) {
    --margin: 2rem;
  }

  @media (min-width: 1210px) {
    max-width: calc(100% / 3 - 2 * var(--margin));
  }
`

export default StyledProductPreview
