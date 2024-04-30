import React from 'react'
import MySwiper from './BannerSwiper'
import '../../../../assets/css/banner.css'
import { MdOutlineLocalShipping } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";
import { BsGift } from "react-icons/bs";

const Banner = () => {
    return (
        <section className='banner'>
            <MySwiper />
            <div className='banner__info container'>
                <p className='banner__info_text'>
                    <i className='banner__info_icon'>
                        <MdOutlineLocalShipping />
                    </i>
                    <span>Fast & Free Shipping Over $2500</span>
                </p>
                <p className='banner__info_text'>
                    <i className='banner__info_icon'>
                        <RiCustomerService2Line />
                    </i>
                    <span>Expert Customer Service</span>
                </p>
                <p className='banner__info_text'>
                    <i className='banner__info_icon'>
                        <BsGift />
                    </i>
                    <span>Free gift wrapping</span>
                </p>
            </div>
        </section>

    )
}

export default Banner