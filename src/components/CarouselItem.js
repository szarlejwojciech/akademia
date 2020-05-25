import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import StyledCarouselItem from './styled/StyledCarouselItem'
import HandIcon from '../assets/svg/hand-icon.svg'

const CarouselItem = ({ fluid, title, description, url }) => {
  return (
    <StyledCarouselItem>
      <figure>
        <Img className="custom-gatsby-img" fluid={fluid} alt={title} />
        <figcaption>
          <h6>{title}</h6>
          <p>{description}</p>
        </figcaption>
      </figure>
      <span className="link-wrapper">
        <Link to={url} aria-label={title} title={title}>
          <HandIcon />
        </Link>
      </span>
    </StyledCarouselItem>
  )
}

export default CarouselItem

CarouselItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  fluid: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
}
