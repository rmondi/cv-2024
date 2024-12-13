"use client";

import { v4 as uuidv4 } from "uuid";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { AboutType, GSAPOptions } from "@/app/utils/Types";
import Image from "next/image";
import Background from "../Background/Background";
import Title from "../Title/Title";
import Paragraph from "../Paragraph/Paragraph";

import "./About.scss";

gsap.registerPlugin( useGSAP );
gsap.registerPlugin( ScrollTrigger );

const About = ( { name, job, introduction, image }: AboutType ) => {

  const gsapRef = useRef( null );

  useGSAP( () => {

    ScrollTrigger.batch( ".gsap", {
      onEnter: ( elements ) => {
        gsap.to( elements, { ...GSAPOptions, stagger: 0.15 } );
      }
    } );
  }, { scope: gsapRef } );
  
  return (
    <header className="Header">
      <div className="Header__Wrapper" ref={ gsapRef }>
        <div className="Header__Title">
          <Title level={ 1 }>
            <span className="gsap">{ name }</span>
            <span className="gsap">{ job }</span>
          </Title>
        </div>
        <div className="Header__Visual gsap">
          <Background />
          <div className="Header__Visual__Wrapper">
            <div className="Header__Visual__Slot Header__Visual__Slot--top">
              <span></span>
            </div>
            <Image
              className="Header__Visual__Image"
              alt="Rémy Mondi | Développeur front-end"
              src={ image }
              width="345"
              height="410"
            />
            <div className="Header__Visual__Slot Header__Visual__Slot--bottom">
              <span></span>
            </div>
          </div>
        </div>
        <div className="Header__Text gsap">
          {
            introduction.map( element => <Paragraph key={ uuidv4() }>{ element }</Paragraph> )
          }
        </div>
      </div>
    </header>
  )
}

export default About;