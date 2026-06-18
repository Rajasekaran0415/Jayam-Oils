import "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaShoppingCart,
  FaUserCircle,
  FaSearch,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm px-4 py-3">
      <div className="container-fluid">

        {/* Logo Section */}
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img
            src="./public/favicon.jpeg"
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
                fontFamily: "Georgia",
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
        </a>

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
          <div
            className="d-flex align-items-center"
            style={{ cursor: "pointer" }}
          >
            <FaShoppingCart size={28} color="#2E7D32" />
            
            <span className="ms-2 fw-semibold">Cart</span>
          </div>

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
    </nav>
  );
};

export default Navbar;