import "react";
import Navbar from "./Navbar";
import Slider from "./Slider";
import Card from "./Card";

function App() {
  return (
    <>
      <Navbar />
      <Slider />
       <div className="row g-4 justify-content-center">
        <h2 className="text-left mb-4 p-lg-4 m-lg-4">Our Products</h2>

  <div className="col-lg-3 col-md-4 col-sm-6">
    <Card
      image="/groundnutoil.png"
      name="Groundnut Oil"
      description="1 Liter Pure Groundnut Oil"
      price={250}
      btnText="Add to Cart"
    />
  </div>

  <div className="col-lg-3 col-md-4 col-sm-6">
    <Card
      image="/coconutoil.png"
      name="Coconut Oil"
      description="1 Liter Pure Coconut Oil"
      price={300}
      btnText="Add to Cart"
    />
  </div>

  <div className="col-lg-3 col-md-4 col-sm-6">
    <Card
      image="/sesameoil.png"
      name="Sesame Oil"
      description="1 Liter Pure Sesame Oil"
      price={320}
      btnText="Add to Cart"
    />
  </div>

</div>
      </>

  );
}

export default App;