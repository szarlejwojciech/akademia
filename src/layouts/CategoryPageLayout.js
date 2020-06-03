import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import ProductPage from '../components/ProductsPage'

const query = graphql`
  {
    treatmentsBgImage: file(name: { eq: "treatments-bg" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }

    productsBgImage: file(name: { eq: "products-bg" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
const subTitle = {
  products:
    'Aby jak najdłużej zachować piękną i zdrową skórę należy podtrzymywać jej równowagę poprzez codzienne dostarczanie niezbędnych elementów.',
  treatments:
    'Od najmłodszych lat nasza skóra musi się mierzyć z różnymi problemami i walczyć z rosnącymi zagrożeniami.',
}

const CategoryPageLayout = ({ path, pageContext: { products } }) => {
  const type = path.split('/')[1]
  const {
    productsBgImage: {
      childImageSharp: { fluid: productsBgImage },
    },
    treatmentsBgImage: {
      childImageSharp: { fluid: treatmentsBgImage },
    },
  } = useStaticQuery(query)
  return (
    <ProductPage
      products={products}
      type={type}
      bgImageFluid={type === 'produkty' ? productsBgImage : treatmentsBgImage}
      subTitle={type === 'produkty' ? subTitle.products : subTitle.treatments}
    />
  )
}

export default CategoryPageLayout

CategoryPageLayout.propTypes = {
  pageContext: PropTypes.shape({
    category: PropTypes.string,
    products: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  path: PropTypes.string.isRequired,
}
