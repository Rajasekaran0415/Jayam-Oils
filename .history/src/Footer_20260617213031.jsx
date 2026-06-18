import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLeaf,
  FaTruck,
  FaFlask,
} from "react-icons/fa";

function Footer() {
  return (
    <footer
      className="text-light pt-5"
      style={{
        background:
          "linear-gradient(to right, #003d1f, #006633, #003d1f)",
      }}
    >
      <div className="container">

        <div className="row">

          {/* Company */}

          <div className="col-lg-4 mb-4">

            <h1
              className="fw-bold text-warning"
              style={{ fontFamily: "cursive" }}
            >
              Jayam Oils
            </h1>

            <h4 className="text-warning mt-4">
              Pure. Natural. Traditional.
            </h4>

            <p className="mt-4">
              We bring you 100% natural and traditional
              cold pressed oils made from carefully
              selected seeds. Good for your health and
              perfect for your family.
            </p>

          </div>

          {/* Quick Links */}

          <div className="col-lg-2 mb-4">

            <h4 className="text-warning">
              QUICK LINKS
            </h4>

            <ul className="list-unstyled mt-4">

              <li className="mb-3">Home</li>
              <li className="mb-3">Products</li>
              <li className="mb-3">About Us</li>
              <li className="mb-3">Blogs</li>
              <li className="mb-3">Offers</li>
              <li className="mb-3">Contact Us</li>

            </ul>

          </div>

          {/* Products */}

          <div className="col-lg-3 mb-4">

            <h4 className="text-warning">
              OUR PRODUCTS
            </h4>

            <ul className="list-unstyled mt-4">

              <li className="mb-3">
                Groundnut Oil
              </li>

              <li className="mb-3">
                Coconut Oil
              </li>

              <li className="mb-3">
                Sesame Oil
              </li>

              <li className="mb-3">
                Cold Pressed Oils
              </li>

              <li className="mb-3">
                Oil Gift Packs
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div className="col-lg-3 mb-4">

            <h4 className="text-warning">
              CONTACT US
            </h4>

            <div className="mt-4">

              <p>
                <FaPhone className="me-2" />
                +91 
              </p>

              <p>
                <FaEnvelope className="me-2" />
                info@jayamoils.com
              </p>

              <p>
                <FaMapMarkerAlt className="me-2" />
                Tiruvannamalai, Tamil Nadu
              </p>

            </div>

            <h5 className="mt-4">
              FOLLOW US
            </h5>

            <div className="d-flex gap-3 mt-3">

              <FaFacebookF size={25} />
              <FaInstagram size={25} />
              <FaYoutube size={25} />
              <FaWhatsapp size={25} />

            </div>

          </div>

        </div>

        {/* Features Row */}

        <hr />

        <div className="row text-center py-4">

          <div className="col-md-3">
            <FaLeaf
              size={40}
              className="text-warning mb-2"
            />
            <h5>100% Natural</h5>
            <p>No Chemicals</p>
          </div>

          <div className="col-md-3">
            <FaLeaf
              size={40}
              className="text-warning mb-2"
            />
            <h5>Cold Pressed</h5>
            <p>Traditional Method</p>
          </div>

          <div className="col-md-3">
            <FaFlask
              size={40}
              className="text-warning mb-2"
            />
            <h5>No Chemicals</h5>
            <p>Pure Extraction</p>
          </div>

          <div className="col-md-3">
            <FaTruck
              size={40}
              className="text-warning mb-2"
            />
            <h5>Fast Delivery</h5>
            <p>Safe & Secure</p>
          </div>

        </div>

        <hr />

        {/* Bottom */}

        <div className="text-center py-3">

          <p className="mb-0">
            © 2026 Jayam Oils. All Rights Reserved.
          </p>

          <div className="mt-2">

            <span className="mx-2">
              Privacy Policy
            </span>

            <span className="mx-2">
              Terms & Conditions
            </span>

            <span className="mx-2">
              Refund Policy
            </span>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;