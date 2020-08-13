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
  fragment ImageSharpLineImages on File {
    childImageSharp {
      fluid(maxWidth: 850, quality: 90) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }

  fragment ImageSharpDecorationImages on File {
    childImageSharp {
      fluid(maxWidth: 220, maxHeight: 220, quality: 90) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }

  {
    embellir: file(name: { eq: "embellir-line" }) {
      ...ImageSharpLineImages
    }
    saranari: file(name: { eq: "saranari-line" }) {
      ...ImageSharpLineImages
    }
    tsukika: file(name: { eq: "tsukika-line" }) {
      ...ImageSharpLineImages
    }
    authent: file(name: { eq: "authent-ii" }) {
      ...ImageSharpDecorationImages
    }
    embellirSmall: file(name: { eq: "embellir-make-up-base" }) {
      ...ImageSharpDecorationImages
    }
  }
`
const AboutUs = () => {
  const YEAR_OF_ESTABLISHMENT = 2004

  const data = useStaticQuery(query)
  const embellir = data.embellir.childImageSharp.fluid
  const saranari = data.saranari.childImageSharp.fluid
  const tsukika = data.tsukika.childImageSharp.fluid
  const authent = data.authent.childImageSharp.fluid
  const embellirSmall = data.embellirSmall.childImageSharp.fluid

  const getYearOfExist = () => {
    const currentYear = new Date().getFullYear()
    return currentYear - YEAR_OF_ESTABLISHMENT
  }
  return (
    <>
      <StyledSectionWrapper>
        <div className="image-wrapper embellir">
          <Img fluid={embellir} alt="zdjęcie linii Embellir" />
        </div>
        <div className="content-wrapper">
          <BottleDecor className="bottle-decor" />
          <div className="content">
            <h2>Co przyświeca akademii urody?</h2>
            <div className="paragraph-box">
              <p>
                Najistotniejszym oraz najcenniejszym aspektem w życiu człowieka
                jest pasja, gdyż tylko dzięki niej chcemy się rozwijać i na tej
                płaszczyźnie jesteśmy wciąż nienasyceni. Akademia Urody,
                prowadzona przez Panią Annę Jaskierską to firma z
                &quot;pasją&quot;.{' '}
              </p>
              <p>
                Pani Anna stale i konsekwentnie dąży do podnoszenia swoich
                kwalifikacji, czego namacalnym dowodem jest choćby zdobyty z
                wyróżnieniem tytuł &quot;Eksperta zdrowia i urody w zakresie
                zabiegów pielęgnacyjnych&quot;.{' '}
              </p>
              <p>
                Instytut, jakim jest Akademia Urody, istnieje od{' '}
                {getYearOfExist()} lat. W tym czasie zarówno nazwa, jak i zakres
                pielęgnacji oraz uwaga skierowana na potrzeby klienta
                ewoluowała.
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
            <h2>Nasze motto</h2>
            <div className="paragraph-box">
              <p>
                Nadrzędnym celem oraz założeniem naszego Instytutu jest
                skrupulatne oraz indywidualne podejście do klienta. Mając na
                uwadze to, jak ważne jest nasze zdrowie, nie ograniczamy się
                tylko do zabiegów zewnętrznych, lecz w dużej mierze zwracamy
                także uwagę na te wewnętrzne.
              </p>
              <p>
                Połączenie pielęgnacji oraz zdrowego odżywiania, poprzez
                odpowiednią suplementację, której to istotnym celem jest zdrowy
                układ pokarmowy jest naszym mottem.
              </p>
            </div>
          </div>
        </div>
      </StyledSectionWrapper>
      <StyledSectionWrapper>
        <div className="image-wrapper tsukika">
          <Img fluid={tsukika} alt="zdjęcie linii Tsukika" />
        </div>
        <div className="content-wrapper">
          <BottleDecor className="bottle-decor" />
          <div className="content">
            <h2>Co nas wyróżnia?</h2>
            <div className="paragraph-box">
              <p>
                Kwestia naszego zdrowia, piękna sylwetki i samopoczucia okazuje
                się być uzależniona od tego, co mieszka w naszych jelitach.
                Zdrowe jelita to takie, których właściciel zwraca uwagę na
                odpowiednią dietę oraz suplementację organizmu. W zamian, nasz
                organizm odwdzięcza się poprawą zdrowia, a co za tym idzie -
                zadbaną i piękną skórą oraz dobrym samopoczuciem.
              </p>
              <p>
                Akademia Urody scala te wszystkie elementy, w związku z czym
                nasz Instytut oraz niezwykle starannie i profesjonalnie
                stosowana oferta z całą pewnością bardzo wyraźnie wyróżnia nas
                na tle innych firm, których wiodącym priorytetem jest głęboka i
                często wręcz niebezpieczna ingerencja medyczna.
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
