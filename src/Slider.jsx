import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

function Slider() {
  return (
    <Carousel fade>

      {/* Slide 1 */}

      <Carousel.Item>

        <div
          style={{
            background:
              "linear-gradient(to right,#fff7e6,#fef3c7)",
            minHeight: "550px",
          }}
        >
          <div className="container">

            <div className="row align-items-center">

              <div className="col-lg-6">

                <span className="badge bg-success mb-3">
                  100% Natural
                </span>

                <h1 className="display-4 fw-bold">
                  Pure Groundnut Oil
                </h1>

                <p className="lead">
                  Traditional cold pressed oil
                  made from premium quality
                  groundnuts.
                </p>

                <button className="btn btn-success btn-lg me-3">
                  Shop Now
                </button>

                <button className="btn btn-outline-success btn-lg">
                  Learn More
                </button>

              </div>

              <div className="col-lg-6 text-center">

                <img
                  src="/groundnutoil.png"
                  alt="Groundnut Oil"
                  className="img-fluid"
                  style={{
                    maxHeight: "450px",
                  }}
                />

              </div>

            </div>

          </div>

        </div>

      </Carousel.Item>

      {/* Slide 2 */}

      <Carousel.Item>

        <div
          style={{
            background:
              "linear-gradient(to right,#f8fff4,#e8f5e9)",
            minHeight: "550px",
          }}
        >
          <div className="container">

            <div className="row align-items-center">

              <div className="col-lg-6">

                <span className="badge bg-success mb-3">
                  Fresh & Pure
                </span>

                <h1 className="display-4 fw-bold">
                  Coconut Oil
                </h1>

                <p className="lead">
                  Rich in nutrients and naturally
                  extracted for healthy cooking.
                </p>

                <button className="btn btn-success btn-lg me-3">
                  Shop Now
                </button>

              </div>

              <div className="col-lg-6 text-center">

                <img
                  src="/coconutoil.png"
                  alt="Coconut Oil"
                  className="img-fluid"
                  style={{
                    maxHeight: "450px",
                  }}
                />

              </div>

            </div>

          </div>

        </div>

      </Carousel.Item>

      {/* Slide 3 */}

      <Carousel.Item>

        <div
          style={{
            background:
              "linear-gradient(to right,#fff8e1,#fff3cd)",
            minHeight: "550px",
          }}
        >
          <div className="container">

            <div className="row align-items-center">

              <div className="col-lg-6">

                <span className="badge bg-success mb-3">
                  Traditional Taste
                </span>

                <h1 className="display-4 fw-bold">
                  Sesame Oil
                </h1>

                <p className="lead">
                  Traditional sesame oil packed
                  with natural goodness.
                </p>

                <button className="btn btn-success btn-lg">
                  Shop Now
                </button>

              </div>

              <div className="col-lg-6 text-center">

                <img
                  src="/sesameoil.png"
                  alt="Sesame Oil"
                  className="img-fluid"
                  style={{
                    maxHeight: "450px",
                  }}
                />

              </div>

            </div>

          </div>

        </div>

      </Carousel.Item>

    </Carousel>
  );
}

export default Slider;