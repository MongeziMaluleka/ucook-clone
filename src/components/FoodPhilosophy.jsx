import React from "react";
import "../css/FoodPhilosophy.css";

const items = [
  {
    title: "We’re All About Local",
    text: "Homegrown meats and produce are what we’re all about and we source only the freshest local ingredients."
  },
  {
    title: "Help Us Put Farmers First",
    text: "We support small-batch farmers and upskilling projects to give back to local communities with every order."
  },
  {
    title: "We Keep It Seasonal",
    text: "We’re committed to improving the food system and letting you discover incredible new seasonal produce."
  }
];

const FoodPhilosophy = () => (
  <section className="FoodPhilosophy">
    <h2 className="FoodPhilosophy__heading">Our food philosophy</h2>
    <div className="FoodPhilosophy__items">
      {items.map(item => (
        <div className="FoodPhilosophy__card" key={item.title}>
          <div className="FoodPhilosophy__cardTitle">{item.title}</div>
          <div className="FoodPhilosophy__cardText">{item.text}</div>
        </div>
      ))}
    </div>
  </section>
);

export default FoodPhilosophy;
