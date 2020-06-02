import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import StyledProductPreview from './styled/StyledProductPreview'
import ButtonLink from './ButtonLink'
import HandIcon from '../assets/svg/hand-icon.svg'

const ProductPreview = ({ excerpt, title, slug, fluid }) => {
  return (
    <StyledProductPreview>
      <Link to={slug}>
        <figure>
          <Img fluid={fluid} alt={title} />
          <figcaption>
            <h3>{title}</h3>
            <p>{excerpt}</p>
            <ButtonLink as="div">
              <span>Przejdź</span>
              <HandIcon />
            </ButtonLink>
          </figcaption>
        </figure>
      </Link>
    </StyledProductPreview>
  )
}

export default ProductPreview

ProductPreview.propTypes = {
  excerpt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
}
