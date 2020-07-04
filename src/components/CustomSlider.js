import React from 'react'
import Carousel from 'react-elastic-carousel'
import styled from 'styled-components'
import slugify from 'slugify'
import { graphql, useStaticQuery } from 'gatsby'
import CarouselItem from './CarouselItem'
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
    z-index: 1;
    transition: none;
    &.rec-arrow-right {
      left: unset;
      right: 0.4rem;
      transform: translateX(50%);
    }
    &:hover,
    &:hover:enabled,
    &:focus:enabled {
      color: inherit;
      opacity: 0.7;
      background-color: transparent;
      box-shadow: none;
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
        fields {
          slug
        }
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
          fields: { slug },
          frontmatter: { title, type, categories, featuredImage },
        }) => {
          const newSlug = `/${type}/${slugify(categories[0], {
            lower: true,
            strict: true,
          })}/${slug}`
          return (
            <CarouselItem
              fluid={featuredImage.childImageSharp.fluid}
              key={slug}
              title={title}
              description={excerpt}
              url={newSlug}
            />
          )
        }
      )}
    </StyledCarousel>
  )
}
export default CustomSlider
