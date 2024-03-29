import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import StyledMobileNav from './styled/StyledMobileNav'
import { useNavState } from '../hooks/localeState'
import { useLocation } from '@reach/router'
import useCategories from '../hooks/useCategories'
import slugify from 'slugify'

const ArrowIcon = styled.span`
  position: relative;
  border-left: 0.6em solid #1a171b;
  border-top: 0.25em solid transparent;
  border-bottom: 0.25em solid transparent;
`

const PlusIcon = styled.span`
  position: relative;
  width: 0.8em;
  height: 0.8em;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 2px;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
  &::before {
    will-change: transform;
    transition: 0.15s transform ease-in-out;
  }
  &::after {
    transform: rotate(90deg);
  }
`

const Submenu = ({ label, length, tabIndex, to, subMenuItems }) => {
  const [isCollapsed, setIsCollapsed] = useState(true)
  const [height, setHeight] = useState(0)
  const btnElement = useRef(null)
  const { pathname } = useLocation()

  useEffect(() => {
    setHeight(isCollapsed ? 0 : length * btnElement?.current?.offsetHeight)
  }, [isCollapsed])

  useEffect(() => {
    setIsCollapsed(true)
    if (pathname.includes(slugify(label, { lower: true, strict: true })))
      setIsCollapsed(false)
  }, [pathname])

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <>
      <button
        type="button"
        ref={btnElement}
        className={`submenu-toggler ${isCollapsed ? 'is-collapsed' : ''} ${
          pathname.includes(slugify(label, { lower: true, strict: true }))
            ? 'active'
            : ''
        }`}
        role="menuitem"
        tabIndex={tabIndex}
        onClick={toggleCollapse}
      >
        <span className="text">{label}</span>
        <PlusIcon role="none" className="icon" />
      </button>
      <ul
        style={{ maxHeight: `${height * 2}px` }}
        className="sub-menu"
        role="menu"
      >
        {subMenuItems.length > 1 ? (
          <li role="none">
            <Link
              activeClassName="active"
              to={to}
              role="menuitem"
              tabIndex={isCollapsed ? '-1' : tabIndex}
            >
              <span className="text">wszystko</span>
              <ArrowIcon role="none" className="icon" />
            </Link>
          </li>
        ) : null}
        {subMenuItems &&
          !!subMenuItems.length &&
          subMenuItems.map(({ name, path }) => {
            const subCategories = useCategories(name)
            return (
              <li key={path} role="none">
                {subCategories ? (
                  <Submenu
                    length={subCategories.length}
                    label={name}
                    tabIndex={tabIndex}
                    subMenuItems={subCategories}
                    to={path}
                  ></Submenu>
                ) : (
                  <Link
                    activeClassName="active"
                    partiallyActive={true}
                    to={path}
                    role="menuitem"
                    tabIndex={isCollapsed ? '-1' : tabIndex}
                  >
                    <span className="text">{name.replace(/-/g, ' ')}</span>
                    <ArrowIcon role="none" className="icon" />
                  </Link>
                )}
              </li>
            )
          })}
      </ul>
    </>
  )
}

const MobileNav = ({ children, menuLinks, className, tabIndex }) => {
  const { navOpen } = useNavState()
  const { categoryNavOpen } = useNavState()

  return (
    <StyledMobileNav
      className={`${navOpen ? 'mobile-nav-is-open' : ''} ${
        categoryNavOpen ? 'aside-nav-is-open' : ''
      } ${className}`}
      aria-label={className}
      aria-hidden={!navOpen}
      aria-labelledby="mobile-navigation"
    >
      <div>
        {children}
        <ul role="menubar" className="menubar">
          {menuLinks.map(({ label, to, subMenu, subMenuItems }) =>
            subMenu ? (
              <li role="none" key={to}>
                <Submenu
                  length={subMenuItems.length}
                  label={label}
                  tabIndex={tabIndex}
                  subMenuItems={subMenuItems}
                  to={to}
                ></Submenu>
              </li>
            ) : (
              <li role="none" key={to}>
                <Link
                  activeClassName="active"
                  to={to}
                  role="menuitem"
                  tabIndex={tabIndex}
                >
                  <span className="text">{label}</span>
                  <ArrowIcon role="none" className="icon" />
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
    </StyledMobileNav>
  )
}

export default MobileNav

Submenu.propTypes = {
  label: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired,
  tabIndex: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  subMenuItems: PropTypes.array.isRequired,
}
MobileNav.defaultPropTypes = {
  children: null,
  className: '',
}
MobileNav.propTypes = {
  menuLinks: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  className: PropTypes.string,
  tabIndex: PropTypes.string.isRequired,
}
