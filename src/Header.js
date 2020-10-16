import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <h1>Logo</h1>
      </div>
      <div className="header__search">
        <input type="text" />
        <button>Icon</button>
      </div>
      <div className="header__rightlogos">
        <h1>Right logos</h1>
      </div>
    </div>
  );
}

export default Header;
