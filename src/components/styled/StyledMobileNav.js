import styled from 'styled-components'

const StyledMobileNav = styled.nav`
  --top-padding: 5rem;

  position: fixed;
  top: var(--top-padding);
  left: 0;
  width: 100vw;
  max-width: 50rem;
  height: calc(100vh - var(--top-padding));
  background-color: ${({ theme }) => theme.colors.secondaryLight};
  z-index: 11;
  transform: translateX(-110%);
  will-change: transform;
  transition: 1.3s transform cubic-bezier(0.18, 0.47, 0, 1);
  ul.menubar {
    overflow-y: auto;
    height: 100%;
    background-color: inherit;
  }
  /* &::before {
    --top-padding: 5rem;
    content: '';
    position: absolute;
    top: var(--top-padding);
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    will-change: opacity;
    transition: 0.5s opacity ease-in-out;
    box-shadow: 150px 0px 200px 400px rgba(0, 0, 0, 0.6);
    z-index: -1;
  } */

  &.mobile-nav.mobile-nav-is-open {
    transform: translateX(0%);
    /* &::before {
      opacity: 1;
    } */
  }
  &.aside-nav {
    top: 0;
    z-index: 25;
    height: 100vh;
    overflow-y: auto;
    & > button {
      margin: 1rem;
    }

    &.aside-nav-is-open {
      transform: translateX(0%);
      &::before {
        opacity: 1;
      }
    }
  }
  .separator {
    height: 3rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
  [role='menuitem'] {
    font-size: 1.5rem;
    line-height: normal;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em 1.5em;
    font-weight: ${({ theme }) => theme.font.fw600};
    text-transform: uppercase;
    border: none;
    border-left: 3px solid transparent;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    background-color: inherit;
    .text {
      margin-right: 0.75em;
    }
    &.active {
      background-color: ${({ theme }) => theme.colors.secondaryDark};
    }
    .icon::before {
      transform: scaleY(0);
    }
    &:hover,
    &:focus {
      border-left-color: ${({ theme }) => theme.colors.accent};
      outline: none;
    }
  }

  .is-collapsed + ul {
    max-height: 0px;
  }
  .is-collapsed {
    .icon::before {
      transform: scaleY(1);
    }
  }
  .sub-menu {
    overflow: hidden;
    will-change: max-height;
    transition: 1.3s max-height cubic-bezier(0.18, 0.47, 0, 1);
    padding-left: 1.5em;
    list-style-type: none;
  }

  @media (min-width: 768px) {
    --top-padding: 6.2rem;
    &.aside-nav {
      position: static;
      width: 100%;
      height: auto;
      max-width: 32rem;
      padding-right: 1rem;
      flex: 1;
      transform: translateX(0);
      overflow: initial;
      z-index: 0;
      & > button {
        display: none;
      }
      & > div {
        position: sticky;
        z-index: 0;
        top: calc(2.3rem + var(--top-padding));
        /* z-index: 1; */
      }
      ul.menubar {
        height: unset;
        box-shadow: 0 0.5rem 0.5rem rgba(0, 0, 0, 0.1);

        /* position: sticky; */
        /* top: calc(8.8rem + var(--top-padding)); */
        /* z-index: 0; */
        max-height: calc(80vh - var(--top-padding));
      }
    }
  }
  @media (min-width: 1024px) {
    --top-padding: 8rem;
  }
  @media (min-width: 1440px) {
    --top-padding: 10rem;
  }
`
export default StyledMobileNav
