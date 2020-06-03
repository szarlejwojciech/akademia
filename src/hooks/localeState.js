import React, { createContext, useState, useContext, useEffect } from 'react'
import { useLocation } from '@reach/router'
import PropTypes from 'prop-types'

const localeStateContext = createContext()
const LocaleStateProvider = localeStateContext.Provider

function MobileNavStateProvider({ children }) {
  const [navOpen, setNavOpen] = useState(false)
  const [categoryNavOpen, setCategoryNavOpen] = useState(false)

  const location = useLocation()

  const toggleNav = () => {
    setNavOpen(!navOpen)
    const owerflow = document.body.style.overflowY
    document.body.style.overflowY = owerflow === 'hidden' ? 'auto' : 'hidden'
  }
  const toggleCategoryNav = () => {
    setCategoryNavOpen(!categoryNavOpen)
    const owerflow = document.body.style.overflowY
    document.body.style.overflowY = owerflow === 'hidden' ? 'auto' : 'hidden'
  }

  useEffect(() => {
    if (navOpen) toggleNav()
    if (categoryNavOpen) toggleCategoryNav()
  }, [location])

  return (
    <LocaleStateProvider
      value={{ navOpen, categoryNavOpen, toggleNav, toggleCategoryNav }}
    >
      {children}
    </LocaleStateProvider>
  )
}

const useNavState = () => useContext(localeStateContext)

export { MobileNavStateProvider, useNavState }

MobileNavStateProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
}
