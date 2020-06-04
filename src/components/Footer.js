import React from 'react'
import contact from '../utils/contact'
import StyledFooter from './styled/StyledFooter'
import PhoneIcon from '../assets/svg/phone-icon.svg'
import MessageIcon from '../assets/svg/message-icon.svg'
import ClockIcon from '../assets/svg/clock-icon.svg'
import LocationIcon from '../assets/svg/location-icon.svg'
import LogoBig from '../assets/svg/logo-big.svg'
const Footer = () => (
  <StyledFooter>
    <div className="wrapper">
      <div className="logo" role="img" title="Logo Akademia Urody">
        <LogoBig />
      </div>
      <div className="personal-info">
        <ul>
          <li>
            <a href={`tel:${contact.phone.replace(/ /g, '')}`}>
              <PhoneIcon />
              <span>{contact.phone}</span>
            </a>
          </li>
          <li>
            <a href={`mailto:${contact.email}`}>
              <MessageIcon />
              <span>{contact.email}</span>
            </a>
          </li>
          <li>
            <ClockIcon />
            <span>ul. Kolejowa 2, 34-400 Nowy Targ</span>
          </li>
          <li>
            <LocationIcon />
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
