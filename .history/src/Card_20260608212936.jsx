function Card(props) {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6">/
    <div
      className="card product-card border-0 shadow-sm"
      style={{
        width: "260px",
        borderRadius: "15px",
        overflow: "hidden",
      }}
    >
      <img
        src={props.image}
        alt={props.name}
        className="card-img-top"
        style={{
          height: "220px",
          objectFit: "contain",
          padding: "10px",
          backgroundColor: "#fff",
        }}
      />

      <div className="card-body text-center">
        <h5 className="fw-bold">{props.name}</h5>

        <p
          className="text-muted"
          style={{ fontSize: "14px" }}
        >
          {props.description}
        </p>

        <h4 className="text-success fw-bold">
          ₹{props.price}
        </h4>

        <button className="btn btn-success px-4">
          {props.btnText}
        </button>
      </div>
    </div>
  );
}

export default Card;