import "./Header.scss";
import React, { useState, useEffect } from "react";
import "./Header.scss";
import logo from "../../images/logo.png";
import tel from "../../images/tel.svg";

function Header() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
  }, []);

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="logo" />
      {windowWidth > 750 ? (
        <p className="header__tel">+7 (495) 495-49-54</p>
      ) : (
        <img className="header__tel-img" src={tel} alt="telephone" />
      )}
    </header>
  );
}

export default Header;
