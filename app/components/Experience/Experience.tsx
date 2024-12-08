"use client";

import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import Link from "next/link";
import Paragraph from "../Paragraph/Paragraph";
import Tasks from "../Tasks/Tasks";
import Task from "../Task/Task";
import Tags from "../Tags/Tags";
import Tag from "../Tag/Tag";

import { ExperienceType } from "@/app/utils/Types";

import "./Experience.scss";

const Experience = ( {
  image,
  url,
  title,
  start_date,
  end_date,
  city,
  country,
  type,
  description,
  tasks,
  tags  }: ExperienceType ) => {
  
  return (
    <div className="Experience">
      <Link
        className="Experience__Link"
        href={ url as string }
        target="_blank"
      />
      <div className="Experience__Container">
        <div className="Experience__Image">
          <Image
            className="Experience__Logo"
            alt={ title }
            src={ image }
            width="100"
            height="50"
          />
        </div>
        <div className="Experience__Content">
          <h3 className="Experience__Name">
            { title }
          </h3>
          <div className="Experience__Info">
            { `${ start_date } - ${ end_date } | ${ city } (${ country }) | ` }
            <span>{ type }</span>
          </div>
          <Paragraph>
            { description }
          </Paragraph>
          <div className="Experience__Tasks">
            <Tasks>
              {
                tasks.map( task => <Task key={ uuidv4() }>{ task }</Task> )
              }
            </Tasks>
          </div>
          <div className="Experience__Tags">
            <Tags>
              {
                tags.map( tag => <Tag key={ uuidv4() } label={ tag } /> )
              }
            </Tags>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience;