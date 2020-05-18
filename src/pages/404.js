import React from 'react'

import SEO from '../components/Seo'
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <>
    <SEO title="Akademia Urody | Strona Błędu" />
    <h1>Nie znaleziono</h1>
    <p>Został wprowaszony adres który nie istnieje.</p>
    <Link to="/">Strona główna</Link>
  </>
)

export default NotFoundPage
