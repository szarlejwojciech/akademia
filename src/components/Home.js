import React from 'react'
import ButtonLink from './ButtonLink'
import StyledHero from './styled/StyledHero'
import StyledSection from './styled/StyledSection'
import HeadingDecoration from '../assets/svg/heading-decoration.svg'
import CustomSlider from './CustomSlider'

const Home = () => {
  return (
    <>
      <StyledHero>
        <div className="cta">
          <img src="/menard-logo.svg" alt="twarz kobiety" />
          <p>Dla kobiet poszukujących prawdziwego piękna na całym świecie.</p>
          <ButtonLink to="/ofarta" icon="long-arrow-alt-right">
            Przeglądaj
          </ButtonLink>
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
              <ButtonLink to="/onas" icon="long-arrow-alt-right" color="accent">
                O nas
              </ButtonLink>
            </div>
            <div className="images">
              <div className="images-wrapper">
                <img src="/salon-1.jpg" alt="zdjęcia salonu w holu" />
                <img src="/salon-2.jpg" alt="zdjęcia salonu w holu 2" />
              </div>
            </div>
          </div>
        </StyledSection>
        <StyledSection background="/section-bg.jpg" dark={true}>
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
              <ButtonLink to="/kontakt" icon="phone-alt" color="light">
                Kontakt
              </ButtonLink>
            </div>
          </div>
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
