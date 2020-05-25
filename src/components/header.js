import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import HamburgerBtn from './HamburgerBtn'
import MobileNav from './MobileNav'
import StyledNavList from './styled/StyledNavList'
import StyledLogo from './styled/StyledLogo'
import StyledContactInfo from './styled/StyledContactInfo'
import StyledHeader from './styled/StyledHeader'
import CustomLink from './CustomLink'
import contact from '../utils/contact'
import { useNavState } from '../hooks/localeState'
import PropTypes from 'prop-types'
import MessageIcon from '../assets/svg/message-icon.svg'
import PhoneIcon from '../assets/svg/phone-icon.svg'
import FacebookIcon from '../assets/svg/facebook-icon.svg'

const Header = ({ location }) => {
  const { navOpen, toggleNav } = useNavState()
  useEffect(() => {
    if (navOpen) toggleNav()
  }, [location])

  return (
    <StyledHeader>
      <MobileNav />
      <div className="top-bar">
        <HamburgerBtn />
        <Link
          className="logo-link"
          to="/"
          aria-label="Logo firmy"
          title="Stroma główna"
        >
          <StyledLogo role="img" />
        </Link>
        <StyledNavList>
          <ul>
            <li>
              <Link to="/" activeClassName="active">
                Home
              </Link>
            </li>
            <li>
              <Link to="/onas" activeClassName="active">
                O nas
              </Link>
            </li>
            <li>
              <Link to="/oferta" activeClassName="active">
                Oferta
              </Link>
            </li>
            <li>
              <Link to="/zabiegi" activeClassName="active">
                Zabiegi
              </Link>
            </li>
            <li>
              <Link to="/kontakt" activeClassName="active">
                Kontakt
              </Link>
            </li>
          </ul>
        </StyledNavList>
        <StyledContactInfo>
          <li>
            <CustomLink href={`mailto:${contact.email}`} title="Wyślij email!">
              <MessageIcon />
              <span>{contact.email}</span>
            </CustomLink>
          </li>
          <li>
            <CustomLink
              href={`tel:${contact.phone.replace(/ /g, '')}`}
              title="Zadzwoń!"
            >
              <PhoneIcon />
              <span>{contact.phone}</span>
            </CustomLink>
          </li>
          <li>
            <CustomLink
              href="https://bit.ly/2LzJc14"
              title="Odwiedź naszego facebooka!"
              target="_blanc"
            >
              <FacebookIcon />
            </CustomLink>
          </li>
        </StyledContactInfo>
      </div>
    </StyledHeader>
  )
}
export default Header

Header.propTypes = {
  location: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
}
