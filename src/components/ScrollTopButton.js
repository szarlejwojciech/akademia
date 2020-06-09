import React, { useRef, useEffect, useState } from 'react'
import { debounce } from 'lodash'
import styled from 'styled-components'
import ScrollTopIcon from '../assets/svg/scroll-top-icon.svg'

const StyledButton = styled.button`
  font-size: 3rem;
  position: fixed;
  bottom: 3rem;
  right: 2rem;
  width: 1em;
  height: 1em;
  border: 1px solid ${({ theme }) => theme.colors.accent};
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.secondaryDark};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  z-index: 1000;
  will-change: opacity;
  transition: 0.25s opacity ease-in;
  svg {
    display: block;
    width: 0.35em;
    height: auto;
  }

  @media (min-width: 768px) {
    font-size: 4rem;
  }
  @media (min-width: 1024px) {
    font-size: 5rem;
  }
  @media (min-width: 1440px) {
    font-size: 5.5rem;
  }
`

const ScrollTopButton = () => {
  const [opacity, setOpacity] = useState(true)

  useEffect(() => {
    window.opacityDebounce = debounce(handleScroll, 100)
    window.addEventListener('scroll', window.opacityDebounce, { passive: true })

    return () => {
      window.removeEventListener('scroll', window.opacityDebounce)
      delete window.opacityDebounce
    }
  }, [opacity])

  const handleScroll = () => {
    const currentScrollY = window.scrollY
    if (currentScrollY > 200) setOpacity(0.7)
    else setOpacity(0)
  }

  const handleScrollTop = () =>
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })

  return (
    <StyledButton
      type="button"
      title="Wróć do góry"
      aria-label="Wróć do góry"
      onClick={handleScrollTop}
      style={{ opacity }}
    >
      <ScrollTopIcon />
    </StyledButton>
  )
}

export default ScrollTopButton
