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
                                <Link to='/'>
                                    <img src="https://image.api.playstation.com/vulcan/ap/rnd/202312/1402/a7091ca036ce62de86249da1ff0c92e5057416cd639a382e.jpg" alt="" className="" />
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to='/'>
                                    <img src="https://image.api.playstation.com/vulcan/ap/rnd/202312/1402/a7091ca036ce62de86249da1ff0c92e5057416cd639a382e.jpg" alt="" className="" />
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to='/'>
                                    <img src="https://image.api.playstation.com/vulcan/ap/rnd/202312/1402/a7091ca036ce62de86249da1ff0c92e5057416cd639a382e.jpg" alt="" className="" />
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
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination, Autoplay]}
                            className="hero-ads_swiper max-1100:hidden"
                        >
                            <SwiperSlide>
                                <Link to='/' className=''>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Pubg.jpg" alt="" />
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to='/' className=''>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Pubg.jpg" alt="" />
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to='/' className=''>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Pubg.jpg" alt="" />
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to='/' className=''>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Pubg.jpg" alt="" />
                                </Link>
                            </SwiperSlide>
                        </Swiper>

                        {/* max 1100 */}
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={6}
                            autoplay={{
                                delay: 4000,
                            }}
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination, Autoplay]}
                            className="hidden max-1100:block hero-ads_swiper max-470:hidden"
                        >
                            <SwiperSlide>
                                <Link to='/' className=''>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Pubg.jpg" alt="" />
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to='/' className=''>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Pubg.jpg" alt="" />
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to='/' className=''>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Pubg.jpg" alt="" />
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to='/' className=''>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Pubg.jpg" alt="" />
                                </Link>
                            </SwiperSlide>
                        </Swiper>

                        {/* max 470 */}
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            autoplay={{
                                delay: 4000,
                            }}
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination, Autoplay]}
                            className="hidden max-470:block hero-ads_swiper"
                        >
                            <SwiperSlide>
                                <Link to='/' className=''>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Pubg.jpg" alt="" />
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to='/' className=''>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Pubg.jpg" alt="" />
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to='/' className=''>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Pubg.jpg" alt="" />
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to='/' className=''>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Pubg.jpg" alt="" />
                                </Link>
                            </SwiperSlide>
                        </Swiper>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default Hero