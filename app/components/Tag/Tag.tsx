"use client";

import Link from "next/link";
import { TagType } from "@/app/utils/Types";

import "./Tag.scss";

const Tag = ( { label, linkable = false, slug = "" }: TagType ) => {
  
  return (
    <li className="Tag">
      {
        linkable
        ? <Link className="Tag__Link" href={ `/skills/${ slug }` }>{ label }</Link>
        : <span className="Tag__Label">{ label }</span>
      } 
    </li>
  )
}

export default Tag;