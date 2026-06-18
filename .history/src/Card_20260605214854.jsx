

function Card(props) {
  return (
  
    <div className="card h shadow-sm">
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
  
  );
}

export default Card;