import React from "react";
import "../css/BannerSection.css";

const BannerSection = () => (
  <section className="BannerSection">
    <div className="BannerSection__background" />
    <div className="BannerSection__content">
      <h1>Meal Kits</h1>
      <p>Cooking great meals has never been easier</p>
      <a
        className="BannerSection__cta"
        href="https://ucook.co.za/meal-kit/"
        target="_blank"
        rel="noopener noreferrer"
      >
        SEE THIS WEEK’S MENU
      </a>
    </div>
  </section>
);

export default BannerSection;
