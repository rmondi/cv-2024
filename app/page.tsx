"use client";

import { AboutType, AboutDefault } from "./utils/Types";
import { useContext, useEffect, useState } from "react";
import { LangContext } from "./utils/Lang";
import Loader from "./components/Loader/Loader";
import Section from "./components/Section/Section";
import About from "./components/About/About";

type dataType = {
  about: AboutType;
};

const dataValues = {
  about: AboutDefault,
};

const Home = () => {

  const [ isLoading, setIsloading ] = useState( true );
  const [ data, setData ] = useState<dataType>( dataValues );

  const { lang } = useContext( LangContext );

  useEffect( () => {
    fetch( `/data_${ lang }.json` )
    .then( response => response.json() )
    .then( response => {
      setData( response );
      setIsloading( false );
    } )
    .catch( error => console.error( error ) );

  }, [ lang ] );

  if ( isLoading ) return <Loader />
  else return (
    <>
      <Section id="about">
        <About
          name={ data.about.name }
          job={ data.about.job }
          introduction={ data.about.introduction }
          image={ data.about.image }
        />
      </Section>
    </>
  );
}

export default Home;