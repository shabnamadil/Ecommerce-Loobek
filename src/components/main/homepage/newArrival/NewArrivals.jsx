import React from 'react'
import '../../../../assets/css/new-arrivals.css'
import NewArrivalSwiper from './NewArrivalSwiper'

const NewArrivals = () => {
    return (
        <section className='new-arrivals-section'>
            <div className='new-arrivals__header container'>
                <h2>New Arrivals</h2>
            </div>
            <div className="new-arrivals container">
                <NewArrivalSwiper />
            </div>
        </section>
    )

}

export default NewArrivals