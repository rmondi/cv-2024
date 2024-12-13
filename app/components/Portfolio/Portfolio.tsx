"use client";

import { useRef } from "react";
import { SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useScopedI18n } from "@/locales/client";

import Title from "../Title/Title";
import Slider from "../Slider/Slider";
import Reference from "../Reference/Reference";

import { PortfolioType, GSAPOptions } from "@/app/utils/Types";

import "./Portfolio.scss";

gsap.registerPlugin( useGSAP );
gsap.registerPlugin( ScrollTrigger );

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

  const gsapRef = useRef( null );

  useGSAP( () => {

    ScrollTrigger.batch( ".gsap", {
      interval: .5,
      onEnter: ( elements ) => {
        gsap.to( elements, { ...GSAPOptions, stagger: 0.15 } );
      }
    } );
  }, { scope: gsapRef } );
  
  return (
    <div
      ref={ gsapRef }
      className="Portfolio"
    >
      <div className="Portfolio__Background gsap"></div>
      <div className="Portfolio__Container">
        <div className="Portfolio__Header gsap">
          <Title level={ 2 } >
            { t( "portfolio" ) }
          </Title>
        </div>
        <div className="Portfolio__Body">
          <div className="Portfolio__Slider gsap">
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