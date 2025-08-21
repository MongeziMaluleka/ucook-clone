import React from "react";
import "../css/CookLikeAchef.css";

const CookLikeAchef = () => (
  <section className="CookLikeAchef">
    <div className="CookLikeAchef__content">
      <div className="CookLikeAchef__text">
        <div className="CookLikeAchef__lead">
          You’ll go pro in no time
        </div>
        <h2 className="CookLikeAchef__title">
          Cook like a chef, quick quick!
        </h2>
        <p className="CookLikeAchef__desc">
          Our Food Team is made up of expert culinary talent who craft a new menu every week based on seasonality. Every recipe is designed to be simple, and ready in as little as 20 minutes. Discover new favourites, experiment with international cuisines and cook like a pro right at home.
        </p>
      </div>
      <div className="CookLikeAchef__imgWrap">
        <img
          src="your-image-url.jpg"
          alt="Home cooking demonstration"
          className="CookLikeAchef__img"
        />
      </div>
    </div>
  </section>
);

export default CookLikeAchef;
