import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import ContactUs from "./pages/ContactUs4";
import BlogContainer from "./pages/BlogContainer";
import Navbar from "./components/Navbar1";
import Footer from "./components/Footer";
import BlogDetail from "./pages/BlogDetail";
import CareerPage from './components/CareerPage'; // Adjust path if needed
import ApplyForm from "./components/ApplyForm";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/blogs" element={<BlogContainer />} />
        <Route path="/blogs/:id" element={<BlogDetail />} />
        <Route path="/careers" element={<CareerPage />} />
        <Route path="/apply-form/:job_id" element={<ApplyForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
