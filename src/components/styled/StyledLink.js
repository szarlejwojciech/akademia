import styled from 'styled-components'

const StyledLink = styled.a`
  font-size: 1.4em;
  color: ${({ theme }) => theme.colors.primaryLight};
  will-change: opacity;
  transition: 0.15s opacity ease-in-out;

  svg {
    margin: 0 0.2em;

    path {
      fill: ${({ theme }) => theme.colors.primaryLight};
    }
  }

  &:hover {
    opacity: 0.7;
  }

  span {
    display: none;
  }

  @media (min-width: 1024px) {
    span {
      display: inline;
    }
  }
  @media (min-width: 1440px) {
    font-size: 1.6em;
  }
`

export default StyledLink
