import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import SEO from '../components/Seo'
import PageIsBuilding from '../components/PageIsBuilding'
import TreatmentsPage from '../components/TreatmentsPage'

const treatmentsPage = ({
  data: {
    allMdx: { nodes, group },
  },
}) => (
  <>
    <SEO
      title="Akademia Urody | Zabiegi"
      description="Obejrzyj naszą oferte zabiegów na dłonie i paznokcie, stopy, twarz i włosy."
      url="http://www.akademiaurody-nowytarg/zabiegi"
    />
    {/* <PageIsBuilding /> */}
    <TreatmentsPage products={nodes} type="zabiegi"></TreatmentsPage>
  </>
)

export default treatmentsPage

treatmentsPage.propTypes = {
  data: PropTypes.objectOf(PropTypes.objectOf(PropTypes.array)).isRequired,
}

export const queryProducts = graphql`
  {
    allMdx(filter: { frontmatter: { type: { eq: "treatments" } } }) {
      group(field: frontmatter___categories) {
        fieldValue
      }
      nodes {
        frontmatter {
          title
          type
          categories
        }
        excerpt(pruneLength: 50)
      }
    }
  }
`
