import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <div className="row">

          {/* Company Info */}

          <div className="col-lg-4 col-md-6 mb-4">

            <h3 className="footer-title">
              Jayam Oils
            </h3>

            <p>
              Pure, Natural and Traditional
              Cold Pressed Oils made with
              care for a healthier lifestyle.
            </p>

          </div>

          {/* Quick Links */}

          <div className="col-lg-2 col-md-6 mb-4">

            <h5>Quick Links</h5>

            <ul className="list-unstyled">

              <li>
                <a href="#">Home</a>
              </li>

              <li>
                <a href="#">Products</a>
              </li>

              <li>
                <a href="#">About Us</a>
              </li>

              <li>
                <a href="#">Blogs</a>
              </li>

              <li>
                <a href="#">Contact</a>
              </li>

            </ul>

          </div>

          {/* Products */}

          <div className="col-lg-3 col-md-6 mb-4">

            <h5>Our Products</h5>

            <ul className="list-unstyled">

              <li>Groundnut Oil</li>

              <li>Coconut Oil</li>

              <li>Sesame Oil</li>

              <li>Cold Pressed Oils</li>

            </ul>

          </div>

          {/* Contact */}

          <div className="col-lg-3 col-md-6 mb-4">

            <h5>Contact Us</h5>

            <p>
              <FaPhone /> +91 9876543210
            </p>

            <p>
              <FaEnvelope /> info@jayamoils.com
            </p>

            <p>
              <FaMapMarkerAlt /> Chennai, Tamil Nadu
            </p>

            <div className="social-icons">

              <a href="#">
                <FaFacebook />
              </a>

              <a href="#">
                <FaInstagram />
              </a>

              <a href="#">
                <FaYoutube />
              </a>

            </div>

          </div>

        </div>

        <hr />

        <div className="text-center">

          <p>
            © 2026 Jayam Oils.
            All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;