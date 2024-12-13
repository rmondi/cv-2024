"use client";

import { v4 as uuidv4 } from "uuid";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { AboutType, GSAPOptions } from "@/app/utils/Types";
import Image from "next/image";
import Background from "../Background/Background";
import Title from "../Title/Title";
import Paragraph from "../Paragraph/Paragraph";

import "./About.scss";

const About = ( { name, job, introduction, image }: AboutType ) => {

  const gsapRef = useRef( null );

  const { ref } = useInView( {
    threshold: 0.2,
  } );

  useGSAP( () => {
    gsap.to( "#header-title", { ...GSAPOptions } );
    gsap.to( "#header-subtitle", { ...GSAPOptions, delay: .4 } );
    gsap.to( "#header-visual", { ...GSAPOptions, delay: .6 } );
    gsap.to( "#header-text", { ...GSAPOptions, delay: .8 } );
  }, { scope: gsapRef } );
  
  return (
    <header
      ref={ ref }
      className="Header"
    >
      <div className="Header__Wrapper" ref={ gsapRef }>
        <div className="Header__Title">
          <Title level={ 1 }>
            <span id="header-title">{ name }</span>
            <span id="header-subtitle">{ job }</span>
          </Title>
        </div>
        <div
          id="header-visual"
          className="Header__Visual"
        >
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
        <div
          id="header-text"
          className="Header__Text"
        >
          {
            introduction.map( element => <Paragraph key={ uuidv4() }>{ element }</Paragraph> )
          }
        </div>
      </div>
    </header>
  )
}

export default About;