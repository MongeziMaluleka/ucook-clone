import React from "react";
import "../css/NavBar.css";


export default function NavBar() {
  return (
    <header>
      <nav className="NavBar_Container">
        {/*logo and nav items here */}
        <div className="NavBar_LogoContainer">
          <img className="NavBar_LogoImage" src="/path/to/logo.png" alt="Logo" />
        </div>
        <div className="NavBar_ItemsContainer">
          <div className="NavBar_ItemContainer">
            <a className="Navigation_Item" href="/about">About</a>
          </div>
          <div className="NavBar_ItemContainer">
            <a className="Navigation_Item" href="/menu">Menu</a>
          </div>
          <div className="NavBar_ItemContainer">
            <a className="Navigation_Item" href="/signup">Sign Up</a>
          </div>
        </div>
      </nav>
    </header>
  );
}
