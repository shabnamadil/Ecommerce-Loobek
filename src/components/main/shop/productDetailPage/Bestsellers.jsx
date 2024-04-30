import React from 'react'
import BestsellersSwiper from './BestsellersSwiper'


const Bestsellers = () => {
    return (
        <section className='bestsellers-section'>
            <div className='bestsellers-section__header container'>
                <h2>Bestsellers</h2>
            </div>
            <div className="bestsellers-products container">
                <BestsellersSwiper />
            </div>
        </section>
    )
}

export default Bestsellers