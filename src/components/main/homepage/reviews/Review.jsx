import React from 'react'

const Review = ({ review }) => {

    return (
        <div className="review">
            <div className="review-by-user">
                <img src={review.user_image} alt="" />
                <span>{review.review_by_user}</span>
            </div>
            <div className="review-content-home">
                <p>{review.review_content}</p>
            </div>
        </div>
    )
}

export default Review