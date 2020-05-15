import React from 'react'
import ButtonLink from './ButtonLink'
import StyledHero from './styled/StyledHero'
import StyledSection from './styled/StyledSection'

const Home = () => {
  return (
    <>
      <StyledHero>
        <div className="cta">
          <img src="/menard-logo.svg" alt="twarz kobiety" />
          <p>Dla kobiet poszukujących prawdziwego piękna na całym świecie.</p>
          <ButtonLink url="/ofarta/menard" icon={'long-arrow-alt-right'}>
            <span>Przeglądaj</span>
          </ButtonLink>
        </div>
      </StyledHero>
      <StyledSection withBackground>
        <h1>Piękna, zawsze, wszędzie!</h1>
        <p>
          Akademia Urody, to nie tylko ekskluzywny salon, to przede wszystkim
          miejsce, którego urok urzeknie Cię swym ciepłem.
        </p>
        <p>
          Filozofią naszego salonu jest poważne traktowanie problemów związanych
          z urodą. Zapewnia to zadowolenie klientów, wymierne efekty i zaufanie
          do naszego salonu. Zawsze podejmujemy wszelkie starania by oferować
          najlepsze produkty oraz dobre i rzetelne porady.
        </p>
      </StyledSection>
    </>
  )
}

export default Home
