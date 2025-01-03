import React from 'react';
import { useLocation } from 'react-router-dom';
import BlogLayout from '../components/Blogs/BlogLayout';
import InnerHTML from 'dangerously-set-html-content'

const BlogPage = () => {
  const location = useLocation();
  const blogData = location.state;

  console.log("blogData", blogData?.content)

  if (!blogData) {
    return <div>Blog not found</div>;
  }

  return (
    <BlogLayout 
      title={blogData.title}
      category={blogData.tag}
      readTime="13 MIN READ"
      date={blogData.date}
      image={blogData.image}
    >
      <div className="prose prose-lg prose-invert max-w-none">
        <p className="text-xl mb-8 text-gray-300">
          {blogData.description}
        </p>
      
        <InnerHTML html={blogData.content + " "} />
      </div>
    </BlogLayout>
  );
};

export default BlogPage;