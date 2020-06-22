import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import SEO from '../components/Seo'
import AboutUs from '../components/AboutUs'
import HeaderImageLayout from '../layouts/HeaderImageLayout'

const AboutPage = ({ data }) => (
  <>
    <SEO
      title="O nas, Akademia Urody, salon kosmetyczny Nowy Targ"
      description="Akademia Urody jest salonem o 12-letnim doświadczeniu posiadający metody nakładania produktów, metody których skuteczność potwierdziła się w setkach przypadków."
      url="http://www.akademiaurody-nowytarg/onas"
    />
    <HeaderImageLayout
      fluid={data.file.childImageSharp.fluid}
      title="O Nas"
      subTitle="Odkryj swoje piękno. Kosmetyka to dziedzina, w której Akademia Urody specjalizuje się szczególnie."
    >
      <AboutUs />
    </HeaderImageLayout>
  </>
)

export default AboutPage
AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}
export const query = graphql`
  query MyQueryTwo {
    file(name: { eq: "about-us-header-bg" }) {
      childImageSharp {
        fluid(maxWidth: 2000, maxHeight: 556, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
