import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Slider from "./Slider";
import Card from "./Card";
import Body from "./Body";
import Cart from "./Cart";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";
import Footer from "./Footer";
import Whatsapp from "./Whatsapp";


function App() {

  const [selectedOil, setSelectedOil] = useState("groundnut");
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const exists = prev.find(
        (item) => item.name === product.name && item.litre === product.litre
      );
      if (exists) {
        return prev.map((item) =>
          item.name === product.name && item.litre === product.litre
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, id: Date.now(), quantity: 1 }];
    });
  };

  const products = {
    groundnut: [
      {
        image: "/groundnutoil.png",
        name: "Groundnut Oil",
        litre: "1 Liter Pure Oil",
        originalPrice: 300,
        price: 250,
      },
      {
        image: "/groundnutoil.png",
        name: "Groundnut Oil",
        litre: "5 Liter Pure Oil",
        originalPrice: 1300,
        price: 1100,
      },
      {
        image: "/groundnutoil.png",
        name: "Groundnut Oil",
        litre: "10 Liter Pure Oil",
        originalPrice: 2500,
        price: 2100,
      },
    ],

    coconut: [
      {
        image: "/coconutoil.png",
        name: "Coconut Oil",
        litre: "1 Liter Pure Oil",
        originalPrice: 350,
        price: 300,
      },
      {
        image: "/coconutoil.png",
        name: "Coconut Oil",
        litre: "5 Liter Pure Oil",
        originalPrice: 1600,
        price: 1400,
      },
      {
        image: "/coconutoil.png",
        name: "Coconut Oil",
        litre: "10 Liter Pure Oil",
        originalPrice: 3000,
        price: 2600,
      },
    ],

    sesame: [
      {
        image: "/sesameoil.png",
        name: "Sesame Oil",
        litre: "1 Liter Pure Oil",
        originalPrice: 380,
        price: 320,
      },
      {
        image: "/sesameoil.png",
        name: "Sesame Oil",
        litre: "5 Liter Pure Oil",
        originalPrice: 1750,
        price: 1500,
      },
      {
        image: "/sesameoil.png",
        name: "Sesame Oil",
        litre: "10 Liter Pure Oil",
        originalPrice: 3200,
        price: 2800,
      },
    ],
  };

  return (
    <>
      <Navbar cartCount={cartItems.length} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <div className="container mt-5" id="products">
                <h2 className="mb-4">Our Products</h2>
                <div className="d-flex gap-3 mb-5">
                  <button
                    className={`btn ${
                      selectedOil === "groundnut"
                        ? "btn-success"
                        : "btn-outline-success"
                    }`}
                    onClick={() => setSelectedOil("groundnut")}
                  >
                    Groundnut Oil
                  </button>
                  <button
                    className={`btn ${
                      selectedOil === "coconut"
                        ? "btn-success"
                        : "btn-outline-success"
                    }`}
                    onClick={() => setSelectedOil("coconut")}
                  >
                    Coconut Oil
                  </button>
                  <button
                    className={`btn ${
                      selectedOil === "sesame"
                        ? "btn-success"
                        : "btn-outline-success"
                    }`}
                    onClick={() => setSelectedOil("sesame")}
                  >
                    Sesame Oil
                  </button>
                </div>
                <div className="row g-4">
                  {products[selectedOil].map((item, index) => (
                    <div key={index} className="col-lg-4 col-md-6">
                      <Card
                        image={item.image}
                        name={item.name}
                        litre={item.litre}
                        originalPrice={item.originalPrice}
                        price={item.price}
                        addToCart={addToCart}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <Body />
             
            </>
          }
        />
        <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;