"use server";

import { promises as fs } from "fs";
import path from "path";
import { getCurrentLocale } from "@/locales/server";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";

import { ContactLinkType } from "@/app/utils/Types";

import "./Footer.scss";

const Footer = async () => {

  const currentLocale = await getCurrentLocale();

  const file = await fs.readFile( path.join( process.cwd(), "public", "data", currentLocale, "contact.json" ), "utf8" );
  const data = JSON.parse( file );
  
  return (
    <footer className="Footer">
      <div className="Footer__Wrapper">
        <div className="Footer__Content">
          <div className="Footer__Name">
            { data.name }
          </div>
          <div className="Footer__Links">
            {
              data.links.map( ( link: ContactLinkType ) => (
                <a
                  key={ uuidv4() }
                  className="Footer__Link"
                  title={ link.label }
                  href={ link.href }
                  target="_blank"
                >
                  <Image
                    className="Footer__Icon"
                    alt={ link.label }
                    src={ link.icon }
                    width="20"
                    height="20"
                  />
                </a>
              ) )
            }
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;