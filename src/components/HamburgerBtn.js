import React from 'react'
import StyledHamburgerBtn from './styled/StyledHamburgerBtn'
import { useNavState } from '../hooks/localeState'

const HamburgerBtn = () => {
  const { toggleNav } = useNavState()

  return (
    <StyledHamburgerBtn onClick={toggleNav}>
      <span />
      <span />
      <span />
    </StyledHamburgerBtn>
  )
}

export default HamburgerBtn
