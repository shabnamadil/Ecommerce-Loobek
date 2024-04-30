import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
    getAllTopCategories,
    getToptCategoryStatus,
    fetchTopCategories
} from '../../../../features/products/topcategoriesDataSlice';
import { clickedCategory } from '../../../../features/products/productCategoriesDataSlice';
import { filterProductsByCategory } from '../../../../features/products/productsDataSlice';


const TouchManipulationSwiper = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const status = useSelector(getToptCategoryStatus)
    const topCategories = useSelector(getAllTopCategories)

    useEffect(() => {
        if (status == 'idle') {
            dispatch(fetchTopCategories());
        }
    }, [status, dispatch]);

    return (
        <Swiper
            spaceBetween={5}
            slidesPerView={6}
            loop={true}
            breakpoints={{
                1200: {
                    slidesPerView: 6,
                    spaceBetween: 25
                },
                992: {
                    slidesPerView: 5,
                    spaceBetween: 25
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 25
                },
                576: {
                    slidesPerView: 4,
                    spaceBetween: 25
                },
                400: {
                    slidesPerView: 3,
                    spaceBetween: 25
                },
                350: {
                    slidesPerView: 2,
                    spaceBetween: 25
                },
                0: {
                    slidesPerView: 2,
                    spaceBetween: 25
                }
            }}
        >
            {topCategories.map(item => (
                <SwiperSlide key={item.id} style={{ padding: '40px 10px', width: '100%' }}>
                    <div className='top_cat__swiper' onClick={() => {
                        dispatch(filterProductsByCategory(item));
                        dispatch(clickedCategory(item.name));
                        navigate(`/shop`);
                    }}>
                        <img src={item.image} alt="" />
                        <span>{item.name}</span>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default TouchManipulationSwiper;
