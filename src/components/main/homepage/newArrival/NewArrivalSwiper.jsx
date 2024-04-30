import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector, useDispatch } from "react-redux"
import ShopProduct from '../../shop/ShopProduct'
import { Autoplay, Pagination } from 'swiper/modules'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {
    getAllProducts,
    getProductStatus,
    fetchProducts
} from '../../../../features/products/productsDataSlice';

const NewArrivalSwiper = () => {
    const products = useSelector(getAllProducts)
    const status = useSelector(getProductStatus)
    const dispatch = useDispatch()

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProducts());
        }
    }, [status, dispatch]);

    return (
        <Swiper
            spaceBetween={5}
            slidesPerView={5}
            autoplay={{ delay: 3000 }}
            loop={true}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
            breakpoints={{
                // when window width is >= 1200px
                1445: {
                    slidesPerView: 5,
                    spaceBetween: 20
                },
                1400: {
                    slidesPerView: 4,
                    spaceBetween: 20
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 35
                },
                // when window width is >= 992px
                992: {
                    slidesPerView: 3,
                    spaceBetween: 35
                },
                // when window width is >= 768px
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                // when window width is >= 576px
                576: {
                    slidesPerView: 2,
                    spaceBetween: 25
                },
                // when window width is < 576px
                0: {
                    slidesPerView: 1,
                    spaceBetween: 0
                }
            }}
        >
            {products.map((product) => product.newArrived === true ?
                (
                    <SwiperSlide key={product.id} style={{ width: "92%" }}>
                        <ShopProduct key={product.id} product={product} />
                    </SwiperSlide>
                ) : null
            )}
        </Swiper>
    );
};

export default NewArrivalSwiper;
