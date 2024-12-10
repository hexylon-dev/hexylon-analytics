import React from "react";
import Blog from "./Blog";
import { Link } from "react-router-dom";
import Blog1 from "../assets/blog1.jpg";
import Blog2 from "../assets/blog2.jpg";
import data from "./BlogStatic";

function BlogList() {
  return (
    <div>
      {data.map((blog) => (
        <div key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <Blog blog={blog} />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
