

function Card(props) {
  return (
    <div>
        <h2 className="text-left mt-4 mb-4">Our Products</h2></div
    <div className="card h-100 shadow-sm">
      <img
        src={props.image}
        className="card-img-top"
        alt={props.name}
      />

      <div className="card-body">
        <h5>{props.name}</h5>

        <p className="card-text">
          {props.description}
        </p>

        <h4>₹{props.price}</h4>

        <button className="btn btn-success">
          {props.btnText}
        </button>
      </div>
      </div>
    </div>
  );
}

export default Card;