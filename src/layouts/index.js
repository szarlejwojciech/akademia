import React, { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../assets/styles/GlobalStyle'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { MobileNavStateProvider, useNavState } from '../hooks/localeState'
import PropTypes from 'prop-types'
import ScrollTopButton from '../components/ScrollTopButton'

const theme = {
  colors: {
    primaryDark: '#1A171B',
    primaryDarkTransparent: 'hsla(285, 8%, 10%, .7)',
    primaryLight: '#4F5053',
    secondaryDark: '#EEF6F7',
    secondaryLight: '#FFFFFF',
    accent: '#065F75',
    accentTransparent: 'hsla(192, 90%, 24%, .8)',
    manuAccent: '#CEE0E3',
  },
  font: {
    fw400: 400,
    fw500: 500,
    fw600: 600,
  },
}
const GlobalLayout = ({ children }) => {
  const { navOpen, toggleNav } = useNavState
  useEffect(() => navOpen && toggleNav())
  return (
    <>
      <ThemeProvider theme={theme}>
        <MobileNavStateProvider>
          <GlobalStyle />
          <Header />
          <ScrollTopButton />
          {children}
          <Footer />
        </MobileNavStateProvider>
      </ThemeProvider>
    </>
  )
}

export default GlobalLayout

GlobalLayout.defaultPropTypes = {
  children: null,
}

GlobalLayout.propTypes = {
  children: PropTypes.element,
}
