import React from "react";
import "../css/OurStory.css";

const OurStory = () => (
  <section className="OurStory">
    <div className="OurStory__bg" />
    <div className="OurStory__card">
      <div className="OurStory__subheading">Our story</div>
      <h2 className="OurStory__title">Making mealtimes better since 2014</h2>
      <p className="OurStory__desc">
        UCOOK started when two friends, David Torr and Chris Verster Cohen, wanted to find a more convenient way to help people make dinner. Within two years, UCOOK took the country by storm as South Africa’s favourite meal-kit delivery company.
      </p>
      <a className="OurStory__cta" href="#" tabIndex={0}>LEARN MORE</a>
    </div>
  </section>
);

export default OurStory;
