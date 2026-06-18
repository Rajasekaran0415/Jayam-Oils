import "bootstrap/dist/css/bootstrap.min.css";

function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h1 className="display-4 fw-bold" style={{ color: "#2E7D32" }}>
            About Jayam Oils
          </h1>
          <p className="text-muted fs-5 mt-3">
            Pure. Natural. Traditional. — Bringing the goodness of cold-pressed oils to your kitchen.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h2 className="fw-bold mb-4">Our Story</h2>
            <p className="text-muted fs-5">
              Jayam Oils is a family-run business based in Tiruvannamalai, Tamil Nadu, 
              dedicated to producing 100% pure cold-pressed cooking oils. For generations, 
              we have followed traditional methods that preserve the natural nutrients, 
              aroma, and flavor of every seed.
            </p>
            <p className="text-muted fs-5">
              We believe that healthy cooking starts with the right ingredients. That is 
              why we carefully select the finest seeds directly from trusted farmers and 
              use traditional wooden mills (ghani/kachi) to extract oil at low temperatures, 
              retaining all the natural goodness.
            </p>
          </div>
          <div className="col-lg-6 text-center">
            <img
              src="/oil-machine.jpeg"
              alt="Traditional oil press"
              className="img-fluid rounded shadow"
              style={{ maxHeight: "400px" }}
            />
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">Our Oil Making Process</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100 text-center p-4">
                <div className="card-body">
                  <div
                    className="rounded-circle bg-success d-flex align-items-center justify-content-center mx-auto mb-3"
                    style={{ width: "70px", height: "70px" }}
                  >
                    <span className="text-white fw-bold fs-3">1</span>
                  </div>
                  <h4>Seed Selection</h4>
                  <p className="text-muted">
                    We source the finest quality seeds directly from local farmers. 
                    Each batch is handpicked and inspected to ensure purity and freshness.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100 text-center p-4">
                <div className="card-body">
                  <div
                    className="rounded-circle bg-success d-flex align-items-center justify-content-center mx-auto mb-3"
                    style={{ width: "70px", height: "70px" }}
                  >
                    <span className="text-white fw-bold fs-3">2</span>
                  </div>
                  <h4>Cold Pressing</h4>
                  <p className="text-muted">
                    Seeds are gently crushed using traditional wooden ghani at low 
                    temperatures. This preserves essential nutrients, vitamins, and natural flavors.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100 text-center p-4">
                <div className="card-body">
                  <div
                    className="rounded-circle bg-success d-flex align-items-center justify-content-center mx-auto mb-3"
                    style={{ width: "70px", height: "70px" }}
                  >
                    <span className="text-white fw-bold fs-3">3</span>
                  </div>
                  <h4>Filtering & Bottling</h4>
                  <p className="text-muted">
                    The oil is naturally filtered to remove impurities, then bottled 
                    without any chemicals, preservatives, or additives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container py-5">
        <h2 className="fw-bold text-center mb-5">Why Choose Jayam Oils?</h2>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="d-flex gap-3">
              <span className="text-success fs-2">✅</span>
              <div>
                <h4>100% Natural</h4>
                <p className="text-muted">No chemicals, no preservatives, no additives — just pure oil.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex gap-3">
              <span className="text-success fs-2">✅</span>
              <div>
                <h4>Cold Pressed Method</h4>
                <p className="text-muted">Traditional wooden ghani extraction preserves nutrients and flavor.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex gap-3">
              <span className="text-success fs-2">✅</span>
              <div>
                <h4>Direct from Farmers</h4>
                <p className="text-muted">We source seeds directly from trusted local farmers, supporting the community.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex gap-3">
              <span className="text-success fs-2">✅</span>
              <div>
                <h4>Rich in Nutrients</h4>
                <p className="text-muted">Our oils retain essential vitamins, antioxidants, and healthy fats.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Products */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">Our Range of Oils</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <img src="/groundnutoil.png" className="card-img-top p-4" alt="Groundnut Oil" style={{ height: "200px", objectFit: "contain" }} />
                <div className="card-body text-center">
                  <h4>Groundnut Oil</h4>
                  <p className="text-muted">Rich in monounsaturated fats and vitamin E. Perfect for deep frying and daily cooking.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <img src="/coconutoil.png" className="card-img-top p-4" alt="Coconut Oil" style={{ height: "200px", objectFit: "contain" }} />
                <div className="card-body text-center">
                  <h4>Coconut Oil</h4>
                  <p className="text-muted">Packed with medium-chain triglycerides (MCTs). Ideal for cooking, skin, and hair care.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <img src="/sesameoil.png" className="card-img-top p-4" alt="Sesame Oil" style={{ height: "200px", objectFit: "contain" }} />
                <div className="card-body text-center">
                  <h4>Sesame Oil</h4>
                  <p className="text-muted">High in antioxidants and healthy fats. Adds authentic flavor to traditional dishes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
