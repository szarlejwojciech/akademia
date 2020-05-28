import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import PrevUrlButton from '../components/PrevUrlButton'

export const query = graphql`
  query singleProductQuery($title: String!) {
    mdx(frontmatter: { title: { eq: $title } }) {
      frontmatter {
        title
        line
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800, jpegQuality: 90) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
      body
    }
  }
`
const ProductLayout = ({
  data: {
    mdx: {
      body,
      frontmatter: {
        title,
        line,
        featuredImage: {
          childImageSharp: { fluid },
        },
      },
    },
  },
}) => {
  return (
    <>
      <PrevUrlButton />
      <h1>{title}</h1>
      <div>{line}</div>
      <Img fluid={fluid} />
      <MDXRenderer>{body}</MDXRenderer>
    </>
  )
}

export default ProductLayout
