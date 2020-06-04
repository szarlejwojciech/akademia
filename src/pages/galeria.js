import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import SEO from '../components/Seo'
import HeaderImageLayout from '../layouts/HeaderImageLayout'
import Gallery from '../components/Gallery'

const GalleryPage = ({ data }) => (
  <>
    <SEO
      title="Akademia Urody | Kontakt"
      description="Już dziś umów swoją wizytę i odwiedź Akademie Urody w Nowym Targu an ulicy Kolejowej 2."
      url="http://www.akademiaurody-nowytarg/kontakt"
    />
    <HeaderImageLayout
      fluid={data.file.childImageSharp.fluid}
      title="Galeria"
      subTitle="Nasza galeria..."
    >
      <Gallery />
    </HeaderImageLayout>
  </>
)

export default GalleryPage
GalleryPage.propTypes = {
  data: PropTypes.object.isRequired,
}
export const query = graphql`
  query {
    file(name: { eq: "contact-header-bg" }) {
      childImageSharp {
        fluid(maxWidth: 2000, maxHeight: 556, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
