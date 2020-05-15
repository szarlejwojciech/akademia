import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import StyledLink from './styled/StyledLink'
const CustomLink = ({ url, icon, children, target }) => {
  return (
    <StyledLink href={url} target={target && '_blanc'}>
      {icon && <FontAwesomeIcon icon={icon} />}
      <span>{children}</span>
    </StyledLink>
  )
}

export default CustomLink
