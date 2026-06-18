function Body() {
  return (
    <section className="container py-5">

      <div className="row align-items-center">
         <div className="col-lg-6 fade-left">

          <span className="badge bg-success mb-3 px-3 py-2">
            Traditional Cold Pressed Oils
          </span>
           <h1 className="display-5 fw-bold mb-3">
            Pure Tradition.
            <br />
            Pure Health.
          </h1>
    <p className="text-muted mb-4">
        Every drop is carefully produced to deliver purity, freshness, and the goodness of nature.
          </p>
          
             <div className="mt-4">

            <p>✅ 100% Natural</p>
            <p>✅ Cold Pressed Method</p>
            <p>✅ No Chemicals</p>
            <p>✅ No Preservatives</p>
            <p>✅ Rich in Nutrients</p>
            <p>✅ Authentic Aroma & Taste</p>

          </div>
                 <button className="btn btn-success me-3">
                    <a href="Cards.jsx" className="text-white text-decoration-none">
              Explore Now
            </a>
            </button>

            <button className="btn btn-outline-success">
              Learn More
            </button>

          </div>

        </div>
         <div className="col-lg-6 text-center fade-right">

          <img
            src="/oil-machine.jpg"
            alt="Traditional Oil Machine"
            className="img-fluid rounded shadow"
          />

        </div>



    </section>
  );
}
export default Body;