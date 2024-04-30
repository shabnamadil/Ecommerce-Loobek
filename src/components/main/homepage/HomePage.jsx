import React from 'react'
import Banner from './banner/Banner'
import HomeCategories from '../homepage/homeCategories/HomeCategories'
import Newsletter from '../newsletter/Newsletter'
import NewArrivals from './newArrival/NewArrivals'
import RecommendedProducts from './recommendedProducts/RecommendedProducts'
import CollectionBanner from './banner/CollectionBanner'
import MenBanner from './banner/MenBanner'
import ReviewsList from './reviews/ReviewsList'


const HomePage = () => {
    return (
        <>
            <Banner />
            <HomeCategories />
            <NewArrivals />
            <RecommendedProducts />
            <CollectionBanner />
            <MenBanner />
            <ReviewsList />
            <Newsletter />
        </>
    )
}

export default HomePage