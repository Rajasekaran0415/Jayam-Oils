function BlogCard(props) {
  return (
    <div className="card shadow-sm h-100">
      <img
        src={props.image}
        className="card-img-top"
        alt={props.title}
        style={{
          height: "220px",
          objectFit: "cover"
        }}
      />

      <div className="card-body">
        <h5>{props.title}</h5>

        <p className="text-muted">
          {props.description}
        </p>

        <button className="btn btn-outline-success">
          Read More
        </button>
      </div>
    </div>
  );
}

export default BlogCard;