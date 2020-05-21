import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import contact from '../utils/contact'
import StyledFooter from './styled/StyledFooter'

const Footer = () => (
  <StyledFooter>
    <div className="wrapper">
      <div className="logo">
        <img src="/logo-big.png" alt="logo" />
      </div>
      <div className="personal-info">
        <ul>
          <li>
            <a href={`tel:${contact.phone.replace(/ /g, '')}`}>
              <FontAwesomeIcon icon="phone-alt" />
              <span>{contact.phone}</span>
            </a>
          </li>
          <li>
            <a href={`mailto:${contact.email}`}>
              <FontAwesomeIcon icon="envelope" />
              <span>{contact.email}</span>
            </a>
          </li>
          <li>
            <FontAwesomeIcon icon="clock" />
            <span>ul. Kolejowa 2, 34-400 Nowy Targ</span>
          </li>
          <li>
            <FontAwesomeIcon icon="map-marker-alt" />
            <span>Wt - Pt od 10⁰⁰ do 17⁰⁰, Sob od 8⁰⁰ do 13⁰⁰</span>
          </li>
        </ul>
      </div>
    </div>
    <div className="copyright">
      <p>© copyright 2020 — Designed by Wojciech Szarlej</p>
    </div>
  </StyledFooter>
)

export default Footer
