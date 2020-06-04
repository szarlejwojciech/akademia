import styled from 'styled-components'

const StyledLink = styled.a`
  padding: 0.26em 0.44em;
  font-size: 1.6em;
  color: ${({ theme }) => theme.colors.primaryLight};
  will-change: opacity;
  transition: 0.15s opacity ease-in-out;
  svg {
    width: 1em;
    height: auto;
    vertical-align: middle;

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
    svg {
      margin-right: 0.5em;
    }
  }
`

export default StyledLink
