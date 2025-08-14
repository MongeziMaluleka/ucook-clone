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
          <div className="NavBar_LeftItemsContainer">
            {[

              "Meal Kits",
              "Frozen",
              "Wine",
              "Market",
              "Weekend Boxes",
              "About UCook",
              "Partner With Us",
              "Gifts",
              "Deals"
              
            ].map(item =>(
              <div className="NavBar_ItemContainer" key={item}>
                <a className="Navigation_Item" href="#" target="_self">
                  {item}
                </a>
              </div>  
            ))}
          </div>
          <div className="NavBar_RightItemsContainer">
            <div className="NavBar_ItemsContainer">
              <a className="Navigation_Item" href="#" target="_self">
                Login
              </a>
            </div>
            <div className="NavBar_ItemContainer">
              <a className="Navigation_Item" href="#" target="_self">
                Sign Up
              </a>
            </div>
            <div className="NavBar_ItemContainer">
              <div className="Navigation_Item" href="#" target="_self">
                <span className="NavBar_CartIcon">
                  🛒
                </span>
              </div>
            </div>
            <div className="NavBar_ItemContainer">
              <div className="Navigation_Item" href="#" target="_self">
                <span className="User_Icon">
                  👤
                </span>  
              </div>
            </div>
        </div>
        </div>
      </nav>
    </header>
  );
}

