import React from 'react'
import Carousel from 'react-elastic-carousel'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import CarouselItem from './CarouselItem'
import { toCebabCase } from '../utils/toCebabCase'
const StyledCarousel = styled(Carousel)`
  margin: 0 auto;
  max-width: 120rem;
  & > div > div {
    margin: 0;
  }
  .rec-carousel {
    position: relative;
  }
  .rec-arrow {
    position: absolute;
    left: 0.4rem;
    background-color: transparent;
    border: none;
    box-shadow: none;
    color: ${({ theme }) => theme.colors.active};
    width: 4.8rem;
    min-width: 4.8rem;
    height: 4.8rem;
    line-height: 4.8rem;
    transform: translateX(-40%);
    &.rec-arrow-right {
      left: unset;
      right: 0.4rem;
      transform: translateX(50%);
    }
    &:hover {
      color: inherit;
      opacity: 0.7;
    }
  }
  @media (min-width: 768px) {
    margin-top: 3rem;
  }
`

const query = graphql`
  {
    allMdx(limit: 10) {
      nodes {
        frontmatter {
          title
          type
          categories
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 500, quality: 80) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
        excerpt(pruneLength: 70)
      }
    }
  }
`

const CustomSlider = () => {
  const {
    allMdx: { nodes },
  } = useStaticQuery(query)

  return (
    <StyledCarousel
      itemsToShow={1}
      itemPadding={[0, 20, 0, 20]}
      breakPoints={[
        { width: 1, itemsToShow: 1 },
        { width: 620, itemsToShow: 2, itemsToScroll: 2 },
        { width: 1024, itemsToShow: 3 },
        { width: 1440, itemsToShow: 4 },
      ]}
      pagination={false}
    >
      {nodes.map(
        ({
          excerpt,
          frontmatter: { title, type, categories, featuredImage },
        }) => {
          const url = `/${
            type === 'products' || type === 'produkty' ? 'produkty' : 'zabiegi'
          }/${toCebabCase(categories[0])}/${toCebabCase(title)}`
          return (
            <CarouselItem
              fluid={featuredImage.childImageSharp.fluid}
              key={title}
              title={title}
              description={excerpt}
              url={url}
            />
          )
        }
      )}
    </StyledCarousel>
  )
}
export default CustomSlider
