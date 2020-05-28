import React from 'react'
// import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import SEO from '../components/Seo'
import PageIsBuilding from '../components/PageIsBuilding'
import ProductsPage from '../components/ProductsPage'

const productsPage = ({
  data: {
    allMdx: { nodes, group },
  },
}) => (
  <>
    <SEO
      title="Akademia Urody | Oferta"
      description="Zawsze podejmujemy wszelkie starania by oferować najlepsze produkty, dlatego w naszej ofercie zgromadziliśmy marki spełniające najwyższe wymagania."
      url="http://www.akademiaurody-nowytarg/produkty"
    />
    {/* <PageIsBuilding /> */}
    <ProductsPage products={nodes} type="produkty" />
  </>
)
export default productsPage
productsPage.propTypes = {
  data: PropTypes.objectOf(PropTypes.objectOf(PropTypes.array)).isRequired,
}
export const queryProducts = graphql`
  {
    allMdx(filter: { frontmatter: { type: { eq: "products" } } }) {
      group(field: frontmatter___categories) {
        fieldValue
      }
      nodes {
        frontmatter {
          title
          type
          categories
        }
        excerpt(pruneLength: 50)
      }
    }
  }
`
