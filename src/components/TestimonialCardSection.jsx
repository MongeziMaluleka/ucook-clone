import React from "react";
import "../css/TestimonialCardSection.css";
// Star SVG icon as a React component
function StarIcon() {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 512 512"
      color="#FCD266"
      height="1em"
      width="1em"
      className="star-icon"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M394 480a16 16 0 0 1-9.39-3L256 383.76
      127.39 477a16 16 0 0 1-24.55-18.08L153 310.35
      23 221.2a16 16 0 0 1 9-29.2h160.38l48.4-148.95a16
      16 0 0 1 30.44 0l48.4 149H480a16 16 0 0 1 9.05
      29.2L359 310.35l50.13 148.53A16 16 0 0 1 394 480z"></path>
    </svg>
  );
}

// A single testimonial card
function TestimonialCard({ name, rating, text }) {
  return (
    <div className="page-text-card">
      <div className="sub-title">{name}</div>
      <div className="star-row">
        {[...Array(rating)].map((_, idx) => (
          <StarIcon key={idx} />
        ))}
      </div>
      <div className="testimonial-content">“{text}”</div>
    </div>
  );
}

// The testimonials section
export default function TestimonialCardSection() {
  const testimonials = [
    {
      name: "Amanda R",
      rating: 5,
      text: "We just love UCOOK, even my teens have started saying UCOOK is the bomb!",
    },
    {
      name: "Angelique N",
      rating: 5,
      text: "Keep doing what you do! The food is delicious and easy to cook. I honestly cannot brag about it enough. Every meal has so much flavour and tastes amazing!",
    },
    {
      name: "Mignon K",
      rating: 5,
      text: "Loving that I don't have to plan, buy and prepare a week's meals. There is 0 food wastage. Thank you for helping us with super easy and delicious dinners!",
    },
  ];

  return (
    <section className="testimonial-section">
      {testimonials.map((testimonial, idx) => (
        <TestimonialCard {...testimonial} key={testimonial.name + idx} />
      ))}
    </section>
  );
}
