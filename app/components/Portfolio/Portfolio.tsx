"use client";

import { SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";
import { useScopedI18n } from "@/locales/client";

import Title from "../Title/Title";
import Slider from "../Slider/Slider";
import Reference from "../Reference/Reference";

import { PortfolioType } from "@/app/utils/Types";

import "./Portfolio.scss";

const Portfolio = ( { data }: PortfolioType ) => {

  const t = useScopedI18n( "nav" );

  const breakpoints = {
    768: {
      slidesPerView: 2
    },
    1200: {
      slidesPerView: 3
    }
  };
  
  return (
    <div className="Portfolio">
      <div className="Portfolio__Background"></div>
      <div className="Portfolio__Container">
        <div className="Portfolio__Header">
          <Title level={ 2 } >
            { t( "portfolio" ) }
          </Title>
        </div>
        <div className="Portfolio__Body">
          <div className="Portfolio__Slider">
            <Slider
              slidesPerView={ 1 }
              spaceBetween={ 24 }
              breakpoints={ breakpoints }
            >
              {
                data.map( reference => (
                  <SwiperSlide key={ uuidv4() }>
                    <Reference
                      title={ reference.title }
                      image={ reference.image }
                      url={ reference.url }
                      tags={ reference.tags }
                    />
                  </SwiperSlide>
                ) )
              }
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio;