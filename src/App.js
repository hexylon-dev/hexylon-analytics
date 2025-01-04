import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import ContactUs from "./pages/ContactUs4";
import Navbar from "./components/Navbar1";
import Footer from "./components/Footer";
import CareerPage from "./components/CareerPage";
import ApplyForm from "./components/ApplyForm";
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

function App() {
  return (
    <Router>
      <Navbar />
      <NotificationWrapper />
      <Routes>
        <Route
          path="/blogs"
          element={
            <div className="min-h-screen bg-[#111] text-white">
              <Header />
              <main className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16">
                  {resources.map((resource) => (
                    <ResourceCard key={resource.id} {...resource} />
                  ))}
                </div>
              </main>
            </div>
          }
        />
        <Route path="/blog/:id" element={<BlogPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/careers" element={<CareerPage />} />
        <Route path="/apply-form/:job_id" element={<ApplyForm />} />
        <Route
          path="/services"
          element={
            <ServicePageV
              title="AI and ML <br /> Service"
              description="Anticipating customers needs to improve demand planning and streamline inventory management."
            />
          }
        />
        <Route
          path="/services/predictive-analytics"
          element={
            <PredictiveAnalytics
              title="Predictive Analytics"
              description=" Forecast the Future, Elevate Your Strategy with Predictive Analytics."
            />
          }
        />
        <Route
          path="/services/natural-language"
          element={
            <NaturalLanguage
              title="Natural Language Processing"
              description="Unlock Language Insights with AI-Driven NLP Tools. Transform Data into Strategy."
            />
          }
        />
        <Route
          path="/services/computer-vision"
          element={
            <ComputerVision
              title="Computer Vision"
              description="Unlock the Power of AI-Driven Vision. Transform Data into Actionable Insights."
            />
          }
        />
        <Route
          path="/services/recommendation-systems"
          element={
            <RecommendationSystems
              title="Recommendation Systems"
              description="Harness the Power of Smart Recommendations to Drive Conversions and Enhance User Experiences"
            />
          }
        />
        <Route
          path="/services/automl"
          element={
            <AutoML
              title="Auto ML"
              description="Automate Machine Learning and Drive Business Success with AutoML."
            />
          }
        />
        <Route
          path="/services/custom-ai-models"
          element={
            <CustomAIModels
              title="Custom AI Models"
              description="Custom AI Models to Drive Innovation and Efficiency"
            />
          }
        />
        <Route
          path="/services/ai-powered-data-analytics"
          element={
            <AIPoweredDataAnalytics
              title="AI Powered Data Analytics"
              description="Unlock Business Insights, Boost Efficiency, and Make Smarter Decisions with AI-Driven Data Analytics."
            />
          }
        />
        <Route
          path="/services/ai-for-process-automation"
          element={
            <AIforProcessAutomation
              title="AI for Process Automation"
              description="Automate Tasks, Enhance Efficiency, and Drive Business Growth with Cutting-Edge AI Solutions"
            />
          }
        />
        <Route
          path="/services/conversational-ai"
          element={
            <ConversationalAI
              title="Conversational AI"
              description="Enhance Customer Experience, Boost Efficiency, and Drive Growth with AI-Powered Solutions."
            />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
