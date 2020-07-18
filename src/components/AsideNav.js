import React, { useRef } from 'react'
import useCategories from '../hooks/useCategories'
import MobileNav from './MobileNav'
import HamburgerBtn from './HamburgerBtn'
import { useNavState } from '../hooks/localeState'
import Search from './Search'
const AsideNav = () => {
  const { toggleCategoryNav } = useNavState()
  const productsCategories = useCategories('produkty')
  const treatmentsCategories = useCategories('zabiegi')
  // const perfumesCategories = useCategories('perfumy')
  const menuLinks = useRef([
    {
      label: 'Produkty',
      to: '/produkty',
      subMenu: true,
      subMenuItems: productsCategories,
    },
    {
      label: 'Zabiegi',
      to: '/zabiegi',
      subMenu: true,
      subMenuItems: treatmentsCategories,
    },
    // {
    //   label: 'Perfumy',
    //   to: '/perfumy',
    //   subMenu: true,
    //   subMenuItems: perfumesCategories,
    // },
  ])
  return (
    <MobileNav menuLinks={menuLinks.current} className="aside-nav">
      <HamburgerBtn label="Zamknij kategorie" onClick={toggleCategoryNav} />
      <Search />
    </MobileNav>
  )
}

export default AsideNav
