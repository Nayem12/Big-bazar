import React from 'react';
import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/autoplay';
import 'swiper/css';
import { useQuery } from '@tanstack/react-query';
import Sliders from './Sliders';

const Slider = () => {
    const { data: allproducts = [], isLoading, refetch } = useQuery({
        queryKey: ['allproducts'],
        queryFn: () => fetch('https://big-bazar-server.vercel.app/allproducts')
            .then(res => res.json())
    })
    return (
        <div className='mb-[80px] w-[95%] mx-auto'>
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={30}
                slidesPerView={4}
                // onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                navigation
                autoplay={{ delay: 4000 }}
            >
                {
                    allproducts.map(allproduct => <SwiperSlide>
                        <Sliders
                            key={allproduct._id}
                            allproduct={allproduct}
                        ></Sliders>
                    </SwiperSlide>)
                }
                {/* */}

            </Swiper>
        </div>
    );
};

export default Slider;