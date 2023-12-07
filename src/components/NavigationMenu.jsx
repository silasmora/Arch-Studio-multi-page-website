import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavigationMenu = ({isFooter}) => {

  const menuLinks = [
    {text: 'Portfolio', route: '/portfolio'},
    {text: 'About Us', route: '/about'},
    {text: 'Contact', route: '/contact'}
  ]
  return (
    <div className={`${isFooter ? 'flex flex-col items-center gap-8 md:flex-row' : 'flex flex-row gap-[51px]'}`}>
      {menuLinks.map((link, idx) => (
        <ul key={idx}>
          <NavLink className={`text-mediumGrey text-[18px] font-bold leading-6 ${idx === 1 && 'pl-[10px]'} ${isFooter && `${idx === 1 && 'pr-[10px]'}`} hover:text-veryDarkBlue transition ease-in-out duration-300`}
            to={link.route}
          >{link.text}</NavLink>
        </ul>
      ))}
    </div>
  )
}
