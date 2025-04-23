import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, image, paragraph, author, tags, publishDate } = blog;
  return (
    <>
  <div className="bg-transparent flex items-center justify-center rounded-lg">
    <div className="rounded-lg overflow-hidden shadow-2xl w-full group transition-transform duration-300 hover:translate-y-[-10px]">
      <div className="h-full w-full overflow-hidden">
              <Link
          href="/blog-details"
          // className="relative block aspect-[37/22] h-full w-full object-cover transform overflow-hidden transition-transform duration-[300ms] group-hover:scale-125 object-end" src="https://images.unsplash.com/photo-1570797197190-8e003a00c846?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80">
          className="relative block aspect-[37/22] h-full w-full object-cover transform overflow-hidden transition-transform duration-[300ms] group-hover:scale-105 object-end">
        
          <Image src={image} alt="image" fill />
        </Link>
      </div>

  
    </div>
  </div>
    </>
  );
};

export default SingleBlog;
