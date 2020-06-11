import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import PrevUrlButton from '../components/PrevUrlButton'
import StyledProductLayout from '../components/styled/StyledProductLayout'
import StyledOptionBar from '../components/styled/StyledOptionBar'
import ProductDecor from '../assets/svg/product-decor.svg'
import SEO from '../components/Seo'

export const query = graphql`
  query singleProductQuery($title: String!) {
    mdx(frontmatter: { title: { eq: $title } }) {
      excerpt(pruneLength: 110)
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 500, quality: 90) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
      body
    }
  }
`
const ProductLayout = ({
  path,
  data: {
    mdx: {
      body,
      excerpt,
      frontmatter: {
        title,
        featuredImage: {
          childImageSharp: { fluid },
        },
      },
    },
  },
}) => (
  <>
    <SEO
      title={title}
      description={excerpt}
      url={`http://www.akademiaurody-nowytarg/${path}`}
    />
    <StyledProductLayout>
      <StyledOptionBar>
        <PrevUrlButton />
      </StyledOptionBar>
      <header>
        <h1>{title}</h1>
      </header>
      <section>
        <div className="mdx-wrapper">
          <ProductDecor />
          <MDXRenderer>{body}</MDXRenderer>
        </div>
        <div className="img-wrapper">
          <figure>
            <Img className="gatsby-image" fluid={fluid} />
          </figure>
        </div>
      </section>
    </StyledProductLayout>
  </>
)

export default ProductLayout

ProductLayout.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
  path: PropTypes.string.isRequired,
}
