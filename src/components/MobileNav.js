import React, { useState, useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'gatsby'
import StyledMobileNav from './styled/StyledMobileNav'
import { useNavState } from '../hooks/localeState'

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
      >
        <span className="text">{label}</span>
        <span className="icon">
          <FontAwesomeIcon icon="plus" />
          <FontAwesomeIcon icon="minus" />
        </span>
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
            <span className="icon">
              <FontAwesomeIcon icon="angle-right" />
            </span>
          </Link>
        </li>
        <li role="none">
          <Link to="/onas" role="menuitem" tabIndex="-1">
            <span className="text">O nas</span>
            <span className="icon">
              <FontAwesomeIcon icon="angle-right" />
            </span>
          </Link>
        </li>
        <li role="none">
          <Submenu label="oferta">
            <li role="none">
              <Link to="/zabiegi" role="menuitem" tabIndex="-1">
                <span className="text">wszystko</span>
                <span className="icon">
                  <FontAwesomeIcon icon="angle-right" />
                </span>
              </Link>
            </li>
            <li role="none">
              <Link to="/zabiegi" role="menuitem" tabIndex="-1">
                <span className="text">wszystko</span>
                <span className="icon">
                  <FontAwesomeIcon icon="angle-right" />
                </span>
              </Link>
            </li>
            <li role="none">
              <Link to="/zabiegi" role="menuitem" tabIndex="-1">
                <span className="text">wszystko</span>
                <span className="icon">
                  <FontAwesomeIcon icon="angle-right" />
                </span>
              </Link>
            </li>
            <li role="none">
              <Link to="/zabiegi" role="menuitem" tabIndex="-1">
                <span className="text">wszystko</span>
                <span className="icon">
                  <FontAwesomeIcon icon="angle-right" />
                </span>
              </Link>
            </li>
            <li role="none">
              <Link to="/zabiegi" role="menuitem" tabIndex="-1">
                <span className="text">wszystko</span>
                <span className="icon">
                  <FontAwesomeIcon icon="angle-right" />
                </span>
              </Link>
            </li>
            <li role="none">
              <Link to="/zabiegi" role="menuitem" tabIndex="-1">
                <span className="text">wszystko</span>
                <span className="icon">
                  <FontAwesomeIcon icon="angle-right" />
                </span>
              </Link>
            </li>
            <li role="none">
              <Link to="/zabiegi" role="menuitem" tabIndex="-1">
                <span className="text">wszystko</span>
                <span className="icon">
                  <FontAwesomeIcon icon="angle-right" />
                </span>
              </Link>
            </li>
            <li role="none">
              <Link to="/zabiegi" role="menuitem" tabIndex="-1">
                <span className="text">wszystko</span>
                <span className="icon">
                  <FontAwesomeIcon icon="angle-right" />
                </span>
              </Link>
            </li>
            <li role="none">
              <Link to="/zabiegi" role="menuitem" tabIndex="-1">
                <span className="text">wszystko</span>
                <span className="icon">
                  <FontAwesomeIcon icon="angle-right" />
                </span>
              </Link>
            </li>
            <li role="none">
              <Link to="/zabiegi" role="menuitem" tabIndex="-1">
                <span className="text">wszystko</span>
                <span className="icon">
                  <FontAwesomeIcon icon="angle-right" />
                </span>
              </Link>
            </li>
            <li role="none">
              <Link to="/zabiegi" role="menuitem" tabIndex="-1">
                <span className="text">zabieg 1</span>
                <span className="icon">
                  <FontAwesomeIcon icon="angle-right" />
                </span>
              </Link>
            </li>
            <li role="none">
              <Link to="/zabiegi" role="menuitem" tabIndex="-1">
                <span className="text">zabieg 2</span>
                <span className="icon">
                  <FontAwesomeIcon icon="angle-right" />
                </span>
              </Link>
            </li>
            <li role="none">
              <Link to="/zabiegi" role="menuitem" tabIndex="-1">
                <span className="text">zabieg 3</span>
                <span className="icon">
                  <FontAwesomeIcon icon="angle-right" />
                </span>
              </Link>
            </li>
          </Submenu>
        </li>
        <li>
          <Submenu label="zabiegi">
            <li role="none">
              <Link to="/oferta" role="menuitem" tabIndex="-1">
                <span className="text">wszystko</span>
                <span className="icon">
                  <FontAwesomeIcon icon="angle-right" />
                </span>
              </Link>
            </li>
            <li role="none">
              <Link to="/oferta" role="menuitem" tabIndex="-1">
                <span className="text">oferta 1</span>
                <span className="icon">
                  <FontAwesomeIcon icon="angle-right" />
                </span>
              </Link>
            </li>
            <li role="none">
              <Link to="/oferta" role="menuitem" tabIndex="-1">
                <span className="text">oferta 2</span>
                <span className="icon">
                  <FontAwesomeIcon icon="angle-right" />
                </span>
              </Link>
            </li>
            <li role="none">
              <Link to="/oferta" role="menuitem" tabIndex="-1">
                <span className="text">oferta 3</span>
                <span className="icon">
                  <FontAwesomeIcon icon="angle-right" />
                </span>
              </Link>
            </li>
            <li role="none">
              <Link to="/oferta" role="menuitem" tabIndex="-1">
                <span className="text">oferta 4</span>
                <span className="icon">
                  <FontAwesomeIcon icon="angle-right" />
                </span>
              </Link>
            </li>
          </Submenu>
        </li>
        <li role="none">
          <Link to="/kontakt" role="menuitem" tabIndex="-1">
            <span className="text">kontakt</span>
            <span className="icon">
              <FontAwesomeIcon icon="angle-right" />
            </span>
          </Link>
        </li>
      </ul>
    </StyledMobileNav>
  )
}

export default MobileNav
