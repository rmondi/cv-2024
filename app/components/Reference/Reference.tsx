import Image from "next/image";
import { Link as LinkIcon } from "lucide-react";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import Tags from "../Tags/Tags";
import Tag from "../Tag/Tag";

import { ReferenceType } from "@/app/utils/Types";

import "./Reference.scss";

const Reference = ( { image, title, url, tags }: ReferenceType ) => {
  
  return (
    <div className="Reference">
      <Link
        className="Reference__Link"
        href={ url }
        target="_blank"
      />
      <div className="Reference__Container">
        <div className="Reference__Header">
          <div className="Reference__Visual">
            <Image
              className="Reference__Image"
              alt={ title }
              src={ image }
              width="720"
              height="450"
            />
          </div>
        </div>
        <div className="Reference__Body">
          <h2 className="Reference__Title">
            { title }
          </h2>
          <h3 className="Reference__Url">
            <LinkIcon strokeWidth={ 1.5 } />{ url }
          </h3>
          <div className="Reference__Tags">
            <Tags>
              {
                tags.map( tag => (
                  <Tag
                    key={ uuidv4() }
                    label={ tag }
                  />
                ) )
              }
            </Tags>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reference;