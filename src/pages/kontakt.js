import React from 'react'
// import { Link } from 'gatsby'
import Contact from '../components/Contact'
// import Image from '../assets/images/image'
import SEO from '../components/Seo'
import HeaderImageLayout from '../layouts/HeaderImageLayout'

const ContactPage = () => (
  <>
    <SEO
      title="Akademia Urody | Kontakt"
      description="Już dziś umów swoją wizytę i odwiedź Akademie Urody w Nowym Targu an ulicy Kolejowej 2."
      url="http://www.akademiaurody-nowytarg/kontakt"
    />
    <HeaderImageLayout>
      <Contact />
    </HeaderImageLayout>
  </>
)

export default ContactPage
