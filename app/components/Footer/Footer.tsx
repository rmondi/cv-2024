"use client";

import { useState, useEffect } from "react";
import { useCurrentLocale } from "@/locales/client";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";

import { ContactType, ContactDefault } from "@/app/utils/Types";

import "./Footer.scss";

const Footer = () => {

  const currentLocale = useCurrentLocale();
  
  const [ isLoading, setIsLoading ] = useState( true );
  const [ data, setData ] = useState<ContactType>( ContactDefault );

  const getData = async () => {
    const headers = new Headers();
    headers.append( "Content-Type", "application/json" );
    headers.append( "Accept", "application/json" );

    await fetch( `/data/${ currentLocale }/contact.json`, {
      method: "GET",
      headers
    } )
    .then( response => response.json() )
    .then( data => {
      setData( data );
      setIsLoading( false );
    } )
    .catch( error => console.error( error ) );
  };

  useEffect( () => { getData(); }, [ currentLocale ] );
  
  if ( !isLoading ) return (
    <footer className="Footer">
      <div className="Footer__Wrapper">
        <div className="Footer__Content">
          <div className="Footer__Name">
            { data.name }
          </div>
          <div className="Footer__Links">
            {
              data.links.map( ( link ) => (
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