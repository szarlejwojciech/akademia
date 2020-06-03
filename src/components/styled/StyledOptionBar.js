import styled from 'styled-components'

const StyledOptionBar = styled.div`
  height: 4rem;
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    height: 5rem;
  }
  @media (min-width: 1440px) {
    height: 6rem;
  }
`
export default StyledOptionBar
