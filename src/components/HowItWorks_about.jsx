import React from "react";
import "../css/HowItWorks_about.css";

const steps = [
  {
    title: "You Choose",
    description: "Choose from 28 new dinner recipes weekly and explore lunch, wine, market, and frozen meals. Orders close 9am Wed – pause anytime!"
  },
  {
    title: "We Deliver",
    description: "Get a weekly delivery of top quality, perfectly-portioned fresh produce, shipped in an insulated cold box, straight to your door."
  },
  {
    title: "You Cook",
    description: "Get simple-to-follow recipes and create restaurant quality dishes in your own home with no more meal planning or food waste."
  }
];

const HowItWorks_about = () => (
  <section className="HowItWorks">
    <h2 className="HowItWorks__heading">How it works</h2>
    <div className="HowItWorks__steps">
      {steps.map(step => (
        <div className="HowItWorks__card" key={step.title}>
          <div className="HowItWorks__cardTitle">{step.title}</div>
          <div className="HowItWorks__cardText">{step.description}</div>
        </div>
      ))}
    </div>
  </section>
);

export default HowItWorks_about;
