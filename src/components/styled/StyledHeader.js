import styled from 'styled-components'

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  will-change: transform;
  transition: 0.2s transform ease-in;
  transform: translateY(0);

  &.hidden {
    transform: translateY(-120%);
  }

  .top-bar {
    height: 5rem;
    position: relative;
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${({ theme }) => theme.colors.secondaryDark};
    z-index: 15;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  }
  /* z-index: 15; */
  .logo-link {
    flex: 1;
    display: block;
  }
  .logo-link:hover {
    opacity: 0.8;
  }
  .logo-link:active {
    opacity: 0.7;
  }

  @media (min-width: 500px) {
    .top-bar {
      padding: 0 1rem;
    }
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
