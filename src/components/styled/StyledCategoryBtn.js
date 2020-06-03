import styled from 'styled-components'

const StyledCategoryBtn = styled.button`
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primaryLight};
  font-size: 1.4rem;
  svg {
    width: 1.2em;
    height: auto;
    margin-right: 1em;
    vertical-align: center;
  }
  &:hover {
    opacity: 0.7;
  }
  &:active {
    opacity: 0.85;
  }
  @media (min-width: 768px) {
    display: none;
  }
`
export default StyledCategoryBtn
