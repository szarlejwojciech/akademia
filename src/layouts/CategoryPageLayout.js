import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import ProductPage from '../components/ProductsPage'
import SEO from '../components/Seo'

export const query = graphql`
  query MyQuery($type: String!, $category: String!, $regex: String!) {
    allMdx(
      filter: {
        frontmatter: { type: { eq: $type }, categories: { eq: $category } }
      }
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          type
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

    file(name: { regex: $regex }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
const getSubTitle = type => {
  switch (type) {
    case 'produkty':
      return 'Aby jak najdłużej zachować piękną i zdrową skórę należy podtrzymywać jej równowagę poprzez codzienne dostarczanie niezbędnych elementów.'
    case 'zabiegi':
      return 'Od najmłodszych lat nasza skóra musi się mierzyć z różnymi problemami i walczyć z rosnącymi zagrożeniami.'
    case 'perfumy':
      return 'Perfumy Od najmłodszych lat nasza skóra musi się mierzyć z różnymi problemami i walczyć z rosnącymi zagrożeniami.'
    default:
      return null
  }
}

const CategoryPageLayout = ({ data, pageContext: { type, category } }) => {
  return (
    <>
      <SEO
        title={`${type}, Akademia Urody, salon kosmetyczny Nowy Targ`}
        description={getSubTitle(type)}
        keywords="produkty, zabiegi, antypigmentacyjne, nawilżające, oczyszczające, odżywiająco regenerujące, peelingi i eksfoliatoryton, przeciwstarzeniowe, przeciwsłoneczne, specjalistyczne, tonizujące"
      />
      <ProductPage
        products={data.allMdx.nodes}
        type={type}
        category={category}
        bgImageFluid={data.file.childImageSharp.fluid}
        subTitle={getSubTitle(type)}
      />
    </>
  )
}

export default CategoryPageLayout

CategoryPageLayout.propTypes = {
  pageContext: PropTypes.shape({
    category: PropTypes.string,
    type: PropTypes.string,
  }).isRequired,
  data: PropTypes.objectOf(PropTypes.object).isRequired,
}
