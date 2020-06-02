import React from 'react'
import PropTypes from 'prop-types'
import BgImg from 'gatsby-background-image'
import StyledHeaderImage from '../components/styled/StyledHeaderImage'
import HeadingDecoration from '../assets/svg/heading-decoration.svg'

const HeaderImageLayout = ({ children, fluid, title, subTitle }) => {
  return (
    <main>
      <StyledHeaderImage>
        <BgImg fluid={fluid}>
          <header>
            <h1>{title}</h1>
            <HeadingDecoration />
            {subTitle && <p>{subTitle}</p>}
          </header>
        </BgImg>
      </StyledHeaderImage>
      {children}
    </main>
  )
}

export default HeaderImageLayout

HeaderImageLayout.defaultPropTypes = {
  subTitle: null,
}
HeaderImageLayout.propTypes = {
  children: PropTypes.element.isRequired,
  fluid: PropTypes.oneOfType([PropTypes.object]).isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
}
