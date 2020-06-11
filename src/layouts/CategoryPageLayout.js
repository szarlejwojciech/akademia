import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import ProductPage from '../components/ProductsPage'
import SEO from '../components/Seo'

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
    <>
      <SEO
        title={`Akademia Urody - ${type}, salon kosmetyczny Nowy Targ`}
        description={
          type === 'produkty' || type === 'products'
            ? subTitle.products
            : subTitle.treatments
        }
        keywords="produkty, zabiegi, antypigmentacyjne, nawilżające, oczyszczające, odżywiająco regenerujące, peelingi i eksfoliatoryton, przeciwstarzeniowe, przeciwsłoneczne, specjalistyczne, tonizujące"
      />
      <ProductPage
        products={products}
        type={type}
        bgImageFluid={type === 'produkty' ? productsBgImage : treatmentsBgImage}
        subTitle={type === 'produkty' ? subTitle.products : subTitle.treatments}
      />
    </>
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
