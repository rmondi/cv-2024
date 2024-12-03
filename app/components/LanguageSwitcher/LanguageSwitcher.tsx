import { useContext } from "react";
import { LangContext } from "@/app/utils/Lang";
import { v4 as uuidv4 } from "uuid";

import "./LanguageSwitcher.scss";

type LanguageSwitcherType = {
  toggleMenu: () => void;
};

const LanguageSwitcher = ( { toggleMenu }: LanguageSwitcherType ) => {

  const { lang, updateLang } = useContext( LangContext );

  const availableLangs = [ "fr", "en" ];

  const handleClick = ( lang: string ) => {
    updateLang( lang );
    toggleMenu();
  }
  
  return (
    <div className="LanguageSwitcher">
      <ul className="LanguageSwitcher__List">
        {
          availableLangs.map( availableLang => (
            <li
              key={ uuidv4() }
              className={ `LanguageSwitcher__Item ${ lang === availableLang ? " LanguageSwitcher__Item--active" : "" }` }
              onClick={ () => { handleClick( availableLang ) } }
            >
              { availableLang }
            </li>
          ) )
        }
      </ul>
    </div>
  )
}

export default LanguageSwitcher;