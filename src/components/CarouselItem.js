import React from 'react'
import StyledCarouselItem from './styled/StyledCarouselItem'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const CarouselItem = ({ title, description, image, url }) => {
  return (
    <StyledCarouselItem>
      <figure>
        <img src={image} alt={title} />
        <figcaption>
          <h6>{title}</h6>
          <p>{description}</p>
        </figcaption>
      </figure>
      <span className="link-wrapper">
        <Link to={url}>
          <FontAwesomeIcon icon="hand-point-up"></FontAwesomeIcon>
        </Link>
      </span>
    </StyledCarouselItem>
  )
}

export default CarouselItem
