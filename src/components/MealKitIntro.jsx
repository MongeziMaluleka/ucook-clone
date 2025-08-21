import React from "react";
import "../css/MealKitIntro.css";

const MealKitIntro = () => (
  <div className="MealKitIntro">
    {/* Hero Section */}
    <div className="MealKitIntro__hero">
      <div className="MealKitIntro__tagline">
        Sorting out mealtimes is simple again
      </div>
      <h1 className="MealKitIntro__title">
        Try Meal Kits and get what you need, delivered.
      </h1>
      <p className="MealKitIntro__subtitle">
        Feeling uninspired? Our chefs are here to help. Every week, we design 28 new dinner and 4 new lunch dishes that you can pick from, and deliver what you need to prepare them.
      </p>
    </div>

    {/* Two-column content */}
    <div className="MealKitIntro__columnsBg">
      <div className="MealKitIntro__columns">
        {/* Image */}
        <div className="MealKitIntro__imageWrap">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=clip&w=600&q=80"
            alt="Meal Kit Selection on Mobile"
            className="MealKitIntro__image"
          />
        </div>
        {/* Text */}
        <div className="MealKitIntro__textBlock">
          <div className="MealKitIntro__blockLabel">
            New recipes every week
          </div>
          <h2 className="MealKitIntro__blockTitle">
            Pick what you want to cook
          </h2>
          <p className="MealKitIntro__blockText">
            Get started by selecting the default category that best suits your lifestyle – Adventurous Foodie, Quick & Easy, Calorie Conscious, Carb Conscious, Fan Faves, Veggie, or Simple & Save – and we’ll recommend the dishes that suit your dietary preferences. You will still be able to pick and choose your recipes as you like each week, but your default category covers you when you’re too busy to choose! Then choose how many people you’d typically like to cook for (1, 2, 3 or 4) and how many dishes you’d like to receive each week (2, 3, 4 or more). Change of plans? You can edit the number of dishes and portion size as you need or edit your default category at any time.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default MealKitIntro;
