import "bootstrap/dist/css/bootstrap.min.css";

const blogPosts = [
  {
    id: 1,
    title: "How We Collect the Finest Seeds from Farmers",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=800&q=80",
    date: "June 5, 2026",
    author: "Jayam Oils Team",
    content: [
      {
        heading: "Cleaning and Sorting",
        text: "The first step in oil production is thorough cleaning. Seeds are passed through multiple stages of cleaning to remove stones, dust, husks, and any foreign particles. This ensures that only pure seeds enter the pressing process."
      },
      {
        heading: "Sun Drying",
        text: "Clean seeds are spread out under the sun to reduce moisture content naturally. Sun drying enhances the flavor and aroma of the oil while eliminating any residual moisture that could affect quality during pressing."
      },
      {
        heading: "Traditional Cold Pressing (Ghani Method)",
        text: "The dried seeds are fed into a traditional wooden ghani (oil press). A large wooden pestle rotates slowly inside a mortar, gently crushing the seeds. The friction generates minimal heat (below 50\u00B0C), which preserves the natural nutrients, antioxidants, and essential fatty acids. Unlike modern methods, no chemicals or high temperatures are used."
      },
      {
        heading: "Natural Filtering",
        text: "The extracted oil is allowed to settle so that heavier particles sink naturally. It is then passed through fine cloth filters to remove any remaining sediment. This natural filtration retains the oil's authentic color, aroma, and nutritional value without using chemical refining processes."
      },
      {
        heading: "Bottling and Packaging",
        text: "The final oil is bottled in food-grade containers that protect it from light and air. Each bottle is sealed and labeled with production details. From our facility, the oil is shipped directly to your doorstep, ensuring you receive the freshest, purest cooking oil possible."
      }
    ]
  },
  {
    id: 3,
    title: "Health Benefits of Cold Pressed Oils",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800&q=80",
    date: "May 28, 2026",
    author: "Jayam Oils Team",
    content: [
      {
        heading: "Why Cold Pressed Oils Are Healthier",
        text: "Cold pressed oils retain more nutrients compared to refined oils because they are extracted without high heat or chemicals. They contain higher levels of vitamin E, antioxidants, and healthy fatty acids that support heart health, immunity, and overall well-being."
      },
      {
        heading: "Good for Heart Health",
        text: "Our cold pressed groundnut and sesame oils are rich in monounsaturated and polyunsaturated fats, which help reduce bad cholesterol levels and support cardiovascular health. The natural antioxidants also help reduce inflammation in the body."
      },
      {
        heading: "Better Digestion and Metabolism",
        text: "Coconut oil contains medium-chain triglycerides (MCTs) that are easily digested and converted into energy. These healthy fats support metabolism and can aid in weight management when used as part of a balanced diet."
      }
    ]
  },
  {
    id: 4,
    title: "How to Identify Pure Cold Pressed Oil",
    image: "https://images.unsplash.com/photo-1601370690183-1c7796ecec61?w=800&q=80",
    date: "May 20, 2026",
    author: "Jayam Oils Team",
    content: [
      {
        heading: "Check the Color and Aroma",
        text: "Pure cold pressed oil has a rich, natural color and a distinct aroma of the seed it comes from. Groundnut oil has a golden hue and nutty fragrance, while coconut oil is clear with a mild coconut scent. Refined oils are often pale and odorless."
      },
      {
        heading: "Look for Sediment",
        text: "Natural cold pressed oils may have a small amount of sediment at the bottom of the bottle. This is a sign of minimal processing. Refined oils are completely clear because they have been filtered and chemically treated."
      },
      {
        heading: "Read the Label Carefully",
        text: "Always check the label for words like 'cold pressed', 'unrefined', and 'no chemicals added'. Avoid oils that say 'refined', 'bleached', or 'deodorized'. Also check the ingredient list — pure oil should have only one ingredient."
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
