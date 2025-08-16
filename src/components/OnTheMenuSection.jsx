import React from "react";
import "../css/OnTheMenuSection.css";

const categories = [
  "Adventurous Foodie",
  "Quick & Easy",
  "Fan Faves",
  "Vegetarian",
  "New Calorie Conscious",
  "Carb Conscious",
  "Simple & Save",
];

const meals = [
  "Thai Chicken Tenders 1",
  "Thai Chicken Tenders 2",
  "Thai Chicken Tenders 3",
  "Thai Chicken Tenders 4",
  "Thai Chicken Tenders 5",
  "Thai Chicken Tenders 6",
  "Thai Chicken Tenders 7",
];

export default function OnTheMenuSection() {
  return (
    <section className="OnMenuSection">
      <h3 className="heading3">On the Menu This Week</h3>
      <div className="MenuCategories">
        {categories.map((cat) => (
          <button type="button" className="MenuCategoryBtn" key={cat}>
            {cat}
          </button>
        ))}
      </div>
      <div className="MenuMealsList">
        {meals.map((meal) => (
          <div className="MenuMealCard" key={meal}>{meal}</div>
        ))}
      </div>
    </section>
  );
}


