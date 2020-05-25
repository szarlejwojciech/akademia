import styled from 'styled-components'

const StyledHero = styled.div`
  --padding-top: 4rem;
  height: calc(100vh - var(--padding-top));
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondaryLight};
  position: relative;
  display: flex;
  align-items: center;
  .image-wrapper {
    height: 100%;
    flex: 1;
    .hero-gatsby-img {
      height: inherit;

      img {
        object-position: left center !important;
      }
    }
  }

  svg {
    width: 100%;
    height: auto;
  }
  .cta {
    max-width: 23ch;
    text-align: center;
    margin: 5vw;
    p {
      margin: 1.15em 0;
    }
    a {
      svg {
        width: 1em;
      }
    }
  }
  @media (orientation: landscape) and (max-width: 767.9px) {
    &::before,
    &::after {
      background-position-x: 27vw !important;
    }
    .cta {
      margin: 14vh;
    }
  }
  @media (min-width: 768px) {
    --padding-top: 6.2rem;
    &::before,
    &::after {
      background-position-x: 21vw !important;
    }
    .cta {
      margin: 11vw;
      max-width: 28ch;
    }
  }
  @media (min-width: 1024px) {
    --padding-top: 8rem;
    .cta {
      margin: 13vw;
      max-width: 28ch;
    }
  }
  @media (min-width: 1440px) {
    --padding-top: 10rem;
    .cta {
      max-width: 37ch;
    }
  }
`
export default StyledHero
