import React from "react";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-image-container">
          <img
            className="hero-image-content"
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
            alt="Tasty meal"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <div className="hero-text-container">
          <h1 className="hero-title">Dinner, made easy</h1>
          <p className="hero-subtitle">
            Get 30% off your first Meal Kit order with code #WELCOME30
          </p>
          <a className="hero-button" href="#">
            <span className="hero-button-link">Let's Get Started</span>
          </a>
        </div>
      </div>
    </section>
  );
}
