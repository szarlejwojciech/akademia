import styled from 'styled-components'

const StyledOptionBar = styled.div`
  min-height: 4rem;
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    min-height: 5rem;
  }
  @media (min-width: 1440px) {
    min-height: 6rem;
  }
`
export default StyledOptionBar
