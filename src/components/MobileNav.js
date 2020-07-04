import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import StyledMobileNav from './styled/StyledMobileNav'
import { useNavState } from '../hooks/localeState'
import { useLocation } from '@reach/router'

const ArrowIcon = styled.span`
  position: relative;
  width: 0.6em;
  height: 0.6em;
  border: 2px solid ${({ theme }) => theme.colors.primaryDark};
  border-left: transparent;
  border-bottom: transparent;
  transform: translateX(-25%) rotate(45deg);
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

const Submenu = ({ children, label, length }) => {
  const [isCollapsed, setIsCollapsed] = useState(true)
  const [height, setHeight] = useState(0)
  const btnElement = useRef(null)
  const { pathname } = useLocation()

  useEffect(() => {
    setHeight(isCollapsed ? 0 : length * btnElement?.current?.offsetHeight)
  }, [isCollapsed])

  useEffect(() => {
    setIsCollapsed(true)
    if (pathname.includes(label.toLowerCase())) setIsCollapsed(false)
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
          pathname.includes(label.toLowerCase()) ? 'active' : ''
        }`}
        role="menuitem"
        tabIndex="-1"
        onClick={toggleCollapse}
      >
        <span className="text">{label}</span>
        <PlusIcon role="none" className="icon" />
      </button>
      <ul style={{ height: `${height}px` }} className="sub-menu" role="menu">
        {children}
      </ul>
    </>
  )
}

const MobileNav = ({ children, menuLinks, className }) => {
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
      {children}
      <ul role="menubar" className="menubar">
        {menuLinks.map(({ label, to, subMenu, subMenuItems }) =>
          subMenu ? (
            <li role="none" key={to}>
              <Submenu length={subMenuItems.length} label={label}>
                <li role="none">
                  <Link
                    activeClassName="active"
                    to={to}
                    role="menuitem"
                    tabIndex="-1"
                  >
                    <span className="text">wszystko</span>
                    <ArrowIcon role="none" className="icon" />
                  </Link>
                </li>
                {subMenuItems &&
                  !!subMenuItems.length &&
                  subMenuItems.map(({ name, path }) => (
                    <li key={path} role="none">
                      <Link
                        activeClassName="active"
                        partiallyActive={true}
                        to={path}
                        role="menuitem"
                        tabIndex="-1"
                      >
                        <span className="text">{name.replace('-', ' ')}</span>
                        <ArrowIcon role="none" className="icon" />
                      </Link>
                    </li>
                  ))}
              </Submenu>
            </li>
          ) : (
            <li role="none" key={to}>
              <Link
                activeClassName="active"
                to={to}
                role="menuitem"
                tabIndex="-1"
              >
                <span className="text">{label}</span>
                <ArrowIcon role="none" className="icon" />
              </Link>
            </li>
          )
        )}
      </ul>
    </StyledMobileNav>
  )
}

export default MobileNav

Submenu.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
    .isRequired,
  label: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired,
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
}
