import styled from 'styled-components'

const StyledLogo = styled.div`
  --size: 17rem;
  max-width: var(--size);
  height: calc(0.18 * var(--size));
  margin: 0 auto;
  background: url('/logo.png') center no-repeat;
  background-size: contain;

  @media (min-width: 768px) {
    --size: 22rem;
  }

  @media (min-width: 1440px) {
    --size: 33rem;
  }
`
export default StyledLogo
