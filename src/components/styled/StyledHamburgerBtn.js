import styled, { css } from 'styled-components'

const StyledHamburgerBtn = styled.button`
  position: relative;
  width: 2.7rem;
  height: 2rem;
  padding: 1rem;
  background: none;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: content-box;

  span {
    position: absolute;
    left: 1rem;
    right: 1rem;
    height: 2px;
    background: ${({ theme }) => theme.colors.primaryLight};
    will-change: transform;
    transition: 0.4s transform ease-in-out;
    &:first-child {
      top: 1rem;
    }

    &:last-child {
      bottom: 1rem;
    }
  }

  @media (min-width: 768px) {
    &.aside-nav {
      display: none;
    }
  }
  @media (min-width: 1024px) {
    display: none;
  }

  ${({ navOpen }) =>
    navOpen &&
    css`
      span {
        &:first-child {
          top: initial;
          transform: rotate(-135deg);
        }
        &:nth-child(2) {
          transform: scale(0);
        }
        &:last-child {
          bottom: initial;
          transform: rotate(135deg);
        }
      }
    `}
  ${({ categoryNavOpen }) =>
    categoryNavOpen &&
    css`
      span {
        margin-left: auto;
        &:first-child {
          top: initial;
          transform: rotate(-135deg);
        }
        &:nth-child(2) {
          transform: scale(0);
        }
        &:last-child {
          bottom: initial;
          transform: rotate(135deg);
        }
      }
    `}
`
export default StyledHamburgerBtn
