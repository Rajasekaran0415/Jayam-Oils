import "bootstrap/dist/css/bootstrap.min.css";

function HeroSection() {
  return (
    <section
      className="container-fluid py-5"
      style={{
        background:
          "linear-gradient(to right, #f8fff4, #fffaf0)",
      }}
    >
      <div className="container">

        <div className="row align-items-center">

          {/* Left Side */}

          <div className="col-lg-6">

            <span className="badge bg-success px-3 py-2 mb-3">
              100% Natural & Cold Pressed
            </span>

            <h1
              className="fw-bold mb-4"
              style={{ fontSize: "3.5rem" }}
            >
              Pure Tradition
              <br />
              In Every Drop
            </h1>

            <p
              className="lead text-muted mb-4"
            >
              Experience the richness of
              traditional cold pressed oils made
              from premium quality seeds.
              Healthy, chemical-free and packed
              with natural goodness.
            </p>

            <div className="mb-4">

              <span className="me-4">
                ✅ 100% Natural
              </span>

              <span className="me-4">
                ✅ No Chemicals
              </span>

              <span>
                ✅ Cold Pressed
              </span>

            </div>

            <button
              className="btn btn-success btn-lg me-3"
            >
              Shop Now
            </button>

            <button
              className="btn btn-outline-success btn-lg"
            >
              Learn More
            </button>

          </div>

          {/* Right Side */}

          <div className="col-lg-6 text-center">

            <img
              src="https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?w=800"
              alt="Cold Pressed Oil"
              className="img-fluid"
              style={{
                maxHeight: "500px",
              }}
            />

          </div>

        </div>

      </div>
    </section>
  );
}

export default HeroSection;