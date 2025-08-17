import React from "react";
import "../css/Footer.css"; 

export default function Footer() {
  return (
    <footer className="footer-container">
      {/* Newsletter Signup */}
      <form className="footer-newsletter" autoComplete="on">
        <span className="footer-heading">KEEP IN TOUCH WITH OUR KITCHEN</span>
        <input
          className="footer-input"
          type="email"
          name="email"
          placeholder="Enter your email"
          autoComplete="on"
        />
        <button className="footer-btn" type="submit">
          SIGN ME UP
        </button>
      </form>

      <div className="footer-main">
        <div className="footer-links">
          <div className="footer-link-column">
            <div className="footer-heading">PRODUCT</div>
            <a href="/meal-kit/">MEAL KITS</a>
            <a href="/frozen/">FROZEN</a>
            <a href="/wine/">WINE</a>
            <a href="/market/">MARKET</a>
          </div>
          <div className="footer-link-column">
            <div className="footer-heading">COMPANY</div>
            <a href="/cms/about-ucook">ABOUT</a>
            <a href="https://www.silvertreebrands.com/careers-silvertreebrands">CAREERS</a>
            <a href="/cms/recycle">RECYCLE</a>
          </div>
          <div className="footer-link-column">
            <div className="footer-heading">SUPPORT</div>
            <a href="https://support.ucook.co.za/hc/en-us">FAQ’S</a>
            <a href="https://support.ucook.co.za/hc/en-us/requests/new">CONTACT</a>
            <div>
              <i className="fa fa-phone phone-icon" />{" "}
              <a href="tel:0214474424">021 447 4424</a>
            </div>
            <div>
              <i className="fa fa-whatsapp whatsapp-icon" />{" "}
              <a href="https://wa.me/27720201555?text=GoodDay%20UCOOK%20,%20">
                072 020 1555
              </a>
            </div>
          </div>
          <div className="footer-link-column footer-app-and-social">
            <div className="footer-apps">
              <a
                href="https://apps.apple.com/us/app/ucook/id1669025266"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://images.ucook.co.za/images/width=1600|scale=COVER|encoding=svg/becd4fdb/becd4fdb-1e75-472f-b09f-b7a8dbf24276.svg"
                  alt="Download on the App Store"
                  className="footer-store"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=io.gonative.android.jaboxo&hl=en_ZA&gl=US"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://images.ucook.co.za/images/width=1600|scale=COVER|encoding=jpeg/6ec36f50/6ec36f50-ce23-43c9-ae48-990ca5481a66.jpeg"
                  alt="Get it on Google Play"
                  className="footer-store"
                />
              </a>
            </div>
            <div className="footer-social">
              <a
                href="https://www.facebook.com/ucooksa/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <i className="fa fa-facebook-square" />
              </a>
              <a
                href="https://www.instagram.com/ucooksa/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="fa fa-instagram" />
              </a>
              <a
                href="https://twitter.com/UCOOKSA"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <i className="fa fa-twitter" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCi02eriePmaXaj-wyoeGGmg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <i className="fa fa-youtube" />
              </a>
              <a
                href="https://www.tiktok.com/@ucooksouthafrica"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <i className="fa fa-music" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom-bar">
          <span>
            © UCOOK. All rights reserved by The Supper Society Proprietary Limited | Liquor License: WCP/042073 | GAU/10615
          </span>
          <span className="footer-bottom-links">
            <a href="#">Terms & Conditions</a> | <a href="#">Privacy Policy</a> | <a href="#">Referral Terms</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
