import React from "react";
import "../css/Partnerships.css";

const Partnerships = () => (
  <div className="Partnerships">
    {/* Banner/Header Section */}
    <div className="Partnerships__banner">
      <img
        className="Partnerships__bannerImg"
        src="your-banner-image-url.jpg"
        alt="UCOOK Partnerships Banner"
      />
      <div className="Partnerships__logoText">
        <div className="Partnerships__logo">UCOOK</div>
        <div className="Partnerships__subtitle">Partnerships</div>
      </div>
    </div>

    {/* Main Content */}
    <div className="Partnerships__main">
      <h2 className="Partnerships__heading">
        Got a tasty idea? Tell us how you'd like to collaborate with us!
      </h2>
      <form className="Partnerships__form">
        <div className="Partnerships__row">
          <label>
            Company Name *
            <input type="text" required />
          </label>
        </div>
        <div className="Partnerships__row">
          <label>
            Job Title *
            <input type="text" required />
          </label>
        </div>
        <div className="Partnerships__row Partnerships__row--2col">
          <label>
            First Name
            <input type="text" />
          </label>
          <label>
            Last Name
            <input type="text" />
          </label>
        </div>
        <div className="Partnerships__row">
          <label>
            Email Address
            <input type="email" />
          </label>
        </div>
        <div className="Partnerships__row">
          <label>
            Phone
            <input type="tel" />
          </label>
        </div>
        <div className="Partnerships__row">
          <label>
            I would be interested in: *
            <select required>
              <option value="">Select</option>
              <option value="collaboration">Collaboration</option>
              <option value="sponsorship">Sponsorship</option>
              <option value="marketing">Marketing</option>
            </select>
          </label>
        </div>
        <div className="Partnerships__row">
          <label>
            Please give us a bit more information on how you would like to collaborate
            <textarea rows="2"></textarea>
          </label>
        </div>
        <div className="Partnerships__row">
          <label>
            Please let us know the size of your audience or quantities required
            <select>
              <option value="">Select</option>
              <option value="1-100">1-100</option>
              <option value="101-1000">101-1,000</option>
              <option value="1000+">1,000+</option>
            </select>
          </label>
        </div>
        <div className="Partnerships__row">
          <label>
            Please provide links to your primary social media channels and/or website
            <input type="text" />
          </label>
        </div>
        <div className="Partnerships__row">
          <label>
            What is your ideal timing for the partnership?
            <input type="text" />
          </label>
        </div>
        <div className="Partnerships__row">
          <label>
            Are you Human?
            <input type="checkbox" /> Verify you are human
          </label>
        </div>
        <div className="Partnerships__row">
          <button className="Partnerships__submit" type="submit">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  </div>
);

export default Partnerships;
