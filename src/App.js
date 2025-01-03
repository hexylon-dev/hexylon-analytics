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
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/careers" element={<CareerPage />} />
        <Route path="/apply-form/:job_id" element={<ApplyForm />} />
        <Route path="/services" element={<ServicePageV title="AI and ML <br /> Service" description="Anticipating customers needs to improve demand planning and streamline inventory management." />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
