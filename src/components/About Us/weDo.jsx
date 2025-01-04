import React, { useState } from 'react';
import { 
  LineChart, 
  ArrowUpRight, 
  Database, 
  Users, 
  BarChart4 
} from 'lucide-react';

const HexylonServices = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "Predictive Analytics",
      description: "Using historical data to forecast future trends and enhance data-driven decision-making",
      details: [
        "Trend forecasting",
        "Risk assessment",
        "Market analysis",
        "Performance prediction"
      ]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Integration & Automation",
      description: "Streamlining data across your organization to ensure seamless operations with data modeling and cloud-based data solutions",
      details: [
        "Cloud integration",
        "Automated workflows",
        "Data modeling",
        "System optimization"
      ]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "AI-Driven Recommendation Systems",
      description: "Personalizing user experiences to increase customer engagement and conversion rates",
      details: [
        "User behavior analysis",
        "Personalized recommendations",
        "Engagement optimization",
        "Conversion tracking"
      ]
    },
    {
      icon: <BarChart4 className="w-6 h-6" />,
      title: "Business Intelligence Solutions",
      description: "Providing comprehensive data analysis and visualization tools for better business insights",
      details: [
        "Interactive dashboards",
        "Real-time analytics",
        "Custom reporting",
        "Data visualization"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-gray-300">
      {/* Main container */}
      <div className="max-w-6xl mx-auto px-6 py-24">
        {/* Header Section */}
        <div className="mb-16">
          <h3 className="text-4xl font-serif mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            What We Do
          </h3>
          <p className="text-xl text-gray-400 max-w-3xl">
            Hexylon Analytics offers a wide range of 
            <span className="text-[#003366]"> AI-powered business analytics </span> 
            services leveraging 
            <span className="text-[#003366]"> machine learning </span> 
            algorithms and 
            <span className="text-[#003366]"> big data analytics platforms</span>.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-[#003366]/30 transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setActiveService(index)}
              onMouseLeave={() => setActiveService(null)}
            >
              {/* Service Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-[#003366]/10 text-[#003366]">
                  {service.icon}
                </div>
                <div>
                  <h4 className="text-2xl font-serif mb-2">{service.title}</h4>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Expandable Details */}
              <div className={`
                grid grid-rows-[0fr] transition-all duration-300
                ${activeService === index ? 'grid-rows-[1fr] mt-6' : ''}
              `}>
                <div className="overflow-hidden">
                  <ul className="space-y-2">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <ArrowUpRight className="w-4 h-4 text-[#003366]" />
                        <span className="text-gray-400">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Hover Effect Gradient */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#003366]/0 via-[#003366]/5 to-[#003366]/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HexylonServices;