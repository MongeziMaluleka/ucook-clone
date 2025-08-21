import React from "react";
import "../css/FreshIngredients.css";

const FreshIngredients = () => (
  <section className="FreshIngredients">
    <div className="FreshIngredients__imageWrap">
      <img
        src="your-image-url.jpg"
        alt="Fresh ingredients delivery kit"
        className="FreshIngredients__image"
      />
    </div>
    <div className="FreshIngredients__content">
      <div className="FreshIngredients__subheading">
        Always fresh
      </div>
      <h2 className="FreshIngredients__title">
        Ethically sourced whole ingredients, delivered to your door
      </h2>
      <p className="FreshIngredients__desc">
        We like to keep it local, which is why we source our premium, ethically farmed ingredients from small-batch farmers and purveyors. We deliver’em to your home or work address in an insulated box complete with reusable and recyclable ice packs – they’ll stay cold for up to 12 hours to keep your ingredients as fresh as the minute they were picked.
      </p>
    </div>
  </section>
);

export default FreshIngredients;
