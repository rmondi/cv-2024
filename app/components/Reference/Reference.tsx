import Image from "next/image";
import { Link } from "lucide-react";

import { ReferenceType } from "@/app/utils/Types";

import "./Reference.scss";

const Reference = ( { image, title, url, tags }: ReferenceType ) => {
  
  return (
    <div className="Reference">
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
            <Link strokeWidth={ 1.5 } />{ url }
          </h3>
          <div className="Reference__Skills">

          </div>
        </div>
      </div>
    </div>
  )
}

export default Reference;