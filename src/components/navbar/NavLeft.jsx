import React from 'react'
import NavLogo from './NavLogo'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";
import NavCategories from './NavCategories';

const NavLeft = () => {
    return (
        <>
            <div className='nav__burger_search'>
                <i className='nav__burger_menu nav_hover'>
                    <RxHamburgerMenu />
                </i>
                <i className='nav__search nav_hover'>
                    <IoSearchOutline />
                </i>
            </div>
            
            <NavLogo />
            <NavCategories />
        </>
    )
}

export default NavLeft