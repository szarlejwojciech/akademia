import React from 'react'
import StyledHamburgerBtn from './styled/StyledHamburgerBtn'
import { useNavState } from '../hooks/localeState'
import PropTypes from 'prop-types'

const HamburgerBtn = ({ onClick, label }) => {
  const { toggleNav } = useNavState()

  return (
    <StyledHamburgerBtn
      onClick={onClick ? onClick : toggleNav}
      type="button"
      aria-label={label}
    >
      <span />
      <span />
      <span />
    </StyledHamburgerBtn>
  )
}

export default HamburgerBtn

HamburgerBtn.defaultPropTypes = {
  onClick: null,
  label: 'Menu',
}
HamburgerBtn.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string,
}
