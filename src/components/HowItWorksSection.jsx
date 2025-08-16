import React from "react";
import "../css/HowItWorksSection.css";

/**
 * HowItWorksSection is a React component that renders a section explaining how the
 * UCook meal kit service works. It displays three tiles with icons, headings, and
 * paragraphs describing the three main steps of the service: choosing a meal
 * kit, receiving a delivery, and cooking the meal. The component also includes a
 * link to the FAQ section.
 *
 * @return {JSX.Element} The rendered HowItWorksSection component.
 */
export default function HowItWorksSection() {
  return (
    <div className="PageSection" id="Pages">
      <h3 className="heading">How does it work?</h3>
      <div className="PageTilesWrapper">
        {/* Tile 1 */}
        <div className="PageTile">
          <div className="PageTileCont">
            <div className="PageTileIconCont">
              <div className="ResponsiveImage">
                <picture className="ResponsiveImage">
                  <source
                    type="image/webp"
                    srcSet="https://images.ucook.co.za/images/width=128|encoding=svg/c7a62d3a/c7a62d3a-129b-4d9d-a3c6-70a3e3caab38.svg"
                  />
                  <img
                    src="https://images.ucook.co.za/images/width=128|encoding=svg/c7a62d3a/c7a62d3a-129b-4d9d-a3c6-70a3e3caab38.svg"
                    alt="UCOOK"
                    className="ResponsiveImage__ImageElement-sc-44rhg9-2 ldEEkM"
                  />
                </picture>
              </div>
            </div>
            <h4 className="heading4">1. You Choose</h4>
            <div className="Paragraph">
              Sign up, pick from 28 new dinner recipes every week and explore our
              range of lunch, wine, market, and frozen craft meals. Orders close
              9am Wed - pause at any time!
            </div>
          </div>
        </div>
        {/* Tile 2 */}
        <div className="PageTile">
          <div className="PageTileCont">
            <div className="PageTileIconCont">
              <div className="ResponsiveImage">
                <picture className="ResponsiveImage">
                  <source
                    type="image/webp"
                    srcSet="https://images.ucook.co.za/images/width=128|encoding=svg/4537368d/4537368d-7089-406f-b28f-5746af2f7e9d.svg"
                  />
                  <img
                    src="https://images.ucook.co.za/images/width=128|encoding=svg/4537368d/4537368d-7089-406f-b28f-5746af2f7e9d.svg"
                    alt="UCOOK"
                    className="ResponsiveImage__ImageElement-sc-44rhg9-2 ldEEkM"
                  />
                </picture>
              </div>
            </div>
            <h4 className="heading4">2. We Deliver</h4>
            <div className="Paragraph">
              Get a weekly delivery of top quality, perfectly-portioned fresh
              produce, shipped in an insulated cold box, straight to your door.
            </div>
          </div>
        </div>
        {/* Tile 3 */}
        <div className="PageTile">
          <div className="PageTileCont">
            <div className="PageTileIconCont">
              <div className="ResponsiveImage">
                <picture className="ResponsiveImage">
                  <source
                    type="image/webp"
                    srcSet="https://images.ucook.co.za/images/width=128|encoding=svg/352325a7/352325a7-e47c-4cd9-bc6a-7d24777db685.svg"
                  />
                  <img
                    src="https://images.ucook.co.za/images/width=128|encoding=svg/352325a7/352325a7-e47c-4cd9-bc6a-7d24777db685.svg"
                    alt="UCOOK"
                  />
                </picture>
              </div>
            </div>
            <h4 className="heading4">3. You Cook</h4>
            <div className="Paragraph">
              Get simple-to-follow recipes and create restaurant quality dishes
              in your own home with no more meal planning or food waste.
            </div>
          </div>
        </div>
      </div>
      <div className="Paragraph FAQ">
        Got more questions? – check out our
        <a href="#" target="_self" className="ParagraphLink">
          FAQ&apos;s
        </a>
      </div>
    </div>
  );
}
