import "bootstrap/dist/css/bootstrap.min.css";

const blogPosts = [
  {
    id: 1,
    title: "How We Collect the Finest Seeds from Farmers",
    image: "/blog 1.png",
    date: "June 10, 2026",
    author: "Jayam Oils Team",
    content: [
      {
        heading: "Building Trust with Local Farmers",
        text: "At Jayam Oils, our journey begins in the lush farmlands of Tiruvannamalai. We work directly with local farmers who have been cultivating groundnuts, coconuts, and sesame for generations. By building long-term relationships, we ensure a steady supply of premium-quality seeds while supporting the local agricultural community."
      },
      {
        heading: "Handpicking the Best Seeds",
        text: "Our team visits farms personally during harvest season. We carefully inspect the crops and select only the seeds that meet our strict quality standards. The seeds must be fully mature, free from pests, and naturally dried under the sun. This hands-on approach guarantees that only the finest raw materials go into our oils."
      }
    ]
  },
  {
    id: 2,
    title: "Traditional Cold Pressed Oil Production: A Step-by-Step Guide",
    image: "/blog 2.png",
    date: "June 5, 2026",
    author: "Jayam Oils Team",
    content: [
      {
        heading: "Cleaning and Sorting",
        text: "The first step in oil production is thorough cleaning. Seeds are passed through multiple stages of cleaning to remove stones, dust, husks, and any foreign particles. This ensures that only pure seeds enter the pressing process."
      },
      
      {
        heading: "Traditional Cold Pressing (Ghani Method)",
        text: "The dried seeds are fed into a traditional wooden ghani (oil press). A large wooden pestle rotates slowly inside a mortar, gently crushing the seeds. The friction generates minimal heat (below 50\u00B0C), which preserves the natural nutrients, antioxidants, and essential fatty acids. Unlike modern methods, no chemicals or high temperatures are used."
      },
      {
        heading: "Bottling and Packaging",
        text: "The final oil is bottled in food-grade containers that protect it from light and air. Each bottle is sealed and labeled with production details. From our facility, the oil is shipped directly to your doorstep, ensuring you receive the freshest, purest cooking oil possible."
      }
    ]
  }
  
];

function Blog() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h1 className="display-4 fw-bold" style={{ color: "#2E7D32" }}>
            Our Blog
          </h1>
          <p className="text-muted fs-5 mt-3">
            Learn about our oil-making process, health tips, and stories from the farm.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="container py-5">
        {blogPosts.map((post) => (
          <div key={post.id} className="card border-0 shadow-sm mb-5 overflow-hidden">
            <div className="row g-0">
              <div className="col-lg-5">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-100 h-100"
                  style={{ objectFit: "cover", minHeight: "300px" }}
                />
              </div>
              <div className="col-lg-7">
                <div className="card-body p-4">
                  <div className="d-flex gap-3 mb-3 text-muted small">
                    <span>{post.date}</span>
                    <span>|</span>
                    <span>{post.author}</span>
                  </div>
                  <h2 className="fw-bold mb-4" style={{ color: "#2E7D32" }}>
                    {post.title}
                  </h2>
                  {post.content.map((section, idx) => (
                    <div key={idx} className="mb-3">
                      <h5 className="fw-semibold">{section.heading}</h5>
                      <p className="text-muted">{section.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default Blog;
