import React from 'react'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import StyledSectionWrapper from './styled/StyledSectionWrapper'
import ButtonLink from './ButtonLink'
import GalleryDecor from '../assets/svg/gallery-decor.svg'
import BottleDecor from '../assets/svg/bottle-decor.svg'
import Bottle2Decor from '../assets/svg/bottle2-decor.svg'
import Bottle3Decor from '../assets/svg/bottle3-decor.svg'
import GalleryIcon from '../assets/svg/gallery-icon.svg'
import HeadingDecor from '../assets/svg/heading-decoration.svg'

const query = graphql`
  {
    embellir: file(name: { eq: "embellir-line" }) {
      childImageSharp {
        fluid(maxWidth: 850, maxHeight: 537, quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    saranari: file(name: { eq: "saranari-line" }) {
      childImageSharp {
        fluid(maxWidth: 850, maxHeight: 483, quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    authent: file(name: { eq: "authent-ii" }) {
      childImageSharp {
        fluid(maxWidth: 220, maxHeight: 220, quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    embellirSmall: file(name: { eq: "embellir-make-up-base" }) {
      childImageSharp {
        fluid(maxWidth: 220, maxHeight: 220, quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
const AboutUs = () => {
  const data = useStaticQuery(query)
  const embellir = data.embellir.childImageSharp.fluid
  const saranari = data.saranari.childImageSharp.fluid
  const authent = data.authent.childImageSharp.fluid
  const embellirSmall = data.embellirSmall.childImageSharp.fluid
  return (
    <>
      <StyledSectionWrapper>
        <div className="image-wrapper embellir">
          <Img fluid={embellir} alt="zdjęcie linii Embellir" />
        </div>
        <div className="content-wrapper">
          <BottleDecor className="bottle-decor" />
          <div className="content">
            <h2>Doświadczenie</h2>
            <div className="paragraph-box">
              <p>
                Dwunastoletnie doświadczenie naszego salonu kosmetycznego,
                niezwykłe metody nakładania produktów, metody których
                skuteczność potwierdziła się w setkach przypadków, wyjątkowa
                znajomość tego, co niepokoi i zajmuje kobiety i mężczyzn jeśli
                chodzi o ich urodę, śledzenie światowych nowości w dziedzinie
                kosmetologii – wszystko to leży u podstaw naszego sukcesu.
              </p>
            </div>
          </div>
        </div>
      </StyledSectionWrapper>
      <StyledSectionWrapper secondary>
        <div className="image-wrapper saranari">
          <Img fluid={saranari} alt="zdjęcie linii Saranari" />
        </div>
        <div className="content-wrapper">
          <Bottle2Decor className="bottle2-decor" />
          <div className="content">
            <h2>Nasza filozofia</h2>
            <div className="paragraph-box">
              <p>
                Filozofią naszego salonu jest poważne traktowanie problemów
                związanych z urodą. Zapewnia to zadowolenie klientów, wymierne
                efekty i zaufanie do naszego salonu. Zawsze podejmujemy wszelkie
                starania by oferować najlepsze produkty oraz dobre i rzetelne
                porady.
              </p>
              <p>
                Komfortowy gabinet oraz profesjonalny, wykwalifikowany personel
                tworzy niezapomnianą atmosferę. Tutaj krok po kroku,
                przeprowadzimy Cię przez świat piękna. Przygoda ta pozwoli Ci
                odkryć kreatywne możliwości naszych ekspertów piękna. Pozwól, by
                nasi specjaliści zatroszczyli się o Ciebie, Twoje włosy, dłonie
                i ciało. Oferujemy Ci przedłużanie włosów, rzęs, stylizację i
                pielęgnację paznokci. Stwórz z nami swój nowy wizerunek.
              </p>
            </div>
          </div>
        </div>
      </StyledSectionWrapper>
      <StyledSectionWrapper dark>
        <div className="wrapper">
          <Bottle3Decor className="bottle3-decor" />
          <GalleryDecor className="gallery-decor" />
          <p>
            O wyjątkowości tego miejsca możesz przekonać się już teraz
            odwiedzając nasza galerię. Galeria zdjęć, choć profesjonalna, nie
            oddaje jednak w pełni niepowtarzalnego nastroju salonu.
          </p>
          <ButtonLink className="gallery-btn" color="light" to="/galeria">
            <span>Galeria</span>
            <GalleryIcon />
          </ButtonLink>
        </div>
      </StyledSectionWrapper>
      <StyledSectionWrapper>
        <div className="wrapper">
          <Img role="none" fluid={authent} className="authent" />
          <Img role="none" fluid={embellirSmall} className="embellir-small" />
          <h2>
            <span>To nie wszystko...</span>
            <HeadingDecor />
          </h2>
          <p>
            Kosmetyka to dziedzina, w której Akademia Urody specjalizuje się
            szczególnie. Wykorzystując najnowocześniejsze urządzenia i
            profesjonalne kosmetyki takich marek jak: VALMONT, PAYOT I REVIDERM,
            pielęgnujemy Twoją urodę. Możesz wybierać spośród licznych
            możliwości np: mikrodermabrazja, czy też odchudzanie
            najnowocześniejszym urządzeniem.
          </p>
          <h5>Odkryj swoje piękno</h5>
          <p>
            Jeśli zdecydujesz się na makijaż permanentny
            <br />
            na długie lata wyeksponujemy walory Twojej urody.
          </p>
        </div>
      </StyledSectionWrapper>
    </>
  )
}

export default AboutUs
