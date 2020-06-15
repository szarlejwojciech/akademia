import styled from 'styled-components'

const StyledErrorPage = styled.section`
  --padding-top: 5rem;
  background: linear-gradient(165deg, #ffffff 50%, #065f75 220%);
  padding: calc(var(--padding-top) + 3rem) 2rem 3rem;
  .container {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 58.5rem;

    & > svg {
      width: 100%;
      height: auto;
      margin-top: 2rem;
    }
    .cta {
      display: flex;
      flex-direction: column;
      max-width: 40ch;
      text-align: center;
      p {
        margin: 1.4em 0;
      }
      a {
        svg {
          width: 1em;
        }
        align-self: center;
      }
    }
  }

  @media (min-width: 768px) {
    --padding-top: 6.2rem;
    padding: calc(var(--padding-top) + 8rem) 2rem 8rem;
    .container {
      .cta {
        max-width: 35ch;
        text-align: left;
        a {
          align-self: flex-end;
        }
      }
    }
  }
  @media (min-width: 1024px) {
    --padding-top: 8rem;
    background: linear-gradient(98.5deg, #ffffff 45.52%, #065f75 220.32%);
    padding: calc(var(--padding-top) + 6rem) 2rem 6rem;
    .container {
      flex-direction: row;
      margin: 0 7vw;
      .cta {
        margin: 0;
        max-width: 60ch;
      }
      & > svg {
        margin-top: 0;
      }
    }
  }
  @media (min-width: 1440px) {
    --padding-top: 10rem;
    padding: calc(var(--padding-top) + 8rem) 2rem 8rem;
    .container {
      max-width: 120rem;
      margin: 0 auto;
    }
  }
`
export default StyledErrorPage
