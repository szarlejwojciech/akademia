import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import StyledLink from './styled/StyledLink'
import PropTypes from 'prop-types'

const CustomLink = ({ icon, children, ...props }) => (
  <StyledLink {...props}>
    {icon && <FontAwesomeIcon icon={icon} />}
    <span>{children}</span>
  </StyledLink>
)

export default CustomLink

CustomLink.defaultPropTypes = {
  target: null,
  children: null,
}
CustomLink.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  target: PropTypes.string,
  children: PropTypes.string,
}
