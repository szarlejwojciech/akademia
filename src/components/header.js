import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import HamburgerBtn from './HamburgerBtn'
import StyledNavList from './styled/StyledNavList'
import StyledLogo from './styled/StyledLogo'
import StyledContactInfo from './styled/StyledContactInfo'
import StyledHeader from './styled/StyledHeader'
import CustomLink from './CustomLink'
import '../utils/fontawesome'

const Header = () => (
  <StyledHeader>
    <HamburgerBtn />
    <StyledLogo />
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
        <CustomLink icon="envelope" url="mailto:akademiaurody@biuro.pl">
          akademiaurody@biuro.pl
        </CustomLink>
      </li>
      <li>
        <CustomLink icon="phone-alt" url="tel:+48 123 465 789">
          +48 123 465 789
        </CustomLink>
      </li>
      <li>
        <CustomLink icon={['fab', 'facebook']} url="http://facebook.pl" />
      </li>
    </StyledContactInfo>
  </StyledHeader>
)
export default Header
