import React from 'react'
import StyledHamburgerBtn from './styled/StyledHamburgerBtn'

const HamburgerBtn = ({ click }) => {
  return (
    <StyledHamburgerBtn onClick={click}>
      <span></span>
      <span></span>
      <span></span>
    </StyledHamburgerBtn>
  )
}

export default HamburgerBtn
