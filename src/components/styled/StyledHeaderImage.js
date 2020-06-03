import styled from 'styled-components'

const StyledHeaderImage = styled.section`
  color: ${({ theme }) => theme.colors.secondaryLight};
  header {
    padding: 3.5rem 0;
    text-align: center;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: ${({ theme }) => theme.colors.accent};
      opacity: 0.5;
      z-index: -1;
    }
    h1 {
      text-transform: capitalize;
    }
    svg {
      margin: 0 auto;
      width: 7rem;
      fill: ${({ theme }) => theme.colors.secondaryLight};
    }
    p {
      max-width: 50ch;
      margin: 0 auto;
      letter-spacing: 0;
    }
  }
  @media (min-width: 768px) {
    header {
      padding: 5rem 0;
      svg {
        width: 11rem;
      }
    }
  }
  @media (min-width: 1024) {
    padding: 80rem 0;
  }
  @media (min-width: 1440) {
    padding: 110rem 0;
    p {
      font-size: 1.8rem;
    }
  }
`
export default StyledHeaderImage
