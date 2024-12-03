"use client";

import { v4 as uuidv4 } from "uuid";
import { AboutType } from "@/app/utils/Types";
import Image from "next/image";
import Background from "../Background/Background";
import Title from "../Title/Title";
import Paragraph from "../Paragraph/Paragraph";

import "./About.scss";

const About = ( { name, job, introduction, image }: AboutType ) => {
  
  return (
    <header className="Header">
      <div className="Header__Wrapper">
        <div className="Header__Title">
          <Title level={ 1 }>
            <span>{ name }</span>
            <span>{ job }</span>
          </Title>
        </div>
        <div className="Header__Visual">
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
        <div className="Header__Text">
          {
            introduction.map( element => <Paragraph key={ uuidv4() }>{ element }</Paragraph> )
          }
        </div>
      </div>
    </header>
  )
}

export default About;