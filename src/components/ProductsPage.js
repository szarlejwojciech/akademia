import React from 'react'
import PropTypes from 'prop-types'
import AsideNav from './AsideNav'
import ProductPreview from './ProductPreview'
import { toCebabCase } from '../utils/toCebabCase'
import PrevUrlButton from './PrevUrlButton'

const ProductPage = ({ products, type }) => {
  return (
    <div>
      <AsideNav type={type} />
      <PrevUrlButton />
      <div className="container" style={{ display: 'flex' }}>
        {products.map(({ excerpt, frontmatter: { categories, title } }) => {
          const slug = `/${type}/${toCebabCase(categories[0])}/${toCebabCase(
            title
          )}`
          return (
            <ProductPreview
              key={slug}
              excerpt={excerpt}
              title={title}
              slug={slug}
            ></ProductPreview>
          )
        })}
      </div>
    </div>
  )
}

export default ProductPage

ProductPage.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  type: PropTypes.string.isRequired,
}
