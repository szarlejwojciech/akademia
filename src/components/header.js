import React, { useRef } from 'react'
import { Link } from 'gatsby'
import HamburgerBtn from './HamburgerBtn'
import MobileNav from './MobileNav'
import StyledNavList from './styled/StyledNavList'
import StyledLogo from './styled/StyledLogo'
import StyledContactInfo from './styled/StyledContactInfo'
import StyledHeader from './styled/StyledHeader'
import CustomLink from './CustomLink'
import contact from '../utils/contact'
import MessageIcon from '../assets/svg/message-icon.svg'
import PhoneIcon from '../assets/svg/phone-icon.svg'
import FacebookIcon from '../assets/svg/facebook-icon.svg'
import useScroll from '../hooks/useScroll'
import useCategories from '../hooks/useCategories'

const Header = () => {
  const goingUp = useScroll()
  const productsCategories = useCategories('produkty')
  const treatmentsCategories = useCategories('zabiegi')
  const perfumesCategories = useCategories('perfumy')
  const menuLinks = useRef([
    {
      label: 'Home',
      to: '/',
      subMenu: false,
    },
    {
      label: 'O nas',
      to: '/onas',
      subMenu: false,
    },
    {
      label: 'Produkty',
      to: '/produkty',
      subMenu: true,
      subMenuItems: productsCategories,
    },
    {
      label: 'Zabiegi',
      to: '/zabiegi',
      subMenu: true,
      subMenuItems: treatmentsCategories,
    },
    {
      label: 'Perfumy',
      to: '/perfumy',
      subMenu: true,
      subMenuItems: perfumesCategories,
    },
    {
      label: 'Galeria',
      to: '/galeria',
      subMenu: false,
    },
    {
      label: 'Kontakt',
      to: '/kontakt',
      subMenu: false,
    },
  ])
  return (
    <StyledHeader className={goingUp ? '' : 'hidden'}>
      <MobileNav menuLinks={menuLinks.current} className="mobile-nav" />
      <div className="top-bar">
        <HamburgerBtn label="Menu" />
        <Link
          className="logo-link"
          to="/"
          aria-label="Strona główna"
          title="Stroma główna"
        >
          <StyledLogo role="img" />
        </Link>
        <StyledNavList aria-label="navigation">
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
              <Link
                to="/produkty"
                activeClassName="active"
                partiallyActive={true}
              >
                Oferta
              </Link>
            </li>
            <li>
              <Link
                to="/zabiegi"
                activeClassName="active"
                partiallyActive={true}
              >
                Zabiegi
              </Link>
            </li>
            <li>
              <Link to="/galeria" activeClassName="active">
                Galeria
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
              href="https://www.facebook.com/AkademiaUrodyNT/"
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
