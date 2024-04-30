import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Review from './Review'

const ReviewSwiper = ({ Reviews }) => {

    return (
        <Swiper
            spaceBetween={5}
            slidesPerView={3}
            loop={true}
            breakpoints={{
                1400: {
                    slidesPerView: 3,
                    spaceBetween: 5
                },
                // when window width is >= 992px
                992: {
                    slidesPerView: 2,
                    spaceBetween: 35
                },
                // when window width is >= 768px
                768: {
                    slidesPerView: 1,
                    spaceBetween: 30
                },
                // when window width is < 576px
                0: {
                    slidesPerView: 1,
                    spaceBetween: 0
                }
            }}
        >
            {Reviews.map((review) => (
                <SwiperSlide key={review.id}>
                    <Review reviewID={review.id} review={review} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default ReviewSwiper