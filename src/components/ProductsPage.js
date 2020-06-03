import React from 'react'
import PropTypes from 'prop-types'
import AsideNav from './AsideNav'
import HeaderImageLayout from '../layouts/HeaderImageLayout'
import { toCebabCase } from '../utils/toCebabCase'
import ProductPreview from './ProductPreview'
import HamburgerBtn from './HamburgerBtn'
import StyledOptionBar from './styled/StyledOptionBar'
import StyledProductsPage from './styled/StyledProductsPage'
import { useNavState } from '../hooks/localeState'
import PrevUrlButton from './PrevUrlButton'

const ProductPage = ({ products, type, bgImageFluid, subTitle }) => {
  const { categoryNavOpen, toggleCategoryNav } = useNavState()

  return (
    <HeaderImageLayout fluid={bgImageFluid} title={type} subTitle={subTitle}>
      <StyledProductsPage as="section">
        <StyledOptionBar>
          <HamburgerBtn label="aside-nav" onClick={toggleCategoryNav} />
          <PrevUrlButton />
        </StyledOptionBar>
        <div className="wrapper">
          <AsideNav type={type} isOpen={categoryNavOpen} />
          <div className="products-grid">
            {products.map(
              ({
                excerpt,
                frontmatter: {
                  categories,
                  title,
                  featuredImage: {
                    childImageSharp: { fluid },
                  },
                },
              }) => {
                const slug = `/${type}/${toCebabCase(
                  categories[0]
                )}/${toCebabCase(title)}`
                return (
                  <ProductPreview
                    key={slug}
                    excerpt={excerpt}
                    title={title}
                    slug={slug}
                    fluid={fluid}
                  ></ProductPreview>
                )
              }
            )}
          </div>
        </div>
      </StyledProductsPage>
    </HeaderImageLayout>
  )
}

export default ProductPage

ProductPage.defaultPropTypes = {
  subTitle: null,
}
ProductPage.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  bgImageFluid: PropTypes.shape({
    aspectRatio: PropTypes.number,
    sizes: PropTypes.string,
    src: PropTypes.string,
    srcSet: PropTypes.string,
    srcSetWebp: PropTypes.string,
    srcWebp: PropTypes.string,
    tracedSVG: PropTypes.string,
  }).isRequired,
  type: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
}
