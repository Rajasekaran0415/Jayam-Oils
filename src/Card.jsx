import { Link } from "react-router-dom";

function Card(props) {
  const discountPercent = Math.round(
    ((props.originalPrice - props.price) / props.originalPrice) * 100
  );

  return (
    <div
      className="card product-card border-0 shadow-sm"
      style={{
        borderRadius: "15px",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "relative" }}>
        <img
          src={props.image}
          alt={props.name}
          className="card-img-top"
          style={{
            height: "200px",
            objectFit: "contain",
            padding: "15px",
          }}
        />
        <span
          className="badge bg-danger position-absolute"
          style={{ top: "10px", right: "10px", fontSize: "0.9rem" }}
        >
          -{discountPercent}%
        </span>
      </div>

      <div className="card-body text-center">
        <h4 className="fw-bold">{props.name}</h4>

        <p className="text-muted">{props.litre}</p>

        <h3 className="text-success fw-bold">
          ₹{props.price}
          <span
            className="text-muted text-decoration-line-through fs-6 fw-normal ms-2"
          >
            ₹{props.originalPrice}
          </span>
        </h3>

        <Link
          to="/cart"
          className="btn btn-success px-4 text-white text-decoration-none"
        >
          Add To Cart
        </Link>
      </div>
    </div>
  );
}

export default Card;