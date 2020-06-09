import styled from 'styled-components'

const StyledOptionBar = styled.div`
  height: 5rem;
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    height: 6.2rem;
  }
  @media (min-width: 1024px) {
    height: 8rem;
  }
`
export default StyledOptionBar
