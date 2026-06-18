import "react";
import Navbar from "./Navbar";
import Slider from "./Slider";
import Card from "./Card";

function App() {
  return (
    <>
      <Navbar />
      <Slider />
       <div className="container mt-5">

        <h2 className="mb-4">Our Products</h2>
        <p className="mb-5">1</p>
    
        <div className="row">
          

      <div className="col-md-4">
      <Card 
      image ="./public/groundnutoil.png" 
      name="Groundnut Oil" 
      description="1 liter pure Groundnut Oil" 
      price={250} 
      btnText="Add to Cart" 
      />
      </div>
      
      
      <div className="col-md-4">
      <Card 
      image ="./public/coconutoil.png" 
      name="Coconut Oil" 
      description="1 liter pure Coconut Oil" 
      price={300} 
      btnText="Add to Cart" 
      />
      </div>
      <div className="col-md-4">
      <Card 
      image ="./public/sesameoil.png" 
      name="Sesame Oil" 
      description="1 liter pure Sesame Oil" 
      price={320} 
      btnText="Add to Cart" 
      />
      </div>
      </div>
      </div>
 
      </>

  );
}

export default App;