import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { modules } from '../objects/modules';

const CarouselComponent = () => {
  return (
    <>
      <div className="md:hidden">
        <Swiper slidesPerView={1}>
          {
            modules.map((item) => (
              <SwiperSlide key={item.id} className="translate-y-2/4 z-10">
              <div className="w-text-left m-2 p-8 rounded-md shadow-lg">
                <img src={item.icon} alt={item.title} className="w-12 my-2" />
                <h2 className="text-lg font-extrabold pb-2">{item.title}</h2>
                <p>{item.des}</p>
              </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
      <div className="hidden md:flex lg:hidden">
        <Swiper slidesPerView={2}>
          {
            modules.map((item) => (
              <SwiperSlide key={item.id} className="translate-y-2/4 z-10">
              <div className="w-text-left m-2 p-8 rounded-md shadow-lg">
                <img src={item.icon} alt={item.title} className="w-12 my-2" />
                <h2 className="text-lg font-extrabold pb-2">{item.title}</h2>
                <p>{item.des}</p>
              </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
      <div className="hidden lg:flex">
        <Swiper slidesPerView={3}>
          {
            modules.map((item) => (
              <SwiperSlide key={item.id} className="translate-y-2/4 z-10">
              <div className="w-text-left m-4 p-8 rounded-md shadow-lg">
                <img src={item.icon} alt={item.title} className="w-12 my-2" />
                <h2 className="text-lg font-black pb-2">{item.title}</h2>
                <p>{item.des}</p>
              </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </>
  )
}

export default CarouselComponent;
