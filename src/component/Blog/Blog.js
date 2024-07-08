import post1 from "../../assets/images/blog_post_1.jpg";
import post2 from "../../assets/images/blog_post_2.jpg";
import post3 from "../../assets/images/blog_post_3.jpg";
import post4 from "../../assets/images/blog_post_4.jpg";

const Blog = ({activeMenu}) => {
  return (
    <section
      data-id="blog"
      className={`animated-section ${activeMenu==="blog" ? "section-active" : "ps--active-y"} `}
      data-ps-id="fd964f79-1903-c72b-9fbb-0e290a9b587b"
    >
      <div className="page-title">
        <h2>Blog</h2>
      </div>

      <div className="section-content">
        Blogs are coming soon...
      </div>
    </section>
  );
};

export default Blog;
