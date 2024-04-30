import React, { useEffect } from 'react'
import ReviewSwiper from './ReviewSwiper';
import '../../../../assets/css/reviews.css'
import {  useDispatch, useSelector } from "react-redux"
import { 
    fetchReviews, 
    getReviews, 
    getHappyReviewsStatus 
} from '../../../../features/reviewsSlice/reviewsDataSlice';


const ReviewsList = () => {
    const Reviews = useSelector(getReviews)
    const status = useSelector(getHappyReviewsStatus)
    const dispatch = useDispatch()

    useEffect(() => {
        if (status == 'idle') {
            dispatch(fetchReviews());
        }
    }, [status, dispatch]);

    return (
        <section className='reviews-area'>
            <div className="reviews-header container">
                <h2>Happy Customers</h2>
            </div>
            <div className="reviews-list container">
                <ReviewSwiper Reviews={Reviews} />
            </div>
        </section>
    )
}

export default ReviewsList