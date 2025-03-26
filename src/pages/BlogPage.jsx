import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import BlogLayout from '../components/Blogs/BlogLayout';
import { GetBlogApi } from '../service/api';
// import { format } from 'date-fns';
import Blog1 from "../assets/blog1.jpg";
import Blog2 from "../assets/blog2.jpg";

const defaultBlogs = [
  {
    id: 1,
    workspace_id: "W-00001",
    title: "How AI is Transforming Healthcare: A Deep Dive into Hexylon's Solutions for 2024",
    description: "Discover how Hexylon healthcare solutions and cutting-edge healthcare AI solutions are enhancing AI-powered patient care, improving AI-driven diagnostics, and redefining AI in healthcare for better outcomes and efficiency.",
    cover_image: Blog1,
    thumbnail: Blog1,
    content: `
Introduction
The field of AI in healthcare is evolving at a rapid pace, enabling providers to personalize treatments, improve diagnostic accuracy, and streamline operations. By leveraging sophisticated machine learning algorithms, predictive analytics, and advanced data processing, healthcare AI solutions are empowering hospitals and clinics to deliver higher-quality care more efficiently than ever before.

At Hexylon, we've developed Hexylon healthcare solutions that integrate seamlessly with existing medical infrastructures. These cutting-edge tools go beyond simple automation; they enhance AI-powered patient care, support AI-driven diagnostics, and bring holistic improvements to healthcare delivery. In this article, we'll explore how AI is revolutionizing the industry and highlight the unique ways Hexylon stands out as a partner in this transformative journey.

The Current State of AI in Healthcare
As the adoption of AI in healthcare accelerates, medical professionals can now analyze vast datasets with unprecedented speed, accuracy, and insight. From predicting potential outbreaks to managing hospital resources more efficiently, these healthcare AI solutions enable decision-makers to act proactively rather than reactively.

According to industry reports, the global market for AI-driven tools in the medical sector is poised for exponential growth. With providers seeking scalable and secure platforms, solutions like those from Hexylon offer a clear path to embracing this technological shift responsibly.

Key Areas Where AI is Making an Impact

1. Predictive Diagnostics and Early Detection
One of the most transformative benefits of AI lies in AI-driven diagnostics. By analyzing patient histories, genetic factors, and environmental influences, AI can flag early indicators of conditions like cancer, diabetes, and cardiovascular diseases. This proactive stance enables earlier intervention, improving patient outcomes and potentially reducing costs.

Hexylon's Approach:
Hexylon's healthcare AI solutions use advanced algorithms to support AI-driven diagnostics. Our platform swiftly interprets imaging results—such as X-rays, MRIs, and CT scans—identifying subtle anomalies that may be overlooked by the human eye. This heightened accuracy ensures that patients receive precise, timely diagnoses.

2. Personalized Treatment Plans
AI fosters AI-powered patient care by tailoring treatment regimens to individual patients. Instead of a one-size-fits-all approach, doctors can select therapies based on genetic makeup, lifestyle, and past medical records. This ensures more effective treatments with fewer side effects and faster recoveries.

Hexylon's Approach:
By leveraging our Hexylon healthcare solutions, clinicians gain access to a recommendation engine that scans global research and clinical data. It provides evidence-based suggestions aligned with patient-specific needs, making AI-powered patient care a reality. The result is more targeted interventions, improved adherence to treatment plans, and enhanced patient satisfaction.

3. Operational Efficiency and Cost Reduction
Beyond the clinical sphere, AI in healthcare optimizes administrative tasks, workforce management, and supply chain logistics. Automated appointment scheduling reduces no-shows, while predictive analytics help maintain optimal inventory levels for essential drugs and equipment.

Hexylon's Approach:
Hexylon's platform integrates with existing Electronic Health Records (EHR) and Hospital Information Systems (HIS) to streamline daily operations. By pairing healthcare AI solutions with real-time data analysis, organizations can enhance resource allocation, increase staff productivity, and ultimately deliver better patient experiences—without compromising on care quality.

4. Accelerated Drug Discovery and Research
AI methodologies accelerate drug discovery by sifting through molecular databases to identify promising compounds, cutting traditional research timelines and costs significantly. This ensures quicker development of new treatments and therapies.

Hexylon's Approach:
Our analytics suite empowers research teams to uncover viable drug candidates rapidly. By applying AI-driven diagnostics to test hypotheses and validate compounds, Hexylon reduces the trial-and-error cycle. This leads to swifter insights, optimized research investments, and an overall boost to medical innovation.

Why Choose Hexylon for AI in Healthcare?
- Comprehensive Tools: Full suite of healthcare AI solutions
- Scalability and Security: Secure handling of sensitive patient data
- Dedicated Support: Expert technical guidance and training

A Glimpse into the Future:
- Integrated telehealth platforms
- Wearable sensors for continuous monitoring
- Automated triage systems

Conclusion
The synergy of AI and healthcare signifies a paradigm shift in patient care, diagnostics, operations, and research. Hexylon stands ready with its AI-powered tools to help transform your organization into a model of modern, data-driven healthcare excellence.

Ready to harness the power of AI? Contact Hexylon today to learn how our solutions can revolutionize your healthcare organization.
`,
    references: [],
    meta_data: {
      tags: [
        "AI in healthcare",
        "healthcare AI solutions",
        "AI-powered patient care",
        "AI-driven diagnostics",
        "Hexylon healthcare solutions",
      ],
    },
    audit_fields: {
      created_by: "Poojan Khamar",
      created_at: "Nov 21, 2024",
    },
  },
  {
    id: 2,
    workspace_id: "W-00002",
    title: "How AI is Transforming the Manufacturing Sector: A Deep Dive into Hexylon's Innovative Approach",
    description: "Discover how AI in manufacturing and Hexylon manufacturing solutions are streamlining operations. Learn about manufacturing AI solutions, AI-driven production, and AI-powered quality control for improved efficiency and profitability.",
    cover_image: Blog2,
    thumbnail: Blog2,
    content: `
Introduction
The advent of AI in manufacturing has ushered in a new era of efficiency, precision, and innovation. As the industry becomes more competitive and consumer demands evolve, manufacturers must embrace manufacturing AI solutions that can optimize processes, reduce downtime, and enhance product quality. This transformation isn't just about automation; it's about harnessing data-driven insights for smarter decision-making and sustained growth.

At the forefront of this revolution are Hexylon manufacturing solutions, offering a comprehensive, AI-powered platform designed to meet the unique challenges of the manufacturing sector. From AI-driven production planning to AI-powered quality control systems, Hexylon integrates seamlessly into existing workflows, empowering factories to outperform their competitors while maintaining the highest standards of productivity.

The Current State of AI in Manufacturing
As global supply chains become more complex and cost pressures intensify, the adoption of AI in manufacturing has soared. Manufacturers are leveraging advanced analytics, predictive modeling, and machine learning algorithms to forecast demand, manage resources, and fine-tune quality standards. Studies show that organizations implementing manufacturing AI solutions have reported significant reductions in operating costs, waste, and time-to-market.

By incorporating cutting-edge technologies, factories can achieve AI-driven production that is both flexible and resilient. This newfound agility helps businesses scale up or down rapidly, respond to market fluctuations, and adapt product lines to meet changing customer needs.

Key Areas Where AI is Making an Impact

1. Streamlined Operations with AI-Driven Production
One of the most significant advancements is the ability to run AI-driven production lines. Machine learning algorithms and sensors collect real-time data on equipment performance, material flow, and workforce productivity. This data is then analyzed to optimize scheduling, minimize idle times, and improve overall equipment effectiveness.

Hexylon's Approach:
With Hexylon manufacturing solutions, factories gain full visibility into production metrics. Our platform uses advanced analytics to fine-tune workflows, ensuring that AI-driven production runs at peak efficiency. By predicting maintenance needs, identifying bottlenecks, and providing actionable recommendations, Hexylon keeps assembly lines operating at optimal capacity.

2. Enhancing Quality Standards with AI-Powered Quality Control
In a world where consumers demand consistent, defect-free products, AI-powered quality control systems have become indispensable. Traditional quality checks are often labor-intensive and prone to human error. With AI, inspections can be automated using visual recognition, pattern detection, and anomaly analysis, ensuring that every product meets strict quality benchmarks.

Hexylon's Approach:
Hexylon's manufacturing AI solutions leverage sophisticated image recognition and sensor fusion techniques. Our platform inspects products in real-time, flagging deviations instantly. By integrating AI-powered quality control into the manufacturing line, we help reduce scrap rates, improve compliance, and enhance customer satisfaction. The result is a uniform, reliable product that consistently meets industry standards.

3. Inventory Management and Demand Forecasting
AI in manufacturing excels at predictive inventory management and accurate demand forecasting. Rather than overstocking or risking shortages, manufacturers can rely on AI-driven insights to maintain optimal inventory levels. This predictive capability reduces holding costs, improves cash flow, and ensures timely delivery to end customers.

Hexylon's Approach:
By utilizing Hexylon manufacturing solutions, businesses gain predictive analytics that forecast demand based on historical sales, market trends, and seasonal variations. Our platform aligns inventory levels with actual requirements, preventing both stockouts and overproduction. This harmonization between supply and demand is a critical advantage in today's volatile markets.

4. Preventive Maintenance and Reduced Downtime
Unplanned downtime can cripple productivity and inflate costs. Manufacturing AI solutions use sensors, historical maintenance data, and anomaly detection algorithms to predict equipment failures before they occur. This proactive strategy allows maintenance teams to address issues promptly, extending equipment life and minimizing costly delays.

Hexylon's Approach:
Hexylon's platform constantly monitors machine health, vibration patterns, and energy consumption to detect subtle warning signs of wear or malfunction. By scheduling maintenance proactively, our AI-driven production strategies help ensure minimal disruptions, improved safety, and maximum output over the long term.

Why Choose Hexylon for AI in Manufacturing?
- Holistic Integration: Complete ecosystem of manufacturing AI solutions
- Scalability and Adaptability: Grows with your operation
- Data-Driven Decisions: Real-time data insights
- Enhanced Competitiveness: Faster innovation cycles, lower costs

A Glimpse into the Future:
- More autonomous production lines
- Integration with IoT and 5G
- Advanced robotics in smart factories

Conclusion
The integration of AI in manufacturing is no longer an option—it's a necessity for any business looking to thrive in a competitive global market. Hexylon manufacturing solutions stand ready to guide you on this journey, transforming factories into agile, efficient, and future-proof enterprises.

Ready to revolutionize your factory floor? Contact Hexylon today to unlock the full potential of AI in manufacturing for your organization.
`,
    references: [],
    meta_data: {
      tags: [
        "AI in manufacturing",
        "manufacturing AI solutions",
        "AI-driven production",
        "AI-powered quality control",
        "Hexylon manufacturing solutions",
      ],
    },
    audit_fields: {
      created_by: "Pooojan Khamar",
      created_at: "Nov 29, 2024",
    },
  }
];


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
          // setError('Blog not found');
          if(id === 1){
            setBlog(defaultBlogs[0]);
          }else if(id === 2){
            setBlog(defaultBlogs[1]);
          }
        }
      } catch (error) {
        // console.error('Error fetching blog:', error);
        if(id === 1){
          setBlog(defaultBlogs[0]);
        }else if(id === 2){
          setBlog(defaultBlogs[1]);
        }
        // setError('Failed to load blog content');
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