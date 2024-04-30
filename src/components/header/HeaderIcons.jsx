import React from 'react'
import { CiInstagram } from "react-icons/ci";
import { PiTiktokLogoThin } from "react-icons/pi";
import { FiYoutube } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
import { SlSocialFacebook } from "react-icons/sl";

const HeaderIcons = () => {
    return (
        <ul className='header__icons'>
            <li className='header__icon'>
                <CiInstagram />
            </li>
            <li className='header__icon'>
                <PiTiktokLogoThin />
            </li>
            <li className='header__icon'>
                <FiYoutube />
            </li>
            <li className='header__icon'>
                <CiTwitter />
            </li>
            <li className='header__icon'>
                <SlSocialFacebook />
            </li>
        </ul>
    )
}

export default HeaderIcons