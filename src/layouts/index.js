import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../assects/styles/GlobalStyle'
import Header from '../components/Header'

const theme = {
  colors: {
    primaryDark: '#1A171B',
    primaryLight: '#4F5053',
    secondaryDark: '#EEF6F7',
    secondaryLight: '#FFFFFF',
    accent: '#065F75',
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
      </ThemeProvider>
    </>
  )
}

export default GlobalLayout
