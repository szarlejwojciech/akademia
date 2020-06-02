import React from 'react'
// import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import SEO from '../components/Seo'
import ProductsPage from '../components/ProductsPage'

const productsPage = ({
  data: {
    productsImages: { nodes },
    bgImage: {
      childImageSharp: { fluid },
    },
  },
}) => (
  <>
    <SEO
      title="Akademia Urody | Oferta, Salon kosmetyczny Nowy Targ"
      description="Zawsze podejmujemy wszelkie starania by oferować najlepsze produkty, dlatego w naszej ofercie zgromadziliśmy marki spełniające najwyższe wymagania."
      url="http://www.akademiaurody-nowytarg/produkty"
    />
    {/* <PageIsBuilding /> */}
    <ProductsPage products={nodes} bgImageFluid={fluid} type="produkty" />
  </>
)
export default productsPage
productsPage.propTypes = {
  data: PropTypes.objectOf(PropTypes.objectOf(PropTypes.array)).isRequired,
}
export const queryProducts = graphql`
  {
    productsImages: allMdx(
      filter: { frontmatter: { type: { eq: "products" } } }
    ) {
      nodes {
        frontmatter {
          title
          categories
          featuredImage {
            childImageSharp {
              fluid(
                maxWidth: 170
                quality: 90
                traceSVG: { color: "#4F5053", background: "#EEF6F7" }
              ) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
        excerpt(pruneLength: 70)
      }
    }
    bgImage: file(name: { eq: "products-bg" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
