import React from 'react'
import { CiInstagram } from "react-icons/ci";
import { PiTiktokLogoThin } from "react-icons/pi";
import { FiYoutube } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
import { SlSocialFacebook } from "react-icons/sl";

const FooterFollowing = () => {
    return (
        <div className='footer_following'>
            <h3>Follow us</h3>
            <ul>
                <li>
                    <i>
                        <CiInstagram />
                    </i>
                    <span>Instagram</span>
                </li>
                <li>
                    <i>
                        <PiTiktokLogoThin />
                    </i>
                    <span>TikTok</span>
                </li>
                <li>
                    <i>
                        <SlSocialFacebook />
                    </i>
                    <span>Facebook</span>
                </li>
                <li>
                    <i>
                        <FiYoutube />
                    </i>
                    <span>Youtube</span>
                </li>
                <li>
                    <i>
                        <CiTwitter />
                    </i>
                    <span>Twitter</span>
                </li>
            </ul>
        </div>
    )
}

export default FooterFollowing