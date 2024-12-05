"use client";

import Image from "next/image";

import { SkillType } from "@/app/utils/Types";

import "./Skill.scss";

const Skill = ( { title, icon }: SkillType ) => {
  
  return (
    <div className="Skill">
      <div className="Skill__Link">
        <div className="Skill__Body">
          <Image
            className="Skill__Icon"
            alt={ title }
            src={ icon }
            width="20"
            height="20"
          />
          <p className="Skill__Name">
            { title }
          </p>
        </div>
      </div>
    </div>
  )
}

export default Skill;