import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import ContactUs from "./pages/ContactUs4";
import Navbar from "./components/Navbar1";
import Footer from "./components/Footer";
import CareerPage from './components/CareerPage';
import ApplyForm from "./components/ApplyForm";
import NotificationWrapper from "./components/notifiction/notifiction";
import ServicePageV from "./components/ServicePageV";
import Header from './components/Blogs/HeaderBlog';
import ResourceCard from './components/Blogs/ResourceCard';
import { resources } from './Data/resources';
import BlogPage from './pages/BlogPage';
import PosterPage from './components/poster1';
import SalesCard from './components/SalesCard';
import ServiceV3 from './components/ServiceV3';
import ImplementedProjects from './components/ImplementedProjects';
import OurWorkV from './components/OurWorkV';
import OurWork from "./pages/OurWork";

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
        <Route path="/sales-card" element={<SalesCard />} />
        <Route path="/service-v3" element={<ServiceV3 title = "TRANSFORM YOUR BUSINESS WITH PREDICTIVE ANALYTICS" description = "Predictive Analytics is a scalable and user-friendly tool, ideal for businesses of all sizes."/>} />
        <Route path="/blog/:id" element={<BlogPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<OurWork />} />

        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/careers" element={<CareerPage />} />
        <Route path="/apply-form/:job_id" element={<ApplyForm />} />
        <Route path="/services" element={<ServicePageV title="AI and ML <br /> Service" description="Anticipating customers needs to improve demand planning and streamline inventory management." />} />
        <Route path="/poster" element={<PosterPage title = "UNLOCK THE POWER OF PREDICTIVE ANALYTICS FOR BUSINESS SUCCESS" description="Harness the power of predictive analytics to make smarter, data-driven decisions and accelerate growth. Let's work together to uncover opportunities, optimize operations, and maximize profitability." />} />
        <Route path="/implemented-projects" element={<ImplementedProjects />} />
        <Route path="/our-work" element={<OurWorkV />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;