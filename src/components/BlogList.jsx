import React, { useEffect, useState } from "react";
import Blog from "./Blog";
import { Link } from "react-router-dom";
import Blog1 from "../assets/blog1.jpg";
import Blog2 from "../assets/blog2.jpg";
import { GetBlogApi, GetBlogsApi } from "../service/api";
import ResourceCard from "./Blogs/ResourceCard";
import blogStatic from "./BlogStatic"

function BlogList() {
  const [data, setData] = useState([]);
    const [loading, setLoading] = useState(null);

  console.log(data);
  
  useEffect(() => {
    (async () => {
      try{
        setLoading(true)
        // Todo : p remove from url
      const apiurl = "htt://122.173.87.156:4000/v1/blogs/search/2d258123-b62f-4662-9a24-145dff11331a";
      console.log("set url of :" , apiurl);
      const res = await fetch(apiurl);
      setData(res.data);

      }catch(error){
      setLoading(false);

        console.log(error + "The error in the api");
        setData(blogStatic)

      }
    })();
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#ff6600]"></div>
      </div>
    );
  }

  return (
    <div>
      {/* {data.map((blog) => (
        <div key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <Blog blog={blog} />
          </Link>
        </div>
        
      ))} */}

      
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16">
          {data.map((resource) => (
            <ResourceCard
              key={resource.id}
              {...resource}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default BlogList;
