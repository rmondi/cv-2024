"use client";

import Link from "next/link";
import Logo from "../Logo/Logo";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import Download from "../Download/Download";

import "./Nav.scss";

const Nav = () => {
  
  return (
    <header className="Nav">
      <div className="Nav__Container">
        <div className="Nav__Logo">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <div className="Nav__Actions">
          <div className="Nav__Language-switcher">
            <LanguageSwitcher />
          </div>
          <div className="Nav__Download">
            <Download />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Nav;