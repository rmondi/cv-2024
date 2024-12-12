"use client";

import Logo from "../Logo/Logo";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

import "./Nav.scss";

const Nav = () => {
  
  return (
    <header className="Nav">
      <div className="Nav__Container">
        <div className="Nav__Logo">
          <Logo />
        </div>
        <div className="Nav__Language-switcher">
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  )
}

export default Nav;