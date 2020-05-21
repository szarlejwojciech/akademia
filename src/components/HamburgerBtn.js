import React from 'react'
import StyledHamburgerBtn from './styled/StyledHamburgerBtn'
import { useNavState } from '../hooks/localeState'

const HamburgerBtn = () => {
  const { toggleNav } = useNavState()

  return (
    <StyledHamburgerBtn onClick={toggleNav} type="button" aria-label="Menu">
      <span />
      <span />
      <span />
    </StyledHamburgerBtn>
  )
}

export default HamburgerBtn
