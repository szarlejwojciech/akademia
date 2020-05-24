import React from 'react'
import PropTypes from 'prop-types'
import StyledSectionWrapper from '../components/styled/StyledSectionWrapper'
import HeadingDecoration from '../assets/svg/heading-decoration.svg'

const HeaderImageLayout = ({ children, fluid, title, subTitle }) => {
  return (
    <main>
      <StyledSectionWrapper style={{ height: '200px', background: 'red' }}>
        <header>
          <h1>O nas</h1>
          <HeadingDecoration />
          <span>
            Odkryj swoje piękno. Kosmetyka to dziedzina, w której Akademia Urody
            specjalizuje się szczególnie.
          </span>
        </header>
      </StyledSectionWrapper>
      {children}
    </main>
  )
}

export default HeaderImageLayout

// HeaderImageLayout.defaultPropTypes = {
//   subTitle: null,
// }
HeaderImageLayout.propTypes = {
  children: PropTypes.element.isRequired,
  fluid: PropTypes.oneOfType([PropTypes.object]).isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
}
