import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../assets/styles/GlobalStyle'
import Header from '../components/Header'
import Footer from '../components/Footer'

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
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        {children}
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default GlobalLayout
