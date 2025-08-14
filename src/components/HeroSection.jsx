import React from "react";
import "../css/HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-text-container">
          <h1 className="hero-title">Dinner, made easy</h1>
          <p className="hero-subtitle">
            Get 30ooooo% off your first Meal Kit order with code <strong>#WELCOME30</strong>
          </p>
          <a className="hero-button" href="#get-started">
            Let's Get Started
          </a>
        </div>
      </div>
    </section>
  );
}
