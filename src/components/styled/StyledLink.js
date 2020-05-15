import styled from 'styled-components'

const StyledLink = styled.a`
  font-size: 1em;
  color: ${({ theme }) => theme.colors.primaryDark};
  will-change: opacity;
  transition: 0.15s opacity ease-in-out;

  svg {
    margin: 0 0.4em;

    path {
      fill: ${({ theme }) => theme.colors.primaryDark};
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
`

export default StyledLink
