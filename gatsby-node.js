/* eslint-disable no-undef */
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
// const toCebabCase = require('./src/utils/toCebabCase')
// import { toCebabCase } from './src/utils/toCebabCase'
const path = require('path')
const slugify = require('slugify')

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
      allType: allMdx {
        group(field: frontmatter___type) {
          fieldValue
        }
      }
      allCategory: allMdx {
        group(field: frontmatter___categories) {
          fieldValue
          nodes {
            frontmatter {
              type
            }
          }
        }
      }
      allSubCategories: allMdx {
        group(field: frontmatter___subCategories) {
          fieldValue
          nodes {
            frontmatter {
              type
              categories
            }
          }
        }
      }
    }
  `)
  if (errors) reporter.panicOnBuild('ERROR: Loading "createPages" query!!!')

  data.allType.group.forEach(({ fieldValue: type }) => {
    data.allCategory.group.forEach(({ fieldValue: category, nodes }) => {
      if (type === nodes[0].frontmatter.type) {
        const slug = `${type}/${slugify(category, {
          lower: true,
          strict: true,
        })}`
        createPage({
          path: slug,
          component: path.resolve('src/layouts/CategoryPageLayout.js'),
          context: { category, type, regex: `/${type}/ig` },
        })
      }
      data.allSubCategories.group.forEach(
        ({ fieldValue: subCategory, nodes }) => {
          if (type === nodes[0].frontmatter.type && category === 'makijaż') {
            const slug = `${type}/${slugify(category, {
              lower: true,
              strict: true,
            })}/${slugify(subCategory, {
              lower: true,
              strict: true,
            })}`
            createPage({
              path: slug,
              component: path.resolve('src/layouts/CategoryPageLayout.js'),
              context: { subCategory, category, type, regex: `/${type}/ig` },
            })
          }
        }
      )
    })
  })

  // const productCategories = data.productCategories.group
  // productCategories.forEach(({ fieldValue, nodes }) =>
  //   createPage({
  //     path: `produkty/${toCebabCase(fieldValue)}`,
  //     component: path.resolve('src/layouts/CategoryPageLayout.js'),
  //     context: {
  //       category: fieldValue,
  //       products: nodes,
  //     },
  //   })
  // )

  // const treatmentCategories = data.treatmentCategories.group
  // treatmentCategories.forEach(({ fieldValue, nodes }) =>
  //   createPage({
  //     path: `zabiegi/${toCebabCase(fieldValue)}`,
  //     component: path.resolve('src/layouts/CategoryPageLayout.js'),
  //     context: {
  //       category: fieldValue,
  //       products: nodes,
  //     },
  //   })
  // )

  const products = data.products.group
  products.forEach(({ fieldValue, nodes }) =>
    nodes.forEach(product => {
      const { title, type } = product.frontmatter
      createPage({
        path: `${type}/${slugify(fieldValue, {
          lower: true,
          strict: true,
        })}/${slugify(title, { lower: true, strict: true })}`,
        component: path.resolve('src/layouts/ProductLayout.js'),
        context: {
          title,
        },
      })
    })
  )
}

exports.onCreateNode = ({ node, actions }) => {
  if (node.internal.type === 'Mdx') {
    const slug = slugify(node.frontmatter.title, { lower: true, strict: true })
    const { createNodeField } = actions
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
    // Transform the new node here and create a new node or
    // create a new node field.
  }
}
