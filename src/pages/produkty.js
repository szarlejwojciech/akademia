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
      title="Oferta, Akademia Urody, Salon kosmetyczny Nowy Targ"
      description="Zawsze podejmujemy wszelkie starania by oferować najlepsze produkty, dlatego w naszej ofercie zgromadziliśmy marki spełniające najwyższe wymagania."
      url="http://www.akademiaurody-nowytarg/produkty"
    />
    {/* <PageIsBuilding /> */}
    <ProductsPage
      products={nodes}
      bgImageFluid={fluid}
      type="produkty"
      subTitle="Aby jak najdłużej zachować piękną i zdrową skórę należy podtrzymywać jej równowagę poprzez codzienne dostarczanie niezbędnych elementów."
    />
  </>
)
export default productsPage
productsPage.propTypes = {
  data: PropTypes.shape({
    productsImages: PropTypes.objectOf(PropTypes.array),
    bgImage: PropTypes.objectOf(PropTypes.object),
  }).isRequired,
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
