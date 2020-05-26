import React, { useState, useCallback } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import ReactGallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from 'react-images'
import styled from 'styled-components'

const StyledWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.secondaryDark};
  padding: 0.3rem;
  .gallery-image {
    opacity: 1;
    will-change: opacity;
    transition: 0.15s opacity ease-in-out;
    &:hover {
      opacity: 0.7;
    }
  }

  @media (min-width: 768px) {
    padding: 3rem 3rem;
  }
  @media (min-width: 1024px) {
    padding: 4.5rem 5rem;
  }
  @media (min-width: 1440px) {
    padding: 6rem 9vw;
  }
`
const query = graphql`
  {
    allFile(filter: { sourceInstanceName: { eq: "gallery" } }) {
      edges {
        node {
          childImageSharp {
            fluid {
              sizes
              src
              srcSet
              width: presentationWidth
              height: presentationHeight
            }
          }
        }
      }
    }
  }
`

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const openLightbox = useCallback((event, { index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }

  const data = useStaticQuery(query)

  const images = data.allFile.edges.map(({ node }, index) => ({
    ...node.childImageSharp.fluid,
    alt: `Zdjęcie salonu ${index + 1}`,
    loading: 'lazy',
    className: 'gallery-image',
  }))

  return (
    <>
      <StyledWrapper>
        <ReactGallery
          photos={images}
          onClick={openLightbox}
          margin={6}
          targetRowHeight={350}
        />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={images.map(x => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </StyledWrapper>
    </>
  )
}

export default Gallery
