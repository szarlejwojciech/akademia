import styled from 'styled-components'

const StyledCarouselItem = styled.div`
  position: relative;
  max-width: 33.5rem;
  height: 35rem;
  padding: 3.5rem;
  background-color: ${({ theme }) => theme.colors.secondaryLight};
  border: 2px solid ${({ theme }) => theme.colors.primaryLight};
  border-radius: 10px;
  overflow: hidden;

  figure {
    margin: 0;

    img {
      height: 16rem;
    }

    figcaption {
      font-family: 'Open Sans';

      h6 {
        margin: 3rem 0 1rem;
        color: ${({ theme }) => theme.colors.accent};
      }

      p {
        font-size: 1.2rem;
      }
    }
  }

  .link-wrapper {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${({ theme }) => theme.colors.accentTransparent};
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translate(100%, 100%);
    opacity: 0;
    will-change: transform, opacity;
    transition: 0.25s transform ease-in-out, 0.25s opacity ease-in-out;

    a {
      display: block;
      font-size: 3rem;
      width: 2.5em;
      height: 2.5em;
      line-height: 2.5;
      text-align: center;
      color: ${({ theme }) => theme.colors.accent};
      background-color: ${({ theme }) => theme.colors.secondaryDark};
      border-radius: 50%;
      will-change: transform, opacity;
      transition: 0.8s transform ease-out, 0.15s opacity ease-in-out;
      transition-delay: 0.3s, 0;
      transform: translate(100%, 100%);

      &:hover {
        opacity: 0.8;
      }

      &:active {
        svg {
          transform: rotateX(30deg);
        }
      }
    }
  }

  &:hover .link-wrapper,
  &:focus-within .link-wrapper {
    transform: translate(0, 0);
    opacity: 1;

    a {
      transform: translate(0, 0);
    }
  }

  @media (min-width: 768px) {
    height: 42rem;
    figure {
      height: 19rem;
      figcaption {
        h6 {
        }
        p {
          font-size: 1.5rem;
          line-height: 1.6;
          letter-spacing: 1px;
        }
      }
    }
  }
  @media (min-width: 1024px) {
    max-width: 37rem;
    /* height: 42rem; */
    figure {
      /* height: 19rem; */
      figcaption {
        h6 {
        }
        p {
          /* font-size: 1.5rem; */
          /* line-height: 1.6; */
          /* letter-spacing: 1px; */
        }
      }
    }
  }
  @media (min-width: 1440px) {
    height: 47rem;
    figure {
      img {
        height: 22rem;
      }
      figcaption {
        h6 {
        }
        p {
          font-size: 1.6rem;
          /* line-height: 1.6; */
          /* letter-spacing: 1px; */
        }
      }
    }
  }
`
export default StyledCarouselItem
