import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../utils/fontawesome.js'
import StyledButtonLink from './styled/StyledButtonLink'
import PropTypes from 'prop-types'

const ButtonLink = ({ children, icon, ...props }) => (
  <StyledButtonLink {...props}>
    {children}
    {/* <FontAwesomeIcon icon={icon} /> */}
  </StyledButtonLink>
)

export default ButtonLink

ButtonLink.defaultPropTypes = {
  title: null,
  color: null,
  children: null,
  icon: null,
}
ButtonLink.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.string,
  color: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
}
