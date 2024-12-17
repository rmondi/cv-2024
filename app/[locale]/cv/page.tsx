"use client";

import Head from "next/head";
import { useState, useEffect } from "react";
import { useCurrentLocale } from "@/locales/client";
import Pdf from "@/app/components/Pdf/Pdf";
import { PDFViewer } from "@react-pdf/renderer";

import {
  AboutDefault,
  SkillsDefault,
  PortfolioDefault,
  CareerDefault } from "@/app/utils/Types";

import "./page.scss";

const CV = () => {

  const [ isLoading, setIsloading ] = useState( true );
  const [ data, setData ] = useState( {
    about: AboutDefault,
    skills: SkillsDefault,
    portfolio: PortfolioDefault,
    career: CareerDefault
  } );

  const currentLocale = useCurrentLocale();

  const getData = async () => {

    const headers = new Headers();
    headers.append( "Content-Type", "application/json" );
    headers.append( "Accept", "application/json" );

    await fetch( `/data/${ currentLocale }/data.json`, {
      method: "GET",
      headers
    } )
    .then( response => response.json() )
    .then( data => {
      setData( data );
      setIsloading( false );
    } )
    .catch( error => console.error( error ) );
  };

  useEffect( () => { getData(); }, [ currentLocale ] );
  
  if ( !isLoading ) return (
    <>
      <Head>
        <title>{ "Rémy Mondi | Curriculum Vitae" }</title>
        <meta rel="description" content="Rémy Mondi | Curriculum Vitae" />
      </Head>
      <PDFViewer>
        <Pdf locale={ currentLocale } data={ data } />
      </PDFViewer>
    </>
  )
}

export default CV;