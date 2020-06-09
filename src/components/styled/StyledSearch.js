import styled from 'styled-components'

const DropDown = styled.ul`
  position: absolute;
  width: 100%;
  z-index: 2;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  list-style-type: none;
`

const DropDownItem = styled.li`
  border-bottom: 1px solid ${props => props.theme.colors.accent};
  display: block;
  background: ${({ theme, highlighted }) =>
    highlighted ? theme.colors.secondaryDark : theme.colors.secondaryLight};
  padding: 1em;
  ${props => (props.highlighted ? 'padding-left: 2rem;' : null)};
  display: flex;
  align-items: center;
  border-left: 10px solid
    ${props => (props.highlighted ? props.theme.colors.accent : 'white')};
  cursor: pointer;

  .gatsby-image {
    width: 2em !important;
    margin-right: 10px;
  }
`

const SearchStyles = styled.div`
  font-size: 1.5rem;
  padding: 0 1.5em 1em;
  .searche-box {
    position: relative;
  }
  label {
    position: absolute;
    top: 50%;
    left: 1.5em;
    padding: 0 0.2em;
    transform: translateY(-170%);
    background-color: ${({ theme }) => theme.colors.secondaryLight};
    will-change: transform;
    transition: 150ms transform ease-in-out;
    &.is-empty {
      transform: translateY(-50%);
    }
  }
  input {
    font-size: 1.5rem;
    width: 100%;
    padding: 1em 1.5em;
    border: 1px solid ${({ theme }) => theme.colors.secondaryDark};
    box-shadow: 1px 0 3px rgba(0, 0, 0, 0.15);
    border-radius: 5em;
    &:focus ~ label {
      transform: translateY(-170%);
    }
  }

  @media (min-width: 768px) {
    padding: 0 0 1.5em 0;
  }
`

export { DropDown, DropDownItem, SearchStyles }
