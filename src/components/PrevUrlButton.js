import React from 'react'
import styled from 'styled-components'
import ArrowIcon from '../assets/svg/arrow-right-icon.svg'

const Button = styled.button`
  padding: 1em;
  margin: -1em;
  height: 100%;
  color: ${({ theme }) => theme.colors.accent};
  font-size: 1rem;
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
    font-size: 1.2rem;
  }
  @media (min-width: 1024px) {
    font-size: 1.3rem;
  }
`

const PrevUrlButton = () => {
  return (
    <Button type="button" onClick={() => window.history.back()}>
      <ArrowIcon />
      <span>wróć</span>
    </Button>
  )
}

export default PrevUrlButton
