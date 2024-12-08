"use client";

import { v4 as uuidv4 } from "uuid";
import { useScopedI18n } from "@/locales/client";
import Title from "../Title/Title";
import Slider from "../Slider/Slider";
import { SwiperSlide } from "swiper/react";
import Experience from "../Experience/Experience";

import { CareerType } from "@/app/utils/Types";

import "./Career.scss";

const Career = ( { data }: CareerType ) => {

  const t = useScopedI18n( "nav" );
  
  return (
    <div className="Career">
      <div className="Career__Header">
        <Title level={ 2 }>
          { t( "career" ) }
        </Title>
      </div>
      <div className="Career__Body">
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
