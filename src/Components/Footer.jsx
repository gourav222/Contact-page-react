import "./Footer.css";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram (1).png";
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter.png";
import youtube from "../images/youtube.png";
import aeronopay from "../images/logo---.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="disclaimer">
        <h1>Disclaimer:</h1>
        <p>
          Please do not share your AeronPay Wallet password, Credit/Debit card
          pin, other confidential information with anyone even if he/she claims
          to be from AeronPay. We advise our customers to completely ignore such
          communications & report to us at disputes@aeronpay.in
        </p>
      </div>

      <div className="aeronpay">
        <div className="aeronpay-logo">
          <img src={aeronopay} alt="" />
          <p>
            AeronPay Wallet is India's leading payment solution with the largest
            digital services and mobile commerce platform.
          </p>
        </div>

        <div className="footer-links">
          <div id="footer-links-div-1">
            <h2>Compamy</h2>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Careers</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div id="footer-links-div-2">
            <div>
              <h2>Solutions</h2>
              <ul>
                <li>Contact</li>
                <li>Blogs</li>
                <li>Support</li>
                <li>Faqs</li>
              </ul>
            </div>
          </div>
          <div id="footer-links-div-3">
            <div>
              <h2>Service</h2>
              <ul>
                <li>Merchant</li>
                <li>Distributor</li>
                <li>Franchise</li>
              </ul>
            </div>
          </div>
          <div id="footer-links-div-4">
            <div>
              <h2>Policies</h2>
              <ul>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Grievance Policy</li>
                <li>Cancellation & Refund Policies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom">
        <div>
          <p>Copyright © 2018-2023 | AeronFly</p>
          <p>International Private Limited. All Right Reserved</p>
        </div>
        <div>
          <p>Made in "Bharat🇮🇳" with</p>
        </div>
        <div>
          <img src={facebook} alt="" />
          <img src={instagram} alt="" />
          <img src={twitter} alt="" />
          <img src={linkedin} alt="" />
          <img src={youtube} alt="" />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
