import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import HeroSlider, { Slide } from 'hero-slider'
import styled, { css } from 'styled-components'
import ArrowRightIcon from '../assets/svg/arrow-right-icon.svg'
import MenardLogo from '../assets/svg/menard-logo.svg'
import XerjoffLogo from '../assets/svg/xerjoff-logo.svg'
import NebuLogo from '../assets/svg/nebu-milano-logo.svg'
import ButtonLink from './ButtonLink'

const StyledSlide = styled(Slide)`
  .wrapper {
    display: flex !important;
    align-items: center;
    height: inherit;
  }
  .cta p {
    color: ${({ theme }) => theme.colors.primaryDark};
  }
`

const StyledCta = styled.div`
  background-color: ${({ nebu, xerjoff }) =>
    nebu ? 'rgba(0,0,0,.7)' : xerjoff ? 'rgba(67,39,100,.7)' : 'transparent'};

  padding: 4rem 2rem;
  &.cta p {
    color: ${({ theme }) => theme.colors.secondaryLight};
  }

  @media (min-width: 1024) {
    padding: 5rem 3rem;
  }
  @media (min-width: 1440px) {
    padding: 6rem 4rem;
  }

  ${({ xerjoff }) =>
    xerjoff &&
    css`
      &&.cta p {
        font-family: 'Lora';
        color: #d1b381;
        font-size: 3em;
        margin: 0;
        text-align: center;
      }
    `}
`

const query = graphql`
  query {
    hero: file(name: { eq: "hero" }) {
      childImageSharp {
        fluid(maxWidth: 1807, maxHeight: 2000, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    nebu: file(name: { eq: "nebu-milano-slide" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    xerjoff: file(name: { eq: "xerjoff-slide" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

const HeroSliderWrapper = () => {
  const data = useStaticQuery(query)
  const hero = data.hero.childImageSharp.fluid
  const nebu = data.nebu.childImageSharp.fluid
  const xerjoff = data.xerjoff.childImageSharp.fluid

  return (
    <HeroSlider
      slidingAnimation="left_to_right"
      orientation="horizontal"
      initialSlide={1}
      style={{
        color: '#FFF',
      }}
      settings={{
        slidingDuration: 250,
        slidingDelay: 100,
        shouldAutoplay: true,
        shouldDisplayButtons: true,
        autoplayDuration: 5000,
        height: '100%',
      }}
    >
      <StyledSlide>
        <div className="wrapper">
          <div className="cta">
            <MenardLogo />
            <p>
              Linia produktów stworzonych dla kobiet poszukujących prawdziwego
              piękna na całym świecie.
            </p>
            <ButtonLink to="/produkty" title="Przeglądaj Menard">
              <span>Przeglądaj</span>
              <ArrowRightIcon />
            </ButtonLink>
          </div>
          <div className="image-wrapper">
            <Img className="hero-gatsby-img" fluid={hero} />
          </div>
        </div>
      </StyledSlide>
      <StyledSlide
        background={{
          backgroundImage: nebu.src,
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="wrapper">
          <StyledCta nebu className="cta">
            <NebuLogo />
            <p>
              Nebu milano to nowy standard jakości i luksusu na rynku
              kosmetycznym. Nowa wizja i nowa koncepcja makijażu dla kobiecej
              sceny.
            </p>
            <ButtonLink
              to="/produkty/makijaz"
              color="light"
              title="Przeglądaj Nebu Milano"
            >
              <span>Przeglądaj</span>
              <ArrowRightIcon />
            </ButtonLink>
          </StyledCta>
        </div>
      </StyledSlide>
      <StyledSlide
        background={{
          backgroundImage: xerjoff.src,
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="wrapper">
          <StyledCta xerjoff className="cta">
            <XerjoffLogo />
            <p>V</p>
            <ButtonLink
              to="/perfumy/xerjoff-v"
              color="light"
              title="Przeglądaj Xerjoff"
            >
              <span>Przeglądaj</span>
              <ArrowRightIcon />
            </ButtonLink>
          </StyledCta>
        </div>
      </StyledSlide>
    </HeroSlider>
  )
}

export default HeroSliderWrapper
