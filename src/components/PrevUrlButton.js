import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useLocation, navigate } from '@reach/router'
import ArrowIcon from '../assets/svg/arrow-right-icon.svg'

const PrevLink = styled.button`
  padding: 1em;
  height: 100%;
  color: ${({ theme }) => theme.colors.accent};
  font-size: 1.4rem;
  text-transform: inherit;
  background-color: transparent;
  border: none;
  &:hover {
    opacity: 0.7;
  }
  &:active {
    opacity: 0.9;
  }
  svg {
    margin-right: 0.5em;
    width: 1em;
    height: auto;
    fill: ${({ theme }) => theme.colors.accent};
    transform: rotate(180deg);
    vertical-align: middle;
  }
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
  @media (min-width: 1024px) {
    font-size: 1.6rem;
  }
`

const PrevUrlButton = () => {
  const { pathname } = useLocation()
  const [prevPath, setPrevPath] = useState('')
  useEffect(() => {
    const path = pathname.split('/').slice(0, -1).join('/')
    setPrevPath(path ? path : '/')
  }, [pathname])

  const handleGoBack = () => {
    navigate(prevPath)
  }

  return (
    <PrevLink to={prevPath} aria-label="powrót" onClick={handleGoBack}>
      <ArrowIcon />
      <span>wróć</span>
    </PrevLink>
  )
}

export default PrevUrlButton
