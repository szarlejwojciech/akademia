/* eslint-disable no-undef */
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
// const toCebabCase = require('./src/utils/toCebabCase')
// import { toCebabCase } from './src/utils/toCebabCase'
const path = require('path')
const toCebabCase = str => {
  return str
    .replace(/ę/gi, 'e')
    .replace(/ó/gi, 'o')
    .replace(/ą/gi, 'a')
    .replace(/ś/gi, 's')
    .replace(/ł/gi, 'l')
    .replace(/[żź]/gi, 'z')
    .replace(/ć/gi, 'c')
    .replace(/ń/gi, 'n')
    .trim()
    .replace(/[^a-z0-9ęóąśłżźćń]{1,}/gi, '-')
    .toLowerCase()
}
exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
  const config = getConfig()
  if (stage.startsWith('develop') && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom': '@hot-loader/react-dom',
    }
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const { data, errors } = await graphql(`
    query {
      productCategories: allMdx(
        filter: { frontmatter: { type: { eq: "products" } } }
      ) {
        group(field: frontmatter___categories) {
          fieldValue
          nodes {
            frontmatter {
              title
              type
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 300, quality: 90) {
                    src
                    srcSet
                    tracedSVG
                    sizes
                  }
                }
              }
            }
            excerpt(pruneLength: 50)
          }
        }
      }
      treatmentCategories: allMdx(
        filter: { frontmatter: { type: { eq: "treatments" } } }
      ) {
        group(field: frontmatter___categories) {
          fieldValue
          nodes {
            frontmatter {
              title
              type
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 300, quality: 90) {
                    src
                    srcSet
                    tracedSVG
                    sizes
                  }
                }
              }
            }
            excerpt(pruneLength: 50)
          }
        }
      }
      products: allMdx {
        group(field: frontmatter___categories) {
          fieldValue
          nodes {
            frontmatter {
              type
              title
            }
          }
        }
      }
    }
  `)
  if (errors) reporter.panicOnBuild('ERROR: Loading "createPages" query!!!')

  const productCategories = data.productCategories.group
  productCategories.forEach(({ fieldValue, nodes }) =>
    createPage({
      path: `produkty/${toCebabCase(fieldValue)}`,
      component: path.resolve('src/layouts/CategoryPageLayout.js'),
      context: {
        category: fieldValue,
        products: nodes,
      },
    })
  )

  const treatmentCategories = data.treatmentCategories.group
  treatmentCategories.forEach(({ fieldValue, nodes }) =>
    createPage({
      path: `zabiegi/${toCebabCase(fieldValue)}`,
      component: path.resolve('./src/layouts/CategoryPageLayout.js'),
      context: {
        category: fieldValue,
        products: nodes,
      },
    })
  )

  const products = data.products.group
  products.forEach(({ fieldValue, nodes }) =>
    nodes.forEach(product => {
      const { title, type } = product.frontmatter
      createPage({
        path: `${type === 'products' ? 'produkty' : 'zabiegi'}/${toCebabCase(
          fieldValue
        )}/${toCebabCase(title)}`,
        component: path.resolve('./src/layouts/ProductLayout.js'),
        context: {
          title,
        },
      })
    })
  )
}
