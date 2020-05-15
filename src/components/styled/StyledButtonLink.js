import styled, { css } from 'styled-components'
import { Link } from 'gatsby'

const StyledButtonLink = styled(Link)`
  position: relative;
  font-size: 0.8rem;
  padding: 1em 4.125em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
  font-weight: ${({ theme }) => theme.font.fw600};
  border-radius: 3rem;
  border: 1px solid ${({ theme }) => theme.colors.accent};
  background-color: transparent;
  z-index: 1;
  will-change: color;
  transition: 0.15s color ease-in-out;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: ${({ theme }) => theme.colors.accent};
    opacity: 0;
    border-radius: inherit;
    z-index: -1;
    will-change: opacity;
    transition: 0.15s opacity ease-in-out;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.secondaryLight};
    &::before {
      opacity: 1;
    }
  }

  &:active {
    opacity: 0.7;
  }

  span {
    margin-right: 1em;
  }

  ${({ color }) =>
    color === 'accent' &&
    css`
      color: ${({ theme }) => theme.colors.secondaryDark};

      &::before {
        opacity: 1;
      }

      &:hover {
        color: ${({ theme }) => theme.colors.accent};
        &::before {
          opacity: 0;
        }
      }
    `}

  ${({ color }) =>
    color === 'light' &&
    css`
      color: ${({ theme }) => theme.colors.primaryDark};
      border-color: ${({ theme }) => theme.colors.secondaryDark};

      &::before {
        background-color: ${({ theme }) => theme.colors.secondaryDark};
        opacity: 1;
      }

      &:hover {
        color: ${({ theme }) => theme.colors.secondaryDark};
        &::before {
          opacity: 0;
        }
      }
    `}

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  @media (min-width: 1440px) {
    font-size: 1.2rem;
  }
`

export default StyledButtonLink
