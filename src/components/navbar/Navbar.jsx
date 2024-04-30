import React from 'react'
import NavLeft from './NavLeft'
import '../../assets/css/navbar.css'
import NavRight from './NavRight'
import Searchbar from './Searchbar'


const Navbar = () => {
    return (
        <nav>
            <div className="container nav_con">
                <NavLeft />
                <Searchbar />
                <NavRight />
            </div>

        </nav>
    )
}

export default Navbar