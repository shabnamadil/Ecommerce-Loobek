import React from 'react'
import img from '../../../../assets/img/jpg/cat-glasses.jpg'

const Reviews = () => {
    return (
        <div className="detail-reviews-area">
            <div className='rating-area'>
                <div className='rate'>
                    <h2>0.00</h2>
                    <span>Based on 0 reviews</span>
                    <button className='wishlist-add-to-cart'>Write a review</button>
                </div>
                <div className='rating-scheme'>
                    <p>scheme</p>
                </div>
            </div>
            <div className="reviews-display-area">
                <div className='single-review'>
                    <div className='review-by-user'>
                        <img src={img} alt="" />
                        <span>Shabnam Adil</span>
                    </div>
                    <div>
                        <span>3 ulduz</span>
                        <p>fffffffffffff</p>
                    </div>
                </div>
            </div>
            <div className='review-form-area'>
                <h2>Add a review</h2>
                <p>Your email address will not be published. Required fields are marked</p>
                <form action="" className='reviewForm' id='reviewForm'>
                    <div>
                        <label htmlFor="">Your rating:</label>
                    </div>
                    <div>
                        <label htmlFor="">Choose picture:</label>
                        <input type="file" />
                    </div>
                    <div className='review-content'>
                        <label htmlFor="">Your review</label>
                        <textarea name="" id="" cols="100" rows="20"></textarea>
                    </div>
                    <button className='wishlist-add-to-cart review-btn'>Submit</button>
                </form>
            </div>

        </div>
    )
}

export default Reviews