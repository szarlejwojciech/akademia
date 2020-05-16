import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../utils/fontawesome'
import StyledButtonLink from './styled/StyledButtonLink'

const ButtonLink = ({ children, icon, ...props }) => {
  return (
    <StyledButtonLink {...props}>
      <span>{children}</span>
      <FontAwesomeIcon icon={icon} />
    </StyledButtonLink>
  )
}

export default ButtonLink
