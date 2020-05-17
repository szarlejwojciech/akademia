import React from 'react'
import { Link } from 'gatsby'
import HamburgerBtn from './HamburgerBtn'
import StyledNavList from './styled/StyledNavList'
import StyledLogo from './styled/StyledLogo'
import StyledContactInfo from './styled/StyledContactInfo'
import StyledHeader from './styled/StyledHeader'
import CustomLink from './CustomLink'
import { contact } from '../utils/contact'

const Header = () => (
  <StyledHeader>
    <HamburgerBtn />
    <Link className="logo-link" to="/">
      <StyledLogo role="img" aria-label="Logo firmy" title="Stroma główna" />
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
        <CustomLink icon="envelope" url={`mailto:${contact.email}`}>
          {contact.email}
        </CustomLink>
      </li>
      <li>
        <CustomLink
          icon="phone-alt"
          url={`tel:${contact.phone.replace(/ /g, '')}`}
        >
          {contact.phone}
        </CustomLink>
      </li>
      <li>
        <CustomLink icon={['fab', 'facebook']} url="https://bit.ly/2LzJc14" />
      </li>
    </StyledContactInfo>
  </StyledHeader>
)
export default Header
