"use client";

import { Swiper, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowRight, ArrowLeft } from "lucide-react";

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

  const swiper = useSwiper();
  
  return (
    <div className="Slider">
      <div className="Slider__Arrows">
        <button
          className="Slider__Arrow prev"
          onClick={ () => swiper.slidePrev() }
        >
          <ArrowLeft strokeWidth={ 1.5 } />
        </button>
        <button
          className="Slider__Arrow next"
          onClick={ () => swiper.slideNext() }
        >
          <ArrowRight strokeWidth={ 1.5 } />
        </button>
      </div>
      <Swiper
        modules={ [ Navigation ] }
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
        { children }
      </Swiper>
    </div>
  )
}

export default Slider;