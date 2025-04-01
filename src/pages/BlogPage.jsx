import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import BlogLayout from '../components/Blogs/BlogLayout';
import BlogStatic from "../components/BlogStatic";
import { GetBlogApi } from '../service/api';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'prism-react-renderer';
import slugify from 'slugify';

const BlogPage = () => {
  const location = useLocation();
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        setLoading(true);
        // First try to use the data passed via location state
        if (location.state?.id === id && location.state?.title) {
          setBlog(location.state);
          setLoading(false);
          return;
        }
        
        // Otherwise fetch from API
        const response = await fetch(`htt://122.173.87.156:4000/v1/blogs/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch blog');
        }
        const data = await response.json();
        setBlog(data);
      } catch (error) {
        const staticBlog = BlogStatic.find(blog => blog.id == id);
        if (staticBlog) {
          setBlog(staticBlog);
        } else {
          setError('Blog not found');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchBlogData();
  }, [id, location.state]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#ff6600]"></div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <h2 className="text-2xl font-bold text-[#ff6600] mb-4">{error || 'Blog not found'}</h2>
        <button 
          onClick={() => window.history.back()} 
          className="px-4 py-2 bg-[#ff6600] text-white rounded hover:bg-[#e65c00] transition"
        >
          Go Back
        </button>
      </div>
    );
  }

  const calculateReadTime = (content) => {
    if (!content) return "5 MIN READ";
    const words = content.split(/\s+/).length;
    const minutes = Math.ceil(words / 200);
    return `${minutes} MIN READ`;
  };

  return (
    <BlogLayout 
      title={blog.title}
      category={blog.meta_data?.tags?.[0] || "Blog"}
      readTime={calculateReadTime(blog.content)}
      date={blog.created_at}
      image={blog.cover_image}
    >
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-[#ff6600] mb-6">
          {blog.title}
        </h1>
        
        {blog.description && (
          <p className="text-xl text-gray-300 mb-8">
            {blog.description}
          </p>
        )}

        <div className="prose prose-invert max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              // Custom rendering for headings with IDs for anchor links
              h1: ({ children }) => {
                const id = slugify(children.toString(), { lower: true });
                return (
                  <h1 id={id} className="text-3xl font-bold text-[#ff6600] mt-12 mb-6">
                    {children}
                  </h1>
                );
              },
              h2: ({ children }) => {
                const id = slugify(children.toString(), { lower: true });
                return (
                  <h2 id={id} className="text-2xl font-bold text-[#ff6600] mt-10 mb-4">
                    {children}
                  </h2>
                );
              },
              h3: ({ children }) => {
                const id = slugify(children.toString(), { lower: true });
                return (
                  <h3 id={id} className="text-xl font-semibold text-[#ff6600] mt-8 mb-3">
                    {children}
                  </h3>
                );
              },
              p: ({ children }) => (
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {children}
                </p>
              ),
              strong: ({ children }) => (
                <strong className="font-bold text-white">{children}</strong>
              ),
              em: ({ children }) => (
                <em className="italic">{children}</em>
              ),
              ul: ({ children }) => (
                <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-300">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal pl-6 mb-6 space-y-2 text-gray-300">
                  {children}
                </ol>
              ),
              li: ({ children }) => (
                <li className="mb-2">{children}</li>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-[#ff6600] pl-4 my-6 italic text-gray-400">
                  {children}
                </blockquote>
              ),
              code: ({ node, inline, className, children, ...props }) => {
                const match = /language-(\w+)/.exec(className || '');
                return !inline ? (
                  <div className="bg-gray-800 rounded-lg my-6 overflow-hidden">
                    <SyntaxHighlighter
                      language={match ? match[1] : 'javascript'}
                      style={undefined}
                      customStyle={{
                        margin: 0,
                        padding: '1rem',
                        backgroundColor: 'rgb(31, 41, 55)',
                        borderRadius: '0.5rem',
                        overflowX: 'auto'
                      }}
                      {...props}
                    >
                      {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                  </div>
                ) : (
                  <code className="bg-gray-700 px-2 py-1 rounded text-sm">
                    {children}
                  </code>
                );
              },
              a: ({ children, href }) => (
                <a 
                  href={href} 
                  className="text-[#ff6600] hover:underline"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {children}
                </a>
              ),
              img: ({ src, alt }) => (
                <div className="my-6">
                  <img 
                    src={src} 
                    alt={alt} 
                    className="mx-auto rounded-lg max-w-full h-auto"
                  />
                  {alt && (
                    <p className="text-center text-gray-400 text-sm mt-2">
                      {alt}
                    </p>
                  )}
                </div>
              ),
              table: ({ children }) => (
                <div className="overflow-x-auto my-6">
                  <table className="min-w-full border-collapse">
                    {children}
                  </table>
                </div>
              ),
              th: ({ children }) => (
                <th className="border border-gray-600 px-4 py-2 text-left bg-gray-700">
                  {children}
                </th>
              ),
              td: ({ children }) => (
                <td className="border border-gray-600 px-4 py-2">
                  {children}
                </td>
              ),
            }}
          >
            {blog.content}
          </ReactMarkdown>
        </div>
      </div>
    </BlogLayout>
  );
};

export default BlogPage;