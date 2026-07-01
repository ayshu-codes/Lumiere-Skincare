import {
  FaInstagram,
  FaFacebookF,
  FaPinterestP,
  FaArrowRight,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-column brand">
          <h2>LUMIÈRE</h2>
          <span>SKINCARE</span>

          <p>
            Clean. Effective. Conscious.
            <br />
            Skincare that brings out your
            <br />
            best, naturally.
          </p>

          <div className="social-icons">
            <FaInstagram />
            <FaFacebookF />
            <FaPinterestP />
          </div>
        </div>

        {/* Shop */}
        <div className="footer-column">
          <h4>SHOP</h4>

          <ul>
            <li>All Products</li>
            <li>Cleansers</li>
            <li>Serums</li>
            <li>Moisturizers</li>
            <li>Sunscreens</li>
          </ul>
        </div>

        {/* About */}
        <div className="footer-column">
          <h4>ABOUT</h4>

          <ul>
            <li>Our Story</li>
            <li>Ingredients</li>
            <li>Sustainability</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Customer Care */}
        <div className="footer-column">
          <h4>CUSTOMER CARE</h4>

          <ul>
            <li>Contact Us</li>
            <li>Shipping & Returns</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-column newsletter">
          <h4>NEWSLETTER</h4>

          <p>
            Stay updated on new arrivals
            <br />
            and skincare tips.
          </p>

          <div className="newsletter-box">
            <input
              type="email"
              placeholder="Enter your email"
            />

            <button>
              <FaArrowRight />
            </button>
          </div>
        </div>

      </div>

      <div className="copyright">
        © 2026 Lumière Skincare. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;