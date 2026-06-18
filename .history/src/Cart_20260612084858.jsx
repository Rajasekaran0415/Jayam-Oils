import React from "react";

function Cart() {

  const cartItems = [
    {
      id: 1,
      name: "Groundnut Oil",
      litre: "5 Liter",
      price: 1100,
      quantity: 2,
      image: "/groundnutoil.png"
    },
    {
      id: 2,
      name: "Coconut Oil",
      litre: "1 Liter",
      price: 300,
      quantity: 1,
      image: "/coconutoil.png"
    }
  ];

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container mt-5">

      <h2 className="mb-4">
        Shopping Cart
      </h2>

      <div className="row">

        <div className="col-lg-8">

          {cartItems.map((item) => (

            <div
              key={item.id}
              className="card mb-3 shadow-sm"
            >

              <div className="row g-0">

                <div className="col-md-3">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="img-fluid rounded-start"
                    style={{
                      height: "180px",
                      objectFit: "contain"
                    }}
                  />

                </div>

                <div className="col-md-9">

                  <div className="card-body">

                    <h5>{item.name}</h5>

                    <p>{item.litre}</p>

                    <p>
                      Quantity:
                      <strong>
                        {" "}
                        {item.quantity}
                      </strong>
                    </p>

                    <h5 className="text-success">
                      ₹{item.price}
                    </h5>

                    <button className="btn btn-danger">
                      Remove
                    </button>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

        <div className="col-lg-4">

          <div className="card shadow">

            <div className="card-body">

              <h4>Order Summary</h4>

              <hr />

              <p>
                Items :
                <strong>
                  {" "}
                  {cartItems.length}
                </strong>
              </p>

              <p>
                Delivery :
                <strong>
                  {" "}
                  Free
                </strong>
              </p>

              <hr />

              <h3>
                Total :
                <span className="text-success">
                  {" "}
                  ₹{total}
                </span>
              </h3>

              <button
                className="btn btn-success w-100 mt-3"
              >
                Proceed To Checkout
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Cart;