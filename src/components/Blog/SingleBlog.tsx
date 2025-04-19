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
          className="relative block aspect-[37/22] h-full w-full object-cover transform overflow-hidden transition-transform duration-[300ms] group-hover:scale-125 object-end">
        
          <Image src={image} alt="image" fill />
        </Link>
      </div>

      <div className="p-6 pb-4 group-hover:bg-gray-700 duration-[0.3s]" >
        <h4 className="mb-4 block text-xl font-semibold text-black hover:text-[#f9b800] dark:text-white dark:hover:text-[#f9b800] mt-1 leading-tight group-hover:text-[#f9b800] duration-[0.3s]"><Link
              href="/blog-details"
            >
              {title}
            </Link></h4>
        <p className="Card-info text-black mt-2 group-hover:text-white">
        {paragraph}  
                </p>        
      
          <div className="mt-4 flex items-center">
            <div className="flex-shrink-0">
              <a href="#">
                <span className="sr-only">Daniela Metz</span>
              </a>
            </div>
           
          </div>
          
      </div>
    </div>
  </div>
    </>
  );
};

export default SingleBlog;
