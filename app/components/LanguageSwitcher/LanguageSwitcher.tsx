"use client";

import { useCurrentLocale, useChangeLocale } from "@/locales/client";
import { v4 as uuidv4 } from "uuid";

import "./LanguageSwitcher.scss";

const LanguageSwitcher = () => {

  const locales = [ "fr", "en" ];
  const currentLocale = useCurrentLocale();
  const changeLocale = useChangeLocale();

  const handleClick = ( locale: string ) => changeLocale( locale as "fr" | "en" );
  
  return (
    <div className="LanguageSwitcher">
      <ul className="LanguageSwitcher__List">
        {
          locales.map( locale => (
            <li
              key={ uuidv4() }
              className={ `LanguageSwitcher__Item ${ locale === currentLocale ? " LanguageSwitcher__Item--active" : "" }` }
              onClick={ () => { handleClick( locale ) } }
            >
              { locale }
            </li>
          ) )
        }
      </ul>
    </div>
  )
}

export default LanguageSwitcher;