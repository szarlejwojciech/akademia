import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import ArrowIcon from '../assets/svg/arrow-right-icon.svg'
import { toCebabCase } from '../utils/toCebabCase'
import useCategories from '../hooks/useCategories'
const AsideNav = ({ type }) => {
  const categories = useCategories(type)
  return (
    <ul role="menubar" className="menubar">
      {categories.map(({ path, name }) => {
        return (
          <li key={path} role="none">
            <Link to={path} role="menuitem" tabIndex="-1">
              <span className="text">{name}</span>
              <ArrowIcon role="none" className="icon" />
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default AsideNav

AsideNav.propTypes = {
  type: PropTypes.string.isRequired,
}
