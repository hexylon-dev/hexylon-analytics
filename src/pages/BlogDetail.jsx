// src/pages/BlogDetail.js

import { CalendarIcon } from "@heroicons/react/16/solid";
import { UserIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const data = [
  {
    id: 1,
    workspace_id: "W-00001",
    title: "Boost your conversion rate",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
    cover_image:
      "https://images.pexels.com/photos/4549414/pexels-photo-4549414.jpeg",
    content: `# React Markdown Example

- Some text
- Some other text

## Subtitle

### Additional info

This is a [link](https://github.com/remarkjs/react-markdown)
    `,
    references: ["https://www.facebook.com/", "https://www.google.com/"],
    meta_data: {
      tags: ["React", "Hooks", "JavaScript", "Frontend"],
    },
    audit_fields: {
      created_by: "Lindsay Walton",
      created_at: "Nov 21, 2024",
    },
  },
  {
    id: 2,
    workspace_id: "W-00002",
    title: "How to use search engine optimization to drive sales",
    description:
      "Optio sit exercitation et ex ullamco aliquid explicabo. Dolore do ut officia anim non ad eu. Magna laboris incididunt commodo elit ipsum.",
    cover_image:
      "https://images.pexels.com/photos/965117/pexels-photo-965117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content: `
      ## SEO Tips for Driving Sales
      To drive sales, it's important to understand the **basics of SEO**.
      
      ### Top SEO Tips:
      1. Optimize your website for speed.
      2. Create valuable content.
      3. Use proper heading tags.
      
      <p>Ensure your site is mobile-friendly!</p>
    `,
    references: ["https://www.facebook.com/", "https://www.google.com/"],
    meta_data: {
      tags: ["React", "Hooks", "JavaScript", "Frontend"],
    },
    audit_fields: {
      created_by: "Michael Foster",
      created_at: "Nov 29, 2024",
    },
  },
];

const BlogDetail = () => {
  //   const { id } = useParams();
  //   const [blog, setBlog] = useState(null);

  //   useEffect(() => {
  //     const fetchBlogDetails = async () => {
  //       const response = await fetch(`/api/blogs/${id}`);
  //       const data = await response.json();
  //       setBlog(data);
  //     };

  //     fetchBlogDetails();
  //   }, [id]);

  //   if (!blog) return <div>Loading...</div>;

  const { id } = useParams();
  const blog = data.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return <p>Blog not found.</p>;
  }

  return (
    <>
      <div className="min-h-screen bg-gray-100 py-20 px-4 sm:px-6 lg:px-8">
        <main className="max-w-full mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl">
          <div className="p-8">
            <h1 className="text-xl lg:text-3xl font-bold text-gray-900 mb-2">
              {blog.title}
            </h1>
            <div className="flex flex-wrap gap-2 mb-4">
              {blog.meta_data.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
              <div className="flex items-center">
                <span>{blog.audit_fields.created_at}</span>
              </div>
              <div className="flex items-center">
                <span>By {blog.audit_fields.created_by}</span>
              </div>
            </div>
            <div className="mb-6">
              <img
                src={blog.cover_image}
                alt="Blog post cover image"
                className="rounded-lg object-cover w-full max-h-[400px] h-auto"
              />
            </div>

            <div className=" mb-6 overflow-hidden">
              <SyntaxHighlighter language="html" style={docco}>
                {blog.content}
              </SyntaxHighlighter>
              <div />
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Related Links</h2>
              <div className="flex flex-wrap gap-4">
                {blog.references.map((link, index) => (
                  <a
                    key={index}
                    href={link}
                    className="inline-block px-4 py-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition duration-300 text-blue-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {new URL(link).hostname.replace("www.", "")}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default BlogDetail;
