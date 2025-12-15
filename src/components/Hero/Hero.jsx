import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

import "./Hero.css";

const images = import.meta.glob("/src/assets/Heros/*", { eager: true });
function getAllImages() {
  return Object.values(images).map((img) => img.default);
}
function Hero() {
  const slides = getAllImages();
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
        {" "}
        {slides.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`slide-${index}`} className="carousel-img" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Hero;
