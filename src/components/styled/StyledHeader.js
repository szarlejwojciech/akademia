import styled from 'styled-components'

const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  .top-bar {
    height: 5rem;
    position: relative;
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${({ theme }) => theme.colors.secondaryDark};
    z-index: 15;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  }
  /* z-index: 15; */
  .logo-link:hover {
    opacity: 0.8;
  }
  .logo-link:active {
    opacity: 0.7;
  }

  @media (min-width: 768px) {
    .top-bar {
      height: 6.2rem;
    }
  }

  @media (min-width: 1024px) {
    .top-bar {
      height: 8rem;
      padding: 0 2rem;
    }
  }

  @media (min-width: 1440px) {
    .top-bar {
      height: 10rem;
      padding: 0 6rem;
    }
  }
`
export default StyledHeader
