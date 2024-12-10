import { CalendarIcon } from "@heroicons/react/16/solid";
import { UserIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Blog1 from "../assets/blog1.jpg";
import Blog2 from "../assets/blog2.jpg";

const data = [
  {
    id: 1,
    workspace_id: "W-00001",
    title:
      "How AI is Transforming Healthcare: A Deep Dive into Hexylon’s Solutions for 2024",
    description:
      "Discover how Hexylon healthcare solutions and cutting-edge healthcare AI solutions are enhancing AI-powered patient care, improving AI-driven diagnostics, and redefining AI in healthcare for better outcomes and efficiency.",
    cover_image: Blog1 ,
    content: `  <section>
            <h2>Introduction</h2>
            <p>The field of AI in healthcare is evolving at a rapid pace, enabling providers to personalize treatments, improve diagnostic accuracy, and streamline operations. By leveraging sophisticated machine learning algorithms, predictive analytics, and advanced data processing, healthcare AI solutions are empowering hospitals and clinics to deliver higher-quality care more efficiently than ever before.</p>
            <p>At Hexylon, we’ve developed Hexylon healthcare solutions that integrate seamlessly with existing medical infrastructures. These cutting-edge tools go beyond simple automation; they enhance AI-powered patient care, support AI-driven diagnostics, and bring holistic improvements to healthcare delivery. In this article, we’ll explore how AI is revolutionizing the industry and highlight the unique ways Hexylon stands out as a partner in this transformative journey.</p>
        </section>
        <section>
            <h2>The Current State of AI in Healthcare</h2>
            <p>As the adoption of AI in healthcare accelerates, medical professionals can now analyze vast datasets with unprecedented speed, accuracy, and insight. From predicting potential outbreaks to managing hospital resources more efficiently, these healthcare AI solutions enable decision-makers to act proactively rather than reactively.</p>
            <p>According to industry reports, the global market for AI-driven tools in the medical sector is poised for exponential growth. With providers seeking scalable and secure platforms, solutions like those from Hexylon offer a clear path to embracing this technological shift responsibly.</p>
        </section>
        <section>
            <h2>Key Areas Where AI is Making an Impact</h2>
            <h3>1. Predictive Diagnostics and Early Detection</h3>
            <p>One of the most transformative benefits of AI lies in AI-driven diagnostics. By analyzing patient histories, genetic factors, and environmental influences, AI can flag early indicators of conditions like cancer, diabetes, and cardiovascular diseases. This proactive stance enables earlier intervention, improving patient outcomes and potentially reducing costs.</p>
            <h4>Hexylon’s Approach:</h4>
            <p>Hexylon’s healthcare AI solutions use advanced algorithms to support AI-driven diagnostics. Our platform swiftly interprets imaging results—such as X-rays, MRIs, and CT scans—identifying subtle anomalies that may be overlooked by the human eye. This heightened accuracy ensures that patients receive precise, timely diagnoses.</p>
            <h3>2. Personalized Treatment Plans</h3>
            <p>AI fosters AI-powered patient care by tailoring treatment regimens to individual patients. Instead of a one-size-fits-all approach, doctors can select therapies based on genetic makeup, lifestyle, and past medical records. This ensures more effective treatments with fewer side effects and faster recoveries.</p>
            <h4>Hexylon’s Approach:</h4>
            <p>By leveraging our Hexylon healthcare solutions, clinicians gain access to a recommendation engine that scans global research and clinical data. It provides evidence-based suggestions aligned with patient-specific needs, making AI-powered patient care a reality. The result is more targeted interventions, improved adherence to treatment plans, and enhanced patient satisfaction.</p>
            <h3>3. Operational Efficiency and Cost Reduction</h3>
            <p>Beyond the clinical sphere, AI in healthcare optimizes administrative tasks, workforce management, and supply chain logistics. Automated appointment scheduling reduces no-shows, while predictive analytics help maintain optimal inventory levels for essential drugs and equipment.</p>
            <h4>Hexylon’s Approach:</h4>
            <p>Hexylon’s platform integrates with existing Electronic Health Records (EHR) and Hospital Information Systems (HIS) to streamline daily operations. By pairing healthcare AI solutions with real-time data analysis, organizations can enhance resource allocation, increase staff productivity, and ultimately deliver better patient experiences—without compromising on care quality.</p>
            <h3>4. Accelerated Drug Discovery and Research</h3>
            <p>AI methodologies accelerate drug discovery by sifting through molecular databases to identify promising compounds, cutting traditional research timelines and costs significantly. This ensures quicker development of new treatments and therapies.</p>
            <h4>Hexylon’s Approach:</h4>
            <p>Our analytics suite empowers research teams to uncover viable drug candidates rapidly. By applying AI-driven diagnostics to test hypotheses and validate compounds, Hexylon reduces the trial-and-error cycle. This leads to swifter insights, optimized research investments, and an overall boost to medical innovation.</p>
        </section>
        <section>
            <h2>Why Choose Hexylon for AI in Healthcare?</h2>
            <ul>
                <li><strong>Comprehensive Tools:</strong> With Hexylon healthcare solutions, your institution gains access to a full suite of healthcare AI solutions—from AI-powered patient care mechanisms to AI-driven diagnostics engines.</li>
                <li><strong>Scalability and Security:</strong> Designed to grow with your facility, Hexylon’s platform ensures secure handling of sensitive patient data, adhering to top-tier compliance standards.</li>
                <li><strong>Dedicated Support:</strong> Our expert team provides technical guidance, training, and ongoing assistance, ensuring you extract maximum value from our platform’s capabilities.</li>
            </ul>
        </section>`,
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
    title:
      " How AI is Transforming the Manufacturing Sector: A Deep Dive into Hexylon’s Innovative Approach",
    description:
      "Discover how AI in manufacturing and Hexylon manufacturing solutions are streamlining operations. Learn about manufacturing AI solutions, AI-driven production, and AI-powered quality control for improved efficiency and profitability.",
    cover_image: Blog2,
    content: `
Introduction
The advent of AI in manufacturing has ushered in a new era of efficiency, precision, and innovation. As the industry becomes more competitive and consumer demands evolve, manufacturers must embrace manufacturing AI solutions that can optimize processes, reduce downtime, and enhance product quality. This transformation isn’t just about automation; it’s about harnessing data-driven insights for smarter decision-making and sustained growth.

At the forefront of this revolution are Hexylon manufacturing solutions, offering a comprehensive, AI-powered platform designed to meet the unique challenges of the manufacturing sector. From AI-driven production planning to AI-powered quality control systems, Hexylon integrates seamlessly into existing workflows, empowering factories to outperform their competitors while maintaining the highest standards of productivity.

The Current State of AI in Manufacturing
As global supply chains become more complex and cost pressures intensify, the adoption of AI in manufacturing has soared. Manufacturers are leveraging advanced analytics, predictive modeling, and machine learning algorithms to forecast demand, manage resources, and fine-tune quality standards. Studies show that organizations implementing manufacturing AI solutions have reported significant reductions in operating costs, waste, and time-to-market.

By incorporating cutting-edge technologies, factories can achieve AI-driven production that is both flexible and resilient. This newfound agility helps businesses scale up or down rapidly, respond to market fluctuations, and adapt product lines to meet changing customer needs.

Key Areas Where AI is Making an Impact
1. Streamlined Operations with AI-Driven Production
One of the most significant advancements is the ability to run AI-driven production lines. Machine learning algorithms and sensors collect real-time data on equipment performance, material flow, and workforce productivity. This data is then analyzed to optimize scheduling, minimize idle times, and improve overall equipment effectiveness.

Hexylon’s Approach:
With Hexylon manufacturing solutions, factories gain full visibility into production metrics. Our platform uses advanced analytics to fine-tune workflows, ensuring that AI-driven production runs at peak efficiency. By predicting maintenance needs, identifying bottlenecks, and providing actionable recommendations, Hexylon keeps assembly lines operating at optimal capacity.

2. Enhancing Quality Standards with AI-Powered Quality Control
In a world where consumers demand consistent, defect-free products, AI-powered quality control systems have become indispensable. Traditional quality checks are often labor-intensive and prone to human error. With AI, inspections can be automated using visual recognition, pattern detection, and anomaly analysis, ensuring that every product meets strict quality benchmarks.

Hexylon’s Approach:
Hexylon’s manufacturing AI solutions leverage sophisticated image recognition and sensor fusion techniques. Our platform inspects products in real-time, flagging deviations instantly. By integrating AI-powered quality control into the manufacturing line, we help reduce scrap rates, improve compliance, and enhance customer satisfaction. The result is a uniform, reliable product that consistently meets industry standards.

3. Inventory Management and Demand Forecasting
In addition to optimizing production and quality, AI in manufacturing excels at predictive inventory management and accurate demand forecasting. Rather than overstocking or risking shortages, manufacturers can rely on AI-driven insights to maintain optimal inventory levels. This predictive capability reduces holding costs, improves cash flow, and ensures timely delivery to end customers.

Hexylon’s Approach:
By utilizing Hexylon manufacturing solutions, businesses gain predictive analytics that forecast demand based on historical sales, market trends, and seasonal variations. Our platform aligns inventory levels with actual requirements, preventing both stockouts and overproduction. This harmonization between supply and demand is a critical advantage in today’s volatile markets.

4. Preventive Maintenance and Reduced Downtime
Unplanned downtime can cripple productivity and inflate costs. Manufacturing AI solutions use sensors, historical maintenance data, and anomaly detection algorithms to predict equipment failures before they occur. This proactive strategy allows maintenance teams to address issues promptly, extending equipment life and minimizing costly delays.

Hexylon’s Approach:
Hexylon’s platform constantly monitors machine health, vibration patterns, and energy consumption to detect subtle warning signs of wear or malfunction. By scheduling maintenance proactively, our AI-driven production strategies help ensure minimal disruptions, improved safety, and maximum output over the long term.

Why Choose Hexylon for AI in Manufacturing?
Holistic Integration: Hexylon offers a complete ecosystem of manufacturing AI solutions that unify production, quality, inventory, and maintenance under one umbrella.
Scalability and Adaptability: Our platform is built to grow with your operation, from small-scale facilities to large, multi-plant enterprises.
Data-Driven Decisions: With AI-powered quality control, forecasting tools, and predictive maintenance, Hexylon enables informed decisions backed by real-time data.
Enhanced Competitiveness: Embracing AI in manufacturing with Hexylon sets your business apart, leading to faster innovation cycles, lower costs, and superior product quality.
A Glimpse into the Future of AI-Driven Production
As technology advances, AI-driven production lines will become even more autonomous, relying on artificial intelligence to respond instantly to market shifts and consumer preferences. Smart factories will integrate with IoT devices, 5G connectivity, and advanced robotics, creating a fully connected value chain.

From AI-powered quality control systems that learn and improve with every inspection to predictive models that adjust production runs based on real-time consumer data, the future of AI in manufacturing is bright and dynamic. Hexylon is committed to staying at the forefront of these innovations, ensuring that our clients always have access to the most cutting-edge capabilities.

Conclusion
The integration of AI in manufacturing is no longer an option—it’s a necessity for any business looking to thrive in a competitive global market. By adopting manufacturing AI solutions, companies can achieve operational excellence, product consistency, and supply chain resilience.

Hexylon manufacturing solutions stand ready to guide you on this journey. From AI-driven production optimization to AI-powered quality control, we offer a holistic approach that transforms factories into agile, efficient, and future-proof enterprises. Embrace the power of AI today and set your manufacturing business on a path toward sustainable growth and success.

Ready to revolutionize your factory floor? Contact Hexylon today to learn how Hexylon manufacturing solutions can unlock the full potential of AI in manufacturing, manufacturing AI solutions, AI-driven production, and AI-powered quality control for your organization.
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
  },
];

export const HtmlRenderer = ({ htmlContent }) => {
  // return <div className="prose max-w-none">{parse(htmlContent)}</div>;
  return  <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

const BlogDetail = () => {
  const { id } = useParams()
  const blog = data.find((blog) => blog.id === parseInt(id))

  if (!blog) {
    return <p className="text-center text-lg mt-8">Blog not found.</p>
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {blog.title}
          </h1>
          <div className="flex flex-wrap gap-2 mb-4">
            {blog.meta_data.tags.map((tag, index) => (
              <span key={index} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{blog.audit_fields.created_at}</span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>By {blog.audit_fields.created_by}</span>
            </div>
          </div>
          <div className="mb-8">
            <img
              src={blog.cover_image}
              alt="Blog post cover"
              className="rounded-lg object-cover w-full max-h-[400px]"
            />
          </div>
          <div className="prose max-w-none">
            {/* {formatContent(blog.content)} */}
            <HtmlRenderer htmlContent={blog.content}/>
          </div>
          {blog.references.length > 0 && (
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Related Links</h2>
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
          )}
        </div>
      </div>
    </div>
  )
}

export default BlogDetail;
