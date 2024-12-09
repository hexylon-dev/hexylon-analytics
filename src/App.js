import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/home';
import CareerPage from './components/CareerPage'; // Adjust path if needed
import ApplyForm from "./components/ApplyForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/careers" element={<CareerPage />} />
        <Route path="/apply-form" element={<ApplyForm />} />
      </Routes>
    </Router>
  );
}

export default App;
