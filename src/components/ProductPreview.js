import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import StyledProductPreview from './styled/StyledProductPreview'
import ButtonLink from './ButtonLink'
import HandIcon from '../assets/svg/hand-icon.svg'

const ProductPreview = ({ excerpt, title, slug, fluid }) => {
  return (
    <StyledProductPreview to={slug} title={title} aria-label={title}>
      <h6>{title}</h6>
      <figure>
        <Img className="gatsby-image" fluid={fluid} alt={title} title={title} />
        <figcaption>
          <p>{excerpt}</p>
          <ButtonLink className="btn" as="div">
            <span>Przejdź</span>
            <HandIcon />
          </ButtonLink>
        </figcaption>
      </figure>
    </StyledProductPreview>
  )
}

export default ProductPreview

ProductPreview.propTypes = {
  excerpt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
}
