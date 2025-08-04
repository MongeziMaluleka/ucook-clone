import React from "react";
import "./NavBar.css";

export default function NavBar() {
  return (
    <header>
      <div className="NavBar_Container">
        <div className="NavBar_LogoContainer">
          <img className="NavBar_LogoImage" src="/logo192.png" alt="UCook" height={35} />
        </div>
        <div className="NavBar_ItemsContainer">
          <div className="NavBar_LeftItemsContainer">
            <div className="NavBar_ItemContainer"><a className="Navigation_Item" href="#">Meal Kits</a></div>
            {/* Add the rest of your nav items here */}
          </div>
          <div className="NavBar_RightItemsContainer">
            <div className="NavBar_ItemContainer"><a className="Navigation_Item" href="#">Login</a></div>
          </div>
        </div>
      </div>
    </header>
  );
}
