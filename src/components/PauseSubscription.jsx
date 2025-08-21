import React from "react";
import "../css/PauseSubscription.css";

const PauseSubscription = () => (
  <section className="PauseSubscription">
    <div className="PauseSubscription__content">
      <div className="PauseSubscription__subheading">
        A flexible subscription
      </div>
      <h2 className="PauseSubscription__title">
        Pause your Meal Kit at any time
      </h2>
      <p className="PauseSubscription__desc">
        Not in the mood to cook next week? No problem. You can pause your Meal kit plan if something else comes up or you need a break from cooking. Whenever you want, you can change your delivery address or the number of people you’re cooking for. Get in touch and we’ll walk you through it.
      </p>
    </div>
    <div className="PauseSubscription__imageWrap">
      <img
        src="your-image-url.jpg"
        alt="Pausing meal kit plan"
        className="PauseSubscription__image"
      />
    </div>
  </section>
);

export default PauseSubscription;
