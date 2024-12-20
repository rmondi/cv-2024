"use client";

import dynamic from "next/dynamic";
import Loader from "@/app/components/Loader/Loader";
import { useState, useEffect } from "react";
import { useCurrentLocale } from "@/locales/client";
import Pdf from "@/app/components/Pdf/Pdf";

const PDFViewer = dynamic( () => import( "@/app/components/PDFViewer/PDFViewer" ), {
  loading: () => <Loader fullscreen={ true } />,
  ssr: false
} );

import {
  AboutDefault,
  SkillsDefault,
  PortfolioDefault,
  ExperiencesDefault,
  ContactDefault } from "@/app/utils/Types";

import "./page.scss";

const CV = () => {

  const [ isClientSide, setIsClientSide ] = useState( false );
  const [ isLoading, setIsloading ] = useState( true );
  const [ contact, setContact ] = useState( ContactDefault );
  const [ data, setData ] = useState( {
    about: AboutDefault,
    skills: SkillsDefault,
    portfolio: PortfolioDefault,
    career: ExperiencesDefault
  } );

  const currentLocale = useCurrentLocale();

  const getData = async () => {

    const headers = new Headers();
    headers.append( "Content-Type", "application/json" );
    headers.append( "Accept", "application/json" );

    /** Fetch data */
    await fetch( `/data/${ currentLocale }/data.json`, {
      method: "GET",
      headers
    } )
    .then( response => response.json() )
    .then( data => {
      setData( data );

      /** Fetch contact */
      fetch( `/data/${ currentLocale }/contact.json`, {
        method: "GET",
        headers
      } )
      .then( response => response.json() )
      .then( data => {
        setContact( data );
        setIsloading( false );
      } )
      .catch( error => console.error( error ) );
    } )
    .catch( error => console.error( error ) );
  };

  useEffect( () => { getData(); }, [ currentLocale ] );

  useEffect( () => {
    if ( window && typeof window !== "undefined" ) {
      console.log(window);
      setIsClientSide( true );
    }
  }, [] );
  
  if ( !isLoading && isClientSide ) return (
    <PDFViewer width="100%" height="100%">
      <Pdf locale={ currentLocale } data={ data } contact={ contact } />
    </PDFViewer>
  )
}

export default CV;