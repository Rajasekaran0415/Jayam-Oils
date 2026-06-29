import "bootstrap/dist/css/bootstrap.min.css";

function Cart({ cartItems, setCartItems }) {

  // Increase Quantity
  const increaseQty = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrease Quantity
  const decreaseQty = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Remove Item
  const removeItem = (id) => {
    setCartItems(
      cartItems.filter((item) => item.id !== id)
    );
  };

  // Total Price
  const total = cartItems.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container mt-5">

      <h1 className="mb-4">Shopping Cart</h1>

      <div className="row">

        {/* Left Side */}

        <div className="col-lg-8">

          {cartItems.length === 0 ? (
            <div className="text-center py-5">
              <h3 className="text-muted">Your cart is empty</h3>
              <p>Browse our products and add items to your cart.</p>
            </div>
          ) : (
            cartItems.map((item) => (

            <div
              key={item.id}
              className="card mb-3 shadow-sm"
            >

              <div className="row g-0 align-items-center">

                <div className="col-md-3 text-center">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="img-fluid p-3"
                    style={{
                      height: "150px",
                      objectFit: "contain",
                    }}
                  />

                </div>

                <div className="col-md-4">

                  <h4>{item.name}</h4>

                  <p>{item.litre}</p>

                  <h4 className="text-success">
                    ₹{item.price}
                  </h4>

                </div>

                <div className="col-md-3">

                  <div className="d-flex">

                    <button
                      className="btn btn-outline-secondary"
                      onClick={() =>
                        decreaseQty(item.id)
                      }
                    >
                      -
                    </button>

                    <span
                      className="px-3 py-2"
                    >
                      {item.quantity}
                    </span>

                    

                  </div>

                </div>

                <div className="col-md-2 text-center">

                  <button
                    className="btn btn-danger"
                    onClick={() =>
                      removeItem(item.id)
                    }
                  >
                    Remove
                  </button>

                </div>

              </div>

            </div>

          ))
        )}

        </div>

        {/* Right Side */}

        <div className="col-lg-4">

          <div className="card shadow">

            <div className="card-body">

              <h3>Order Summary</h3>

              <hr />

              <p>
                Total Items :
                <strong>
                  {" "}
                  {cartItems.length}
                </strong>
              </p>

              <p>
                Delivery :
                <strong className="text-success">
                  {" "}
                  Free
                </strong>
              </p>

              <hr />

              <h2>
                ₹{total}
              </h2>

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
