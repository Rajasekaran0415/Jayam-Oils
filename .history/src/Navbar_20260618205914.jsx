import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, NavLink } from "react-router-dom";
import {
  FaShoppingCart,
  FaUserCircle,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm px-4 py-3">
      <div className="container-fluid">

        {/* Logo Section */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="/favicon.jpeg"
            alt="logo"
            width="60"
            height="60"
            className="me-3"
          />

          <div>
            <h2
              className="m-0 fw-bold"
              style={{
                color: "#2E7D32",
                fontFamily: "cursive",
                letterSpacing: "1px",
              }}
            >
              Jayam Oils
            </h2>

            <small
              style={{
                color: "#777",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              Pure & Healthy Cooking Oils
            </small>
          </div>
        </Link>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={24} color="#2E7D32" /> : <FaBars size={24} color="#2E7D32" />}
        </button>

        {/* Collapsible section */}
        <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}>
          {/* Nav Links */}
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-3">
            <li className="nav-item">
              <NavLink className="nav-link fw-semibold" to="/" onClick={() => setMenuOpen(false)}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-semibold" to="/about" onClick={() => setMenuOpen(false)}>
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-semibold" to="/blog" onClick={() => setMenuOpen(false)}>
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-semibold" to="/contact" onClick={() => setMenuOpen(false)}>
                Contact Us
              </NavLink>
            </li>
          </ul>

          {/* Center Search Bar */}
          <div
            className="mx-auto"
            style={{
              width: "45%",
            }}
          >
            <div className="input-group">
              <input
                type="text"
                className="form-control rounded-start-pill border-end-0 py-3"
                placeholder="Search oils, brands, categories..."
                style={{
                  fontSize: "18px",
                }}
              />

              <span className="input-group-text bg-white rounded-end-pill border-start-0 px-4">
                <FaSearch size={20} color="#2E7D32" />
              </span>
            </div>
          </div>

          {/* Right Side Icons */}
          <div className="d-flex align-items-center gap-4">

            {/* Cart */}
            <Link
              to="/cart"
              className="d-flex align-items-center text-decoration-none"
              style={{ cursor: "pointer" }}
              onClick={() => setMenuOpen(false)}
            >
              <FaShoppingCart size={28} color="#2E7D32" />
              <span className="ms-2 fw-semibold" style={{ color: "#2E7D32" }}>Cart</span>
            </Link>

            {/* Profile */}
            <div
              className="d-flex align-items-center"
              style={{ cursor: "pointer" }}
            >
              <FaUserCircle size={32} color="#2E7D32" />
              <span className="ms-2 fw-semibold">Profile</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;