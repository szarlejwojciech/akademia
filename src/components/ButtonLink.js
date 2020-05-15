import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../utils/fontawesome'
import StyledButtonLink from './styled/StyledButtonLink'

const ButtonLink = ({ url, children, icon }) => {
  return (
    <StyledButtonLink to={url}>
      {children}
      <FontAwesomeIcon icon={icon} />
    </StyledButtonLink>
  )
}

export default ButtonLink
