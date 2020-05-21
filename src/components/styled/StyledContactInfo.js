import styled from 'styled-components'

const StyledContactInfo = styled.ul`
  display: flex;
  align-items: flex-end;
  li {
    display: block;
  }
  @media (min-width: 1024px) {
    /* display: block; */
    flex-direction: column;
    font-size: 1rem;

    li + li {
      margin-top: 0.25em;
    }
  }
  @media (min-width: 1440px) {
    li + li {
      margin-top: 0.4em;
    }
  }
`

export default StyledContactInfo
