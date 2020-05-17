import styled from 'styled-components'

const StyledMobileNav = styled.nav`
  position: fixed;
  top: 4rem;
  left: 0;
  width: 100%;
  bottom: 0px;
  background-color: ${({ theme }) => theme.colors.secondaryLight};
  z-index: 10;
  transform: translateX(-110%);
  will-change: transform;
  transition: 1.3s transform cubic-bezier(0.18, 0.47, 0, 1);

  &.is-open {
    transform: translateX(0%);
  }

  [role='menuitem'] {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    font-size: 1.2rem;
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
        width: 1em;
        height: 1em;
        position: absolute;
        right: 0;
        top: -0.4em;
        &.fa-plus,
        &.fa-minus {
          /* top: 0.125em; */
          height: 0.75em;
        }
      }
    }
  }

  .is-collapsed + ul {
    height: 0;
  }
  .sub-menu {
    overflow: hidden;
    will-change: height;
    transition: 1.3s height cubic-bezier(0.18, 0.47, 0, 1);
  }
`
export default StyledMobileNav
