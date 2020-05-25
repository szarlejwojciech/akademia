import React from 'react'
import StyledContact from './styled/StyledContact'
import contact from '../utils/contact'
import LocationIcon from '../assets/svg/location-icon.svg'
import PhoneIcon from '../assets/svg/phone-icon.svg'
import ClockIcon from '../assets/svg/clock-icon.svg'

const Contact = () => {
  return (
    <StyledContact>
      <div className="section-wrapper">
        <div className="info-box">
          <ul className="wrapper">
            <li>
              <span className="icon">
                <PhoneIcon />
              </span>
              <div className="content">
                <h6>Kontakt:</h6>
                <div className="info-text">
                  <span className="label">Telefon:</span>
                  <span>
                    <a href={`tel:${contact.phone.replace(/ /g, '')}`}>
                      {contact.phone}
                    </a>
                  </span>
                </div>
                <div className="info-text">
                  <span className="label">Email:</span>
                  <span>
                    <a href={`tel:${contact.email}`}>{contact.email}</a>
                  </span>
                </div>
              </div>
            </li>
            <li>
              <span className="icon">
                <LocationIcon />
              </span>
              <div className="content">
                <h6>Lokalizacja</h6>
                <div className="info-text">
                  <span className="label">Adres:</span>
                  <span>
                    Ul. Kolejowa 2
                    <br />
                    34-400 Nowy Targ
                  </span>
                </div>
              </div>
            </li>
            <li>
              <span className="icon">
                <ClockIcon />
              </span>
              <div className="content">
                <h6>Godziny otwarcia</h6>
                <div className="info-text">
                  <span className="label">Poniedziałek:</span>
                  <span>nieczynne</span>
                </div>
                <div className="info-text">
                  <span className="label">Wtorek - Piątek:</span>
                  <span>10⁰⁰ – 17⁰⁰</span>
                </div>
                <div className="info-text">
                  <span className="label">Sobota:</span>
                  <span>8⁰⁰ – 13⁰⁰</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="map">
          <iframe
            title="Lokalizacja"
            width="600"
            height="450"
            frameBorder="0"
            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJO8tkGezkFUcREvSvbDn7juE&key=AIzaSyC2a09pWtEA-07G3aSq8lDB-JiQWpU_b3w"
            allowFullScreen
          />
        </div>
      </div>
    </StyledContact>
  )
}

export default Contact
