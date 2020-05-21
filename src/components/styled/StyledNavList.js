import styled from 'styled-components'

const StyledNavList = styled.nav`
  display: none;
  flex: 2;
  ul {
    display: flex;
    justify-content: center;
    /* margin-left: 4rem; */
    li + li {
      margin-left: 6rem;
    }

    li {
      font-weight: ${({ theme }) => theme.font.fw400};
      a {
        position: relative;
        /* will-change: opacity; */
        /* transition: 0.2s opacity ease-in-out; */

        &::after {
          content: '';
          display: block;
          position: absolute;
          bottom: -0.3em;
          left: 0;
          right: 0;
          height: 2px;
          background-color: ${({ theme }) => theme.colors.accent};
          transform-origin: left;
          transform: scaleX(0);
          will-change: transform;
          transition: 0.2s transform ease-in-out;
        }

        &.active::after {
          transform: scaleX(1);
        }

        &:hover::after {
          transform: scaleX(0.8);
        }
        &:active {
          opacity: 0.7;
        }
      }
    }
  }

  @media (min-width: 1024px) {
    display: block;
  }

  @media (min-width: 1440px) {
    ul li {
      a {
        font-size: 1.6rem;
      }
    }
  }
`
export default StyledNavList
