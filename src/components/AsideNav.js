import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import ArrowIcon from '../assets/svg/arrow-right-icon.svg'
import { toCebabCase } from '../utils/toCebabCase'
import useCategories from '../hooks/useCategories'
import StyledNav from './styled/StyledMobileNav'
const AsideNav = ({ type, isOpen }) => {
  const categories = useCategories(type)
  return (
    <StyledNav className={`aside-nav ${isOpen && 'is-open'}`}>
      <ul role="menubar" className="menubar">
        {categories.map(({ path, name }) => {
          return (
            <li key={path} role="none">
              <Link
                to={path}
                role="menuitem"
                tabIndex="1"
                activeClassName="active"
                partiallyActive={true}
              >
                <span className="text">{name.replace(/-/g, ' ')}</span>
                <ArrowIcon role="none" className="icon" />
              </Link>
            </li>
          )
        })}
      </ul>
    </StyledNav>
  )
}

export default AsideNav

AsideNav.propTypes = {
  type: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
}
