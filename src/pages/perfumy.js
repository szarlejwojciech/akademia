import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import SEO from '../components/Seo'
import TreatmentsPage from '../components/TreatmentsPage'

const treatmentsPage = ({
  data: {
    treatmentsImages: { nodes },
    bgImage: {
      childImageSharp: { fluid },
    },
  },
}) => (
  <>
    <SEO
      title="Perfumy, Akademia Urody, Salon kosmetyczny Nowy Targ"
      description="Obejrzyj naszą oferte zabiegów na dłonie i paznokcie, stopy, twarz i włosy."
      url="http://www.akademiaurody-nowytarg/perfumy"
    />
    {/* <PageIsBuilding /> */}
    <TreatmentsPage
      products={nodes}
      type="perfumy"
      bgImageFluid={fluid}
      subTitle="Od najmłodszych lat nasza skóra musi się mierzyć z różnymi problemami i walczyć z rosnącymi zagrożeniami."
    ></TreatmentsPage>
  </>
)

export default treatmentsPage

treatmentsPage.propTypes = {
  data: PropTypes.shape({
    treatmentsImages: PropTypes.objectOf(PropTypes.array),
    bgImage: PropTypes.objectOf(PropTypes.object),
  }).isRequired,
}

export const queryProducts = graphql`
  {
    treatmentsImages: allMdx(
      filter: { frontmatter: { type: { eq: "perfumy" } } }
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          categories
          featuredImage {
            childImageSharp {
              fluid(
                maxWidth: 170
                quality: 90
                traceSVG: { color: "#4F5053", background: "#EEF6F7" }
              ) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
        excerpt(pruneLength: 70)
      }
    }
    bgImage: file(name: { eq: "perfumy-bg" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
