import React, { useState } from "react";
import "../css/PageCardCarousel.css";

const cards = [
  {
    img: "https://images.ucook.co.za/images/width=768|encoding=jpeg/3b5e3782/3b5e3782-00ee-4168-bff8-a5e6db93ca45.jpeg",
    title: "Wine",
    description: "Top wines at cellar door prices. Get 25% off when you buy any 3 bottles. Cheers!",
    link: "/wine",
    linkText: "Shop the Range",
  },
  {
    img: "https://images.ucook.co.za/images/width=768|encoding=jpeg/f95b3982/f95b3982-8474-4733-ae38-a6e6a81217d9.jpeg",
    title: "Craft Meals",
    description: "No time? No problem. These ready-made meals go from freezer to plate in minutes.",
    link: "/frozen/craft-meal",
    linkText: "Discover Craft Meals",
  },
  {
    img: "https://images.ucook.co.za/images/width=768|encoding=jpeg/6b5bea1b/6b5bea1b-4dc5-4ecf-8ba6-69b07f03b21d.jpeg",
    title: "UCOOK Market",
    description: "From sauces to snacks and all your pantry staples, stock up with UCOOK’s curated Market range.",
    link: "/market",
    linkText: "Explore UCOOK Market",
  },
  {
    img: "https://images.ucook.co.za/images/width=768|encoding=jpeg/28fd7e73/28fd7e73-88dd-4ac5-af46-c3faf05f1716.jpeg",
    title: "Craft Dessert",
    description: "Chocolatey, zesty, fruity or sweet. These handmade desserts are ready when you are.",
    link: "/frozen/craft-dessert",
    linkText: "Explore Craft Desserts",
  },
  // If you want to support more, just add additional cards here
];

const VISIBLE_CARDS = 4;

export default function PageCardCarousel() {
  const [start, setStart] = useState(0);

  const canGoLeft = start > 0;
  const canGoRight = start + VISIBLE_CARDS < cards.length;

  function prevSlide() {
    if (canGoLeft) setStart(start - 1);
  }
  function nextSlide() {
    if (canGoRight) setStart(start + 1);
  }

  // Pad with empty for fewer than VISIBLE_CARDS
  const visible = cards.slice(start, start + VISIBLE_CARDS);
  while (visible.length < VISIBLE_CARDS) {
    visible.push(null);
  }

  return (
    <section className="PageCardSection">
      <h4 className="PageCardSection__Heading">Whatever you’re craving, we’ve got you covered</h4>
      <div className="PageCardSection__Carousel">
        <button className="PageCardSection__NavBtn left" onClick={prevSlide} disabled={!canGoLeft} aria-label="Previous slides">
          <svg height="32" width="32" viewBox="0 0 512 512"><path d="M328 112 184 256l144 144" stroke="#333" strokeWidth="48" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <div className="PageCardSection__CarouselSlides multiple">
          {visible.map((card, i) =>
            card ? (
              <div className="PageCard" key={card.title}>
                <img className="PageCard__Image" src={card.img} alt={card.title} />
                <div className="PageCard__Content">
                  <h5 className="PageCard__Title">{card.title}</h5>
                  <div className="PageCard__Description">{card.description}</div>
                  <a href={card.link} target="_self" className="PageCard__Link">{card.linkText}</a>
                </div>
              </div>
            ) : (
              <div className="PageCard empty" key={i} />
            )
          )}
        </div>
        <button className="PageCardSection__NavBtn right" onClick={nextSlide} disabled={!canGoRight} aria-label="Next slides">
          <svg height="32" width="32" viewBox="0 0 512 512"><path d="m184 112 144 144-144 144" stroke="#333" strokeWidth="48" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>
      {/* Dots (optional for multiple visible) */}
      <div className="PageCardSection__Dots">
        {Array.from({ length: cards.length - VISIBLE_CARDS + 1 }).map((_, i) => (
          <button
            key={i}
            className={`PageCardSection__DotBtn${i === start ? " active" : ""}`}
            onClick={() => setStart(i)}
            aria-label={`Show cards ${i + 1}-${i + VISIBLE_CARDS}`}
          ></button>
        ))}
      </div>
    </section>
  );
}
