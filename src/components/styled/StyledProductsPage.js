import styled from 'styled-components'
import Layout from './StyledProductLayout'

const StyledProdutctsPage = styled(Layout)`
  .wrapper {
    display: flex;
    .products-grid {
      flex: 2;
      display: flex;
      flex-wrap: wrap;
    }
  }
`
export default StyledProdutctsPage
