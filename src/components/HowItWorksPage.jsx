import React, { useState } from "react";
import "../css/HowItWorksPage.css";

// Carousel data
const steps = [
  {
    title: "You Choose",
    description:
      "Choose from 28 new dinner recipes weekly and explore lunch, wine, market, and frozen meals. Orders close 9am Wed - pause anytime!"
  },
  {
    title: "We Deliver",
    description:
      "Get a weekly delivery of top quality, perfectly-portioned fresh produce, shipped in an insulated cold box, straight to your door."
  },
  {
    title: "You Cook",
    description:
      "Get simple-to-follow recipes and create restaurant quality dishes in your own home with no more meal planning or food waste."
  }
];

export default function HowItWorksPage() {
  const [idx, setIdx] = useState(0);

  function goTo(i) {
    setIdx(i);
  }
  function prev() {
    setIdx(i => (i === 0 ? steps.length - 1 : i - 1));
  }
  function next() {
    setIdx(i => (i === steps.length - 1 ? 0 : i + 1));
  }

  return (
    <main className="PageCardSection__Container">
      <h4 className="PageCardSection__Heading">How it works</h4>
      <div className="PageCardSection__CarouselContainer">
        <div className="Carousel">
          <button className="Carousel__Arrow left" onClick={prev} aria-label="Previous step">
            &#8592;
          </button>
          <div className="Carousel__Slides">
            {steps.map((step, i) => (
              <div
                className={`Carousel__Slide${i === idx ? " active" : ""}`}
                key={step.title}
                style={{ display: i === idx ? "block" : "none" }}
              >
                <div className="PageCard__Container">
                  <div className="PageCard__TitleContainer">
                    <h5 className="PageCard__Title">{step.title}</h5>
                  </div>
                  <div className="PageCard__Rule"></div>
                  <div className="PageCard__Description">{step.description}</div>
                </div>
              </div>
            ))}
          </div>
          <button className="Carousel__Arrow right" onClick={next} aria-label="Next step">
            &#8594;
          </button>
        </div>
        {/* Dot navigation */}
        <div className="Carousel__Dots">
          {steps.map((_, i) => (
            <button
              key={i}
              className={`Carousel__Dot${i === idx ? " active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
