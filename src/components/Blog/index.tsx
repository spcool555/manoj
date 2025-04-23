import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";

const Blog = () => {
  return (<>
    <section
      id="blog"
      className="bg-blue-50 dark:bg-bg-color-dark  md:py-10 lg:py-8"
    >
      <div className="container">
        <SectionTitle
          title="Brands "
          paragraph=""
          center
          />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogData.map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>
      <br />
      <center>

        <p>Disclaimer: We are not affiliated with the brands shown. All trademarks and logos belong to their respective owners.</p>
      </center>
    </section><link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet" />

</>
  );
};

export default Blog;
