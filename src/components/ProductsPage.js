import React from 'react'
import PropTypes from 'prop-types'
import AsideNav from './AsideNav'
import { useNavState } from '../hooks/localeState'
import HeaderImageLayout from '../layouts/HeaderImageLayout'
import slugify from 'slugify'
import ProductPreview from './ProductPreview'
import PrevUrlButton from './PrevUrlButton'
import StyledProductsPage from './styled/StyledProductsPage'
import StyledCategoryBtn from './styled/StyledCategoryBtn'
import StyledOptionBar from './styled/StyledOptionBar'
import ListIcon from '../assets/svg/list-icon.svg'

const ProductPage = ({ products, type, category, bgImageFluid, subTitle }) => {
  const { toggleCategoryNav } = useNavState()
  return (
    <HeaderImageLayout fluid={bgImageFluid} title={type} subTitle={subTitle}>
      <StyledProductsPage as="section">
        <StyledOptionBar>
          <StyledCategoryBtn aria-label="Kategorie" onClick={toggleCategoryNav}>
            <ListIcon />
            <span>Kategorie</span>
          </StyledCategoryBtn>
          <PrevUrlButton />
        </StyledOptionBar>
        <div className="wrapper">
          <AsideNav />
          <div className="products-grid">
            {(!products || !products.length) && (
              <p>Dokładamy wszelkich starań aby uzupełnić ofertę.</p>
            )}

            {products &&
              !!products.length &&
              products.map(data => {
                const { slug } = data.fields
                const { categories, title } = data.frontmatter
                const { fluid } = data.frontmatter.featuredImage.childImageSharp
                const newSlug = `/${type}/${slugify(
                  category ? category : categories[0],
                  {
                    lower: true,
                    strict: true,
                  }
                )}/${slug}`
                return (
                  <ProductPreview
                    key={slug}
                    excerpt={data.excerpt}
                    title={title}
                    slug={newSlug}
                    fluid={fluid}
                  ></ProductPreview>
                )
              })}
          </div>
        </div>
      </StyledProductsPage>
    </HeaderImageLayout>
  )
}

export default ProductPage

ProductPage.defaultPropTypes = {
  subTitle: null,
  category: null,
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
  category: PropTypes.string,
  subTitle: PropTypes.string,
}
