import React from 'react'
import PropTypes from 'prop-types'
import StyledButtonLink from './styled/StyledButtonLink'

const ButtonLink = ({ children, ...props }) => (
  <StyledButtonLink {...props}>{children}</StyledButtonLink>
)

export default ButtonLink

ButtonLink.defaultPropTypes = {
  title: null,
  color: null,
  children: null,
}
ButtonLink.propTypes = {
  to: PropTypes.string.isRequired,
  color: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
}
