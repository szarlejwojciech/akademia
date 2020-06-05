import styled, { css } from 'styled-components'
import StyledSection from './StyledSection'

const StyledSectionWrapper = styled(StyledSection)`
  padding: 3rem 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.secondaryLight};
  overflow: hidden;
  p {
    padding: 0;
    letter-spacing: 0;
  }
  && p {
    padding: 0;
  }
  .image-wrapper {
    width: 100%;
    max-width: 48rem;
    order: 1;
  }
  h2 {
    margin: 0 0 1rem 0;
    span {
      display: block;
      margin: 0 auto;
    }
    svg {
      width: 3em;
    }
  }
  .content-wrapper {
    position: relative;
    margin-bottom: 3rem;
    .bottle-decor,
    .bottle2-decor {
      position: absolute;
      width: 8.5rem;
      left: -0.7rem;
      width: 6rem;
      top: 0;
      height: auto;
      right: -3.4rem;
      left: unset;
      width: 11rem;
      opacity: 0.2;
    }
    .bottle2-decor {
      width: 8.4rem;
    }

    .paragraph-box {
      padding: 1.2rem 0.8rem;
      background-color: ${({ theme }) => theme.colors.secondaryDark};
      box-shadow: 0 15px 12px -10px rgba(0, 0, 0, 0.15);
      border-radius: 1rem;
      p + p {
        margin-top: 1.5em;
      }
    }
  }
  .wrapper {
    position: relative;
    z-index: 0;
    .bottle3-decor,
    .gallery-decor {
      position: absolute;
      opacity: 0.2;
    }

    .bottle3-decor {
      width: 5.3rem;
      height: auto;
      top: -1rem;
      left: 0;
    }
    .gallery-decor {
      width: 8.4rem;
      height: auto;
      bottom: -1.5rem;
      right: 0;
    }
    .authent,
    .embellir-small {
      position: absolute !important;
      bottom: 2.5rem;
      width: 7.2rem;
      height: auto;
      z-index: -1;
    }
    .authent {
      left: calc(50% - 21rem);
    }
    .embellir-small {
      right: calc(50% - 21rem);
    }
    .gallery-btn {
      margin-top: 1.6em;
    }

    h5 {
      margin: 1.3em 0 0.65em 0;
    }
  }
  @media (min-width: 768px) {
    padding: 3rem 3rem;
    flex-direction: row;
    p {
      line-height: 1.6;
      letter-spacing: 1px;
    }
    .image-wrapper {
      flex: 1;
      max-width: unset;
      &.embellir {
        margin: 0 2rem 0 0;
        order: 0;
      }
      &.saranari {
        margin: 0 0 0 2rem;
      }
    }
    .content-wrapper {
      flex: 2;
      margin-bottom: 0;

      .bottle-decor {
        top: 0;
        left: -2rem;
        width: 8.5rem;
      }
      .bottle2-decor {
        top: 0;
        right: -3.4rem;
        left: unset;
        width: 11rem;
      }

      .paragraph-box {
        padding: 1.2rem 2rem;
      }
    }
    .wrapper {
      .bottle3-decor {
        width: 8.5rem;
        top: 2.5rem;
        left: -6.5rem;
      }
      .gallery-decor {
        width: 11rem;
        bottom: 0;
        right: -13rem;
      }

      .gallery-btn {
        margin: 0;
      }
      h2 {
        margin: 0;
        & + p {
          max-width: 88ch;
        }
      }
      h5 {
        margin: 1em 0 0.2em 0;
      }
      .authent,
      .embellir-small {
        width: 13rem;
        bottom: -3rem;
      }
      .authent {
        left: calc(50% - 34.5rem);
      }
      .embellir-small {
        right: calc(50% - 34.5rem);
      }
    }
  }
  @media (min-width: 1024px) {
    padding: 4.5rem 5rem;
    p {
      font-size: 1.5rem;
    }
    .image-wrapper {
      flex: 2;
      &.embellir {
        margin: 0 4rem 0 0;
      }
      &.saranari {
        margin: 0 0 0 4rem;
      }
    }
    .content-wrapper {
      flex: 3;

      .bottle-decor {
        top: -1.7rem;
        left: -4rem;
        width: 9.5rem;
      }
      .bottle2-decor {
        top: -2.2rem;
        right: -5.5rem;
        left: unset;
        width: 14rem;
      }
    }
    .wrapper {
      display: block;
      .bottle3-decor {
        width: 13.3rem;
        left: -10.5rem;
        top: 0.5rem;
      }
      .gallery-decor {
        width: 12.5rem;
        right: -16rem;
      }
      .authent,
      .embellir-small {
        width: 18rem;
        bottom: -5.5rem;
      }
      .authent {
        left: calc(50% - 39rem);
      }
      .embellir-small {
        right: calc(50% - 39rem);
      }
    }
  }
  @media (min-width: 1440px) {
    padding: 6rem 9vw;
    p {
      font-size: 1.6rem;
    }
    .image-wrapper {
      flex: 5;
      &.embellir {
        margin: 0 6rem 0 0;
      }
      &.saranari {
        margin: 0 0 0 6rem;
      }
    }
    .content-wrapper {
      flex: 4;

      .bottle-decor {
        top: -1.7rem;
        left: -6rem;
        width: 11.5rem;
      }
      .bottle2-decor {
        top: -2.2rem;
        right: -8rem;
        left: unset;
        width: 17.5rem;
      }
    }
    .wrapper {
      .bottle3-decor {
        width: 18rem;
        top: -1.5rem;
        left: -13.5rem;
      }
      .gallery-decor {
        width: 17.5rem;
        right: -19.5rem;
      }
      .authent,
      .embellir-small {
        width: 22rem;
        bottom: -6.5rem;
      }
      .authent {
        left: calc(50% - 49rem);
      }
      .embellir-small {
        right: calc(50% - 49rem);
      }
    }
  }
  ${({ secondary }) =>
    secondary &&
    css`
      background-color: ${({ theme }) => theme.colors.secondaryDark};
      .content-wrapper {
        .paragraph-box {
          background-color: ${({ theme }) => theme.colors.secondaryLight};
        }
      }
    `}
  ${({ dark }) =>
    dark &&
    css`
      background-color: ${({ theme }) => theme.colors.accent};
      color: ${({ theme }) => theme.colors.secondaryLight};

      @media (min-width: 768px) {
        .wrapper {
          display: flex;
          align-items: center;
          a {
            height: 100%;
          }
          p {
            text-align: left;
            max-width: 60ch;
            margin-right: 2rem;
          }
        }
      }
      @media (min-width: 1024px) {
        .wrapper {
          display: flex;
          flex-direction: row;
          p {
            margin-right: 4rem;
          }
        }
      }
    `}
`
export default StyledSectionWrapper
