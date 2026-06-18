import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

function Slider() {
  return (
    <Carousel fade>

      {/* Slide 1 - Groundnut Harvest */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1590779033100-9f52a11f004f?w=1600&q=80"
          alt="Groundnut Harvest"
          style={{ height: "600px", objectFit: "cover" }}
        />

        <Carousel.Caption
          style={{
            background: "rgba(0,0,0,0.5)",
            borderRadius: "12px",
            padding: "20px",
          }}
        >
          <h2 className="text-white">Pure Groundnut Oil</h2>
          <p className="text-white">Cold pressed from farm-fresh groundnuts.</p>
          <button className="btn btn-success">Shop Now</button>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Slide 2 - Coconut Farm */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=1600&q=80"
          alt="Coconut Farm"
          style={{ height: "600px", objectFit: "cover" }}
        />

        <Carousel.Caption
          style={{
            background: "rgba(0,0,0,0.5)",
            borderRadius: "12px",
            padding: "20px",
          }}
        >
          <h2 className="text-white">Natural Coconut Oil</h2>
          <p className="text-white">Freshness in every drop from pure coconuts.</p>
          <button className="btn btn-success">Shop Now</button>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Slide 3 - Sesame / Traditional Oil Press */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=1600&q=80"
          alt="Traditional Oil Press"
          style={{ height: "600px", objectFit: "cover" }}
        />

        <Carousel.Caption
          style={{
            background: "rgba(0,0,0,0.5)",
            borderRadius: "12px",
            padding: "20px",
          }}
        >
          <h2 className="text-white">Traditional Sesame Oil</h2>
          <p className="text-white">Made using age-old cold pressed methods.</p>
          <button className="btn btn-success">Shop Now</button>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Slide 4 - Oil Bottles / Farm Fresh */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=1600&q=80"
          alt="Pure Cooking Oils"
          style={{ height: "600px", objectFit: "cover" }}
        />

        <Carousel.Caption
          style={{
            background: "rgba(0,0,0,0.5)",
            borderRadius: "12px",
            padding: "20px",
          }}
        >
          <h2 className="text-white">100% Pure & Natural</h2>
          <p className="text-white">No chemicals. No preservatives. Just pure goodness.</p>
          <button className="btn btn-success">Explore Now</button>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default Slider;
