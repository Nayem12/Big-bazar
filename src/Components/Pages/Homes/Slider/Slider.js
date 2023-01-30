import React from 'react';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


const Slider = () => {
    return (
        <div>
            <Swiper
                modules={Autoplay}
                spaceBetween={30}
                slidesPerView={4}
                // onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                Autoplay={{ delay: 2000 }}
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                ...
            </Swiper>
        </div>
    );
};

export default Slider;