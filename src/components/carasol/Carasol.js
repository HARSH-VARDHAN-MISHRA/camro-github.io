import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import banner1 from './banner/banner-1.jpg'
import banner2 from './banner/banner-2.jpg'

import './styles.css';

// import required modules
import { Pagination ,Navigation } from 'swiper/modules';

const Carasol = () => {
    const imgData = [
        {
            id: 1,
            img: banner1
        },
        {
            id:2,
            img: banner2
        }
    ]
  return (
    <>
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
            {
                imgData && imgData.map((item,index)=>(
                    <SwiperSlide key={index}><img src={item.img} alt="" /></SwiperSlide>

                ))
            }
            
        </Swiper>
    </>
  )
}

export default Carasol