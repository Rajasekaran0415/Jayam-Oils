import "bootstrap/dist/css/bootstrap.min.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

function Contact() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h1 className="display-4 fw-bold" style={{ color: "#2E7D32" }}>
            Contact Us
          </h1>
          <p className="text-muted fs-5 mt-3">
            We would love to hear from you. Get in touch with us!
          </p>
        </div>
      </section>

      <section className="container py-5">
        <div className="row g-5">
          {/* Contact Info */}
          <div className="col-lg-6">
            <h2 className="fw-bold mb-4">Get In Touch</h2>
            <div className="d-flex align-items-start gap-3 mb-4">
              <FaPhone size={24} className="text-success mt-1" />
              <div>
                <h5>Phone</h5>
                <p className="text-muted mb-0">+91 6369803832</p>
              </div>
            </div>
            <div className="d-flex align-items-start gap-3 mb-4">
              <FaEnvelope size={24} className="text-success mt-1" />
              <div>
                <h5>Email</h5>
                <p className="text-muted mb-0">info@jayamoils.com</p>
              </div>
            </div>
            <div className="d-flex align-items-start gap-3 mb-4">
              <FaMapMarkerAlt size={24} className="text-success mt-1" />
              <div>
                <h5>Address</h5>
                <p className="text-muted mb-0">
                  Tiruvannamalai, Tamil Nadu, India
                </p>
              </div>
            </div>
            <div className="d-flex align-items-start gap-3 mb-4">
              <FaClock size={24} className="text-success mt-1" />
              <div>
                <h5>Business Hours</h5>
                <p className="text-muted mb-0">
                  Mon - Sat: 9:00 AM - 7:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-6">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <h3 className="fw-bold mb-4">Send Us a Message</h3>
                <form>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Your Name</label>
                    <input type="text" className="form-control form-control-lg" placeholder="Enter your name" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Email Address</label>
                    <input type="email" className="form-control form-control-lg" placeholder="Enter your email" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Phone Number</label>
                    <input type="tel" className="form-control form-control-lg" placeholder="Enter your phone number" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Message</label>
                    <textarea className="form-control form-control-lg" rows="4" placeholder="Write your message here..."></textarea>
                  </div>
                  <button type="submit" className="btn btn-success btn-lg w-100">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
