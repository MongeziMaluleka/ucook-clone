import React from "react";
import "../css/HowItWorksSection.css"; // or use a WhyUcookSection.css if you've split styles

export default function WhyUcookSection() {
  return (
    <div className="PageSection" id="WhyUCOOK">
      <h3 className="heading3">Why Choose UCOOK?</h3>
      <div className="PageTilesWrapper">
        {/* Tile: Convenient delivery */}
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
                    alt="Convenient delivery"
                  />
                </picture>
              </div>
            </div>
            <h4 className="heading4">Convenient delivery</h4>
            <div className="Paragraph">
              Enjoy the convenience of weekly deliveries to your door, with no more meal planning or food waste.
            </div>
          </div>
        </div>
        {/* Tile: Saves you time */}
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
                    alt="Saves you time"
                  />
                </picture>
              </div>
            </div>
            <h4 className="heading4">Saves you time</h4>
            <div className="Paragraph">
              Spend less time shopping and more time enjoying delicious meals with your loved ones.
            </div>
          </div>
        </div>
        {/* Tile: Fresh ingredients */}
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
                    alt="Fresh ingredients"
                  />
                </picture>
              </div>
            </div>
            <h4 className="heading4">Fresh ingredients</h4>
            <div className="Paragraph">
              We source the freshest ingredients from local suppliers, ensuring quality and sustainability.
            </div>
          </div>
        </div>
        {/* Tile: Variety of meals */}
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
                    alt="Variety of meals"
                  />
                </picture>
              </div>
            </div>
            <h4 className="heading4">Variety of meals</h4>
            <div className="Paragraph">
              Choose from a wide range of meal options, including vegetarian, low-carb, and family-friendly recipes.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
