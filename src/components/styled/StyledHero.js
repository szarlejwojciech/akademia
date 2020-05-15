import styled from 'styled-components'

const StyledHero = styled.div`
  --padding-top: 4rem;
  height: calc(100vh - var(--padding-top));
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondaryLight};
  background: url('/hero.jpg') center no-repeat;
  background-size: cover;
  background-position-x: 10vw;
  display: flex;
  align-items: center;

  img {
    width: 100%;
  }
  .cta {
    max-width: 23ch;
    text-align: center;
    margin-left: 5vw;
  }

  @media (orientation: landscape) and (max-width: 767.9px) {
    background-position-x: 27vh;
    .cta {
      margin-left: 14vh;
    }
  }

  @media (min-width: 768px) {
    --padding-top: 6.2rem;
    background-position-x: 21vw;

    .cta {
      margin-left: 11vw;
      max-width: 28ch;
    }
  }

  @media (min-width: 1024px) {
    --padding-top: 8rem;

    .cta {
      margin-left: 13vw;
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
