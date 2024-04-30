import React from 'react'
import logo from '../../assets/img/png/logo.png'
import { Link } from 'react-router-dom'

const NavLogo = () => {
  return (
    <Link to={'/'}>
      <img className='logo' src={logo} alt="" />
    </Link>

  )
}

export default NavLogo