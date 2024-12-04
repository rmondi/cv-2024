"use client";

import { useState } from "react";
import { useScopedI18n } from "@/locales/client";
import Link from "next/link";
import ToggleNav from "../ToggleNav/ToggleNav";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

import "./Nav.scss";

const Nav = () => {

  const t = useScopedI18n( "nav" );

  const [ active, setActive ] = useState( false );

  const handleToggle = () => setActive( !active );
  
  return (
    <header className="Nav">
      <div className="Nav__Container">
        <div className="Nav__Head">
          <div
            className="nav__toggle"
            onClick={ handleToggle }
          >
            <ToggleNav active={ active ? true : false } />
          </div>
        </div>
        <div className={ `Nav__Body ${ active ? " Nav__Body--active" : "" }` }>
          <nav className="Nav__Menu">
            <ul className="Nav__List">
              <li
                className="Nav__Item"
                onClick={ handleToggle }
              >
                <Link
                  className="Nav__Link"
                  href="/"
                >
                  <span>{ t( "home" ) }</span>
                </Link>
              </li>
              <li
                className="Nav__Item"
                onClick={ handleToggle }
              >
                <Link
                  className="Nav__Link"
                  href="/skills"
                >
                  <span>{ t( "skills" ) }</span>
                </Link>
              </li>
              <li
                className="Nav__Item"
                onClick={ handleToggle }
              >
                <Link
                  className="Nav__Link"
                  href="/references"
                >
                  <span>{ t( "portfolio" ) }</span>
                </Link>
              </li>
              <li
                className="Nav__Item"
                onClick={ handleToggle }
              >
                <Link
                  className="Nav__Link"
                  href="/experiences"
                >
                  <span>{ t( "career" ) }</span>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="Nav__Language-switcher">
            <LanguageSwitcher toggleMenu={ handleToggle } />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Nav;