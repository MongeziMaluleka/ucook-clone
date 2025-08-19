import React, { useState } from "react";
import "../css/NavBar.css";

const navItems = [

  {
    label: "Meal Kits",
    children: [
      { label: "Meal Kit Menu", href: "#" },
      { label: "Plans & Pricing", href: "#" },
      { label: "Our Suppliers", href: "#" }
    ]
  },
  {
    label: "Frozen",
    children: [
      { label: "Craft Meals", href: "#" },
      { label: "Craft Dessert", href: "#" },
      { label: "Frozen FAQ", href: "#" }
    ]
  },
  { label: "Wine" },
  { label: "Market" },
  { label: "Weekend Boxes" },
  { label: "About UCook" },
  { label: "Partner With Us" },
  { label: "Gifts" },
  { label: "Deals" },
];
export default function NavBar() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <header>
      <nav className="NavBar_Container">
        {/*logo and nav items here */}
        <div className="NavBar_LogoContainer">
          <img className="NavBar_LogoImage" src="/path/to/logo.png" alt="Logo" />
        </div>
        {/* left nav items here */}
        <div className="NavBar_ItemsContainer">
          <div className="NavBar_LeftItemsContainer">
            {navItems.map((item, i) => (
              <div
                className="NavBar_ItemContainer"
                key={item.label}
                onMouseEnter={() => item.children ? setOpenIndex(i) : setOpenIndex(null)}
                onMouseLeave={() => setOpenIndex(null)}
              >
                <a className="Navigation_Item" href={item.href || '#'} target="_self">
                  {item.label}
                </a>
                {item.children && openIndex === i && (
                  <div className="NavBar_SubItemsContainer">
                    {item.children.map((subItem) => (
                      <a className="Navigation_SubItem" href={subItem.href} target="_self" key={subItem.label}>
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                )}
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

