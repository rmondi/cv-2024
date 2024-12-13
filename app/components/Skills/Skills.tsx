"use client";

import { v4 as uuidv4 } from "uuid";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useInView } from "react-intersection-observer";
import { useScopedI18n } from "@/locales/client";

import Title from "../Title/Title";
import Paragraph from "../Paragraph/Paragraph";
import Skill from "../Skill/Skill";

import { DynamicObjectType, GSAPOptions } from "@/app/utils/Types";

import { SkillsType } from "@/app/utils/Types";

import "./Skills.scss";

gsap.registerPlugin( useGSAP );
gsap.registerPlugin( ScrollTrigger );

const Skills = ( { details, description }: SkillsType ) => {

  const t = useScopedI18n( "nav" );

  const { ref, inView } = useInView( {
    threshold: 0.8,
  } );

  const gsapRef = useRef( null );

  useGSAP( () => {

    ScrollTrigger.batch( ".gsap", {
      interval: .5,
      onEnter: ( elements, trigger ) => {
        gsap.to( elements, { ...GSAPOptions, stagger: 0.15 } );
      }
    } );

    ScrollTrigger.batch( "#skills-items", {
      interval: .5,
      onEnter: ( elements ) => {
        gsap.set( elements, { className: "Skills__Items active" } )
      }
    } );
  }, { scope: gsapRef } );
  
  return (
    <div
      ref={ ref }
      className="Skills"
    >
      <div
        ref={ gsapRef }
        className="Skills__Container"
      >
        <div className="Skills__Header">
          <div
            id="skills-title"
            className="Skills__Title gsap"
          >
            <Title level={ 2 }>
              { t( "skills" ) }
            </Title>
          </div>
          <div
            id="skills-text"
            className="Skills__Text gsap"
          >
            {
              description.map( p => <Paragraph key={ uuidv4() }>{ p }</Paragraph> )
            }
          </div>
        </div>
        <div className="Skills__Body">
          <div className="Skills__Wrapper">
            <div
              id="skills-items"
              className="Skills__Items"
              style={ { "--tp": `${ details.length - 1 }`, "--tn": `-${ details.length - 1 }` } as DynamicObjectType }
            >
              {
                details.map( ( detail, i ) => (
                  <div
                    className="Skills__Item"
                    key={ i }
                    style={ { "--i": `${ i }` } as DynamicObjectType }
                  >
                    <Skill title={ detail.title } icon={ detail.icon } />
                  </div>
                ) )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills;