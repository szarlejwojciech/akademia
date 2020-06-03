import styled from 'styled-components'
import Layout from './StyledProductLayout'

const StyledProdutctsPage = styled(Layout)`
  .wrapper {
    display: flex;
    max-width: 120rem;
    .products-grid {
      flex: 2;
      display: flex;
      flex-wrap: wrap;
    }
  }
`
export default StyledProdutctsPage
