import React from 'react'
import StyledLink from './styled/StyledLink'
import PropTypes from 'prop-types'

const CustomLink = ({ children, ...props }) => (
  <StyledLink {...props}>{children}</StyledLink>
)

export default CustomLink

CustomLink.defaultPropTypes = {
  target: null,
}
CustomLink.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  target: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string,
  ]).isRequired,
}
