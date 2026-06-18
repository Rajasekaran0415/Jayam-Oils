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
        <p className="mb-5">Discover our range of high-quality oils, crafted with care to enhance your cooking experience. From the rich and nutty flavor of our Groundnut Oil to the tropical essence of our Coconut Oil, and the robust taste of our Sesame Oil, we have the perfect oil for every culinary need. Experience the difference in taste and quality with our premium oils, designed to elevate your dishes to new heights.</p>
    
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