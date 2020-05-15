import styled from 'styled-components'

const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  height: 4rem;
  width: 100%;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.secondaryDark};

  @media (min-width: 768px) {
    height: 6.2rem;
  }

  @media (min-width: 1024px) {
    height: 8rem;
    padding: 2rem;
  }

  @media (min-width: 1440px) {
    height: 10rem;
    padding: 6rem;
  }
`
export default StyledHeader
