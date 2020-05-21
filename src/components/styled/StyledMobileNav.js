import styled from 'styled-components'

const StyledMobileNav = styled.nav`
  --top-padding: 5rem;

  position: fixed;
  top: var(--top-padding);
  left: 0;
  width: 100%;
  max-width: 50rem;
  bottom: 0px;
  background-color: ${({ theme }) => theme.colors.secondaryLight};
  z-index: 10;
  transform: translateX(-110%);
  will-change: transform;
  transition: 1.3s transform cubic-bezier(0.18, 0.47, 0, 1);
  ul.menubar {
    overflow-y: auto;
    height: 100%;
    background-color: inherit;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    will-change: opacity;
    transition: 0.5s opacity ease-in-out;
    box-shadow: 150px 0px 200px 400px rgba(0, 0, 0, 0.6);
    z-index: -1;
  }

  &.is-open {
    transform: translateX(0%);
    &::before {
      opacity: 1;
    }
  }

  [role='menuitem'] {
    font-size: 1.5rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em 1.5em;
    font-weight: ${({ theme }) => theme.font.fw600};
    text-transform: uppercase;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    background-color: inherit;
    .icon {
      position: relative;
      height: 100%;
      width: 1em;
      svg {
        font-size: 1.5em;
        width: 1em;
        height: 1em;
        position: absolute;
        right: 0;
        top: -0.4em;
        will-change: transform;
        transition: 0.15s transform ease-in-out;
        &.fa-plus,
        &.fa-minus {
          /* top: 0.125em; */
          height: 0.75em;
        }
        &.fa-plus {
          transform: scaleY(0);
        }
      }
    }
  }

  .is-collapsed + ul {
    height: 0px;
  }
  .is-collapsed {
    .icon {
      svg.fa-plus {
        transform: scaleY(1);
      }
    }
  }
  .sub-menu {
    /* height: auto; */
    /* max-height: 400px; */
    overflow: hidden;
    will-change: height;
    transition: 1.3s height cubic-bezier(0.18, 0.47, 0, 1);
    padding-left: 1.5em;
  }

  @media (min-width: 768px) {
    --top-padding: 6.2rem;
  }
`
export default StyledMobileNav
