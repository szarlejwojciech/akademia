import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const StyledPreview = styled.div`
  flex: 0 1 200px;
  margin: 20px;
  img {
    height: 150px;
    width: 100%;
    object-fit: cover;
  }
`

const ProductPreview = ({ excerpt, title, slug }) => {
  return (
    <StyledPreview>
      <img
        src="https://source.unsplash.com/500x500/?cosmetics,orientation=squarish"
        loading="lazy"
        alt={title}
      />
      <h3>{title}</h3>
      <p>{excerpt}</p>
      <Link to={slug}>Przejdź&gt;</Link>
    </StyledPreview>
  )
}

export default ProductPreview

ProductPreview.propTypes = {
  excerpt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
}
