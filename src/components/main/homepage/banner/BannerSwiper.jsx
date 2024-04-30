import React, { useRef, useEffect, useState } from 'react'
import dayjs from 'dayjs';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../../../assets/css/swiper.css';

import slide1 from '../../../../assets/img/jpg/slide1.jpg'
import slide2 from '../../../../assets/img/jpg/slide2.jpg'
import slide3 from '../../../../assets/img/jpg/slide3.jpg'

import BannerShopButton from '../../../buttons/BannerShopButton';

const BannerSwiper = () => {
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);

    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);

    useEffect(() => {
        const observer1 = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible1(true);
                } else {
                    setIsVisible1(false);
                }
            });
        });

        const observer2 = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible2(true);
                } else {
                    setIsVisible2(false);
                }
            });
        });

        const observer3 = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible3(true);
                } else {
                    setIsVisible3(false);
                }
            });
        });

        if (ref1.current) {
            observer1.observe(ref1.current);
        }
        if (ref2.current) {
            observer2.observe(ref2.current);
        }
        if (ref3.current) {
            observer3.observe(ref3.current);
        }

        return () => {
            if (ref1.current) {
                observer1.unobserve(ref1.current);
            }
            if (ref2.current) {
                observer2.unobserve(ref2.current);
            }
            if (ref3.current) {
                observer3.unobserve(ref3.current);
            }
        };
    }, []);

    return (
        <>
            <Swiper
                centeredSlides={true}
                navigation={true}
                autoplay={{ delay: 5000 }}
                loop={true}
                pagination={{
                    clickable: true,
                    loop: true
                }}
                modules={[Navigation, Autoplay, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide style={{ cursor: 'pointer' }}>
                    <img src={slide1} alt="" />
                    <div className={isVisible1 ? 'slide__text' : 'slide__text'} ref={ref1}>
                        <span className='slide__text_span'>Great premiere</span>
                        <p className='slide__text_content'>{dayjs().year()} Fall/Winter Collection </p>
                        <BannerShopButton />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <div className={isVisible2 ? 'slide__text' : 'slide__text'} ref={ref2}>
                        <span className='slide__text_span'>Always classy!</span>
                        <p className='slide__text_content'>Men's business clothing </p>
                        <BannerShopButton />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <div className={isVisible3 ? 'slide__text' : 'slide__text'} ref={ref3}>
                        <span className='slide__text_span'>New Arrival</span>
                        <p className='slide__text_content'>Street Collection {dayjs().year()} </p>
                        <BannerShopButton />
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default BannerSwiper