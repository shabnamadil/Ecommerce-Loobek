import React from 'react'
import '../../assets/css/header.css'
import HeaderIcons from './HeaderIcons'
import HeaderRight from './HeaderRight'

const Header = () => {
    return (
        <header >
            <div className='container'>
                <HeaderIcons />
                <HeaderRight />
            </div>
        </header>
    )
}

export default Header