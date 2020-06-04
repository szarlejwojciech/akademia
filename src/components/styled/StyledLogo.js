import styled from 'styled-components'
import Logo from '../../assets/svg/logo.svg'

const StyledLogo = styled(Logo)`
  --size: 22rem;
  max-width: var(--size);
  width: 100%;
  height: auto;
  margin: 0 auto;
  vertical-align: middle;
  padding: 0.8rem 0;
  @media (min-width: 768px) {
    --size: 24rem;
  }

  @media (min-width: 1440px) {
    --size: 33rem;
  }
`
export default StyledLogo
