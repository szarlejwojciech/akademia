import React from 'react'
import PropTypes from 'prop-types'
import StyledHamburgerBtn from './styled/StyledHamburgerBtn'
import { useNavState } from '../hooks/localeState'

const HamburgerBtn = ({ onClick, label, tabIndex }) => {
  const { toggleNav, navOpen, categoryNavOpen } = useNavState()

  return (
    <StyledHamburgerBtn
      onClick={onClick ? onClick : toggleNav}
      type="button"
      aria-label={label}
      navOpen={navOpen}
      categoryNavOpen={categoryNavOpen}
      tabIndex={tabIndex}
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
  tabIndex: '-1',
}
HamburgerBtn.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string,
  tabIndex: PropTypes.string,
}
