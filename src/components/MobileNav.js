import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import StyledMobileNav from './styled/StyledMobileNav'
import { useNavState } from '../hooks/localeState'

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

const Submenu = ({ children, label }) => {
  const [isCollapsed, setIsCollapsed] = useState(true)
  const [height, setHeight] = useState(0)
  const btnElement = useRef(null)
  useEffect(() => {
    setHeight(
      isCollapsed ? 0 : children.length * btnElement?.current?.offsetHeight
    )
  }, [isCollapsed])
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed)
  }
  return (
    <>
      <button
        type="button"
        ref={btnElement}
        className={`submenu-toggler ${isCollapsed ? 'is-collapsed' : ''}`}
        role="menuitem"
        tabIndex="-1"
        onClick={toggleCollapse}
        disabled={true}
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

const MobileNav = () => {
  const { navOpen } = useNavState()
  return (
    <StyledMobileNav
      className={navOpen && 'is-open'}
      aria-label="mobile-menu"
      aria-hidden={navOpen}
    >
      <ul role="menubar" className="menubar">
        <li role="none">
          <Link to="/" role="menuitem" tabIndex="-1">
            <span className="text">Home</span>
            <ArrowIcon role="none" className="icon" />
          </Link>
        </li>
        <li role="none">
          <Link to="/onas" role="menuitem" tabIndex="-1">
            <span className="text">O nas</span>
            <ArrowIcon role="none" className="icon" />
          </Link>
        </li>
        <li role="none">
          <Submenu label="oferta">
            <li role="none">
              <Link to="/zabiegi" role="menuitem" tabIndex="-1">
                <span className="text">wszystko</span>
                <ArrowIcon role="none" className="icon" />
              </Link>
            </li>
            <li role="none">
              <Link to="/zabiegi" role="menuitem" tabIndex="-1">
                <span className="text">wszystko</span>
                <ArrowIcon role="none" className="icon" />
              </Link>
            </li>
            <li role="none">
              <Link to="/zabiegi" role="menuitem" tabIndex="-1">
                <span className="text">wszystko</span>
                <ArrowIcon role="none" className="icon" />
              </Link>
            </li>
            <li role="none">
              <Link to="/zabiegi" role="menuitem" tabIndex="-1">
                <span className="text">wszystko</span>
                <ArrowIcon role="none" className="icon" />
              </Link>
            </li>
            <li role="none">
              <Link to="/zabiegi" role="menuitem" tabIndex="-1">
                <span className="text">wszystko</span>
                <ArrowIcon role="none" className="icon" />
              </Link>
            </li>
            <li role="none">
              <Link to="/zabiegi" role="menuitem" tabIndex="-1">
                <span className="text">wszystko</span>
                <ArrowIcon role="none" className="icon" />
              </Link>
            </li>
            <li role="none">
              <Link to="/zabiegi" role="menuitem" tabIndex="-1">
                <span className="text">wszystko</span>
                <ArrowIcon role="none" className="icon" />
              </Link>
            </li>
            <li role="none">
              <Link to="/zabiegi" role="menuitem" tabIndex="-1">
                <span className="text">wszystko</span>
                <ArrowIcon role="none" className="icon" />
              </Link>
            </li>
            <li role="none">
              <Link to="/zabiegi" role="menuitem" tabIndex="-1">
                <span className="text">wszystko</span>
                <ArrowIcon role="none" className="icon" />
              </Link>
            </li>
            <li role="none">
              <Link to="/zabiegi" role="menuitem" tabIndex="-1">
                <span className="text">wszystko</span>
                <ArrowIcon role="none" className="icon" />
              </Link>
            </li>
            <li role="none">
              <Link to="/zabiegi" role="menuitem" tabIndex="-1">
                <span className="text">zabieg 1</span>
                <ArrowIcon role="none" className="icon" />
              </Link>
            </li>
            <li role="none">
              <Link to="/zabiegi" role="menuitem" tabIndex="-1">
                <span className="text">zabieg 2</span>
                <ArrowIcon role="none" className="icon" />
              </Link>
            </li>
            <li role="none">
              <Link to="/zabiegi" role="menuitem" tabIndex="-1">
                <span className="text">zabieg 3</span>
                <ArrowIcon role="none" className="icon" />
              </Link>
            </li>
          </Submenu>
        </li>
        <li role="none">
          <Submenu label="zabiegi">
            <li role="none">
              <Link to="/oferta" role="menuitem" tabIndex="-1">
                <span className="text">wszystko</span>
                <ArrowIcon role="none" className="icon" />
              </Link>
            </li>
            <li role="none">
              <Link to="/oferta" role="menuitem" tabIndex="-1">
                <span className="text">oferta 1</span>
                <ArrowIcon role="none" className="icon" />
              </Link>
            </li>
            <li role="none">
              <Link to="/oferta" role="menuitem" tabIndex="-1">
                <span className="text">oferta 2</span>
                <ArrowIcon role="none" className="icon" />
              </Link>
            </li>
            <li role="none">
              <Link to="/oferta" role="menuitem" tabIndex="-1">
                <span className="text">oferta 3</span>
                <ArrowIcon role="none" className="icon" />
              </Link>
            </li>
            <li role="none">
              <Link to="/oferta" role="menuitem" tabIndex="-1">
                <span className="text">oferta 4</span>
                <ArrowIcon role="none" className="icon" />
              </Link>
            </li>
          </Submenu>
        </li>
        <li role="none">
          <Link to="/kontakt" role="menuitem" tabIndex="-1">
            <span className="text">kontakt</span>
            <ArrowIcon role="none" className="icon" />
          </Link>
        </li>
      </ul>
    </StyledMobileNav>
  )
}

export default MobileNav

Submenu.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  label: PropTypes.string.isRequired,
}
