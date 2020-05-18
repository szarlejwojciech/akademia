import React, { createContext, useState, useContext } from 'react'
import PropTypes from 'prop-types'

const localeStateContext = createContext()
const LocaleStateProvider = localeStateContext.Provider

function MobileNavStateProvider({ children }) {
  const [navOpen, setNavOpen] = useState(false)
  const toggleNav = () => setNavOpen(!navOpen)

  return (
    <LocaleStateProvider value={{ navOpen, toggleNav }}>
      {children}
    </LocaleStateProvider>
  )
}

const useNavState = () => useContext(localeStateContext)

export { MobileNavStateProvider, useNavState }

MobileNavStateProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
}
