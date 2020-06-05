import styled, { keyframes } from 'styled-components'

const scaling = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
`

const StyledHero = styled.div`
  --padding-top: 5rem;
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondaryLight};
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  .image-wrapper {
    height: 100%;
    flex: 1;
    .hero-gatsby-img {
      height: inherit;
      animation: ${scaling} 10s ease-in-out infinite alternate;

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
    margin: var(--padding-top) 5vw 0;
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
      margin: var(--padding-top) 14vh 0;
    }
  }
  @media (min-width: 768px) {
    --padding-top: 6.2rem;
    &::before,
    &::after {
      background-position-x: 21vw !important;
    }
    .cta {
      margin: var(--padding-top) 11vw 0;
      max-width: 28ch;
    }
  }
  @media (min-width: 1024px) {
    --padding-top: 8rem;
    .cta {
      margin: var(--padding-top) 13vw 0;
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
