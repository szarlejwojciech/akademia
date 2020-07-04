import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import ArrowIcon from '../assets/svg/arrow-right-icon.svg'
import useCategories from '../hooks/useCategories'
import StyledNav from './styled/StyledMobileNav'
import HamburgerBtn from './HamburgerBtn'
import { useNavState } from '../hooks/localeState'
import Search from './Search'
const AsideNav = ({ type, isOpen }) => {
  const categories = useCategories(type)
  const { toggleCategoryNav } = useNavState()

  return (
    <StyledNav className={`aside-nav ${isOpen ? 'is-open' : ''}`}>
      <HamburgerBtn label="Zamknij kategorie" onClick={toggleCategoryNav} />
      <Search />
      <ul role="menubar" className="menubar">
        <li role="none">
          <Link
            to="/produkty"
            role="menuitem"
            activeClassName="active"
            partiallyActive={true}
          >
            <span className="text">Produkty</span>
            <ArrowIcon role="none" className="icon" />
          </Link>
        </li>
        <li role="none">
          <Link
            to="/zabiegi"
            role="menuitem"
            activeClassName="active"
            partiallyActive={true}
          >
            <span className="text">Zabiegi</span>
            <ArrowIcon role="none" className="icon" />
          </Link>
        </li>
        <li role="none">
          <Link
            to="/perfumy"
            role="menuitem"
            activeClassName="active"
            partiallyActive={true}
          >
            <span className="text">Perfumy</span>
            <ArrowIcon role="none" className="icon" />
          </Link>
        </li>
        <li role="none" className="separator"></li>
        {categories.map(({ path, name }) => {
          return (
            <li key={path} role="none">
              <Link
                to={path}
                role="menuitem"
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
