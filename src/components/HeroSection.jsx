import React from "react";
import "../css/HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-container">
        {/* Hero text */}
        <div className="hero-text-container">
          <h1 className="hero-title">Dinner, made easy</h1>
          <p className="hero-subtitle">
            Get 30% off your first Meal Kit order with code <strong>#WELCOME30</strong>
          </p>
          <a className="hero-button" href="#get-started">
            Let's Get Started
          </a>
        </div>
        {/* Hero image */}
        <div className="hero-image-container">
          <picture>
            {/* Mobile */}
            <source
              type="image/webp"
              media="(max-width: 768px)"
              srcSet="https://images.ucook.co.za/images/height=480|encoding=webp/ba8cf40a/ba8cf40a-5c1f-4918-bf08-ec23f41f153e.webp"
            />
            {/* Tablet */}
            <source
              type="image/webp"
              media="(max-width: 1024px)"
              srcSet="https://images.ucook.co.za/images/width=1024|height=400|encoding=webp/ba8cf40a/ba8cf40a-5c1f-4918-bf08-ec23f41f153e.webp"
            />
            {/* Desktop */}
            <source
              type="image/webp"
              srcSet="https://images.ucook.co.za/images/width=1600|height=500|encoding=webp/ba8cf40a/ba8cf40a-5c1f-4918-bf08-ec23f41f153e.webp"
            />
            {/* Fallback JPEG */}
            <img
              src="https://images.ucook.co.za/images/width=768|encoding=jpeg/ba8cf40a/ba8cf40a-5c1f-4918-bf08-ec23f41f153e.jpeg"
              alt="UCOOK"
              className="hero-image-content"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
