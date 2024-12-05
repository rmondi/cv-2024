"use client";

import { v4 as uuidv4 } from "uuid";
import { useScopedI18n } from "@/locales/client";

import Title from "../Title/Title";
import Paragraph from "../Paragraph/Paragraph";
import Skill from "../Skill/Skill";

import { DynamicObjectType } from "@/app/utils/Types";

import { SkillsType } from "@/app/utils/Types";

import "./Skills.scss";

const Skills = ( { details, description }: SkillsType ) => {

  const t = useScopedI18n( "nav" );
  
  return (
    <div className="Skills">
      <div className="Skills__Container">
        <div className="Skills__Header">
          <Title level={ 2 }>
            { t( "skills" ) }
          </Title>
          {
            description.map( p => <Paragraph key={ uuidv4() }>{ p }</Paragraph> )
          }
        </div>
        <div className="Skills__Body">
          <div className="Skills__Wrapper">
            <div
              className="Skills__Items active"
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