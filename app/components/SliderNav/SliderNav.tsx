import { useSwiper } from "swiper/react";
import { ArrowRight, ArrowLeft } from "lucide-react";

import "./SliderNav.scss";

const SliderNav = () => {

  const swiper = useSwiper();
  
  return (
    <div className="SliderNav">
      <button
        className="SliderNav__Button prev"
        onClick={ () => swiper.slidePrev() }
      >
        <ArrowLeft strokeWidth={ 1.5 } />
      </button>
      <button
        className="SliderNav__Button next"
        onClick={ () => swiper.slideNext() }
      >
        <ArrowRight strokeWidth={ 1.5 } />
      </button>
    </div>
  )
}

export default SliderNav;