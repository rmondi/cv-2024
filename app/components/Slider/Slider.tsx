"use client";

import { Swiper } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import SliderNav from "../SliderNav/SliderNav";

import "swiper/scss";
import "swiper/scss/navigation";
import "./Slider.scss";

type SliderType = {
  slidesPerView?: number;
  spaceBetween?: number;
  breakpoints?: {
    [ key: number ]: { 
      [ key: string ]: number | string
     }
  };
  children: React.ReactNode;
};

const Slider = ( { slidesPerView = 3, spaceBetween = 30, breakpoints = {}, children }: SliderType ) => {
  
  return (
    <div className="Slider">
      <Swiper
        modules={ [ Autoplay, Navigation ] }
        loop={ true }
        autoplay={
          {
            delay: 3000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true
          }
        }
        slidesPerView={ slidesPerView }
        spaceBetween={ spaceBetween }
        breakpoints={ breakpoints }
        navigation={
          {
            prevEl: ".prev",
            nextEl: ".next"
          }
        }
      >
        <div className="Slider__Nav">
          <SliderNav />
        </div>
        <div className="Slider__Slides">
          { children }
        </div>
      </Swiper>
    </div>
  )
}

export default Slider;