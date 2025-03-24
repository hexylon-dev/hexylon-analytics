import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import BlogLayout from '../components/Blogs/BlogLayout';
import { GetBlogApi } from '../service/api';
// import { format } from 'date-fns';

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
        const response = await GetBlogApi(id);
        if (response.data) {
          setBlog(response.data);
        } else {
          setError('Blog not found');
        }
      } catch (error) {
        console.error('Error fetching blog:', error);
        setError('Failed to load blog content');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogData();
  }, [id, location.state]);

  // const formatDate = (dateString) => {
  //   try {
  //     return format(new Date(dateString), 'MMMM dd, yyyy');
  //   } catch {
  //     return dateString;
  //   }
  // };

  const renderContent = (content) => {
    if (!content) return null;

    // Handle HTML content
    if (content.startsWith('<')) {
      return <div dangerouslySetInnerHTML={{ __html: content }} />;
    }

    // Handle Markdown content
    const sections = content.split(/(?=^##)/m);

    return sections.map((section, sectionIndex) => {
      const lines = section.trim().split('\n');
      const title = lines[0];
      const body = lines.slice(1).join('\n').trim();

      if (title.startsWith('## ')) {
        return (
          <section key={sectionIndex} className="mb-12">
            <h2 
              className="text-4xl font-bold text-[#ff6600] mt-12 mb-6"
              id={title.toLowerCase().replace('## ', '').replace(/\s+/g, '-')}
            >
              {title.replace('## ', '')}
            </h2>
            {renderBody(body)}
          </section>
        );
      } else {
        return renderBody(section);
      }
    });
  };

  const renderBody = (body) => {
    const paragraphs = body.split('\n\n');
    return paragraphs.map((paragraph, index) => {
      if (!paragraph.trim()) {
        return <div key={index} className="h-4" />;
      }

      if (paragraph.trim().startsWith('### ')) {
        return (
          <h3 
            key={index} 
            className="text-3xl font-semibold text-[#ff6600] mt-8 mb-4" 
            id={paragraph.toLowerCase().replace('### ', '').replace(/\s+/g, '-')}
          >
            {paragraph.replace('### ', '')}
          </h3>
        );
      }

      if (paragraph.trim().startsWith('-')) {
        const listItems = paragraph.split('-').filter(item => item.trim() !== '');
        return (
          <ul key={index} className="list-disc pl-6 mb-4">
            {listItems.map((item, i) => (
              <li key={i} className="ml-6 mb-3 text-gray-300">
                {item.trim()}
              </li>
            ))}
          </ul>
        );
      }

      // Bold Text and Regular paragraphs
      return (
        <p key={index} className="mb-6 text-gray-300 leading-relaxed">
          {paragraph.split('**').map((part, i) => 
            i % 2 === 0 ? part : <strong key={i}>{part}</strong>
          )}
        </p>
      );
    });
  };

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

  // Calculate read time based on content length (rough estimate)
  const calculateReadTime = (content) => {
    if (!content) return "5 MIN READ";
    const words = content.split(/\s+/).length;
    const minutes = Math.ceil(words / 200); // Average reading speed
    return `${minutes} MIN READ`;
  };

  return (
    <BlogLayout 
      title={blog.title}
      category={blog.meta_data?.tags?.[0] || "Blog"}
      readTime={calculateReadTime(blog.content)}
      // date={formatDate(blog.published_at)}
      image={blog.thumbnail}
    >
      <div className="prose prose-lg prose-invert max-w-none">
        <h1 className="text-5xl font-bold text-[#ff6600] mb-8">{blog.title}</h1>
        <p className="text-xl mb-8 text-gray-300">
          {blog.description}
        </p>
        
        <div className="text-gray-300">
          {renderContent(blog.content)}
        </div>
      </div>
    </BlogLayout>
  );
};

export default BlogPage;