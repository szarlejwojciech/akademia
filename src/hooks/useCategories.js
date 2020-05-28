import { useStaticQuery, graphql } from 'gatsby'
import { toCebabCase } from '../utils/toCebabCase'
const query = graphql`
  {
    treatments: allMdx(
      filter: { frontmatter: { type: { eq: "treatments" } } }
    ) {
      group(field: frontmatter___categories) {
        fieldValue
      }
    }
    products: allMdx(filter: { frontmatter: { type: { eq: "products" } } }) {
      group(field: frontmatter___categories) {
        fieldValue
      }
    }
  }
`

function useCategories(type) {
  const data = useStaticQuery(query)
  const productsCategories = data.products.group.map(({ fieldValue }) => ({
    path: `/produkty/${toCebabCase(fieldValue)}`,
    name: fieldValue,
  }))
  const treatmentsCategories = data.treatments.group.map(({ fieldValue }) => ({
    path: `/zabiegi/${toCebabCase(fieldValue)}`,
    name: fieldValue,
  }))
  if (type === 'products' || type === 'produkty') return productsCategories
  else return treatmentsCategories
}

export default useCategories
