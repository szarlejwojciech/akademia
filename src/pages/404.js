import React from 'react'

import SEO from '../components/Seo'
import StyledErrorPage from '../components/styled/StyledErrorPage'
import ButtonLink from '../components/ButtonLink'
import ErrorGraphic from '../assets/svg/error-page-graphic.svg'
import ArrowIcon from '../assets/svg/arrow-right-icon.svg'

const NotFoundPage = () => (
  <>
    <SEO title="Akademia Urody | Strona Błędu" />
    <StyledErrorPage>
      <div className="container">
        <div className="cta">
          <h1>Nie znaleziono!</h1>
          <p>
            Adres który został wpisany jest nieprawidłowy. Wpisz poprawny adres
            lub wróć na stronę główną.
          </p>
          <ButtonLink to="/" title="Strona główna">
            <span>Strona główna</span>
            <ArrowIcon />
          </ButtonLink>
        </div>
        <ErrorGraphic />
      </div>
    </StyledErrorPage>
  </>
)

export default NotFoundPage
