import React from 'react'
import '../../../assets/css/newsletter.css'
import SubscribeButton from '../../buttons/SubscribeButton'

const Newsletter = () => {
    return (
        <section className='newsletter__area'>
            <div className="container newsletter_con">
                <h2>Join our newsletter and get $20 discount for your first order</h2>
                <form action="">
                    <input 
                    type="text"
                    placeholder='Your email here...'
                     />
                    <SubscribeButton />
                </form>
            </div>
        </section>
    )
}

export default Newsletter