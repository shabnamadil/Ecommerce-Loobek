import React from 'react'
import RecommendedSwiper from './RecommendedSwiper'

const RecommendedProducts = () => {
    return (
        <section className='recommended-section'>
            <div className='recommended-section__header container'>
                <h2>Recommended for you</h2>
            </div>
            <div className="recommended-products container">
                <RecommendedSwiper />
            </div>
        </section>
    )
}

export default RecommendedProducts