import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { toCebabCase } from '../utils/toCebabCase'
import AsideNav from '../components/AsideNav'
import PrevUrlButton from '../components/PrevUrlButton'
import ProductPreview from '../components/ProductPreview'

const StyledWrapper = styled.div`
  padding: 5rem 6rem;
  min-height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .box {
    flex: 0 1 200px;
    margin: 20px;
    img {
      height: 150px;
      width: 100%;
      object-fit: cover;
    }
  }
`

const CategoryPageLayout = ({ path, pageContext: { products } }) => {
  const type = path.split('/')[1]
  return (
    <>
      <AsideNav type={type} />
      <PrevUrlButton />
      <StyledWrapper>
        {products &&
          products.length !== 0 &&
          products.map(
            ({
              frontmatter: {
                title,
                featuredImage: {
                  childImageSharp: { fluid },
                },
              },
              excerpt,
            }) => {
              const slug = `${path}/${toCebabCase(title)}`
              return (
                <ProductPreview
                  key={title}
                  fluid={fluid}
                  title={title}
                  excerpt={excerpt}
                  slug={slug}
                />
              )
            }
          )}
      </StyledWrapper>
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
