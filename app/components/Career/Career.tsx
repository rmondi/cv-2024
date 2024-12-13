"use client";

import { useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useScopedI18n } from "@/locales/client";
import Title from "../Title/Title";
import Slider from "../Slider/Slider";
import { SwiperSlide } from "swiper/react";
import Experience from "../Experience/Experience";

import { CareerType, GSAPOptions } from "@/app/utils/Types";

import "./Career.scss";

gsap.registerPlugin( useGSAP );
gsap.registerPlugin( ScrollTrigger );

const Career = ( { data }: CareerType ) => {

  const t = useScopedI18n( "nav" );

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
      className="Career"
    >
      <div className="Career__Header gsap">
        <Title level={ 2 }>
          { t( "career" ) }
        </Title>
      </div>
      <div className="Career__Body gsap">
        <div className="Career__Slider">
          <Slider
            slidesPerView={ 1 }
          >
            {
              data.map( experience => (
                <SwiperSlide key={ uuidv4() }>
                  <Experience
                    image={ experience.image }
                    url={ experience.url }
                    title={ experience.title }
                    start_date={ experience.start_date }
                    end_date={ experience.end_date }
                    city={ experience.city }
                    country={ experience.country }
                    type={ experience.type }
                    description={ experience.description }
                    tasks={ experience.tasks }
                    tags={ experience.tags }
                  />
                </SwiperSlide>
              ) )
            }
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Career;
