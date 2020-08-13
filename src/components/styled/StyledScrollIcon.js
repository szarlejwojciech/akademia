import styled, { keyframes } from 'styled-components'

const scroll = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-250%);
  }
  5% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  95% {
    opacity: 0;
  }
  100% {
    opacity: 0;
    transform: translateY(250%);
  }
`

const StyledScrollIcon = styled.span`
  position: absolute;
  /* top: calc(50% + 13rem + 11vh); */
  bottom: 2rem;
  left: 50%;
  width: 2.5rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateX(-50%);
  border: 1px solid ${({ theme }) => theme.colors.primaryDark};
  border-radius: 4rem;
  z-index: 2;

  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    background-color: ${({ theme }) => theme.colors.primaryDark};
    border-radius: 50%;
    animation: 2s ${scroll} linear infinite;
  }

  @media (min-width: 768px) {
    /* top: unset; */
    /* bottom: 2rem; */
  }

  @media (min-width: 1024px) {
    width: 3.2rem;
    height: 5rem;
    &::before {
      width: 0.6rem;
      height: 0.6rem;
    }
  }
`

export default StyledScrollIcon
