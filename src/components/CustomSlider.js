import React from 'react'
import Carousel, { consts } from 'react-elastic-carousel'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CarouselItem from './CarouselItem'
import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'

const testItems = [
  {
    url: '/oferta',
    image: '/menard-authent-mask-ii.jpg',
    title: 'MENARD Authent Mask II',
    description:
      'Authent Mask II to nowa wersja doskonałej maski w płatach na twarz oraz szyję i dekolt.',
  },
  {
    url: '/oferta',
    image: '/menard-embellir-day-cream.jpg',
    title: 'MENARD Embellir Day Cream A 34ml',
    description:
      'Linia EMBELLIR została stworzona, aby usuwać przyczyny starzenia się i dysfunkcji komórek skóry.',
  },
  {
    url: '/oferta',
    image: '/menard-authent-ii.jpg',
    title: 'MENARD Authent II',
    description:
      'Luksusowy krem Authent II pozwala skórze odrodzić się na nowo. Zaawansowany preparat, efekt wieloletnich badań laboratoriów... ',
  },
  {
    url: '/oferta',
    image: '/menard-authent-mask-ii.jpg',
    title: 'MENARD Authent Maskd II',
    description:
      'Authent Mask II to nowa wersja doskonałej maski w płatach na twarz oraz szyję i dekolt.',
  },
  {
    url: '/oferta',
    image: '/menard-embellir-day-cream.jpg',
    title: 'MENARD Embellir Day sCream A 34ml',
    description:
      'Linia EMBELLIR została stworzona, aby usuwać przyczyny starzenia się i dysfunkcji komórek skóry.',
  },
  {
    url: '/oferta',
    image: '/menard-authent-ii.jpg',
    title: 'MENARD Authentf II',
    description:
      'Luksusowy krem Authent II pozwala skórze odrodzić się na nowo. Zaawansowany preparat, efekt wieloletnich badań laboratoriów... ',
  },
  {
    url: '/oferta',
    image: '/menard-authent-mask-ii.jpg',
    title: 'MENARD Authent Mrask II',
    description:
      'Authent Mask II to nowa wersja doskonałej maski w płatach na twarz oraz szyję i dekolt.',
  },
  {
    url: '/oferta',
    image: '/menard-embellir-day-cream.jpg',
    title: 'MENARD Embellir Dayy Cream A 34ml',
    description:
      'Linia EMBELLIR została stworzona, aby usuwać przyczyny starzenia się i dysfunkcji komórek skóry.',
  },
  {
    url: '/oferta',
    image: '/menard-authent-ii.jpg',
    title: 'MENARD Authent iII',
    description:
      'Luksusowy krem Authent II pozwala skórze odrodzić się na nowo. Zaawansowany preparat, efekt wieloletnich badań laboratoriów... ',
  },
]

const StyledCarousel = styled(Carousel)`
  margin: 0 auto;
  max-width: 120rem;
  & > div > div {
    margin: 0;
  }

  @media (min-width: 768px) {
    margin-top: 3rem;
  }
`

const Arrow = styled.button`
  position: relative;
  top: calc(50% - 2em);
  font-size: 2rem;
  height: 2em;
  border: none;
  color: ${({ theme }) => theme.colors.accent};
  background-color: transparent;
`

const query = graphql`
  {
    allFile(filter: { extension: { regex: "/jpg|png/" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxHeight: 300, maxWidth: 300, quality: 90) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
          base
        }
      }
    }
  }
`
const getImageFluid = (data, name) => {
  const [image] = data.edges.filter(({ node }) => node.base.includes(name))
  return image.node.childImageSharp.fluid
}

const MyArrow = ({ type, onClick }) => {
  const pointer = type === consts.PREV ? 'chevron-left' : 'chevron-right'
  const label = type === consts.PREV ? 'slide w lewo' : 'slide w prawo'
  return (
    <Arrow onClick={onClick} type="button" aria-label={label}>
      <FontAwesomeIcon icon={pointer} />
    </Arrow>
  )
}

const CustomSlider = () => {
  const { allFile } = useStaticQuery(query)

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
      renderArrow={MyArrow}
      pagination={false}
    >
      {testItems.map(item => {
        const [name] = item.image.match(/[a-z-]*[^/]/)
        const fluid = getImageFluid(allFile, name)
        return <CarouselItem fluid={fluid} key={item.title} {...item} />
      })}
    </StyledCarousel>
  )
}

export default CustomSlider

MyArrow.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}
