import React from 'react'
import StyledContact from './styled/StyledContact'
import { contact } from '../utils/contact'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Contact = () => {
  return (
    <StyledContact>
      <div className="section-wrapper">
        <div className="info-box">
          <ul className="wrapper">
            <li>
              <span className="icon">
                <FontAwesomeIcon icon="phone-alt" />
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
                <FontAwesomeIcon icon="map-marker-alt" />
              </span>
              <div className="content">
                <h6>Lokalizacja</h6>
                <div className="info-text">
                  <span className="label">Adres:</span>
                  <span>
                    Ul. Kolejowa 2<br />
                    34-400 Nowy Targ
                  </span>
                </div>
              </div>
            </li>
            <li>
              <span className="icon">
                <FontAwesomeIcon icon="clock" />
              </span>
              <div className="content">
                <h6>Godziny otwarcia</h6>
                <div className="info-text">
                  <span className="label">Poniedziałek:</span>
                  <span>nieczynne</span>
                </div>
                <div className="info-text">
                  <span className="label">Wtorek - Piątek:</span>
                  <span>8⁰⁰ – 18⁰⁰</span>
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
            allowFullScreen={true}
          ></iframe>
        </div>
      </div>
    </StyledContact>
  )
}

export default Contact
