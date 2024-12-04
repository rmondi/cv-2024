"use client";

import { useState, useEffect, createContext } from "react";

/**
 * Context : lang
 */
type LangContextType = {
  lang: string;
  updateLang: ( lang: string ) => void;
};

const langContextValues : LangContextType = {
  lang: "fr",
  updateLang: () => {}
};

export const LangContext = createContext( langContextValues );

/**
 * Provider : lang
 */
type LangProviderType = {
  children: React.ReactNode;
};

export const LangProvider = ( { children }: LangProviderType ) => {

  const [ isLoading, setIsloading ] = useState( true );
  const [ lang, setLang ] = useState( "fr" );

  const updateLang = ( lang: string ) => {

    localStorage.setItem( process.env.NEXT_PUBLIC_LOCALSTORAGE_NAME as string, lang );

    setLang( lang );
  };

  useEffect( () => {
    const storedLang = localStorage.getItem( process.env.NEXT_PUBLIC_LOCALSTORAGE_NAME as string );

    if ( storedLang ) setLang( storedLang );

    setIsloading( false );
  }, [] );

  if ( !isLoading ) return (
    <LangContext.Provider value={ { lang, updateLang } }>
      { children }
    </LangContext.Provider>
  );
};