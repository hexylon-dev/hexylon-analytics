import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import ContactUs from "./pages/ContactUs4";
import Navbar from "./components/Navbar1";
import Footer from "./components/Footer";
import CareerPage from "./pages/CareerPageV";

import ApplyForm from "./pages/ApplyForm";
import NotificationWrapper from "./components/notifiction/notifiction";
import ServicePageV from "./components/ServicePageV";
import Header from "./components/Blogs/HeaderBlog";
import ResourceCard from "./components/Blogs/ResourceCard";
import { resources } from "./Data/resources";
import BlogPage from "./pages/BlogPage";
import { PredictiveAnalytics } from "./pages/PredictiveAnalytics";
import { NaturalLanguage } from "./pages/NaturalLanguage";
import { ComputerVision } from "./pages/ComputerVision";
import { RecommendationSystems } from "./pages/RecommendationSystems";
import { AutoML } from "./pages/AutoML";
import { CustomAIModels } from "./pages/CustomAIModels";
import { AIPoweredDataAnalytics } from "./pages/AIPoweredDataAnalytics";
import { AIforProcessAutomation } from "./pages/AIforProcessAutomation";
import { ConversationalAI } from "./pages/ConversationalAI";
import OurWork from "./pages/OurWork";
import OurWorkV from "./components/OurWorkV"
import ParticleAvatar from "./components/avatar"
import AboutUs from "./pages/AboutUs"
// import ApplyForm from "./pages/ApplyForm";
function App() {
  return (
    <Router>
      <Navbar />
      <NotificationWrapper />
      <Routes>
        <Route path="/blogs" element={
          <div className="min-h-screen bg-[#111] text-white">
            <Header />
            <main className="container mx-auto px-4 py-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16">
                {resources.map((resource) => (
                  <ResourceCard 
                    key={resource.id} 
                    {...resource}
                  />
                ))}
              </div>
            </main>
          </div>
        } />
         <Route path="/blog/:id" element={<BlogPage />} />
  
        <Route path="/" element={<Home />} />
        <Route path="/our-work" element={<OurWorkV />} />
        <Route path="/about-us" element={<AboutUs />} />
        {/* <Route path="/careers" element={<CareerPage />} /> */}
        <Route path="/contact-us" element={<ContactUs />} />
        {/* <Route path="/careers" element={<CareerPage />} /> */}

        <Route path="/apply-form" element={<ApplyForm />} />
        <Route path="/apply-form/:job_id" element={<ApplyForm />} />
        {/* <Route
          path="/services"
          element={
            <ServicePageV
              title="AI and ML <br /> Service"
              description="Anticipating customers needs to improve demand planning and streamline inventory management."
            />
          }
        /> */}
        <Route
          path="/services/predictive-analytics"
          element={
            <PredictiveAnalytics/>
          }
        />
        <Route
          path="/services/natural-language"
          element={
            <NaturalLanguage />
          }
        />
        <Route
          path="/services/computer-vision"
          element={
            <ComputerVision/>
          }
        />
        <Route
          path="/services/recommendation-systems"
          element={
            <RecommendationSystems/>
          }
        />
        <Route
          path="/services/automated-machine-learning"
          element={
            <AutoML/>
          }
        />
        <Route
          path="/services/custom-ai-models"
          element={
            <CustomAIModels/>
          }
        />
        <Route
          path="/services/ai-powered-data-analytics"
          element={
            <AIPoweredDataAnalytics />
          }
        />
        <Route
          path="/services/ai-for-process-automation"
          element={
            <AIforProcessAutomation />
          }
        />
        <Route
          path="/services/conversational-ai"
          element={
            <ConversationalAI/>
          }
        />

        <Route
          path="*"
          element={
            <Home/>
          }
        />
        {/* <Route path="/services" element={<ServicePageV title="AI and ML <br /> Service" description="Anticipating customers needs to improve demand planning and streamline inventory management." />} /> */}
      </Routes>
      {/* <ParticleAvatar /> */}
      <Footer />
    </Router>
  );
}

export default App;