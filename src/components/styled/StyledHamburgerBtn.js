import styled from 'styled-components'

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

    &:first-child {
      top: 1rem;
    }

    &:last-child {
      bottom: 1rem;
    }
  }

  @media (min-width: 1024px) {
    display: none;
  }
`
export default StyledHamburgerBtn
