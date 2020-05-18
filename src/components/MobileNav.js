import React from 'react'
import StyledMobileNav from './styled/StyledMobileNav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'gatsby'
import { useNavState } from '../hooks/localeState'

const MobileNav = () => {
  const { navOpen } = useNavState()
  return (
    <StyledMobileNav
      className={navOpen && 'is-open'}
      aria-label="mobile-menu"
      aria-hidden={true}
    >
      <ul role="menubar">
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
          <button
            className="submenu-toggler  is-collapsed"
            role="menuitem"
            tabIndex="-1"
          >
            <span className="text">zabiegi</span>
            <span className="icon">
              <FontAwesomeIcon icon="plus" />
              <FontAwesomeIcon icon="minus" />
            </span>
          </button>
          <ul className="sub-menu" role="menu">
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
          </ul>
        </li>
        <li role="none">
          <button
            className="submenu-toggler is-collapsed"
            role="menuitem"
            tabIndex="-1"
          >
            <span className="text">oferta</span>
            <span className="icon">
              <FontAwesomeIcon icon="plus" />
              <FontAwesomeIcon icon="minus" />
            </span>
          </button>
          <ul className="sub-menu" role="menu">
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
          </ul>
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
