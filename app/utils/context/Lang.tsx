"use client";

import { useState, createContext } from "react";

/**
 * Context : lang
 */
type LangContextType = {
  lang: string;
  updateLang: ( lang: string ) => void;
};

const langContextValues : LangContextType = {
  lang: "fr",
  updateLang: ( lang: string ) => {}
};

export const LangContext = createContext( langContextValues );

/**
 * Provider : lang
 */
type LangProviderType = {
  children: React.ReactNode;
};

export const LangProvider = ( { children }: LangProviderType ) => {

  const [ lang, setLang ] = useState( "fr" );

  const updateLang = ( lang: string ) => setLang( lang );

  return (
    <LangContext.Provider value={ { lang, updateLang } }>
      { children }
    </LangContext.Provider>
  );
};