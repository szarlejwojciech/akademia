import React from 'react'
import Carousel, { consts } from 'react-elastic-carousel'
import CarouselItem from './CarouselItem'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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

const CustomSlider = () => {
  const myArrow = ({ type, onClick }) => {
    const pointer = type === consts.PREV ? 'chevron-left' : 'chevron-right'
    return (
      <Arrow onClick={onClick}>
        <FontAwesomeIcon icon={pointer} />
      </Arrow>
    )
  }

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
      renderArrow={myArrow}
      pagination={false}
    >
      {testItems.map(item => (
        <CarouselItem key={item.title} {...item} />
      ))}
    </StyledCarousel>
  )
}

export default CustomSlider
