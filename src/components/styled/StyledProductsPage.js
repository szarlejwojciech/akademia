import styled from 'styled-components'
import Layout from './StyledProductLayout'

const StyledProdutctsPage = styled(Layout)`
  --padding-top: 0rem;
  .wrapper {
    display: flex;
    max-width: 120rem;
    margin: 0 auto;
    .products-grid {
      flex: 2;
      display: flex;
      flex-wrap: wrap;
      height: max-content;
    }
  }
  @media (min-width: 768px) {
    --padding-top: 0rem;
  }
  @media (min-width: 1024px) {
    --padding-top: 0rem;
  }
  @media (min-width: 1440px) {
    --padding-top: 0rem;
  }
`
export default StyledProdutctsPage
