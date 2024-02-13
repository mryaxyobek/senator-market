import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../css/swiperStyles.css';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { devAds, devAdsRight, topAc, ucService, ytSlide } from '../assets/data';

const Hero = () => {
    return (
        <div className='py-12 max-550:py-10'>
            <div className="container">
                {/* contents wrapper */}
                <div className="grid grid-cols-15 gap-5 w-full max-1100:flex max-1100:grid-cols-1 max-1100:flex-col max-1100:col-span-full">
                    <div className="col-span-11">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            autoplay={{
                                delay: 3000,
                            }}
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation, Autoplay]}
                            className="hero-main-swiper"
                        >
                            <SwiperSlide>
                                <a target='_blank' href='https://www.youtube.com/@SENATORPUBGM'>
                                    <img src={ytSlide} alt="sanator market you-tube" />
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to='/uc-service'>
                                    <img src={ucService} alt="senatro market uc-service" />
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a target='_blank' href='https://t.me/shohjahon_asqarov'>
                                    <img src={devAds} alt="senatro market developer ads" />
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to='/accounts'>
                                    <img src={topAc} alt="senator market top akkauntlar" />
                                </Link>
                            </SwiperSlide>
                        </Swiper>
                    </div>

                    <div className="hero-ads col-span-4 max-1100:col-span-full">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={20}
                            autoplay={{
                                delay: 4000,
                            }}
                            breakpoints={{
                                400: {
                                    slidesPerView: 2,
                                    spaceBetween: 10,
                                },
                                650: {
                                    slidesPerView: 3,
                                    spaceBetween: 10,
                                },
                                1100: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                }
                            }}
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination, Autoplay]}
                            className="hero-ads_swiper"
                        >
                            <SwiperSlide>
                                <a target='_blank' href='https://t.me/shohjahon_asqarov'>
                                    <img src={devAdsRight} alt="developer ads" />
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a target='_blank' href='https://t.me/shohjahon_asqarov'>
                                    <img src={devAdsRight} alt="developer ads" />
                                </a>
                            </SwiperSlide>
                        </Swiper>


                    </div>

                </div>
            </div>
        </div>
    )
};

export default Hero