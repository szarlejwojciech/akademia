import { useStaticQuery, graphql } from 'gatsby'
import slugify from 'slugify'
const query = graphql`
  fragment AllCategories on MdxConnection {
    group(field: frontmatter___categories) {
      fieldValue
    }

    makeup: group(field: frontmatter___subCategories) {
      fieldValue
    }
  }

  query categoriiesQuery {
    treatments: allMdx(filter: { frontmatter: { type: { eq: "zabiegi" } } }) {
      ...AllCategories
    }
    products: allMdx(filter: { frontmatter: { type: { eq: "produkty" } } }) {
      ...AllCategories
    }
    perfumes: allMdx(filter: { frontmatter: { type: { eq: "perfumy" } } }) {
      ...AllCategories
    }
  }
`

function useCategories(type) {
  const data = useStaticQuery(query)
  switch (type) {
    case 'products':
    case 'produkty':
      return data.products.group.map(({ fieldValue }) => ({
        path: `/produkty/${slugify(fieldValue, { lower: true, strict: true })}`,
        name: fieldValue,
      }))
    case 'treatments':
    case 'zabiegi':
      return data.treatments.group.map(({ fieldValue }) => ({
        path: `/zabiegi/${slugify(fieldValue, { lower: true, strict: true })}`,
        name: fieldValue,
      }))
    case 'perfumes':
    case 'perfumy':
      return data.perfumes.group.map(({ fieldValue }) => ({
        path: `/perfumy/${slugify(fieldValue, { lower: true, strict: true })}`,
        name: fieldValue,
      }))
    case 'makijaż':
      return data.products.makeup.map(({ fieldValue }) => ({
        path: `/produkty/makijaz/${slugify(fieldValue, {
          lower: true,
          strict: true,
        })}`,
        name: fieldValue,
      }))
    default:
      return null
  }
}

export default useCategories
