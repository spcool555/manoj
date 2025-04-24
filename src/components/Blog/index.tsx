import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";

const Blog = () => {
  return (
    <>
      <section
        id="blog"
        className="bg-blue-50 dark:bg-bg-color-dark md:py-10 mb-5 lg:py-8"
      >
        <div className="container">
            <h1 className="text-3xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6 pt-5">
     Brands
</h1>

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
            {blogData.map((blog) => (
              <div key={blog.id} className="w-full">
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            Disclaimer: We are not affiliated with the brands shown. All trademarks and logos belong to their respective owners.
          </p>
        </div>
      </section>

      {/* Optional: If needed, you can include FontAwesome for icons */}
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
        rel="stylesheet"
      />
    </>
  );
};

export default Blog;
