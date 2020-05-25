import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import ButtonLink from './ButtonLink'
import StyledHero from './styled/StyledHero'
import StyledSection from './styled/StyledSection'
import CustomSlider from './CustomSlider'
import HeadingDecoration from '../assets/svg/heading-decoration.svg'
import MenardLogo from '../assets/svg/menard-logo.svg'
import ArrowRightIcon from '../assets/svg/arrow-right-icon.svg'
import PhoneIcon from '../assets/svg/phone-icon.svg'

const query = graphql`
  query {
    hero: file(name: { eq: "hero" }) {
      childImageSharp {
        fluid(maxWidth: 1807, maxHeight: 2000, quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    salon1: file(name: { eq: "salon-1" }) {
      childImageSharp {
        fluid(maxWidth: 330, maxHeight: 200, quality: 80) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    salon2: file(name: { eq: "salon-2" }) {
      childImageSharp {
        fluid(maxWidth: 330, maxHeight: 200, quality: 80) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    sectionBg: file(name: { eq: "section-bg" }) {
      childImageSharp {
        fluid(maxWidth: 2000, maxHeight: 2000, quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const Home = () => {
  const data = useStaticQuery(query)
  const hero = data.hero.childImageSharp.fluid
  const salon1 = data.salon1.childImageSharp.fluid
  const salon2 = data.salon2.childImageSharp.fluid
  const sectionBg = data.sectionBg.childImageSharp.fluid

  return (
    <>
      <StyledHero>
        <div className="cta">
          <MenardLogo />
          <p>Dla kobiet poszukujących prawdziwego piękna na całym świecie.</p>
          <ButtonLink to="/oferta" title="Przeglądaj Menard">
            <span>Przeglądaj</span>
            <ArrowRightIcon />
          </ButtonLink>
        </div>
        <div className="image-wrapper">
          <Img
            className="hero-gatsby-img"
            fluid={hero}
            backgroundColor={`#FFFFFF`}
          />
        </div>
      </StyledHero>
      <main>
        <StyledSection>
          <div className="wrapper">
            <div className="content">
              <h1>
                <div>Piękna, zawsze, wszędzie!</div>
                <HeadingDecoration />
              </h1>
              <p>
                Akademia Urody, to nie tylko ekskluzywny salon, to przede
                wszystkim miejsce, którego urok urzeknie Cię swym ciepłem.
              </p>
              <p>
                Filozofią naszego salonu jest poważne traktowanie problemów
                związanych z urodą. Zapewnia to zadowolenie klientów, wymierne
                efekty i zaufanie do naszego salonu. Zawsze podejmujemy wszelkie
                starania by oferować najlepsze produkty oraz dobre i rzetelne
                porady.
              </p>
              <ButtonLink to="/onas" color="accent">
                <span>O nas</span>
                <ArrowRightIcon />
              </ButtonLink>
            </div>
            <div className="images">
              <div className="images-wrapper">
                <Img
                  className="top-photo"
                  fluid={salon1}
                  alt="zdjęcia salonu w holu"
                />
                <Img
                  className="bottom-photo"
                  fluid={salon2}
                  alt="zdjęcia salonu w holu 2"
                />
              </div>
            </div>
          </div>
        </StyledSection>
        <StyledSection dark fixed>
          <BackgroundImage
            Tag="div"
            className="section-gatsby-img-bg"
            fluid={sectionBg}
          >
            <div className="wrapper">
              <div className="box">
                <h2>
                  <div>Odwiedź nasz salon</div>
                  <HeadingDecoration fill="#FFF" />
                </h2>
                <p>
                  O wyjątkowości tego miejsca możesz przekonać się już teraz
                  odwiedzając nasza galerię. Galeria zdjęć, choć profesjonalna,
                  nie oddaje jednak w pełni niepowtarzalnego nastroju salonu.
                </p>
                <ButtonLink to="/kontakt" color="light">
                  <span>Kontakt</span>
                  <PhoneIcon />
                </ButtonLink>
              </div>
            </div>
          </BackgroundImage>
        </StyledSection>
        <StyledSection>
          <h1>
            <div>Nasze nowości</div>
            <HeadingDecoration />
          </h1>
          <CustomSlider />
        </StyledSection>
      </main>
    </>
  )
}

export default Home
