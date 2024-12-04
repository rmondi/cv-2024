"use client";

import { AboutType, AboutDefault } from "../utils/Types";
import { useEffect, useState } from "react";
import { useCurrentLocale } from "@/locales/client";
import Loader from "../components/Loader/Loader";
import Section from "../components/Section/Section";
import About from "../components/About/About";

type dataType = {
  about: AboutType;
};

const dataValues = {
  about: AboutDefault,
};

const Home = () => {

  const currentLocale = useCurrentLocale();

  const [ isLoading, setIsloading ] = useState( true );
  const [ data, setData ] = useState<dataType>( dataValues );

  useEffect( () => {
    fetch( `/data/${ currentLocale }/data.json` )
    .then( response => response.json() )
    .then( response => {
      setData( response );
      setIsloading( false );
    } )
    .catch( error => console.error( error ) );

  }, [ currentLocale ] );

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