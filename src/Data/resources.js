import image1 from '../assets/img1.webp';
import image2 from '../assets/img2.webp';
import image3 from '../assets/img3.webp';
import image4 from '../assets/img4.webp';
import blog1 from '../assets/blog1.jpg';
import blog2 from '../assets/blog2.jpg';

// Function to process content
const renderContent = (content) => {
  return content.split('\n').map((line, index) => {
    if (!line.trim()) return null;

    const headerMatch = line.match(/^(\d+)\.\s+(.*)$/); // Match number and text

    if (headerMatch) {
      return (
        <h3 key={index} className="text-3xl font-bold mt-8 mb-4 text-[#FF6600]">
          {headerMatch[2]}
        </h3>
      );
    }

    if (line.startsWith('### ')) {
      return (
        <h3 key={index} className="text-2xl font-bold mt-8 mb-4 text-[#ff6600]">
          {line.replace('### ', '')}
        </h3>
      );
    }

    if (line.startsWith('## ')) {
      return (
        <h2 key={index} className="text-3xl font-bold mt-12 mb-6 text-[#ff6600]">
          {line.replace('## ', '')}
        </h2>
      );
    }

    if (line.startsWith('- ')) {
      return (
        <li key={index} className="ml-6 mb-2 text-gray-300">
          {line.replace('- ', '')}
        </li>
      );
    }

    return (
      <p key={index} className="mb-6 text-gray-300 leading-relaxed">
        {line}
      </p>
    );
  });
};

export const resources = [
    {
        id: 1,
        title: 'How AI is Transforming the Manufacturing Sector: A Deep Dive into Hexylon’s Innovative Approach',
        description: 'Discover how AI in manufacturing and Hexylon manufacturing solutions are streamlining operations. Learn about manufacturing AI solutions, AI-driven production, and AI-powered quality control for improved efficiency and profitability.',
        image: blog1,
        link: '/blog/1',
        date: 'March 15, 2024',
        tag: 'AI & Technology',
        content: `
            ## The Rise of AI in Healthcare

            The field of AI in healthcare is evolving at a rapid pace, enabling providers to personalize treatments, improve diagnostic accuracy, and streamline operations. By leveraging sophisticated machine learning algorithms, predictive analytics, and advanced data processing, healthcare AI solutions are empowering hospitals and clinics to deliver higher-quality care more efficiently than ever before.

            ### Hexylon Healthcare Solutions

            At Hexylon, we’ve developed healthcare solutions that integrate seamlessly with existing medical infrastructures. These cutting-edge tools go beyond simple automation; they enhance AI-powered patient care, support AI-driven diagnostics, and bring holistic improvements to healthcare delivery.

            ### The Current State of AI in Healthcare

            As the adoption of AI in healthcare accelerates, medical professionals can now analyze vast datasets with unprecedented speed, accuracy, and insight. From predicting potential outbreaks to managing hospital resources more efficiently, these healthcare AI solutions enable decision-makers to act proactively rather than reactively.

            ## Key Areas Where AI is Making an Impact:
            
            - **Predictive Diagnostics and Early Detection**: 
            AI analyzes patient histories, genetic factors, and environmental influences to flag early indicators of conditions like cancer, diabetes, and cardiovascular diseases.
            
            - **Personalized Treatment Plans**: 
            AI tailors treatment regimens to individual patients based on genetic makeup, lifestyle, and past medical records.
            
            - **Operational Efficiency and Cost Reduction**: 
            AI optimizes administrative tasks, workforce management, and supply chain logistics.
            
            - **Accelerated Drug Discovery and Research**: 
            AI speeds up drug discovery by analyzing molecular databases to identify promising compounds.

            ### Why Choose Hexylon for AI in Healthcare?

            - Comprehensive Tools: Full suite of healthcare AI solutions.
            - Scalability and Security: Secure handling of patient data.
            - Dedicated Support: Expert guidance for maximizing platform value.

            ### Conclusion

            The synergy of AI and healthcare signifies a paradigm shift in how patient care, diagnostics, operations, and research are conducted. Embracing healthcare AI solutions today sets the stage for delivering more effective and efficient care tomorrow.

            Ready to harness the power of AI for your medical organization? Contact Hexylon today to learn how our healthcare AI solutions can revolutionize patient care and streamline operations.
        `,
    },
    {
        id: 2,
        title: 'How AI is Transforming the Manufacturing Sector: A Deep Dive into Hexylon’s Innovative Approach',
        description: 'Discover how AI in manufacturing and Hexylon manufacturing solutions are streamlining operations. Learn about manufacturing AI solutions, AI-driven production, and AI-powered quality control for improved efficiency and profitability.',
        image: blog2,
        link: '/blog/2',
        date: 'March 10, 2024',
        tag: 'AI in manufacturing',
        content: `
            ## AI in Manufacturing: The Revolution

            The advent of AI in manufacturing has ushered in a new era of efficiency, precision, and innovation. As the industry becomes more competitive and consumer demands evolve, manufacturers must embrace manufacturing AI solutions that can optimize processes, reduce downtime, and enhance product quality.

            ### The Role of Hexylon Manufacturing Solutions

            At the forefront of this revolution are Hexylon manufacturing solutions, offering an AI-powered platform designed to meet the unique challenges of the manufacturing sector. From AI-driven production planning to AI-powered quality control systems, Hexylon integrates seamlessly into existing workflows, empowering factories to outperform their competitors while maintaining the highest standards of productivity.

            ### Key Areas Where AI is Making an Impact

            1. **Streamlined Operations with AI-Driven Production**:
            Machine learning algorithms and sensors collect real-time data on equipment performance, material flow, and workforce productivity, optimizing scheduling and minimizing idle times.

            2. **Enhancing Quality Standards with AI-Powered Quality Control**:
            AI-powered systems automate inspections using visual recognition, pattern detection, and anomaly analysis, ensuring defect-free products.

            3. **Inventory Management and Demand Forecasting**:
            AI excels at predictive inventory management and accurate demand forecasting, reducing overstocking and improving cash flow.

            4. **Preventive Maintenance and Reduced Downtime**:
            AI predicts equipment failures before they occur, reducing unplanned downtime and extending equipment life.

            ### Why Choose Hexylon for AI in Manufacturing?

            - Holistic Integration: Unified solutions for production, quality, inventory, and maintenance.
            - Scalability and Adaptability: Solutions that grow with your business.
            - Data-Driven Decisions: Real-time analytics for improved decision-making.
            - Enhanced Competitiveness: Faster innovation cycles, lower costs, and superior product quality.

            ### Conclusion

            The integration of AI in manufacturing is no longer an option—it’s a necessity for thriving in a competitive global market. With Hexylon's AI-driven production optimization and quality control, businesses can achieve operational excellence, product consistency, and supply chain resilience.

            Ready to revolutionize your factory floor? Contact Hexylon today to learn how our AI solutions can unlock the full potential of manufacturing.
        `,
    }
];
