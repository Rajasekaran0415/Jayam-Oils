function Card(props) {
  return (
    <div
      className="card product-card border-0 shadow-sm"
      style={{
        borderRadius: "15px",
        overflow: "hidden",
      }}
    >

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

      <div className="card-body text-center">

        <h4 className="fw-bold">
          {props.name}
        </h4>

        <p className="text-muted">
          {props.litre}
        </p>

        <h3 className="text-success fw-bold">
          ₹{props.price}
        </h3>

        <button className="btn btn-success px-4">
          <a href="#cart" className="text-white text-decoration-none"></
          Add To Cart
        </button>

      </div>
    </div>
  );
}

export default Card;